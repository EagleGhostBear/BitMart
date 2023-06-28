import React from 'react';

const FooterLeft = () => {
  return (
    <div className="w-2/4 pt-6 pb-8" style={{ marginTop: '-220px', marginBottom: '160px' }}>
      <h2 className="font-bold text-r-2">고객행복센터</h2>
      <dl className="flex pt-8">
        <dt style={{ fontSize: '28px', fontWeight: '800' }} className="text-r-2.8 font-extrabold mr-7 w-64">1644-1107</dt>
        <dt style={{ marginLeft: '150px', marginTop: '-30px' }}>월~토요일 오전 7시 - 오후 6시</dt>
        <dd></dd>
      </dl>
      <dl className="flex flex-shrink-0 pt-8">
        <dt className="mr-7 w-64">
          <p className="h-16 border border-solid border-kmmd-100 text-center leading-4">
            <button style={{ display: 'block', width: '140px', height: '40px', border: '1px solid #e2e2e2', borderRadius: '3px', lineHeight: '39px', textAlign: 'center', marginRight: '16px', marginBottom: '16px', backgroundColor: 'white' }}>카카오톡 문의</button>
          </p>
        </dt>
        <dd>
          <p style={{ marginLeft: '120px', marginTop: '-54px', fontSize: '14px', color: '#999' }}>월~토요일 | 오전 7시 - 오후 6시</p>
          <p style={{ marginLeft: '120px', fontSize: '14px', color: '#999', marginTop: '-12px' }} className="text-kmi-100">일/공휴일 | 오전 7시 - 오후 1시</p>
        </dd>
      </dl>
      <dl className="flex flex-shrink-0 pt-8">
        <dt className="mr-7 w-64">
          <p className="h-16 border border-solid border-kmmd-100 text-center leading-4">
            <button style={{ display: 'block', width: '140px', height: '40px', border: '1px solid #e2e2e2', borderRadius: '3px', lineHeight: '39px', textAlign: 'center', marginRight: '16px', marginBottom: '16px', backgroundColor: 'white' }}>1:1 문의</button>
          </p>
        </dt>
        <dd></dd>
        <dd>
          <p style={{ marginLeft: '120px', fontSize: '14px', color: '#999', marginTop: '-54px' }}>365일</p>
          <p style={{ marginLeft: '120px', fontSize: '14px', color: '#999', marginTop: '-12px' }} className="text-kmi-100">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
        </dd>
      </dl>
    </div>
  );
};

export default FooterLeft;