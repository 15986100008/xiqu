import { Footer, Header } from "./components";
import { pages } from "./content";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="top"><div className="hero-shade" /><div className="hero-content"><p className="eyebrow">主内一家 · 同心敬拜 · 共活真道</p><h1>西区教会<br />欢迎您</h1><p className="verse">“起初，神创造天地。” <span>—— 创世记 1:1</span></p><div className="actions"><a className="primary" href="#welcome">认识我们</a><a className="secondary" href="#gathering">聚会时间</a></div></div><div className="scroll-note">向下探索 <span>↓</span></div></section>
      <section className="welcome" id="welcome"><div className="section-kicker">欢迎回家</div><h2>在基督里，我们成为一家人</h2><p>我们是立足罗马、服侍华人社群的基督教会。在这里，我们一同敬拜、学习真道、彼此关怀，也用爱服侍所在的城市。</p><div className="feature-grid" id="gathering"><article><span>01</span><h3>主日崇拜</h3><p>上午堂 10:30–12:30<br />下午堂 15:40–17:30</p></article><article><span>02</span><h3>祷告聚会</h3><p>每周五 15:00–17:00<br />在祷告中彼此扶持</p></article><article><span>03</span><h3>教会地址</h3><p>Via Assisi, Roma<br />欢迎弟兄姊妹与新朋友</p></article></div></section>
      <section className="ministries"><div className="ministries-head"><div><p className="section-kicker">服侍与连结</p><h2>每一个生命，<br />都有属灵的家</h2></div><p>从孩童到长者，从初信到服侍，我们藉着不同的团契与事工，一同认识神、建立彼此。</p></div><div className="ministry-grid">{pages.slice(2,8).map((page,index)=><a href={`/${page.slug}`} key={page.slug} className="ministry-card"><img src={page.image} alt="" /><div className="card-shade"/><span>{String(index+1).padStart(2,"0")}</span><h3>{page.title}</h3><p>{page.eyebrow}</p><b>了解更多 →</b></a>)}</div></section>
      <section className="scripture"><div><span>✝</span><p>“神爱世人，甚至将他的独生子赐给他们，<br />叫一切信他的，不至灭亡，反得永生。”</p><small>约翰福音 3:16</small></div></section>
      <Footer />
    </main>
  );
}
