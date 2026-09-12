import { useTranslation } from 'react-i18next';
import './CategoryRanking.css';

const CategoryRanking = () => {
  const { t } = useTranslation();
  
  const categories = t('categoryRanking.categories', { returnObjects: true }) as string[];
  const products = t('categoryRanking.products', { returnObjects: true }) as Array<{name: string, price: string}>;
  
  const productImages = [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section className="category-ranking">
      <h3>{t('categoryRanking.title')}</h3>
      <div className="category-list">
        {categories.map((cat, i) => (
          <button className="category-btn" onClick={() => { window.location.hash = ["/catalog/clothing/outerwear", "/catalog/clothing/tops", "/catalog/bags", "/collection/0"][i]; }} key={i}>{cat}</button>
        ))}
      </div>
      <div className="product-list">
        {products.map((product, i) => (
          <a className="product" href={`#/product/categoryRanking-${i}`} key={i}>
            <div className="product-image-wrapper">
              <img src={productImages[i]} alt={product.name} />
            </div>
            <div className="name">{product.name}</div>
            <div className="price">{product.price}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryRanking;
