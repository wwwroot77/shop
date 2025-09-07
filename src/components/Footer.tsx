import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">쇼핑몰</div>
    <div className="footer-links">
      <a href="#">이메일 무단 수집 거부</a>
      <a href="#">개인정보처리방침</a>
      <a href="#">푸터메뉴1</a>
      <a href="#">푸터메뉴2</a>
    </div>
    <div className="footer-sns">
      <a href="#">인스타그램</a>
      <a href="#">유튜브</a>
      <a href="#">페이스북</a>
    </div>
    <div className="footer-info">
      주소 정리란입니다.<br />
      T. 전화번호 E. 메일주소<br />
      2025 회사 . ALL RIGHTS RESERVED
    </div>
  </footer>
);

export default Footer;
