import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      title: '의류',
      items: ['상의', '하의', '아우터', '언더웨어', '잠옷']
    },
    {
      title: '신발',
      items: ['운동화', '구두', '샌들', '부츠', '슬리퍼']
    },
    {
      title: '가방',
      items: ['백팩', '토트백', '크로스백', '클러치', '여행가방']
    },
    {
      title: '액세서리',
      items: ['시계', '목걸이', '귀걸이', '반지', '팔찌']
    },
    {
      title: '뷰티',
      items: ['스킨케어', '메이크업', '향수', '헤어케어', '바디케어']
    }
  ];

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Fashion Mall</div>
        
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
          <div className="search-container">
            <input className="search" placeholder="상품 검색" />
            <button className="search-btn">🔍</button>
          </div>
          <button className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
