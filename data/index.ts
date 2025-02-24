export const navItems = [
  { name: "About", link: "#more" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] border border-emerald-400",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We're very flexible with time zone communications",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 border border-pink-400",
    imgClassName:
      "absolute right-0 lg:-top-[-130px] max-md:-top-[-70px] md:w-72 w-40",
    titleClassName: "justify-start",
    img: "/earth.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 border-violet-400",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "We are tech enthusiasts with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 border-blue-400",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 border-red-400",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 border-yellow-400",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "The Great Great Company played a key role in optimizing our platform’s performance and scalability. Their deep technical knowledge and problem-solving mindset helped us tackle challenges efficiently. Their team’s dedication and professionalism made this collaboration a true success.",
    name: "Liam Anderson",
    title: "Senior Software Engineer at Hostinger",
    img: "/profile1.jpg",
  },
  {
    quote:
      "The Great Great Company transformed our platform with their exceptional development skills. Their ability to deliver sleek, high-performance solutions while maintaining an intuitive user experience truly set them apart. Their professionalism and commitment to excellence made our collaboration effortless and rewarding.",
    name: "Olivia Carter",
    title: "Product Manager at Cloudinary",
    img: "/profile2.jpg",
  },
  {
    quote:
      "From start to finish, working with The Great Great Company was a seamless experience. They not only understood our vision but also enhanced it with innovative solutions. Their technical expertise and commitment to deadlines helped us scale faster than expected. Highly recommended!",
    name: "Sophia Martinez",
    title: "Head of Engineering at Appwrite",
    img: "/profile3.jpg",
  },
  {
    quote:
      "The Great Great Company delivered a robust, scalable solution that exceeded our expectations. Their problem-solving abilities, technical excellence, and proactive communication made a significant impact on our project. I highly appreciate their dedication and expertise.",
    name: "David Chen",
    title: "Lead Developer at Stream",
    img: "/profile4.jpg",
  },
  {
    quote:
      "Our experience with The Great Great Company was nothing short of outstanding. They brought creativity and innovation to every aspect of development, ensuring a smooth, efficient, and visually stunning end product. Their team is truly a game-changer in the industry!",
    name: "Emma Patel",
    title: "Director of Technology at Docker",
    img: "/profile5.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 2,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 3,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
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

export const workExpertise = [
  {
    id: 1,
    title: "Web Development",
    desc: "Crafting dynamic and interactive web applications using React.js, ensuring seamless user experiences with modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // Person with laptop icon
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Developing high-quality, cross-platform mobile applications for iOS and Android using React Native for an optimal mobile experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg", // Floating app icon
  },
  {
    id: 3,
    title: "Data Analytics & Insights",
    desc: "Providing data-driven solutions by analyzing trends and patterns to enhance business decision-making and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg", // Bar chart/analytics icon
  },
  {
    id: 4,
    title: "Cybersecurity & IT Solutions",
    desc: "Ensuring robust security and IT infrastructure with cutting-edge solutions, protecting digital assets from potential threats.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg", // Person in a hoodie (hacker/security theme)
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/",
  },
];
