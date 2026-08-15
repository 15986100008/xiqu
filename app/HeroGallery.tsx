"use client";

import { useRef, useState } from "react";

const slides = [
  { type: "video", src: "/bible-truth-loop.mp4", label: "圣经 · THE LIVING WORD" },
  { type: "image", src: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/IMG_3089.jpg/:/rs=h:1600,cg:true,m", label: "西区教会 · OUR CHURCH" },
  { type: "image", src: "https://images.unsplash.com/photo-1662151900393-97f6bc1567ef?auto=format&fit=crop&w=2200&q=88", label: "同心敬拜 · WORSHIP TOGETHER" },
  { type: "image", src: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/Unknown-6.jpeg/:/rs=w:1800", label: "主内一家 · ONE FAMILY" },
  { type: "image", src: "https://images.unsplash.com/photo-1555483618-92870e63614e?auto=format&fit=crop&w=2200&q=88", label: "真道之光 · THE LIVING WORD" },
  { type: "image", src: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/Unknown-8.jpeg/:/rs=w:1800", label: "恩典之路 · WALK IN GRACE" },
];

const john316 = "神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。";

export default function HeroGallery() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const move = (direction: number) => setActive((active + direction + slides.length) % slides.length);

  return <section className="cinema-panel hero-gallery" aria-roledescription="carousel" aria-label="教会信仰影像相册" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1); }}>
    <div className="gallery-track" style={{ transform: `translateX(-${active * 100}%)` }}>
      {slides.map((slide, index) => <div className="gallery-slide" key={slide.src} aria-hidden={active !== index}>
        {slide.type === "video" ? <video autoPlay muted playsInline preload="auto" poster="/bible-first-frame.png"><source src={slide.src} type="video/mp4" /></video> : <img src={slide.src} alt={slide.label.split("·")[0].trim()} />}
        <div className="panel-shade"/>
        {slide.type === "video" && active === index ? <div className="hero-scripture" aria-label={`${john316} — John 3:16`}>
          <p>{john316.split("").map((character, characterIndex) => <span key={`${character}-${characterIndex}`} style={{ animationDelay: `${3.35 + characterIndex * 0.055}s` }}>{character}</span>)}</p>
          <small>— JOHN 3:16</small>
        </div> : null}
        <div className="media-caption">{slide.label}</div>
      </div>)}
    </div>
    <button className="gallery-arrow prev" onClick={() => move(-1)} aria-label="上一张"><span>←</span></button><button className="gallery-arrow next" onClick={() => move(1)} aria-label="下一张"><span>→</span></button>
    <div className="gallery-dots">{slides.map((slide,index)=><button key={slide.src} className={active===index?"active":""} onClick={()=>setActive(index)} aria-label={`查看第 ${index+1} 项`}><span>{String(index+1).padStart(2,"0")}</span></button>)}</div>
    <a className="scroll-cue" href="#vision"><i></i><span>SCROLL TO DISCOVER</span></a>
  </section>;
}
