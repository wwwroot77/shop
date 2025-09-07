import './NewProducts.css';

const products = [
  {
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    name: '어반웨어 캐주얼 데님 재킷',
    price: '79,900원',
    link: '#'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    name: '시크맨 슬림핏 네이비 블레이저',
    price: '99,000원',
    link: '#'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    name: '데님무드 라이트 워싱 셔츠',
    price: '55,000원',
    link: '#'
  }
];

const NewProducts = () => (
  <section className="new-products">
    <h3>새로 나온 신상품!</h3>
    <div className="product-list">
      {products.map((p, i) => (
        <a className="product" href={p.link} key={i}>
          <div className="product-image-wrapper">
            <img src={p.img} alt={p.name} />
          </div>
          <div className="name">{p.name}</div>
          <div className="price">{p.price}</div>
        </a>
      ))}
    </div>
  </section>
);

export default NewProducts;
