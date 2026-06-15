import { useState } from "react";

const LINE_URL = "https://line.me/R/ti/p/@148cciyn";
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800&family=Yomogi&display=swap');* { box-sizing:border-box; margin:0; padding:0; }`;

function ProgressBar({ cur, total, grad }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, width:"100%", maxWidth:540 }}>
      <div style={{ flex:1, height:8, background:"#e5e7eb", borderRadius:99, overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${(cur/total)*100}%`, background:grad, borderRadius:99, transition:"width 0.4s" }} />
      </div>
      <span style={{ fontSize:13, color:"#6b7280", whiteSpace:"nowrap", fontFamily:"'M PLUS Rounded 1c',sans-serif" }}>{cur} / {total}</span>
    </div>
  );
}

function ScoreBar({ pct }) {
  const color = pct>=75?"#4ade80":pct>=50?"#facc15":pct>=25?"#fb923c":"#f87171";
  return <div style={{ height:10, background:"#e5e7eb", borderRadius:99, overflow:"hidden", marginTop:6 }}><div style={{ height:"100%", width:`${pct}%`, background:color, borderRadius:99, transition:"width 0.8s" }} /></div>;
}

function LineBanner({ score, totalMax }) {
  const pct = totalMax > 0 ? (score / totalMax) * 100 : 0;
  let type = "Dタイプ";
  if (pct >= 75) type = "Aタイプ";
  else if (pct >= 50) type = "Bタイプ";
  else if (pct >= 25) type = "Cタイプ";
  const url = LINE_URL + "?oatext=" + encodeURIComponent(type);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ display:"block", width:"100%", maxWidth:540, background:"linear-gradient(135deg,#06c755,#00a040)", border:"2px solid #04a844", boxShadow:"4px 6px 0px #027a30", borderRadius:20, padding:"20px 22px", marginBottom:20, textDecoration:"none" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
        <span style={{ fontSize:24 }}>📮</span>
        <div>
          <div style={{ fontSize:11, color:"#d1fae5", fontWeight:700, fontFamily:"'M PLUS Rounded 1c',sans-serif" }}>あなた専用</div>
          <div style={{ fontSize:17, fontWeight:800, color:"#fff", fontFamily:"'M PLUS Rounded 1c',sans-serif", lineHeight:1.3 }}>2046年の未来診断書を無料で受け取る</div>
        </div>
      </div>
      <div style={{ background:"rgba(0,0,0,0.15)", borderRadius:12, padding:"10px 14px", marginBottom:14 }}>
        {["なぜこの結果になったのか","20年後の危険箇所","今やるべき改善策"].map((t,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#fff", fontFamily:"'M PLUS Rounded 1c',sans-serif", fontWeight:700, marginBottom: i<2 ? 6 : 0 }}><span style={{ color:"#fef08a" }}>✓</span> {t}</div>
        ))}
      </div>
      <div style={{ background:"#fff", borderRadius:12, padding:"12px", textAlign:"center" }}>
        <div style={{ fontSize:15, fontWeight:800, color:"#06c755", fontFamily:"'M PLUS Rounded 1c',sans-serif" }}>🆓 LINEで無料配布中</div>
        <div style={{ fontSize:11, color:"#9ca3af", marginTop:2, fontFamily:"'M PLUS Rounded 1c',sans-serif" }}>お友だち追加だけ・料金一切なし</div>
      </div>
    </a>
  );
}

function DaikoCTA() {
  return (
    <div style={{ width:"100%", maxWidth:540, background:"linear-gradient(135deg,#1f2937,#374151)", border:"2.5px solid #4b5563", boxShadow:"4px 6px 0px #111827", borderRadius:24, padding:"28px 24px", marginBottom:20 }}>
      <div style={{ textAlign:"center", marginBottom:16 }}>
        <div style={{ fontSize:36, marginBottom:8 }}>🔎</div>
        <h3 style={{ fontFamily:"'Yomogi',cursive", fontSize:19, color:"#fff", marginBottom:8 }}>自分で調べるのが面倒なら…</h3>
        <p style={{ fontSize:13, color:"#d1d5db", lineHeight:1.7 }}>書類確認・現地確認・詳細レポートまで<br/><b style={{ color:"#fbbf24" }}>マンション管理士が代わりに診断</b>します。</p>
      </div>
      <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:12, padding:"12px 16px", marginBottom:16 }}>
        <div style={{ fontSize:12, color:"#9ca3af", fontFamily:"'M PLUS Rounded 1c',sans-serif", marginBottom:8 }}>この診断ではわからない</div>
        {["20年後のリスク","今やるべき優先対策","住み続けるか、住み替えるかの判断"].map((t,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#fff", fontFamily:"'M PLUS Rounded 1c',sans-serif", fontWeight:700, marginBottom: i<2 ? 6 : 0 }}><span style={{ color:"#fbbf24" }}>✅</span> {t}</div>
        ))}
      </div>
      <a href={LINE_URL} target="_blank" rel="noopener noreferrer" style={{ display:"block", width:"100%", padding:"15px", background:"linear-gradient(135deg,#f59e0b,#ef4444)", color:"#fff", borderRadius:14, border:"none", fontSize:16, fontWeight:800, fontFamily:"'M PLUS Rounded 1c',sans-serif", boxShadow:"0 3px 0 #92400e", cursor:"pointer", textDecoration:"none", textAlign:"center" }}>🔎 プロ代行診断の内容を見てみる</a>
    </div>
  );
}

const CONFIG = {
  titleEmoji:"🧑", title:"住む人の\n住まう力チェック", subtitle:"ADL・認知・生活管理・将来の備えを\nチェックします",
  accent:"#0891b2", accentDark:"#0e7490", accentBg:"#ecfeff", accentBorder:"#a5f3fc",
  grad:"linear-gradient(135deg,#0891b2,#7c3aed)", wrapBg:"linear-gradient(160deg,#ecfeff 0%,#f5f3ff 100%)",
  categoryList:[["🚶","日常生活の自立力","3問"],["🧠","認知・記憶の状態","3問"],["🏠","住まいの管理力","3問"],["📋","将来への備え","4問"]],
  categoryComments:{
    "日常生活の自立力":{high:"日常生活の自立力は高い状態です。引き続き健康維持を続けましょう。",middle:"日常生活に一部不安があります。早めに支援体制を検討しましょう。",low:"日常生活に深刻な課題があります。専門家や地域包括支援センターへの相談をおすすめします。"},
    "認知・記憶の状態":{high:"認知・記憶の状態は良好です。予防習慣を続けましょう。",middle:"認知・記憶に一部気になる点があります。かかりつけ医への相談をおすすめします。",low:"認知・記憶に深刻なリスクがあります。早急に専門医への相談が必要です。"},
    "住まいの管理力":{high:"住まいの管理力は良好です。",middle:"住まいの管理に一部課題があります。支援サービスの活用を検討しましょう。",low:"住まいの管理が困難な状態です。福祉サービスや家族のサポートを検討してください。"},
    "将来への備え":{high:"将来への備えは整っています。安心して住み続けられます。",middle:"将来への備えに一部不足があります。家族や専門家と相談しましょう。",low:"将来への備えが不足しています。早急に成年後見・家族信託などの検討を。"},
  },
  questions:[
    {id:1,category:"日常生活の自立力",emoji:"🚶",text:"食事・入浴・着替えなど日常的な動作を一人でできていますか？",hint:"ADL（日常生活動作）の低下は早期発見・早期対応が重要です。",options:[{label:"すべて一人でできる",score:2},{label:"一部に不安がある",score:1},{label:"介助が必要な動作がある",score:0}]},
    {id:2,category:"日常生活の自立力",emoji:"🏃",text:"外出・移動（買い物・通院など）を一人でできていますか？",hint:"移動手段の確保は住み続けるための重要な条件です。",options:[{label:"一人で問題なくできる",score:2},{label:"やや不安があるができる",score:1},{label:"一人での外出が難しい",score:0}]},
    {id:3,category:"日常生活の自立力",emoji:"💊",text:"薬の管理（飲み忘れ・飲み間違いなし）はできていますか？",hint:"服薬管理の失敗は健康リスクに直結します。お薬カレンダーなどの活用を。",options:[{label:"きちんと管理できている",score:2},{label:"たまに飲み忘れる",score:1},{label:"管理が難しい・よく間違える",score:0}]},
    {id:4,category:"認知・記憶の状態",emoji:"🧠",text:"最近、物忘れが増えた・同じことを繰り返し話すことが多くなりましたか？",hint:"認知機能の変化は本人より周囲が気づきやすいです。家族とも確認を。",options:[{label:"特に気になることはない",score:2},{label:"少し気になることがある",score:1},{label:"明らかに増えた・指摘された",score:0}]},
    {id:5,category:"認知・記憶の状態",emoji:"💴",text:"お金の管理（支払い・通帳・残高確認）を自分でできていますか？",hint:"金銭管理の困難は認知機能低下の初期サインの一つです。",options:[{label:"問題なく管理できている",score:2},{label:"少し不安がある",score:1},{label:"管理が難しくなってきた",score:0}]},
    {id:6,category:"認知・記憶の状態",emoji:"🔒",text:"戸締まり・火の元確認など安全確認を忘れることがありますか？",hint:"安全確認の失敗は火災・不法侵入などのリスクに直結します。",options:[{label:"きちんとできている",score:2},{label:"たまに忘れることがある",score:1},{label:"よく忘れる・不安がある",score:0}]},
    {id:7,category:"住まいの管理力",emoji:"🏠",text:"部屋の片付け・整理整頓ができていますか？",hint:"片付けられない状態が続くと、転倒・火災・衛生リスクが高まります。",options:[{label:"きれいに保てている",score:2},{label:"やや散らかっている",score:1},{label:"ゴミや物が溢れている",score:0}]},
    {id:8,category:"住まいの管理力",emoji:"💡",text:"電気・ガス・水道などの公共料金を滞りなく支払えていますか？",hint:"公共料金の滞納は生活維持の深刻なリスクサインです。",options:[{label:"問題なく支払えている",score:2},{label:"たまに遅れることがある",score:1},{label:"滞納・支払い困難がある",score:0}]},
    {id:9,category:"住まいの管理力",emoji:"🚿",text:"掃除・洗濯など家事全慢を自分でできていますか？",hint:"家事の困難は生活の質低下だけでなく、健康リスクにもつながります。",options:[{label:"一人でできている",score:2},{label:"一部できないことがある",score:1},{label:"ほとんどできていない",score:0}]},
    {id:10,category:"将来への備え",emoji:"📋",text:"緊急時に連絡できる家族・支援者の連絡先を整理していますか？",hint:"緊急連絡先リストは、いざという時に自分を守る最低限の備えです。",options:[{label:"整理済み・共有している",score:2},{label:"おおよそ把握している",score:1},{label:"整理していない",score:0}]},
    {id:11,category:"将来への備え",emoji:"🏦",text:"認知症になった場合の資産管理（家族信託・成年後見など）を検討していますか？",hint:"認知症になると銀行口座が凍結される場合があります。事前の備えが重要です。",options:[{label:"検討・手続き済み",score:2},{label:"検討中",score:1},{label:"まったく考えていない",score:0}]},
    {id:12,category:"将来への備え",emoji:"🏥",text:"かかりつけ医・介護サービスとの関係を作っていますか？",hint:"かかりつけ医がいると、認知症・ADL低下の早期発見・対応がしやすくなります。",options:[{label:"かかりつけ医がいる・定期受診している",score:2},{label:"病院はあるが定期的でない",score:1},{label:"かかりつけ医がいない",score:0}]},
    {id:13,category:"将来への備え",emoji:"📝",text:"エンディングノート・遺言・介護の希望などを書き留めていますか？",hint:"自分の意思を事前に記録しておくことで、家族の負担と判断の迷いを減らせます。",options:[{label:"書いている・更新している",score:2},{label:"考えたことはある",score:1},{label:"まったく考えていない",score:0}]},
    {id:14,category:"将来への備え",emoji:"🏡",text:"住み続けるか・住み替えるかについて、家族や専門家と話し合ったことがありますか？",hint:"住まいの将来方針を早めに決めておくと、いざという時の選択肢が広がります。",options:[{label:"話し合い・方針がある",score:2},{label:"なんとなく考えている",score:1},{label:"まったく話し合っていない",score:0}]},
    {id:15,category:"将来への備え",emoji:"🤝",text:"地域包括支援センター・ケアマネージャーなど公的支援を知っていますか？",hint:"公的支援は申請しないと使えません。早めの情報収集が将来の選択肢を広げます。",options:[{label:"知っている・相談したことがある",score:2},{label:"名前は知っている",score:1},{label:"知らない・使ったことがない",score:0}]},
  ]
};

export default function SumauDiagnostic() {
  const [screen, setScreen] = useState("top");
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flash, setFlash] = useState(null);
  const [hint, setHint] = useState(false);

  const { questions, accent, accentDark, accentBg, accentBorder, grad, wrapBg, titleEmoji, title, subtitle, categoryList } = CONFIG;
  const TOTAL_MAX = questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.score)), 0);
  const CATEGORIES = [...new Set(questions.map(q => q.category))];
  const q = questions[cur];
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const pct = (totalScore / TOTAL_MAX) * 100;
  let risk = { min:75, label:"自立力：高い", color:"#16a34a", bg:"#f0fdf4", border:"#86efac", emoji:"🟢", desc:"現時点では大きなリスクは見当たりません。引き続き定期メンテナンスを続けましょう。" };
  if (pct < 25) risk = { min:0,  label:"自立力：要緊急対応",  color:"#dc2626", bg:"#fef2f2", border:"#fca5a5", emoji:"🔴", desc:"深刻なリスクの可能性があります。専門家による診断を早急に受けることをおすすめします。" };
  else if (pct < 50) risk = { min:25, label:"自立力：要支援", color:"#ea580c", bg:"#fff7ed", border:"#fdba74", emoji:"🟠", desc:"複数のリスク要因があります。早めに点検・対策を検討してください。" };
  else if (pct < 75) risk = { min:50, label:"自立力：普通", color:"#d97706", bg:"#fefce8", border:"#fcd34d", emoji:"🟡", desc:"いくつか気になる点があります。専門家による確認をおすすめします。" };

  function handleSelect(idx, score) {
    if (flash !== null) return;
    setFlash(idx);
    setTimeout(() => {
      setAnswers({ ...answers, [q.id]: score });
      setFlash(null);
      setHint(false);
      if (cur + 1 < questions.length) setCur(cur + 1);
      else setScreen("result");
    }, 380);
  }

  const wrap = { minHeight: "100vh", background: wrapBg, fontFamily: "'M PLUS Rounded 1c',sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 16px 60px" };
  const card = { width: "100%", maxWidth: 540, background: "#fff", borderRadius: 24, border: `2.5px solid ${accentBorder}`, boxShadow: `4px 6px 0px ${accentBorder}`, padding: "28px 24px" };

  if (screen === "top") return (
    <div style={wrap}>
      <style>{FONTS}</style>
      <div style={{ width: "100%", maxWidth: 540 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 52, marginBottom: 8 }}>{titleEmoji}</div>
          <h1 style={{ fontFamily: "'Yomogi',cursive", fontSize: 26, color: accent, lineHeight: 1.4, marginBottom: 8 }}>{title}</h1>
          <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.7 }}>{subtitle}</p>
        </div>
        <div style={card}>
          <button onClick={() => setScreen("quiz")} style={{ width: "100%", padding: "16px", background: grad, color: "#fff", borderRadius: 16, border: "none", fontSize: 17, fontWeight: 800, fontFamily: "'M PLUS Rounded 1c',sans-serif", boxShadow: `0 4px 0 ${accentDark}`, cursor: "pointer", marginBottom: 20 }}>🚀 診断スタート</button>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {categoryList.map(([em, lb, ct]) => (
              <div key={lb} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: accentBg, borderRadius: 12, border: `1.5px dashed ${accentBorder}`, padding: "9px 14px" }}>
                <span style={{ fontSize: 13, color: "#374151" }}>{em} {lb}</span>
                <span style={{ fontSize: 12, color: accent, fontWeight: 700 }}>{ct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (screen === "quiz") return (
    <div style={wrap}>
      <style>{FONTS}</style>
      <ProgressBar cur={cur + 1} total={questions.length} grad={grad} />
      <div style={card}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: accentBg, border: `2px dashed ${accentBorder}`, borderRadius: 20, padding: "4px 14px", fontSize: 13, color: accent, fontWeight: 700, marginBottom: 16 }}>{q.emoji} {q.category}</div>
        <p style={{ fontSize: 17, fontWeight: 700, color: "#1f2937", lineHeight: 1.6, marginBottom: 20 }}>Q{cur + 1}. {q.text}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => handleSelect(i, opt.score)} disabled={flash !== null} style={{ width: "100%", padding: "13px 16px", background: flash === i ? accentBg : "#f9fafb", border: flash === i ? `2.5px solid ${accent}` : "2px solid #e5e7eb", borderRadius: 12, textAlign: "left", fontSize: 14, cursor: "pointer" }}>{opt.label}</button>
          ))}
        </div>
        <button onClick={() => setHint(!hint)} style={{ background: "none", border: "none", color: accent, fontSize: 13, cursor: "pointer" }}>{hint ? "▲ ヒントを閉じる" : "💡 ヒントを見る"}</button>
        {hint && <div style={{ marginTop: 8, background: accentBg, borderRadius: 10, padding: "10px 12px", fontSize: 13, color: accentDark }}>{q.hint}</div>}
      </div>
    </div>
  );

  return (
    <div style={wrap}>
      <style>{FONTS}</style>
      <div style={{ width: "100%", maxWidth: 540 }}>
        <div style={{ background: risk.bg, border: `2.5px solid ${risk.border}`, boxShadow: `4px 6px 0px ${risk.border}`, borderRadius: 24, padding: "28px 24px", textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{risk.emoji}</div>
          <div style={{ fontSize: 44, fontWeight: 900, color: risk.color, fontFamily: "'Yomogi',cursive" }}>{pct >= 75 ? "A" : pct >= 50 ? "B" : pct >= 25 ? "C" : "D"}タイプ</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: risk.color, marginBottom: 6 }}>{risk.label}</div>
          <p style={{ fontSize: 14, color: "#374151" }}>{risk.desc}</p>
        </div>
        <LineBanner score={totalScore} totalMax={TOTAL_MAX} />
        <div style={card}>
          <h3 style={{ fontSize: 18, color: accent, marginBottom: 16 }}>📊 カテゴリ別の結果</h3>
          {CATEGORIES.map(cat => {
            const qs = questions.filter(qi => qi.category === cat);
            const earned = qs.reduce((a, qi) => a + (answers[qi.id] ?? 0), 0);
            const max = qs.reduce((a, qi) => a + Math.max(...qi.options.map(o => o.score)), 0);
            const cPct = Math.round((earned / max) * 100);
            return (
              <div key={cat} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span>{cat}</span><span>{earned}/{max}点</span></div>
                <ScoreBar pct={cPct} />
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 20 }}><DaikoCTA /></div>
      </div>
    </div>
  );
}
