import { Footer, Header } from "./components";
import { pages } from "./content";
import HeroGallery from "./HeroGallery";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <HeroGallery />
      <section className="home-intro" id="vision"><small>01 / OUR VISION</small><h2>在基督里<br/>成为一家人</h2><p>立足罗马，服侍华人社群。传扬福音、牧养生命、连结社区。</p><div><a href="/教会简介">了解我们 <b>↗</b></a><a href="/主日聚会">聚会详情 <b>↗</b></a></div></section>
      <section className="services"><div className="services-title"><small>02 / MINISTRIES</small><h2>事工与团契</h2><p>ONE FAITH. ONE FAMILY.</p></div><div className="service-strip">{pages.slice(2,8).map((page,index)=><a href={`/${page.slug}`} key={page.slug}><img src={page.image} alt={`${page.title}代表图片`} loading="lazy"/><span>0{index+1}</span><div className="service-copy"><h3>{page.title}</h3><small>{page.eyebrow}</small></div><b>↗</b></a>)}</div></section>
      <Footer />
    </main>
  );
}
