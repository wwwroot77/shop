import './MDRecommend.css';

const MDRecommend = () => (
  <section className="md-recommend">
    <h3>MD가 추천하는 기획전</h3>
    <div className="recommend-list">
      <div className="recommend">
        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" alt="기획전1" />
        <div className="desc">바캉스 스타일<br />더운 여름을 위한 바캉스 스타일</div>
      </div>
      <div className="recommend">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="기획전2" />
        <div className="desc">빈티지 워싱 데님 재킷<br />특가 할인</div>
      </div>
    </div>
  </section>
);

export default MDRecommend;
