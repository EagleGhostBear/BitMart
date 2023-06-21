import React from 'react';
import InquiryList from '../components/InquiryList';
import { Link } from 'react-router-dom';

const InquiryPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', marginBottom: '200px' }}>
      <div style={{ marginTop: '40px', marginRight: '20px', paddingRight: '830px' }}>
        <div style={{ fontSize: '28px', fontWeight: '700', border: '1px solid white', padding: '10px', marginBottom: '20px' }}>고객센터</div>
        <ul style={{ width: '200px', listStyleType: 'none', padding: 0, border: '1px solid lightgray', padding: '10px', backgroundColor: 'white' }}>
          <li style={{ height: '32px', marginBottom: '5px' }}>
            <a href="/notices" style={{ color: 'rgba(0, 0, 0, 0.7)', textDecoration: 'none' }}>
              공지사항
            </a>
          </li>
          <hr style={{ margin: '5px 0' }} />
          <li style={{ height: '32px', marginBottom: '5px' }}>
            <a href="/faq" style={{ color: 'rgba(0, 0, 0, 0.7)', textDecoration: 'none' }}>
              자주하는 질문
            </a>
          </li>
          <hr style={{ margin: '5px 0' }} />
          <li style={{ height: '32px', marginBottom: '5px' }}>
            <a href="/inquiry" style={{ color: 'rgba(0, 0, 0, 0.7)', textDecoration: 'none' }}>
              1:1 문의
            </a>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: '-100px', marginLeft: '150px' }}>
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
            marginLeft: '950px',
          }}
        >
          문의하기
        </Link>
      </div>
    </div>
  );
};

export default InquiryPage;



