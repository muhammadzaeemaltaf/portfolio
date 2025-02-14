import React from "react";
import { FaReact } from "react-icons/fa";
import NextJsMini from "@/public/nextjs-mini.png";
import AppleIphone from "@/public/apple.jpg";
import AiSEO from "@/public/ai-seo.png";
import Mosam from "@/public/mosam.jpg";
import SnapPeak from "@/public/snap-peak.png";
import Metamagine from "@/public/metamagine.jpg";
import ResuMap from "@/public/resumap.png";
import Zentry from "@/public/zentry.png";
import Polymath from "@/public/polymath.jpg";
import Wardrobe from "@/public/wardrobe.jpg";
import VaultSneak from "@/public/vaultsneaks.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fronted Developer",
    location: "Innovative Widget",
    description:
      "I'm now a Frontent Developer working at Innovative Widget. My stack includes HTML, CSS, JavaScript,Bootstrap, PHP, Wordpress. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Oct-2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "VaultSneaks",
    description:
      "I created a website named VaultSneaks, a sneaker e-commerce platform using Next.js and Tailwind CSS with dynamic features.",
    tags: ["Next JS", "Tailwind", "Typescript", "Sanity", "Sanity Typegen"],
    imageUrl: VaultSneak,
    link: "https://wardrobee.vercel.app/",
  },
  {
    title: "Wardrobe",
    description:
      "I created an Ecommerce website Ui using third party api where user can add product to cart, view product details, add to wishlist.",
    tags: ["Next JS", "Tailwind", "Typescript", "Gsap", "FakeStoreAPi"],
    imageUrl: Wardrobe,
    link: "https://wardrobee.vercel.app/",
  },
  {
    title: "Zentry",
    description:
      "I clone a Zentry Website using Gsap.",
    tags: ["Next JS", "Tailwind", "Typescript", "Gsap"],
    imageUrl: Zentry,
    link: "https://zentry-clonee.vercel.app/",
  },
  {
    title: "Polymath",
    description:
      "I created a Blog Website Ui where user can read blogs, like, share, add reviews on blog.",
    tags: ["Next JS", "Tailwind", "Typescript",],
    imageUrl: Polymath,
    link: "https://polymath-pro.vercel.app/",
  },
  {
    title: "ResuMap",
    description:
      "I created a Resume builder where users can build their resume also change theme.",
    tags: ["HTML", "CSS", "Typescript", "Javascript", "HTML2Canvas"],
    imageUrl: ResuMap,
    link: "https://resumap.vercel.app/",
  },
  {
    title: "Apple Iphone 15",
    description:
      "I created an animated website for Apple Iphone 15.",
    tags: ["Next.js", "Tailwind", "Typescript", "React", "GSAP", "React Three Tiber"],
    imageUrl: AppleIphone,
    link: "https://apple-iphone-pro.vercel.app/",
  },
  {
    title: "AI SEO",
    description:
      "I created an AI SEO website. It is built using Next.js, Tailwind CSS. It is hosted on Vercel.",
    tags: ["React", "Tailwind", "Typescript", "Next.js", "Framer Motion"],
    imageUrl: AiSEO,
    link: "https://ai-seo-ruby.vercel.app/",
  },
  {
    title: "Mosum Widget",
    description:
      "I created a Weather search widget using \"weatherapi\". It is built using Next.js, Tailwind CSS and Firebase. It is hosted on Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: Mosam,
    link: "https://mosum-widget.vercel.app/",
  },
  {
    title: "Next.js Mini Project",
    description:
      "I created a Weather search widget using \"weatherapi\". It is built using Next.js, Tailwind CSS and Firebase. It is hosted on Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Shadcn Ui", "Framer Motion", "Vercel"],
    imageUrl: NextJsMini,
    link: "https://nextjs-mini-project-omega.vercel.app/",
  },
  {
    title: "Snap Peak",
    description:
      "I created a Snap Peak website using Unsplash API. It is image gallery which is search image view and download.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    imageUrl: SnapPeak,
    link: "https://snap-peak.vercel.app/",
  },
  {
    title: "MetaMagine",
    description:
      "I created an interactive landing page named MetaMagine. It has user friendly UI with a lot of transition.",
      tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    imageUrl: Metamagine,
    link: "https://metamagine.atwebpages.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "PHP",
  "My SQL",
  "Wordpress",
  "Tailwind CSS",
  "Bootstrap",
  "Ajax",
  "Framer Motion",
  "Gsap",
] as const;
