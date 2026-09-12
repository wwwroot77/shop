import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import NewProducts from './components/NewProducts';
import CategoryRanking from './components/CategoryRanking';
import MDRecommend from './components/MDRecommend';
import RealReview from './components/RealReview';
import LuckyOnly from './components/LuckyOnly';
import Footer from './components/Footer';
import { products } from './catalog';
import { Cart, Catalog, Info, ProductDetail } from './ShopPages';
import type { CartItem } from './ShopPages';
import './Shop.css';
function App() {
 const [route,setRoute]=useState(()=>window.location.hash.slice(1)||'/');
 const [cart,setCart]=useState<CartItem[]>([]);
 const [signedIn,setSignedIn]=useState(false);
 useEffect(()=>{ const navigate=()=>{setRoute(window.location.hash.slice(1)||'/');window.scrollTo(0,0);};window.addEventListener('hashchange',navigate);return()=>window.removeEventListener('hashchange',navigate);},[]);
 const [path,query='']=route.split('?');const [,type,id,sub]=path.split('/');
 const product=products.find(p=>p.id===id);
 function add(item:CartItem){setCart(current=>{const index=current.findIndex(p=>p.id===item.id&&p.size===item.size&&p.color===item.color);return index<0?[...current,item]:current.map((p,i)=>i===index?{...p,quantity:Math.min(99,p.quantity+item.quantity)}:p);});}
 let content;
 if(!type) content=<main><MainBanner/><NewProducts/><CategoryRanking/><MDRecommend/><RealReview/><LuckyOnly/></main>;
 else if(type==='product'&&product) content=<ProductDetail key={id} product={product} add={add}/>;
 else if(type==='catalog'||type==='search'||(type==='collection'&&(id==='0'||id==='1'))) content=<Catalog key={route} category={type==='catalog'?id:undefined} sub={sub} query={type==='search'?new URLSearchParams(query).get('q')??'':undefined} collection={type==='collection'?id:undefined}/>;
 else if(type==='cart'||type==='checkout') content=<Cart cart={cart} update={setCart} checkout={type==='checkout'} complete={()=>{setCart([]);window.location.hash='/complete';}}/>;
 else content=<Info type={type} id={id} signedIn={signedIn} signIn={setSignedIn}/>;
 return <div className="app-root"><Header count={cart.reduce((sum,p)=>sum+p.quantity,0)}/>{content}<Footer/></div>;
}
export default App;
