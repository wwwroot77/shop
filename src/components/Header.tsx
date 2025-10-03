import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      title: t('header.categories.clothing'),
      items: [
        t('header.subcategories.clothing.tops'),
        t('header.subcategories.clothing.bottoms'),
        t('header.subcategories.clothing.outerwear'),
        t('header.subcategories.clothing.underwear'),
        t('header.subcategories.clothing.sleepwear')
      ]
    },
    {
      title: t('header.categories.shoes'),
      items: [
        t('header.subcategories.shoes.sneakers'),
        t('header.subcategories.shoes.dressShoes'),
        t('header.subcategories.shoes.sandals'),
        t('header.subcategories.shoes.boots'),
        t('header.subcategories.shoes.slippers')
      ]
    },
    {
      title: t('header.categories.bags'),
      items: [
        t('header.subcategories.bags.backpacks'),
        t('header.subcategories.bags.toteBags'),
        t('header.subcategories.bags.crossbody'),
        t('header.subcategories.bags.clutch'),
        t('header.subcategories.bags.luggage')
      ]
    },
    {
      title: t('header.categories.accessories'),
      items: [
        t('header.subcategories.accessories.watches'),
        t('header.subcategories.accessories.necklaces'),
        t('header.subcategories.accessories.earrings'),
        t('header.subcategories.accessories.rings'),
        t('header.subcategories.accessories.bracelets')
      ]
    },
    {
      title: t('header.categories.beauty'),
      items: [
        t('header.subcategories.beauty.skincare'),
        t('header.subcategories.beauty.makeup'),
        t('header.subcategories.beauty.fragrance'),
        t('header.subcategories.beauty.haircare'),
        t('header.subcategories.beauty.bodycare')
      ]
    }
  ];

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">{t('header.logo')}</div>
        
        <nav className="nav-menu">
          {menuItems.map((menu, index) => (
            <div 
              key={index}
              className="menu-item"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className="menu-button"
                onClick={() => handleDropdownToggle(index)}
              >
                {menu.title}
                <span className="arrow">▼</span>
              </button>
              {openDropdown === index && (
                <div className="dropdown">
                  {menu.items.map((item, itemIndex) => (
                    <a key={itemIndex} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <div className="search-container">
            <input className="search" placeholder={t('header.searchPlaceholder')} />
            <button className="search-btn">🔍</button>
          </div>
          <button className="login-btn">{t('header.login')}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
