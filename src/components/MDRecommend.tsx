import { useTranslation } from 'react-i18next';
import './MDRecommend.css';

const MDRecommend = () => {
  const { t } = useTranslation();
  
  const recommendations = t('mdRecommend.recommendations', { returnObjects: true }) as Array<{title: string, description: string}>;
  
  const images = [
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  ];

  return (
    <section className="md-recommend">
      <h3>{t('mdRecommend.title')}</h3>
      <div className="recommend-list">
        {recommendations.map((rec, i) => (
          <a className="recommend" href={`#/collection/${i}`} key={i}>
            <img src={images[i]} alt={rec.title} />
            <div className="desc">
              {rec.title}<br />
              {rec.description}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MDRecommend;
