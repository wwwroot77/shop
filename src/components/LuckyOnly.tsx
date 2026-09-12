import { useTranslation } from 'react-i18next';
import './LuckyOnly.css';

const LuckyOnly = () => {
  const { t } = useTranslation();
  
  const products = t('luckyOnly.products', { returnObjects: true }) as Array<{name: string, price: string}>;
  
  const productImages = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  ];

  return (
    <section className="lucky-only">
      <h3>{t('luckyOnly.title')}</h3>
      <a href="#/collection/1"><img className="theme-img" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt={t("luckyOnly.title")} /></a>
      <div className="related-products">
        {products.map((product, index) => (
          <a className="product" href={`#/product/luckyOnly-${index}`} key={index}>
            <div className="product-image-wrapper">
              <img src={productImages[index]} alt={product.name} />
            </div>
            <div className="name">{product.name}</div>
            <div className="price">{product.price}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LuckyOnly;
