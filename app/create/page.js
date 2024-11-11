"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./Create.module.css"

const Create = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    client: "",
    project: "",
    deliverable: "",
    content: {
      contentLead: "",
      version: "",
      pages: ""
    },
    design: {
      designLead: "",
      version: "",
      deliveredBy: "",
    },
    authorizedBy: "",
    projectManager: "",
    completedOn: "",
    drfs: []
  });

  const handleChange = (e, section = null) => {
    const { name, value } = e.target;
    
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Check if mydrfs exists in localStorage
      let existingDrfs = localStorage.getItem('mydrfs');
      let drfsArray = [];

      if (existingDrfs) {
        // If exists, parse it
        drfsArray = JSON.parse(existingDrfs);
      }

      // Create a timestamp for unique identification
      const newDrf = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };

      // Add new DRF to array
      drfsArray.push(newDrf);

      // Save back to localStorage
      localStorage.setItem('mydrfs', JSON.stringify(drfsArray));

      // Reset form
      setFormData({
        client: "",
        project: "",
        deliverable: "",
        content: {
          contentLead: "",
          version: "",
          pages: ""
        },
        design: {
          designLead: "",
          version: "",
          deliveredBy: "",
        },
        authorizedBy: "",
        projectManager: "",
        completedOn: "",
        drfs: []
      });

      console.log('Form Data saved:', newDrf);
      
      // Redirect to home page
      router.push('/');

    } catch (error) {
      console.error('Error saving form data:', error);
      // You could add error handling here
    }
  };

  return (
    <main className={styles.create}>
        <div className="max-w-2xl mx-auto p-4 createBox">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rest of your form JSX remains exactly the same */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Project Details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
                placeholder='Client:'
              />
            </div>
            <div>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
                placeholder='Project:'
              />
            </div>
            <div>
              <input
                type="text"
                name="deliverable"
                value={formData.deliverable}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
                placeholder='Deliverable:'
              />
            </div>
          </div>
        </div>

        {/* Content Lead Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold lableLead">Content Lead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="contentLead"
                value={formData.content.contentLead}
                onChange={(e) => handleChange(e, 'content')}
                className="w-full border p-2 rounded"
                placeholder='Name:'
              />
            </div>
            <div>
              <input
                type="text"
                name="version"
                value={formData.content.version}
                onChange={(e) => handleChange(e, 'content')}
                className="w-full border p-2 rounded"
                placeholder='Version:'
              />
            </div>
            <div>
              <input
                type="text"
                name="pages"
                value={formData.content.pages}
                onChange={(e) => handleChange(e, 'content')}
                className="w-full border p-2 rounded"
                placeholder='Pages:'
              />
            </div>
          </div>
        </div>

        {/* Design Lead Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold lableLead">Design Lead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="designLead"
                value={formData.design.designLead}
                onChange={(e) => handleChange(e, 'design')}
                className="w-full border p-2 rounded"
                placeholder='Name:'
              />
            </div>
            <div>
              <input
                type="text"
                name="version"
                value={formData.design.version}
                onChange={(e) => handleChange(e, 'design')}
                className="w-full border p-2 rounded"
                placeholder='Version:'
              />
            </div>
            <div>
              <input
                type="text"
                name="deliveredBy"
                value={formData.design.deliveredBy}
                onChange={(e) => handleChange(e, 'design')}
                className="w-full border p-2 rounded"
                placeholder='Delivered By:'
              />
            </div>
          </div>
        </div>

        {/* Authorization Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold lableLead">Authorization Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="authorizedBy"
                value={formData.authorizedBy}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder='Authorized By:'
              />
            </div>
            <div>
              <input
                type="text"
                name="projectManager"
                value={formData.projectManager}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder='Project Manager:'
              />
            </div>
            <div>
              <input
                type="date"
                name="completedOn"
                value={formData.completedOn}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder='Completed On:'
              />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </main>
  );
};

export default Create;