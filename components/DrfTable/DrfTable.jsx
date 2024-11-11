import React from 'react';
import { Table, Tag } from 'antd';

const DrfTable = ({ data }) => {
  const columns = [
    {
      title: 'Slide No.',
      dataIndex: 'slideNo',
      key: 'slideNo',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Section Title',
      dataIndex: 'sectionTitle',
      key: 'sectionTitle',
    },
    {
      title: 'Slide Title',
      dataIndex: 'slideTitle',
      key: 'slideTitle',
    },
    {
      title: 'Transcript',
      dataIndex: 'transcript',
      key: 'transcript',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
      render: (text) => (
        <Tag color="geekblue" className="notes-tag">
          {text}
        </Tag>
      ),
    },
  ];

  const drfsData = data?.map((item, index) => ({
    ...item,
    key: index,
  }));

  return (
    <div className="drf-table-container">
      <Table
        columns={columns}
        dataSource={drfsData}
        pagination={false}
        rowClassName="drf-table-row"
      />
    </div>
  );
};

export default DrfTable;
