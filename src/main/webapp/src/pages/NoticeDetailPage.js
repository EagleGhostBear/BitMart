import React from 'react';
import NoticeDetail from '../components/NoticeDetail';

const NoticeDetailPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', marginTop: '-200px', minHeight: '2000px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}></h1>
      <NoticeDetail />
    </div>
  );
};

export default NoticeDetailPage;
