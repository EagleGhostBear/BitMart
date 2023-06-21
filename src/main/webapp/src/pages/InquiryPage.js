import React from 'react';
import InquiryList from '../components/InquiryList';
import { Link } from 'react-router-dom';

const InquiryPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', marginBottom: '200px' }}>
       <div style={{ marginTop: '0px', marginLeft: '130px' }}>
        <InquiryList />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link
          to="/inquirywrite"
          style={{
            backgroundColor: '#5F0080',
            color: 'white',
            width: '120px',
            height: '44px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            marginLeft: '800px',
           

          }}
        >
          문의하기
        </Link>
      </div>
    </div>
  );
};

export default InquiryPage;



