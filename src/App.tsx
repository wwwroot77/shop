import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import NewProducts from './components/NewProducts';
import CategoryRanking from './components/CategoryRanking';
import MDRecommend from './components/MDRecommend';
import RealReview from './components/RealReview';
import LuckyOnly from './components/LuckyOnly';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <MainBanner />
      <NewProducts />
      <CategoryRanking />
      <MDRecommend />
      <RealReview />
      <LuckyOnly />
      <Footer />
    </div>
  );
}

export default App;
