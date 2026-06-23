import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <header className="py-6 px-8 border-b bg-white/80 backdrop-blur-md sticky top-0 z-20">
      {/* flex-wrap と gap-y-4 を追加。スマホで幅が足りない時は自然に下へ折り返す */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-y-4">
        
        {/* shrink-0 を追加し、ロゴが潰れるのを防ぐ */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 italic shrink-0">
          EasyJ Studio
        </Link>
        
      </div>
    </header>
  );
};
export default Header;