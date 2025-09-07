import './LuckyOnly.css';

const luckyProducts = [
  {
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    name: '데님무드 라이트 워싱 셔츠',
    price: '55,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
    name: '루즈핏 썸머 시스루 가디건',
    price: '65,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=400&q=80',
    name: '럭셔리 실크 블라우스',
    price: '89,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    name: '프리미엄 레더 자켓',
    price: '120,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80',
    name: '캐시미어 니트 가디건',
    price: '95,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80',
    name: '한정판 디자이너 코트',
    price: '150,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    name: '모던 체크 울 코트',
    price: '135,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=400&q=80',
    name: '빈티지 스웨터',
    price: '75,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&q=80',
    name: '미니멀 화이트 셔츠',
    price: '68,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=400&q=80',
    name: '오버사이즈 트렌치코트',
    price: '145,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    name: '클래식 니트 원피스',
    price: '82,000원'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    name: '프리미엄 후드 점퍼',
    price: '98,000원'
  }
];

const LuckyOnly = () => (
  <section className="lucky-only">
    <h3>오직 럭키에서만</h3>
    <img className="theme-img" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="테마 이미지" />
    <div className="related-products">
      {luckyProducts.map((product, index) => (
        <div className="product" key={index}>
          <div className="product-image-wrapper">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="name">{product.name}</div>
          <div className="price">{product.price}</div>
        </div>
      ))}
    </div>
  </section>
);

export default LuckyOnly;
