import React from 'react';
import InquiryList from '../components/InquiryList';
import { Link } from 'react-router-dom';

const InquiryPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <InquiryList />
      <Link
        to="/inquirywrite"
        style={{
          marginLeft: '20px',
          backgroundColor: '#5F0080',
          color: 'white',
          width: '120px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        문의하기
      </Link>
    </div>
  );
};

export default InquiryPage;

