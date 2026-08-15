import { Footer, Header } from "./components";
import { pages } from "./content";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <section className="cinema-panel hero" id="top"><div className="panel-shade"/><div className="hero-title"><span>ROMA XIQŪ CHURCH</span><h1>同心敬拜<br/>共活真道</h1><p>罗马西区华人教会</p></div><a className="scroll-cue" href="#vision"><i></i><span>SCROLL TO DISCOVER</span></a></section>
      <section className="cinema-panel vision" id="vision"><div className="panel-shade"/><div className="panel-copy left"><small>01 / OUR VISION</small><h2>在基督里<br/>成为一家人</h2><p>立足罗马，服侍华人社群。<br/>传扬福音、牧养生命、连结社区。</p><a href="/教会简介">了解我们 <b>↗</b></a></div></section>
      <section className="cinema-panel worship"><div className="panel-shade"/><div className="panel-copy right"><small>02 / SUNDAY WORSHIP</small><h2>安静你心<br/>一同敬拜</h2><p>主日上午堂 10:30–12:30<br/>主日下午堂 15:40–17:30</p><a href="/主日聚会">聚会详情 <b>↗</b></a></div></section>
      <section className="services"><div className="services-title"><small>03 / MINISTRIES</small><h2>事工与团契</h2><p>ONE FAITH. ONE FAMILY.</p></div><div className="service-strip">{pages.slice(2,8).map((page,index)=><a href={`/${page.slug}`} key={page.slug}><img src={page.image} alt=""/><span>0{index+1}</span><h3>{page.title}</h3><small>{page.eyebrow}</small></a>)}</div></section>
      <section className="cinema-panel scripture"><div className="panel-shade"/><div className="scripture-copy"><span>✝</span><p>“神爱世人，甚至将他的独生子赐给他们”</p><small>JOHN 3:16</small></div></section>
      <Footer />
    </main>
  );
}
