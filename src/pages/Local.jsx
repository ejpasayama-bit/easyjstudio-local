import React, { useState } from 'react';

const Local = () => {
  // 送信状態を管理するステート
  const [status, setStatus] = useState('idle');

  // 送信ボタンが押された時の処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* ① ページヘッダー（ヒーローエリア） */}
      <section className="py-24 px-8 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-4 block">
            For Local Businesses
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.4] tracking-tight">
            地域の事業者様・飲食店様へ<br />
            <span className="text-indigo-600">EasyJ Studio</span>のWeb・システム開発
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed text-left md:text-center">
            EasyJ Studioは、自社アプリ開発やインディーゲーム開発で培った高度なプログラミング技術を活かし、地元の企業様のWebサイト（HP）制作や、社内業務のデジタル化・効率化（勤怠管理アプリ等の開発）をワンストップでサポートしています。
          </p>
        </div>
      </section>

      {/* ② 強み・選ばれる理由 */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">選ばれる3つの理由</h2>
          <div className="h-[1px] bg-slate-200 flex-grow"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">ゼロからシステムを組める<br />「圧倒的な技術力」</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              テンプレートを組み合わせるだけの一般的なホームページ制作とは異なり、裏側のデータ処理や高度なシステム構築まで一人で完結できるため、御社の要望に合わせた複雑なカスタマイズにも柔軟に対応します。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">ユーザーを迷わせない<br />「サクサク動くUI/UX」</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              一般ユーザーや配信者向けの厳しい環境で磨かれた「使いやすさ」「直感的な操作性」のノウハウを、そのまま御社のWebサイトや業務アプリの設計に落とし込みます。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">信用金庫様・地域密着の<br />「誠実なサポート」</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              地域の金融機関様との連携を大切にし、顔の見える距離感で「作って終わり」ではないカッチリとした保守・運用を行います。
            </p>
          </div>
        </div>
      </section>

      {/* ③ 提供メニュー */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">提供メニュー</h2>
          <div className="h-[1px] bg-slate-200 flex-grow"></div>
        </div>

        <div className="space-y-6">
          {/* HP制作カード（デモ画面リンクを追加） */}
          <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-indigo-500">
            <div className="md:w-1/3 font-bold text-lg text-indigo-900">企業向けWebサイト（HP）の<br/>企画・制作・保守</div>
            <div className="md:w-2/3 flex flex-col justify-between">
              <p className="text-slate-600 leading-relaxed mb-6">
                製造業、飲食店、ローカルビジネスに特化した、信頼感と集客力を高めるWebサイトを制作します。
              </p>
              <div>
                <a 
                  href="https://easyjstudio.com/demo/mikawa.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold py-2.5 px-5 rounded-xl text-sm transition-all duration-200 group"
                >
                  <span>制作デモ画面（サンプル）を見る</span>
                  {/* 右矢印アイコン。ホバー時に少し右に動くアニメーション付き */}
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 業務効率化カード（モックアップ画像付き） */}
          <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-emerald-500">
            <div className="md:w-1/3">
              <div className="font-bold text-lg text-emerald-900 mb-4">社内業務の<br/>デジタル化・効率化</div>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                「Excelや紙での管理に限界を感じている」という課題に対し、スマホで動くシンプルな勤怠管理アプリなど、現場に最適化した業務システムをオーダーメイドで構築します。
              </p>
              <div className="bg-emerald-50 text-emerald-800 text-xs font-bold p-3 rounded-lg border border-emerald-100">
                💡 現場のIT不慣れなスタッフ様でも絶対に迷わないよう、あえて機能を削ぎ落とし、直感的な巨大ボタンのみのシンプル設計にしています。
              </div>
            </div>
            
            {/* モックアップ画像エリア */}
            <div className="md:w-2/3 flex justify-center gap-4">
              {/* 勤怠画面 */}
              <div className="relative w-1/2 max-w-[200px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-slate-800">
                <img src="/ss_work.png" alt="勤怠管理アプリ画面" className="w-full h-auto block" />
              </div>
              {/* ダッシュボード画面 */}
              <div className="relative w-1/2 max-w-[200px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-slate-800">
                <img src="/ss_order.png" alt="売上ダッシュボード画面" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ お問い合わせフォーム */}
      <section className="py-16 px-8 max-w-3xl mx-auto mb-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-center">お問い合わせ・ご相談</h2>
          <p className="text-slate-600 text-center mb-8">
            信用金庫様からのご紹介案件、または地域のご相談はこちらからお気軽にご連絡ください。
          </p>

          {/* 成功時のメッセージ */}
          {status === 'success' && (
            <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-bold text-center">
              ありがとうございます！メッセージが送信されました。<br/>内容を確認次第、折り返しご連絡いたします。
            </div>
          )}

          {/* エラー時のメッセージ */}
          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-bold text-center">
              エラーが発生しました。時間をおいて再度お試しください。
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form_type" value="local" />
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 border-l-4 border-l-indigo-500 mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                金融機関様などからのご紹介の場合（任意）
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="introduction_bank" 
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm" 
                  placeholder="例：西尾信用金庫 〇〇支店" 
                />
                <input 
                  type="text" 
                  name="introduction_staff" 
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm" 
                  placeholder="例：ご担当者様のお名前（わかる範囲で）" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">会社名 / 屋号</label>
              {/* 各inputに name 属性を追加しています */}
              <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="例：株式会社〇〇 / 居酒屋〇〇" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">お名前 <span className="text-red-500">*</span></label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="例：山田 太郎" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="info@easyjstudio.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">お電話番号</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="090-XXXX-XXXX" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">ご相談内容 <span className="text-red-500">*</span></label>
              <textarea name="message" required rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="現在、Excelでの管理に限界を感じておりシステム化を検討しています。まずは費用感などをご相談したいです。"></textarea>
            </div>
            
            <div className="pt-4 text-center">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 disabled:bg-indigo-300 disabled:transform-none disabled:shadow-none"
              >
                {status === 'submitting' ? '送信中...' : 'この内容で送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Local;