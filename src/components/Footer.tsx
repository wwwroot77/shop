import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-logo">{t('footer.logo')}</div>
      <div className="footer-links">
        <a href="#">{t('footer.links.emailPolicy')}</a>
        <a href="#">{t('footer.links.privacy')}</a>
        <a href="#">{t('footer.links.menu1')}</a>
        <a href="#">{t('footer.links.menu2')}</a>
      </div>
      <div className="footer-sns">
        <a href="#">{t('footer.social.instagram')}</a>
        <a href="#">{t('footer.social.youtube')}</a>
        <a href="#">{t('footer.social.facebook')}</a>
      </div>
      <div 
        className="footer-info"
        dangerouslySetInnerHTML={{ __html: t('footer.info') }}
      />
    </footer>
  );
};

export default Footer;
