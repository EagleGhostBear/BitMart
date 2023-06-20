import React from 'react';
import InquiryWrite from '../components/InquiryWrite';

const InquiryFormPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '1600px', marginTop: '-70px' }}>
      <div>
        <InquiryWrite />
      </div>
    </div>
  );
};

export default InquiryFormPage;
