import React from 'react';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import FooterBanner from './FooterBanner';

const Footer = () => {
  return (
    <div className="flex">
      <hr style={{ borderTop: '1px solid #fff', width: '100%', marginTop: '100px',}} />
      <div style={{ marginLeft: '235px', marginTop: '300px' }} className="footer-column">
        <FooterLeft />
      </div>
      <div style={{ marginLeft: '800px', marginTop: '-350px' }} className="footer-column">
        <FooterRight />
      </div>
      <div className="footer-column">
        <FooterBanner />
      </div>
    </div>
  );
};

export default Footer;