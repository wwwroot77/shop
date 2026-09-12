import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { categories } from '../catalog';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';
export default function Header({ count = 0 }: { count?: number }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState('');
  const [query, setQuery] = useState('');
  return <header className="header"><div className="header-container">
    <a className="logo" href="#/">{t('header.logo')}</a>
    <nav className="nav-menu" aria-label={t('shop.all')}>
      {Object.entries(categories).map(([category, subs]) => <div className="menu-item" key={category} onMouseLeave={() => setOpen('')}>
        <button className="menu-button" aria-expanded={open === category} onClick={() => setOpen(open === category ? '' : category)} onKeyDown={e => { if (e.key === 'Escape') setOpen(''); }}>{t(`header.categories.${category}`)} <span className="arrow">▾</span></button>
        {open === category && <div className="dropdown"><a className="dropdown-item" href={`#/catalog/${category}`} onClick={() => setOpen('')}>{t('shop.all')}</a>{subs.map(sub => <a className="dropdown-item" key={sub} href={`#/catalog/${category}/${sub}`} onClick={() => setOpen('')}>{t(`header.subcategories.${category}.${sub}`)}</a>)}</div>}
      </div>)}
    </nav>
    <div className="header-actions"><LanguageSwitcher /><form className="search-container" onSubmit={e => { e.preventDefault(); window.location.hash = `/search?q=${encodeURIComponent(query.trim())}`; }}><input className="search" aria-label={t('shop.search')} placeholder={t('header.searchPlaceholder')} value={query} onChange={e => setQuery(e.target.value)} /><button className="search-btn" aria-label={t('shop.search')}>⌕</button></form><a className="menu-button" href="#/cart">{t('shop.cart')} ({count})</a><a className="login-btn" href="#/account">{t('shop.account')}</a></div>
  </div></header>;
}
