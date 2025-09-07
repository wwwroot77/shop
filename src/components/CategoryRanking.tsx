import './CategoryRanking.css';

const categories = ['아우터', '상의', '가방', '상하의 세트'];

const CategoryRanking = () => (
  <section className="category-ranking">
    <h3>카테고리 랭킹</h3>
    <div className="category-list">
      {categories.map((cat, i) => (
        <button className="category-btn" key={i}>{cat}</button>
      ))}
    </div>
    {/* 샘플 상품 리스트 */}
    <div className="product-list">
      <div className="product">
        <div className="product-image-wrapper">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" alt="아우터" />
        </div>
        <div className="name">아우터 빈티지 워싱 데님 재킷</div>
        <div className="price">65,000원</div>
      </div>
      <div className="product">
        <div className="product-image-wrapper">
          <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80" alt="가디건" />
        </div>
        <div className="name">루즈핏 썸머 시스루 가디건</div>
        <div className="price">42,000원</div>
      </div>
    </div>
  </section>
);

export default CategoryRanking;
