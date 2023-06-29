import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Faq from '../components/Faq';

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 10;

  useEffect(() => {
    fetchFaqs();
  }, []);

  async function fetchFaqs() {
    try {
      const response = await axios.get('/api/faqs');
      setFaqs(response.data);
    } catch (error) {
      console.error('Failed to fetch FAQ data:', error);
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset current page when category changes
  };

  const filteredFaqs = selectedCategory ? faqs.filter((faq) => faq.category === selectedCategory) : faqs;

  const indexOfLastFaq = currentPage * faqsPerPage;
  const indexOfFirstFaq = indexOfLastFaq - faqsPerPage;
  const currentFaqs = filteredFaqs.slice(indexOfFirstFaq, indexOfLastFaq);
  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ minHeight: '1300px' }}>
      <div style={{ marginLeft: '230px', marginTop: '60px' }} className="NavHeader">
        <div className="NavTitle">
          고객센터
        </div>
        <ul className="NavMain">
          <li className="NavDetail" >
            <a href="/notices" className="Notices">
              공지사항
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

          <li className="NavDetail">
            <a href="/faq" className="Faq"
              style={{
                color: '#5f0080',
              }}>
              자주하는 질문

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
      <div style={{ flex: '10', paddingRight: '230px', paddingBottom: '20px', minWidth: '800px', maxWidth: '1200px', marginLeft: '480px', marginTop: '-270px' }}>
        <h1 style={{ fontSize: '25px', fontWeight: 'bold', margin: '20px 0', marginTop: '55px' }}>자주하는 질문</h1>
        <h1 style={{ fontSize: '15px', fontWeight: 'lighter', color: 'gray', margin: '20px 0' }}>고객님들께서 가장 자주하시는 질문들을 모두 모았습니다</h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <select
  value={selectedCategory}
  onChange={(e) => handleCategoryChange(e.target.value)}
  style={{
    padding: '5px',
    borderRadius: '4px',
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
    appearance: 'none',
    marginLeft: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#5f0080',
    cursor: 'pointer',
    position: 'relative',
    zIndex: '1',
    transition: 'transform 0.3s ease',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1)',
  }}
  onFocus={(e) => {
    e.target.style.transform = 'scale(1.05)';
  }}
  onBlur={(e) => {
    e.target.style.transform = 'scale(1)';
  }}
>
  <option value="">전체</option>
  <option value="회원">회원</option>
  <option value="상품">상품</option>
  <option value="서비스 이용">서비스 이용</option>
</select>



        </div>
        <ul style={{ padding: '0', listStyle: 'none' }}>
          {currentFaqs.map((faq) => (
            <li key={faq.id} style={{ marginBottom: '10px' }}>
              <Faq faq={faq} />
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              marginRight: '10px',
              cursor: 'pointer',
              fontSize: '20px',
              width: '40px',
              height: '40px',
              backgroundColor: '#5f0080',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              outline: 'none',
            }}
          >
            &lt;
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              marginLeft: '10px',
              cursor: 'pointer',
              fontSize: '20px',
              width: '40px',
              height: '40px',
              backgroundColor: '#5f0080',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              outline: 'none',
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;