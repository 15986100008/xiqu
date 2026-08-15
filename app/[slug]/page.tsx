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
  return <main><Header /><section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(8,28,21,.86),rgba(8,28,21,.28)),url("${page.image}")` }}><div><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section><section className="page-content"><div className="page-ornament">✝</div><div className="content-grid">{page.sections.map((section, index)=><article key={section.title}><span>{String(index+1).padStart(2,"0")}</span><div>{section.meta && <small>{section.meta}</small>}<h2>{section.title}</h2><p>{section.body}</p></div></article>)}</div><aside className="welcome-card"><p>我们期待与您相遇</p><h2>欢迎来到西区教会</h2><a href="tel:0645448494">联系教会</a></aside></section><Footer /></main>;
}
