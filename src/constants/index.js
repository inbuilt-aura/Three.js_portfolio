import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 youtube,
  shopify,
  img1,
 img2,
 img3,
  threejs,
  spheron,
   captain,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MY Captain",
    icon:  captain,
    iconBg: "#383E56",
    date: "August 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "shopify",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Youtube",
    icon: youtube,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Spheron",
    icon: spheron,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Asta proved me wrong.",
    name: "Sakura",
    designation: "CFO",
    company: "Flying Co",
    image: "https://artfiles.alphacoders.com/130/130914.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ben does.",
    name: "Kaori",
    designation: "COO",
    company: "DEF Corp",
    image:
      "https://vignette.wikia.nocookie.net/all-worlds-alliance/images/2/2b/Kaori_Miyazono.jpg/revision/latest?cb=20180530120332",
  },
  {
    testimonial:
      "After Gwen optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Chizuru Mizuhara",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://th.bing.com/th/id/OIP.FRSIARM000_1VWaBqoLB5QHaKz?pid=ImgDet&rs=1",
  },
];

const projects = [
  {
    name: "Animeverse",
    description:
      "A conceptual design based on the combination of Anime and Metaverse.The most trendiest topic ongoing.Its a concept to show the visuals,effects and world of Animeverse.",
    tags: [
      {
        name: "next.js",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
    source_code_link: "https://animeverse-eight.vercel.app/",
  },
  {
    name: "Ai-Article-Generator",
    description:
      "Web application that enables users to get summary of latest articles which they don;t have time to read.It helps costumers to get free summaries of articles which are asked for.",
    tags: [
      {
        name: "react+vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: img2,
    source_code_link: "https://github.com/inbuilt-aura/Ai-Article-Generator",
  },
  {
    name: "React-Portfolio",
    description:
      "A modern react portfolio designed fully based on react and its libraries showcasing power of react along with CSS3 as its syled components showcasing all the details at one place.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: img3,
    source_code_link: "https://github.com/inbuilt-aura/my-portfolio.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
