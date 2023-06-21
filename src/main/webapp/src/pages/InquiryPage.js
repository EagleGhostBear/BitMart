import React, { useState } from 'react';
import InquiryList from '../components/InquiryList';
import { Link } from 'react-router-dom';

const InquiryPage = () => {
  const [activeTab, setActiveTab] = useState('notices');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', marginBottom: '200px' }}>
      <div style={{ marginTop: '40px', marginRight: '20px', paddingRight: '830px' }}>
        <div style={{ fontSize: '28px', fontWeight: '700', border: '1px solid white', padding: '10px', marginBottom: '20px', marginLeft: '-10px' }}>고객센터</div>
        <ul style={{ borderColor: '#E9ECEF', width: '175px', listStyleType: 'none', padding: 0, border: '1px solid lightgray', padding: '10px', backgroundColor: 'white' }}>
          <li style={{ height: '32px', marginBottom: '5px' }}>
            <Link
              to="/notices"
              style={{
                color: activeTab === 'notices' ? 'purple' : 'rgba(0, 0, 0, 0.4)',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleTabClick('notices')}
            >
              공지사항<span style={{ marginLeft: '5px' }}>{activeTab === 'notices' ? '>' : ''}</span>
            </Link>
          </li>
          <hr style={{ margin: '5px 0' }} />
          <li style={{ height: '32px', marginBottom: '5px' }}>
            <Link
              to="/faq"
              style={{
                color: activeTab === 'faq' ? 'purple' : 'rgba(0, 0, 0, 0.4)',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleTabClick('faq')}
            >
              자주하는 질문<span style={{ marginLeft: '5px' }}>{activeTab === 'faq' ? '>' : ''}</span>
            </Link>
          </li>
          <hr style={{ margin: '5px 0' }} />
          <li style={{ height: '32px', marginBottom: '5px' }}>
            <Link
              to="/inquiry"
              style={{
                color: activeTab === 'inquiry' ? 'purple' : 'rgba(0, 0, 0, 0.4)',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleTabClick('inquiry')}
            >
              1:1 문의<span style={{ marginLeft: '5px' }}>{activeTab === 'inquiry' ? '>' : ''}</span>
            </Link>
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



