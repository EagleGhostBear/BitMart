import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from "moment";

const NoticeListPage = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/notices');
      const data = response.data;
      setNotices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(notices.length / noticesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
   <div style={{ minHeight: '1000px' }}>
    <div style={{ marginLeft: '430px', marginTop: '60px'}} className="NavHeader">
    <div className="NavTitle">
      고객센터
    </div>
    <ul className="NavMain">
      <li className="NavDetail">
        <a href="/notices" className="Notices"
            style={{
              color:'#5f0080',
            }}>
          공지사항
          
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
        <a href="/inquiry" className="Inquiry">
          1:1 문의
          <svg
            id="Arrow"
            height="19"
            width="19"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
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
    </ul>
  </div>

      <div style={{ width: '80%', maxWidth: '800px', marginLeft: '700px', marginTop: '-230px' }}>
        <h1 style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '30px' }}>공지사항</h1>
        <p style={{ fontSize: '14px', opacity: '0.7' }}>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</p>
        <div>
          <hr style={{ borderTop: '2px solid #000', marginBottom: '10px' }} />
          <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
            <div style={{ flex: '1', textAlign: 'center' }}>번호</div>
            <div style={{ flex: '5', textAlign: 'center' }}>제목</div>
            <div style={{ flex: '2', textAlign: 'center' }}>작성자</div>
            <div style={{ flex: '2', textAlign: 'center' }}>작성일</div>
          </div>
          <hr style={{ borderTop: '1px solid #000', marginBottom: '10px' }} />
          {currentNotices.length === 0 ? (
            <p>공지사항이 없습니다.</p>
          ) : (
            currentNotices.map((notice, index) => (
              <div key={notice.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <div style={{ flex: '1', textAlign: 'center' }}>{(indexOfFirstNotice + index + 1).toString()}</div>
                <div style={{ flex: '5', textAlign: 'center' }}>
                  <Link to={`/notices/${notice.id}`}>{notice.title}</Link>
                </div>
                <div style={{ flex: '2', textAlign: 'center' }}>{notice.author}</div>
                <div style={{ flex: '2', textAlign: 'center' }}>{moment(notice.date).format("YY-MM-DD-HH:mm")}</div>
              </div>
            ))
          )}
        </div>
        {notices.length > noticesPerPage && (
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)} style={{ marginRight: '10px', cursor: 'pointer' }}>
                &lt;
              </button>
            )}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{ margin: '0 5px', cursor: 'pointer', fontWeight: pageNumber === currentPage ? 'bold' : 'normal' }}
              >
                {pageNumber}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                &gt;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    
  );
};

export default NoticeListPage;


