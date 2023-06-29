import React from 'react';
import { Link } from 'react-router-dom';

const FooterBanner = () => {
  return (
    <div className="flex w-full pt-8 mt-8 text-r-1 border-borderGray border-t text-kmi-100">
      
      <div style={{  height: '100px', marginTop:'70px', backgroundColor:'#f7f7f7', color: '#999'}}>
        <li style={{ listStyle: 'none', marginLeft: '100px', fontSize: '11px', padding: '20px 0 30px', lineHeight: '15px', textAlign: 'center',
     }}>
            컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.  </li>

        <li style={{ listStyle: 'none', marginLeft: '420px', fontSize: '11px', marginTop: '-30px'}}>마켓 플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다.
        컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </li>
        <li style={{ listStyle: 'none', marginLeft: '720px', fontSize: '11px', marginTop: '10px'}}>
        © KURLY CORP. ALL RIGHTS RESERVED
        </li>
        
        
         </div>
      
    </div>
  );
};

export default FooterBanner;
