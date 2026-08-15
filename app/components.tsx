import { mainNav } from "./content";

export function Header({ solid = false }: { solid?: boolean }) {
  return <header className={`topbar ${solid ? "solid" : ""}`}>
    <a className="brand" href="/" aria-label="罗马西区华人教会首页"><span className="brand-mark">✝</span><span><b>罗马西区华人教会</b><small>CHIESA CRISTIANA CINESE ROMA OVEST</small></span></a>
    <nav>{mainNav.slice(0, 5).map((item) => <a key={item.slug} href={`/${item.slug}`}>{item.title}</a>)}</nav>
    <details className="more-menu"><summary>全部栏目</summary><div>{mainNav.map((item) => <a key={item.slug} href={`/${item.slug}`}>{item.title}</a>)}</div></details>
    <a className="contact" href="tel:0645448494">06 4544 8494</a>
  </header>;
}

export function Footer() {
  return <footer><div className="footer-main"><div><div className="footer-cross">✝</div><h2>罗马西区华人教会</h2><p>“神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。”</p></div><div><h3>联系我们</h3><p>Via Assisi, Roma<br /><a href="tel:0645448494">06 4544 8494</a></p></div><div><h3>快速导航</h3>{mainNav.slice(0,6).map(item=><a className="footer-link" key={item.slug} href={`/${item.slug}`}>{item.title}</a>)}</div></div><div className="footer-bottom"><span>Copyright © 2026 西区教会</span><a href="https://www.youtube.com/@%E7%BD%97%E9%A9%AC%E8%A5%BF%E5%8C%BA%E6%95%99%E4%BC%9A-q7j" target="_blank" rel="noreferrer">YouTube 教会频道 ↗</a></div></footer>;
}
