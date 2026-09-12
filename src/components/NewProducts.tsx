import { useTranslation } from 'react-i18next';
import './NewProducts.css';

const NewProducts = () => {
  const { t } = useTranslation();
  
  const productImages = [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  ];
  
  const products = t('newProducts.products', { returnObjects: true }) as Array<{name: string, price: string}>;

  return (
    <section className="new-products">
      <h3>{t('newProducts.title')}</h3><p className="view-all"><a href="#/catalog">{t('newProducts.viewAll')} ?</a></p>
      <div className="product-list">
        {products.map((product, i) => (
          <a className="product" href={`#/product/newProducts-${i}`} key={i}>
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

export default NewProducts;
