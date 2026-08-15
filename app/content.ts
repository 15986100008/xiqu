export type PageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  sections: { title: string; body: string; meta?: string }[];
};

export const pages: PageContent[] = [
  { slug: "教会简介", title: "西区教会简介", eyebrow: "ABOUT OUR CHURCH", intro: "立足罗马，服侍华人社群；在真道中建造生命，在基督里彼此相爱。", image: "https://images.unsplash.com/photo-1647482289957-48f1a9439167?auto=format&fit=crop&w=1800&q=85", sections: [
    { title: "我们的异象", body: "传扬福音、牧养生命、连结社区。我们重视怜悯、慷慨与诚实，并致力于把这些信仰原则活在日常生活中。" },
    { title: "聚会与关怀", body: "除主日崇拜外，教会设有区域团契、中文学校、主日学、诗班、圣乐乐队与清晨灵修班，陪伴各年龄层的弟兄姊妹。" },
    { title: "欢迎您", body: "不论您初次接触信仰，还是正在寻找属灵的家，都欢迎您来到 Via Assisi，与我们一同敬拜。" },
  ]},
  { slug: "主日聚会", title: "主日聚会", eyebrow: "SUNDAY WORSHIP", intro: "一同敬拜、聆听圣言，在主里彼此坚固。", image: "https://images.unsplash.com/photo-1732913598646-65410d3278f2?auto=format&fit=crop&w=1800&q=85", sections: [
    { title: "上午堂崇拜", meta: "主日 10:30–12:30", body: "读经：青年组 · 领诗：雪嫦、百强、阿黎、戴爽 · 司会：翁指望弟兄 · 司琴：金依诺姊妹" },
    { title: "下午堂崇拜", meta: "主日 15:40–17:30", body: "司会：黄恩慧弟兄 · 司琴：郑思媛姊妹 · 敬拜：约娇、丹琴、蔡思思、祝浪、恩慧" },
    { title: "祷告会", meta: "每周五 15:00–17:00", body: "为教会、家庭、城市与世界同心祷告，也欢迎带着您的需要来到神面前。" },
  ]},
  { slug: "中文学校", title: "罗马西区中文学校", eyebrow: "CHINESE SCHOOL", intro: "把孩子带到有真理的学校，让语言、文化与品格一同成长。", image: "/chinese-school.png", sections: [
    { title: "语文课程", body: "教材同步国内人教版，注重听、说、读、写的系统训练，帮助孩子建立扎实的中文基础。" },
    { title: "艺术与体育", body: "课程包括美术、音乐、舞蹈、游泳、乒乓球与户外活动，鼓励孩子发现兴趣、锤炼意志。" },
    { title: "招生与加入", body: "面向罗马及周边家庭招生。欢迎家长联系教务处，了解班级、上课时间与报名安排。" },
  ]},
  { slug: "主日学", title: "儿童与青少年主日学", eyebrow: "SUNDAY SCHOOL", intro: "在爱与真理中陪伴每一个年轻生命。", image: "https://img1.wsimg.com/isteam/stock/11867/:/rs=w:1400", sections: [
    { title: "幼儿班", body: "透过诗歌、图画、故事与手工，让孩子在欢乐中认识神的爱。" }, { title: "儿童班", body: "按年龄分班，以圣经故事和生活应用建立信仰根基。" }, { title: "青少年班", body: "以真诚对话回应成长中的疑问，帮助青少年形成健康的信仰与价值观。" },
  ]},
  { slug: "区域团契", title: "区域团契", eyebrow: "FELLOWSHIP", intro: "走进彼此的日常，分享、祷告，在主里同行。", image: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/02ca2051cbf06bcb1d1cb8a9e45a207a%202.JPG/:/rs=w:1400", sections: [
    { title: "Vittorio 区域", body: "联结 Vittorio 及周边的弟兄姊妹，定期在家中分享真道与生活。" }, { title: "Tuscolana 区域", body: "以小组生活建立真实关系，彼此守望、一同成长。" }, { title: "Prenestina 区域", body: "在周中相聚，透过读经、祷告与爱宴彼此激励。" }, { title: "周三团契", body: "周中的属灵补给，欢迎新朋友就近加入。" },
  ]},
  { slug: "橄榄诗班", title: "橄榄诗班", eyebrow: "OLIVE CHOIR", intro: "用声音传颂恩典，以诗歌预备人心敬拜。", image: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/blob-919fbfa.png/:/rs=w:1400", sections: [
    { title: "诗班事工", body: "橄榄诗班服侍主日崇拜与教会节期，透过合唱传达真理、颂赞神的恩典。" }, { title: "排练与加入", body: "欢迎爱好圣乐、愿意委身服侍的弟兄姊妹联系诗班，共同学习与成长。" },
  ]},
  { slug: "圣乐乐队", title: "圣乐乐队", eyebrow: "WORSHIP MUSIC", intro: "以心灵和诚实敬拜，用音乐见证主的荣美。", image: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/blob-7308fce.png/:/rs=w:1400", sections: [
    { title: "敬拜服侍", body: "乐队与领诗同工一同服侍两堂崇拜，也参与节期、祷告会与特别聚会。" }, { title: "恩赐与委身", body: "我们看重技艺，也更看重生命。欢迎乐手、歌手与音响同工一同装备、忠心服侍。" },
  ]},
  { slug: "意语聚会", title: "意大利语聚会", eyebrow: "CULTO IN ITALIANO", intro: "Una comunità aperta, unita nella fede, nella speranza e nell’amore.", image: "https://img1.wsimg.com/isteam/ip/5a0ed821-db31-48af-a6bc-0f030e8c7e88/96c3b3c261ee34fc767c55898637e4e8%202.JPG/:/rs=w:1400", sections: [
    { title: "Benvenuti", body: "Stiamo preparando incontri e risorse in lingua italiana. Tutti sono benvenuti a conoscere la fede cristiana e la nostra comunità." }, { title: "欢迎联络", body: "意语聚会正在筹备中。如您愿意参与或服侍，欢迎联系教会。" },
  ]},
  { slug: "欧盟清晨灵修班", title: "欧盟清晨灵修班", eyebrow: "MORNING DEVOTION", intro: "以神的话开始每一天，在祷告与分享中得着力量。", image: "https://www.am-stommelerbusch.info/system/shared/bynder/images/Die-Schriften-beleuchten.jpg?__scale=w%3A1600%2Ch%3A1184%2Ct%3A2%2Cq%3A75", sections: [
    { title: "礼拜一", meta: "09:00–10:30", body: "宣召：箴言 11:30 · 钥节：以赛亚书 29:13 · 经文：以赛亚书 30 章" }, { title: "礼拜二", meta: "09:00–10:30", body: "宣召：箴言 12:18 · 钥节：以赛亚书 30:15 · 经文：以赛亚书 31 章" }, { title: "礼拜三", meta: "09:00–10:30", body: "宣召：箴言 13:14 · 钥节：以赛亚书 31:5 · 经文：以赛亚书 32 章" }, { title: "礼拜四", meta: "07:30–09:00", body: "清晨一同读经、敬拜、分享与代祷。" },
  ]},
  { slug: "乐意奉献", title: "乐意奉献", eyebrow: "GIVING", intro: "各人要随本心所酌定的，不要作难，不要勉强。", image: "https://images.unsplash.com/photo-1690387800106-94cb5a0f9c24?auto=format&fit=crop&w=1800&q=85", sections: [
    { title: "奉献账号", body: "1234556678" }, { title: "奉献咨询", body: "联系电话：123445667。正式发布前，请与教会财务同工核对账号信息。" },
  ]},
  { slug: "代祷", title: "代祷与关怀", eyebrow: "PRAYER & CARE", intro: "你们要恒切祷告，在此警醒感恩。", image: "https://nqiuxlwngepsiwodvpod.supabase.co/storage/v1/object/public/blog-images/covers/deliverance-prayer-freedom-min.png", sections: [
    { title: "提交代祷", body: "如您有感恩、软弱、疾病、家庭或其他代祷需要，欢迎致电教会。我们将谨慎对待您的信息。" }, { title: "祷告聚会", meta: "每周五 15:00–17:00", body: "我们相信祷告的力量，也愿意在困难中陪伴每一个需要的生命。" },
  ]},
];

export const mainNav = pages.map(({ slug, title }) => ({ slug, title: title.replace("罗马西区", "").replace("儿童与青少年", "") }));

export const findPage = (slug: string) => pages.find((page) => page.slug === decodeURIComponent(slug));
