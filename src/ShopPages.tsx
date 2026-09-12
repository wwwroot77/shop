import { useState } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { products } from './catalog';
import type { Product } from './catalog';

export type CartItem = { id: string; color: string; size: string; quantity: number };
const money = (value: number, language: string) => new Intl.NumberFormat(language, { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(value);
export function Page({ title, children }: { title: string; children: ReactNode }) {
 const { t } = useTranslation();
 return <main className="shop-page"><nav className="breadcrumbs"><a href="#/">{t('shop.home')}</a><span>/</span><span>{title}</span></nav><h1>{title}</h1><p className="demo-note">{t('shop.demo')}</p>{children}</main>;
}
export function ProductGrid({ items }: { items: Product[] }) {
 const { t, i18n } = useTranslation();
 return items.length ? <div className="shop-grid">{items.map(p => <a className="shop-card" href={`#/product/${p.id}`} key={p.id}><img src={p.image} alt={t(`${p.key}.name`)} loading="lazy" /><div><h3>{t(`${p.key}.name`)}</h3><strong className="shop-price">{money(p.price, i18n.language)}</strong></div></a>)}</div> : <div className="shop-panel empty"><p>{t('shop.empty')}</p><a className="login-btn" href="#/catalog">{t('shop.continue')}</a></div>;
}
export function ProductDetail({ product, add }: { product: Product; add: (item: CartItem) => void }) {
 const { t, i18n } = useTranslation();
 const [size, setSize] = useState('M'); const [color, setColor] = useState('cream'); const [quantity, setQuantity] = useState(1); const [added, setAdded] = useState(false);
 const name = t(`${product.key}.name`);
 function addItem(buy: boolean) { add({ id: product.id, size, color, quantity }); setAdded(true); if (buy) window.location.hash = '/checkout'; }
 return <Page title={name}><div className="detail-layout"><img className="detail-image" src={product.image} alt={name} /><div className="shop-panel"><p>{t(`header.subcategories.${product.category}.${product.sub}`)}</p><h2>{name}</h2><p className="shop-price">{money(product.price, i18n.language)}</p><p>{t('shop.descriptionText')}</p><fieldset><legend>{t('shop.color')}</legend>{['cream','black'].map(c => <button className="option-button" aria-pressed={color === c} onClick={() => {setColor(c); setAdded(false);}} key={c}>{t(`shop.${c}`)}</button>)}</fieldset><fieldset><legend>{t('shop.size')}</legend>{['S','M','L'].map(s => <button className="option-button" aria-pressed={size === s} onClick={() => {setSize(s);setAdded(false);}} key={s}>{s}</button>)}</fieldset><label className="field">{t('shop.quantity')}<select value={quantity} onChange={e => {setQuantity(Number(e.target.value)); setAdded(false);}}>{Array.from({length: 10}, (_,i) => <option key={i} value={i+1}>{i+1}</option>)}</select></label><p>{t('shop.total')} <strong>{money(product.price * quantity, i18n.language)}</strong></p><div className="shop-actions"><button className="secondary-button" onClick={() => addItem(false)}>{t('shop.add')}</button><button className="login-btn" onClick={() => addItem(true)}>{t('shop.buy')}</button></div><p role="status">{added && <>{t('shop.added')} <a href="#/cart">{t('shop.cart')} →</a></>}</p></div></div><div className="shop-panel detail-copy"><h2>{t('shop.details')}</h2><h3>{t('shop.description')}</h3><p>{t('shop.descriptionText')}</p><details open><summary>{t('shop.sizeGuide')}</summary><p>{t('shop.sizeText')}</p></details><details><summary>{t('shop.care')}</summary><p>{t('shop.careText')}</p></details><details><summary>{t('shop.delivery')}</summary><p>{t('shop.deliveryText')}</p></details><p>{t('shop.reviews')} · <a href="#/review/0">{t('realReview.title')} →</a></p></div><h2>{t('mdRecommend.title')}</h2><ProductGrid items={products.filter(p => p.id !== product.id && p.sub === product.sub).slice(0,3)} /></Page>;
}
export function Catalog({ category, sub, query, collection }: { category?: string; sub?: string; query?: string; collection?: string }) {
 const { t } = useTranslation(); const [sort, setSort] = useState('recommended');
 let items = products.filter(p => (!category || p.category === category) && (!sub || p.sub === sub) && (!query || t(`${p.key}.name`).toLocaleLowerCase().includes(query.toLocaleLowerCase())));
 if (collection) items = items.filter((_,i) => collection === '0' ? i % 2 === 0 : i % 2 !== 0);
 if (sort !== 'recommended') items = [...items].sort((a,b) => sort === 'low' ? a.price-b.price : b.price-a.price);
 const title = collection ? t(`mdRecommend.recommendations.${Number(collection) % 2}.title`) : query !== undefined ? `${t('shop.search')}: ${query}` : sub ? t(`header.subcategories.${category}.${sub}`) : category ? t(`header.categories.${category}`) : t('shop.all');
 return <Page title={title}>{collection && <div className="shop-panel"><h2>{t('shop.collectionText')}</h2></div>}<div className="shop-toolbar"><span>{t('shop.results',{count:items.length})}</span><label>{t('shop.sort')} <select value={sort} onChange={e => setSort(e.target.value)}>{['recommended','low','high'].map(s => <option value={s} key={s}>{t(`shop.${s}`)}</option>)}</select></label></div><ProductGrid items={items}/></Page>;
}
export function Cart({ cart, update, checkout, complete }: { cart: CartItem[]; update: (items: CartItem[]) => void; checkout: boolean; complete: () => void }) {
 const {t,i18n} = useTranslation(); const total = cart.reduce((sum,item) => sum + (products.find(p => p.id === item.id)?.price ?? 0) * item.quantity,0);
 return <Page title={t(checkout ? 'shop.orderReview' : 'shop.cart')}>{cart.length ? <><div className="shop-panel">{cart.map((item,index) => {const p=products.find(p=>p.id===item.id)!;return <div className="cart-row" key={`${item.id}-${item.color}-${item.size}`}><a href={`#/product/${p.id}`}><img src={p.image} alt={t(`${p.key}.name`)}/></a><div><a href={`#/product/${p.id}`}><h3>{t(`${p.key}.name`)}</h3></a><p>{t(`shop.${item.color}`)} / {item.size}</p><label>{t('shop.quantity')} <select value={item.quantity} onChange={e=>update(cart.map((v,i)=>i===index?{...v,quantity:Number(e.target.value)}:v))}>{Array.from({length:Math.max(10,item.quantity)},(_,i)=><option key={i} value={i+1}>{i+1}</option>)}</select></label></div><strong>{money(p.price*item.quantity,i18n.language)}</strong><button className="secondary-button" onClick={()=>update(cart.filter((_,i)=>i!==index))}>{t('shop.remove')}</button></div>;})}</div><div className="shop-panel order-total"><p>{t('shop.delivery')}: {t('shop.free')}</p><h2>{t('shop.total')}: {money(total,i18n.language)}</h2>{checkout ? <button className="login-btn" onClick={complete}>{t('shop.checkout')}</button> : <a className="login-btn" href="#/checkout">{t('shop.orderReview')}</a>}</div></> : <div className="shop-panel empty"><p>{t('shop.results',{count:0})}</p><a href="#/catalog" className="login-btn">{t('shop.continue')}</a></div>}</Page>;
}
export function Info({ type, id, signedIn, signIn }: { type: string; id?: string; signedIn: boolean; signIn: (v: boolean) => void }) {
 const { t }=useTranslation();
 if(type==='account') return <Page title={t(signedIn?'shop.account':'shop.loginTitle')}><div className="shop-panel empty"><p>{t('shop.loginText')}</p><button className="login-btn" onClick={()=>signIn(!signedIn)}>{t(signedIn?'shop.logout':'shop.demoLogin')}</button>{signedIn && <p><a href="#/cart">{t('shop.cart')} →</a></p>}</div></Page>;
 if(type==='complete') return <Page title={t('shop.complete')}><div className="shop-panel empty"><h2>✓ {t('shop.complete')}</h2><p>{t('shop.completeText')}</p><a className="login-btn" href="#/catalog">{t('shop.continue')}</a></div></Page>;
 if(type==='review' && (id==='0'||id==='1')) {const r=t(`realReview.reviews.${id}`,{returnObjects:true}) as {user:string;date:string;text:string;rating:number};return <Page title={t('realReview.title')}><article className="shop-panel"><p>{r.user} · {r.date}</p><p className="shop-price">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</p><h2>{r.text}</h2><p>{t('shop.demo')}</p></article><ProductGrid items={[products[Number(id)]]}/></Page>;}
 if(type==='event' && id && /^[0-4]$/.test(id)) return <Page title={t(`banner.slides.${id}.title`)}><div className="shop-panel"><h2>{t(`banner.slides.${id}.subtitle`)}</h2><p>{t('shop.collectionText')}</p></div><ProductGrid items={products.slice(Number(id),Number(id)+6)}/></Page>;
 const info:Record<string,[string,string]>={privacy:['footer.links.privacy','shop.privacyText'],emailPolicy:['footer.links.emailPolicy','shop.emailText'],menu1:['shop.support','shop.supportText'],menu2:['shop.about','shop.aboutText'],instagram:['footer.social.instagram','shop.socialText'],youtube:['footer.social.youtube','shop.socialText'],facebook:['footer.social.facebook','shop.socialText']};
 const page=type==='info'&&id?info[id]:undefined;
 return <Page title={t(page?.[0]??'shop.notFound')}><div className="shop-panel"><p>{t(page?.[1]??'shop.notFound')}</p><a href="#/catalog">{t('shop.continue')} →</a></div></Page>;
}

