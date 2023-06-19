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
    <div>
      <hr style={{ borderTop: '0.1px solid #000', marginBottom: '10px' }} />
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', margin: '0px' }}>
        <div style={{ flex: '1', textAlign: 'center', fontSize: '14px', fontWeight: 'lighter', minWidth: '40px', marginRight: '5px' }} onClick={handleNumberClick}>
          {faq.id}
        </div>
        <div style={{ flex: '2', textAlign: 'center', fontSize: '14px', fontWeight: 'lighter', minWidth: '100px', marginRight: '5px' }} onClick={handleCategoryClick}>
          {faq.category}
        </div>
        <div style={{ flex: '2', textAlign: 'center', minWidth: '120px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 'lighter',
              cursor: 'pointer',
              marginBottom: expanded ? '0' : '10px',
              transition: 'margin-bottom 0.4s ease',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
              display: 'inline-block',
              wordBreak: 'break-word'
            }}
            onClick={handleFaqClick}
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
            transition: 'margin 0.8s ease'
          }}
        >
          <hr style={{ borderTop: '0.3px solid #000', marginBottom: '5px' }} />
          <p>{faq.content}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;
