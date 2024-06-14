export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Гарантия соблюдения сроков",
    des: "Документальные гарантии возврата ваших денег, если строительство затянется по срокам",
    img: "/yr1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Можем подтвердить надежность застройщика",
    des: "Высылаем документы для юридической проверки",
    img: "/yr4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 3,
    title: "Планировка и комплектация закреплены в договоре",
    des: "В приложении к договору вы сможете посмотреть как будет укомплектована ваша квартира и планировка",
    img: "/yr3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 4,
    title: "Наличие разрешительных документов",
    des: "Получены все разрешительные документы на строительство и благоустройство всей площади вашего дома мечты",
    img: "/yr2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
];

export const testimonials = [
  {
    quote:
      "Здравствуйте! Я купила квартиру в СК «Пионер» и не пожалела, ведь качество строительства дома на высшем уровне. Все материалы качественные, серьёзный подход!",
    name: "Гульмира",
    title: "О качестве строительства",
    profile: "/profile3.jpg",
  },
  {
    quote:
      "Сейчас в покупке квартиры в Бишкеке - самое главное все разрешительные документы и красная книга на земельный участок, что есть не во всех строительных компаниях. Это все я нашёл в Строительной Компании «Пионер».",
    name: "Эмир",
    title: "О наличии всех разрешительных документов",
    profile: "/profile4.jpg",
  },
  {
    quote:
      "Здравствуйте! Удачи и процветания вашей компании. Отдельное спасибо за гибкий график оплаты, руководство пошло мне на встречу и составили удобный для меня график)",
    name: "Нурсултан",
    title: "О гибких условиях оплаты",
    profile: "/profile2.jpg",
  },
  {
    quote:
      "Спасибо большое отделу продаж за доброжелательное и качественное обслуживание! Цена соответствует качеству.",
    name: "Роза",
    title: "О качестве строительства",
    profile: "/profile1.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Красная книга",
    className: "md:col-span-2",
    thumbnail: "/pre1.png",
  },
  {
    id: 2,
    title: "Центральные коммуникации",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/pre2.png",
  },
  {
    id: 3,
    title: "Тепло и шумоизоляция наружных стен",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/pre3.png",
  },
  {
    id: 4,
    title: "Сейсмоустойчивость",
    className: "md:col-span-2",
    thumbnail: "/pre4.png",
  },
  {
    id: 5,
    title: "Автоматическое освещение фасада здания и двора",
    className: "md:col-span-2",
    thumbnail: "/pre5.png",
  },
  {
    id: 6,
    title: "Природный газ",
    className: "md:col-span-2",
    thumbnail: "/pre6.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const flats = [
  {
    id: 1,
    size: "1 комнатные",
    price: "от 49,7 кв.м от 3 121 350 сом ~ 34 790$",
    thumbnail: "/1kom.jpg",
    photos: [
      "/1kom.jpg",
      "/kom1.2.jpg",
      "/kom1.3.jpg",
      "/kom1.4.jpg",
      "/kom1.5.jpg",
      "/kom1.6.jpg",
      "/kom1.7.jpg",
      "/kom1.8.jpg",
      "/kom1.9.jpg",
      "/kom1.10.jpg",
      "/kom1.11.jpg",
      "/kom1.12.jpg",
      "/kom1.13.jpg",
    ],
  },
  {
    id: 2,
    size: "2-х комнатные",
    price: "от 64,8 кв.м от 4 069 700 сом ~ 45 360$",
    thumbnail: "/2kom.jpg",
    photos: [
      "/2kom.jpg",
      "/kom2.2.jpg",
      "/kom2.3.jpg",
      "/kom2.4.jpg",
      "/kom2.5.jpg",
      "/kom2.6.jpg",
      "/kom2.7.jpg",
      "/kom2.8.jpg",
      "/kom2.9.jpg",
    ],
  },
  {
    id: 3,
    size: "3-х комнатные",
    price: "от 103,8 кв.м от 6 519 055 сом ~ 72 660$",
    thumbnail: "/3kom.jpg",
    photos: ["/3kom.jpg", "/kom3.2.jpg", "/kom3.3.jpg", "/kom3.4.jpg"],
  },
];
export const banners = [
  {
    id: 1,
    banner: "/banner1.png",
  },
  {
    id: 2,
    banner: "/banner2.png",
  },
  {
    id: 3,
    banner: "/banner3.png",
  },
];
