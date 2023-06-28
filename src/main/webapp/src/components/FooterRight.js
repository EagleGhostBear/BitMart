import React from 'react';
import { Link } from 'react-router-dom';

const FooterRight = () => {
  return (
    <div style={{ marginTop: '-300px'}} className="w-2/4 pt-12">
      <ul style={{ listStyle: 'none', backgroundColor: '', display: 'flex', justifyContent: 'center', fontSize: '14px', width:'100%',
      paddingBottom: '29px',
      fontWeight: '1px', lineHeight : '18px', marginLeft: '-180px'}} className="flex pb-12">
  <li className="pr-6" style={{ marginRight: '10px' }}>
    <Link className="link" to="/shop/introduce/about_kurly.php">
      컬리소개
    </Link>
  </li>
  <li className="pr-6" style={{ marginRight: '10px' }}>
    <Link className="link" to="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;enablejsapi=1">
      컬리소개영상
    </Link>
  </li>
  <li className="pr-6" style={{ marginRight: '10px' }}>
    <Link className="link" to="https://marketkurly.recruiter.co.kr/appsite/company/index" target="_blank">
      인재채용
    </Link>
  </li>
  <li className="pr-6" style={{ marginRight: '10px', fontWeight: 'bold' }}>
    <Link to="/shop/service/agreement.php">이용약관</Link>
  </li>
  <li className="pr-6" style={{ marginRight: '10px' }}>
    <Link to="/shop/service/private.php">개인정보처리방침</Link>
  </li>
  <li className="pr-6" style={{ marginRight: '10px' }}>
    <Link to="/shop/service/guide.php">이용안내</Link>
  </li>
</ul>

<div
  style={{
    backgroundColor: '',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    color: 'rgb(153, 153, 153)',
    marginBottom: '40px',
  }}
  className="text-r-1.2 text-kmi-100"
>
  법인명 (상호) : 주식회사 컬리 <span className="bar">I</span> 사업자등록번호 : 261-81-23567{' '}
  <Link style={{ color: 'purple'}}
    to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no="
    target="_blank"
    className="text-kp-600"
  >
    사업자정보 확인
  </Link>
  <br />
  통신판매업 : 제 2018-서울강남-01646 호 <span className="bar">I</span> 개인정보보호책임자 :
  이원준
  <br />
  주소 : 서울시 도산대로 16길 20, 이래빌딩 B1 ~ 4F <span className="bar">I</span> 대표이사 :
  김슬아
  <br />
  입점문의 :{' '}
  <Link style={{ color: 'purple'}}   to="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform" target="_blank" className="text-kp-600">
    입점문의하기
  </Link>{' '}
  <span className="bar">I</span> 제휴문의 :{' '}
  <Link style={{ color: 'purple'}} to="mailto:business@kurlycorp.com" className="text-kp-600">
    business@kurlycorp.com
  </Link>
  <br />
  채용문의 :{' '}
  <Link style={{ color: 'purple'}} to="mailto:recruit@kurlycorp.com" className="text-kp-600">
    recruit@kurlycorp.com
  </Link>
  <br />
  팩스: 070 - 7500 - 6098 <span className="bar">I</span> 
  <em className="block pt-6 text-r-1 not-italic">© KURLY CORP. ALL RIGHTS RESERVED</em>
</div>

      <ul style={{ display: 'flex', justifyContent: 'center', marginLeft: '-590px' }} className="flex pt-6">          
      <li style={{ listStyle: 'none'}} className="pr-4">
          <Link to="https://instagram.com/marketkurly" className="link_sns" target="_blank">
          <img
            style={{ width: '34px', height: '34px', listStyle: 'none', marginLeft: '38px' }}
            src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
            alt="마켓컬리 인스타그램 바로가기"
            />

          </Link>
        </li>
        <li style={{ listStyle: 'none', marginLeft: '10px'}} className="pr-4">
          <Link to="https://www.facebook.com/marketkurly" className="link_sns" target="_blank">
            <img
              style={{ width: '34px', height: '34px', listStyle: 'none' }}
              src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
              alt="마켓컬리 페이스북 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li style={{ listStyle: 'none', marginLeft: '10px'}} className="pr-4">
          <Link to="http://blog.naver.com/marketkurly" className="link_sns" target="_blank">
            <img
              style={{ width: '34px', height: '34px', listStyle: 'none' }}
              src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
              alt="마켓컬리 네이버블로그 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li style={{ listStyle: 'none', marginLeft: '10px'}} className="pr-4">
          <Link to="https://m.post.naver.com/marketkurly" className="link_sns" target="_blank">
            <img             
              style={{ width: '34px', height: '34px', listStyle: 'none' }}
              src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
              alt="마켓컬리 유튜브 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li style={{ listStyle: 'none', marginLeft: '10px'}} className="pr-4">
          <Link
            to="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
            className="link_sns lst"
            target="_blank"
          >
            <img
              style={{ width: '34px', height: '34px' }}
              src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
              alt="마켓컬리 유튜브 바로가기"
              className="w-12 h-12"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterRight;