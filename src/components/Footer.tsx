import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-logo">{t('footer.logo')}</div>
      <div className="footer-links">
        <a href="#/info/emailPolicy">{t('footer.links.emailPolicy')}</a>
        <a href="#/info/privacy">{t('footer.links.privacy')}</a>
        <a href="#/info/menu1">{t('footer.links.menu1')}</a>
        <a href="#/info/menu2">{t('footer.links.menu2')}</a>
      </div>
      <div className="footer-sns">
        <a href="#/info/instagram">{t('footer.social.instagram')}</a>
        <a href="#/info/youtube">{t('footer.social.youtube')}</a>
        <a href="#/info/facebook">{t('footer.social.facebook')}</a>
      </div>
      <div 
        className="footer-info"
        dangerouslySetInnerHTML={{ __html: t('footer.info') }}
      />
    </footer>
  );
};

export default Footer;
