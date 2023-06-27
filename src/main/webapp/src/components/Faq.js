import React, { useState } from 'react';

function Faq({ faq }) {
  const [expanded, setExpanded] = useState(false);

  const handleFaqClick = () => {
    setExpanded(!expanded);
  };

  const handleNumberClick = () => {
    handleFaqClick();
  };

  const handleCategoryClick = () => {
    handleFaqClick();
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
          cursor: 'pointer',
          backgroundColor: expanded ? '#EAE6F5' : 'transparent',
          borderRadius: '8px',
          boxShadow: expanded ? '0px 4px 8px rgba(108, 99, 255, 0.2)' : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={handleFaqClick}
      >
        <div style={{ flex: '1', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', color: '#9B88F7' }} onClick={handleNumberClick}>
          {faq.id}
        </div>
        <div style={{ flex: '2', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', color: '#9B88F7' }} onClick={handleCategoryClick}>
          {faq.category}
        </div>
        <div style={{ flex: '2', textAlign: 'center', minWidth: '120px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: expanded ? '0' : '10px',
              transition: 'margin-bottom 0.4s ease',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
              display: 'inline-block',
              wordBreak: 'break-word',
              color: expanded ? '#9B88F7' : '#333333',
              filter: expanded ? 'drop-shadow(0px 2px 4px rgba(108, 99, 255, 0.4))' : 'none',
            }}
          >
            {faq.title}
          </h3>
        </div>
      </div>
      {expanded && (
        <div
          style={{
            marginLeft: '1rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            transition: 'margin 0.8s ease',
            borderLeft: '2px solid #9B88F7',
            paddingLeft: '1rem',
          }}
        >
          <p style={{ color: '#666666' }}>{faq.content}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;

