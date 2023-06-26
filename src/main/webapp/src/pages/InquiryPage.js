import React, { useState } from 'react';
import InquiryList from '../components/InquiryList';
import { Link } from 'react-router-dom';

const InquiryPage = () => {
  const [activeTab, setActiveTab] = useState('notices');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ minHeight: '1300px' }}>
    <div style={{ marginLeft: '230px', marginTop: '60px'}} className="NavHeader">
    <div className="NavTitle">
      고객센터
    </div>
    <ul className="NavMain">
      <li className="NavDetail" >
        <a href="/notices" className="Notice">
         공지사항
          <svg
            id="Arrow"
            height="19"
            width="19"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs >
              <path
                id="gfk9q0rhta"
                d="M1.657 1.657L9.657 1.657 9.657 9.657"
              />
            </defs>
            <g
              fill="none"
              fillRule="evenodd"
            >
              
              <g
                transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
              >
                <use
                  id="arrowIcon"
                  stroke="#999"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  transform="rotate(45 5.657 5.657)"
                  xlinkHref="#gfk9q0rhta"
                />
              </g>
                
            </g>
          </svg>
        </a>
      </li>
      
      
      <li className="NavDetail" >
        <a href="/faq" className="Faq">
         자주하는 질문
          <svg
            id="Arrow"
            height="19"
            width="19"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs >
              <path
                id="gfk9q0rhta"
                d="M1.657 1.657L9.657 1.657 9.657 9.657"
              />
            </defs>
            <g
              fill="none"
              fillRule="evenodd"
            >
              
              <g
                transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
              >
                <use
                  id="arrowIcon"
                  stroke="#999"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  transform="rotate(45 5.657 5.657)"
                  xlinkHref="#gfk9q0rhta"
                />
              </g>
                
            </g>
          </svg>
        </a>
      </li>
      <li className="NavDetail">
        <a href="/inquiry" className="Inquiry"
            style={{
              color:'#5f0080',
            }}>
          1:1 문의
          
          {/* svg, g태그 : 이미지 사용할때! => 화살표 태그 이미지 삽입 */}
          <svg
            id="Arrow"
            height="19"
            width="19"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="gfk9q0rhta"
                d="M1.657 1.657L9.657 1.657 9.657 9.657"      /* 화살표 이미지 경로 */
              />
            </defs>
            <g
              fill="none"
              fillRule="evenodd"
            >
              <g
                transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
              >
                <use
                  id="arrowIcon"
                  stroke="#5f0080"          // 화살표 색상
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  transform="rotate(45 5.657 5.657)"
                  xlinkHref="#gfk9q0rhta"
              />
              </g>
            </g>
          </svg>
        </a>
      </li>
    </ul>
  </div>
      <div style={{ marginTop: '-100px', marginLeft: '350px', marginTop: '-220px' }}>
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
            marginLeft: '1150px',
          }}
        >
          문의하기
        </Link>
      </div>
    </div>
  );
};
export default InquiryPage;


