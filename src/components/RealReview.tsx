import { useTranslation } from 'react-i18next';
import './RealReview.css';

const RealReview = () => {
  const { t } = useTranslation();
  
  const reviews = t('realReview.reviews', { returnObjects: true }) as Array<{user: string, date: string, rating: number, text: string}>;
  
  const images = [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=200&q=80'
  ];

  return (
    <section className="real-review">
      <h3>{t('realReview.title')}</h3>
      <div className="review-list">
        {reviews.map((r, i) => (
          <div className="review" key={i}>
            <img src={images[i]} alt="리뷰 상품" />
            <div className="info">
              <div className="user">{r.user} <span className="date">{r.date}</span></div>
              <div className="rating">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
              <div className="text">{r.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealReview;
