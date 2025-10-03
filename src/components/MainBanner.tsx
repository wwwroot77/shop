import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './MainBanner.css';

const MainBanner = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80'
  ];

  const bannerSlides = t('banner.slides', { returnObjects: true }) as Array<{title: string, subtitle: string}>;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  return (
    <section className="main-banner">
      <div className="banner-slider">
        {bannerSlides.map((banner, index) => (
          <div 
            key={index}
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={bannerImages[index]} alt={`배너 ${index + 1}`} />
            <div className="banner-text">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="banner-indicators">
        {bannerSlides.map((_, index) => (
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
