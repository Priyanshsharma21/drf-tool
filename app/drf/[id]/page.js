"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from "./Drf.module.css"
import DesignCard from '@/components/DesignCard/DesignCard';
import { Row, Col, Spin, Modal, Input, Button} from "antd"
import { DrfTable } from '@/components/inedx';


const Drf = () => {
  const params = useParams();
  const id = params.id;
  const [drfData, setDrfData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form fields states
  const [sectionTitle, setSectionTitle] = useState("");
  const [slideTitle, setSlideTitle] = useState("");
  const [transcript, setTranscript] = useState("");
  const [notes, setNotes] = useState("");
  const [imgRef, setImgRef] = useState("");

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    resetFormFields(); 
  };

  const resetFormFields = () => {
    setSectionTitle("");
    setSlideTitle("");
    setTranscript("");
    setNotes("");
    setImgRef("");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("mydrfs"));
    const matchedData = storedData.find((data) => String(data.id) === id);
    if (matchedData) setDrfData(matchedData);
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const newSlide = { sectionTitle, slideTitle, transcript, notes, imgRef };

    const updatedData = { ...drfData, drfs: [...(drfData.drfs || []), newSlide] };
    setDrfData(updatedData);

    const storedData = JSON.parse(localStorage.getItem("mydrfs"));
    const updatedStoredData = storedData.map((data) =>
      data.id === drfData.id ? updatedData : data
    );
    localStorage.setItem("mydrfs", JSON.stringify(updatedStoredData));

    handleCancel(); 
  };

  console.log(drfData)

  return (
    <section className={styles.drf}>

    {drfData?.client ? (
       <>
       <div className={`flex justify-center text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-blue-500 ${styles.drfHeading}`}>
            Design Requisition
        </div>
        <main className={styles.drfBox}>
            <Row className={styles.drfMainRows}>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Client"} description={drfData.client} color={"#c666f38e"}/>        
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Project"} description={drfData.project} color={"#c666f38e"}/>        
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Deliverable"} description={drfData.deliverable} color={"#c666f38e"}/>
                </Col>
            </Row>
            <Row className={styles.drfMainRows}>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <DesignCard title={"Content Lead"} description={drfData.content.contentLead} color={"#7300ffad"}/>        

                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <DesignCard title={"Version"} description={drfData.content.version} color={"#7300ffad"}/>        

                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <DesignCard title={"Pages"} description={drfData.content.pages} color={"#7300ffad"}/>

                </Col>

            </Row>
            <Row className={styles.drfMainRows}> 
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Design Lead"} description={drfData.design.designLead} color={"#64f09e79"}/>        
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Version"} description={drfData.design.version} color={"#64f09e79"}/>        
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Delivered By"} description={drfData.design.deliveredBy} color={"#64f09e79"}/>
                </Col>
            </Row>

        
            <Row className={styles.drfMainRows}>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Authorized By"} description={drfData.authorizedBy} color={"#08ff6fc9"}/>        
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Project Manager"} description={drfData.projectManager} color={"#08ff6fc9"}/>        
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <DesignCard title={"Completed On"} description={drfData.completedOn} color={"#08ff6fc9"}/>
                </Col>
            </Row>
        </main>
       </>
    ):(
        <div className="flex justify-center">
            <Spin />
        </div>
    )}


    <div className={styles.arcContainer}>
        <div className={styles.arc}>
            <img src="/assets/logo.png" alt="Logo" className={styles.arcLogo} />
        </div>
    </div>


    {drfData?.drfs.length !== 0 ? (
        <div className="mt-10">
            <DrfTable data={drfData?.drfs} />
            <div className="flex justify-center">
            <div onClick={showModal} className={styles.addSlideBtn}>
                Add Slide
            </div>
        </div>
        </div>
    ):(
        <div className="flex justify-center">
            <div onClick={showModal} className={styles.addSlideBtn}>
                Add Slide
            </div>
        </div>
    )}


    <Modal title="Add Slide" open={isModalOpen} onOk={handleFormSubmit} onCancel={handleCancel}>
        <form onSubmit={handleFormSubmit}>
          <label>
            Section Title:
            <Input
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Slide Title:
            <Input
              type="text"
              value={slideTitle}
              onChange={(e) => setSlideTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Transcript:
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              required
              style={{ width: "100%", height: "80px" }}
            />
          </label>
          <label>
            Notes:
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
              style={{ width: "100%", height: "80px" }}
            />
          </label>
          <label>
            Upload Image:
            <Input
              type="file"
              onChange={(e) => setImgRef(e.target.files[0]?.name || "")}
            />
          </label>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Modal>


    </section>
  );
};

export default Drf;



