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
    <div style={{ display: 'flex', minHeight: '150vh' }}>
      <div style={{ flex: '3', marginTop: '40px', marginRight: '20px', paddingLeft: '220px' }}>
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

      <div style={{ flex: '10', paddingRight: '230px', paddingBottom: '20px', minWidth: '800px', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '25px', fontWeight: 'bold', margin: '20px 0', marginTop: '55px' }}>자주하는 질문</h1>
        <h1 style={{ fontSize: '15px', fontWeight: 'lighter', color: 'gray', margin: '20px 0' }}>고객님들께서 가장 자주하시는 질문들을 모두 모았습니다</h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            style={{ padding: '5px' }}
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
        <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ marginRight: '-1250px', cursor: 'pointer', fontSize: '20px', width: '40px', height: '40px'  }}
          >
            &lt;
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ marginLeft: '1280px', cursor: 'pointer', fontSize: '20px', width: '40px', height: '40px' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
