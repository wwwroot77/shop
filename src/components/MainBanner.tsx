import { useState, useEffect } from 'react';
import './MainBanner.css';

const bannerData = [
  {
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    title: '프리미엄 브랜드 시즌 마지막 세일 최대 80% 할인',
    subtitle: '매력적인 여자들을 위한 라이프스타일'
  },
  {
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    title: '새로운 컬렉션 출시! 신상품 30% 할인',
    subtitle: '트렌디한 스타일을 완성하세요'
  },
  {
    img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    title: '럭셔리 브랜드 특가 이벤트',
    subtitle: '한정 기간! 놓치지 마세요'
  },
  {
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    title: '봄 신상 컬렉션 사전 예약',
    subtitle: '예약 고객 추가 20% 할인 혜택'
  },
  {
    img: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80',
    title: '회원가입 이벤트! 즉시 10% 쿠폰',
    subtitle: '지금 가입하고 혜택 받으세요'
  }
];

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="main-banner">
      <div className="banner-slider">
        {bannerData.map((banner, index) => (
          <div 
            key={index}
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={banner.img} alt={`배너 ${index + 1}`} />
            <div className="banner-text">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="banner-indicators">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default MainBanner;
