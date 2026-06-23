const Footer = () => (
  <footer className="py-12 px-8 border-t bg-white text-center">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      
      {/* ストア ＆ SNSリンク (1行にまとめる) */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8 text-sm font-bold text-slate-600">
        
        {/* X (Twitter) アイコン */}
        <a href="https://x.com/asayamaaaaaaa" className="hover:text-black transition-colors flex items-center" aria-label="X (Twitter)">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>

      <p className="text-slate-400 text-sm">
        &copy; 2026 EasyJ Studio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;