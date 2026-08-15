import { mainNav } from "./content";

export function Header({ solid = false }: { solid?: boolean }) {
  return <header className={`topbar ${solid ? "solid" : ""}`}>
    <a className="brand" href="/" aria-label="罗马西区华人教会首页"><span className="brand-mark"><i>✝</i></span><span><b>罗马西区华人教会</b><small>ROMA XIQŪ CHURCH</small></span></a>
    <nav>{mainNav.slice(0, 5).map((item) => <a key={item.slug} href={`/${item.slug}`}>{item.title}</a>)}</nav>
    <details className="more-menu"><summary aria-label="打开全部栏目"><span></span><span></span></summary><div>{mainNav.map((item) => <a key={item.slug} href={`/${item.slug}`}>{item.title}</a>)}</div></details>
  </header>;
}

export function Footer() {
  return <footer><div className="footer-logo"><span className="brand-mark"><i>✝</i></span><strong>ROMA XIQŪ CHURCH</strong></div><div className="footer-bottom"><span>VIA ASSISI, ROMA · 06 4544 8494</span><span>Copyright © 2026 西区教会</span><a href="https://www.youtube.com/@%E7%BD%97%E9%A9%AC%E8%A5%BF%E5%8C%BA%E6%95%99%E4%BC%9A-q7j" target="_blank" rel="noreferrer">YOUTUBE ↗</a></div></footer>;
}
