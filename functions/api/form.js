// functions/api/form.js

export async function onRequestPost(context) {
  // contextの中から、リクエストデータと環境変数（APIキー）を取り出します
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const formType = formData.get("form_type");

    const name = formData.get("name") || "未入力";
    const email = formData.get("email") || "未入力";
    const message = formData.get("message") || "未入力";
    const company = formData.get("company") || "未入力";
    const phone = formData.get("phone") || "未入力";
    const bank = formData.get("introduction_bank") || "なし";
    const staff = formData.get("introduction_staff") || "なし";

    const toEmail = "local@easyjstudio.com";
    const subject = "【地元企業案件】特設ページからのお問い合わせ";
    const emailBody = `以下の内容でローカル案件のお問い合わせがありました。\n\n【会社名/屋号】: ${company}\n【お名前】: ${name}\n【メールアドレス】: ${email}\n【お電話番号】: ${phone}\n\n【ご紹介元金融機関】: ${bank}\n【ご紹介担当者様】: ${staff}\n\n【ご相談内容】:\n${message}`;


    // Resend APIでメール送信
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${name} <postmaster@easyjstudio.com>`,
        to: toEmail,
        reply_to: email,
        subject: subject,
        text: emailBody,
      }),
    });

    return new Response(JSON.stringify({ success: resendResponse.ok }), {
      status: resendResponse.ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}