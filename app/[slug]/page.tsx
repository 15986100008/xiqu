import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { findPage, pages } from "../content";

export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = findPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.title} | 罗马西区华人教会`, description: page.intro,
    openGraph: { title: page.title, description: page.intro, images: [{ url: page.image }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.intro, images: [page.image] },
  };
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();
  return <main className="detail"><Header /><section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.15)),url("${page.image}")` }}><div><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div><span className="page-index">XIQŪ / {String(pages.indexOf(page)+1).padStart(2,"0")}</span></section><section className="page-content"><div className="content-head"><small>INFORMATION</small><h2>在主里连结<br/>在真道中成长</h2></div><div className="content-grid">{page.sections.map((section, index)=><article key={section.title}><span>{String(index+1).padStart(2,"0")}</span><div>{section.meta && <small>{section.meta}</small>}<h2>{section.title}</h2><p>{section.body}</p></div></article>)}</div><aside className="welcome-card"><small>WELCOME HOME</small><h2>欢迎来到<br/>西区教会</h2><a href="tel:0645448494">联系教会 ↗</a></aside></section><Footer /></main>;
}
