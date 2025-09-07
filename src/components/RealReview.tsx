import './RealReview.css';

const reviews = [
  {
    user: '최***',
    date: '2025.06.19',
    rating: 5,
    text: '너무 이뻐요. 정말 후회 안합니다! 너무 잘 산거 같아요.',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80'
  },
  {
    user: '김***',
    date: '2025.06.20',
    rating: 4,
    text: '가격대가 있지만 만족합니다. 추천해요!',
    img: 'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=200&q=80'
  }
];

const RealReview = () => (
  <section className="real-review">
    <h3>리얼리뷰</h3>
    <div className="review-list">
      {reviews.map((r, i) => (
        <div className="review" key={i}>
          <img src={r.img} alt="리뷰 상품" />
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

export default RealReview;
