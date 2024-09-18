import author1 from "@/assets/author1.png";
import author2 from "@/assets/author2.png";
import author3 from "@/assets/author3.png";
import author4 from "@/assets/author4.png";
import author5 from "@/assets/author5.png";
import author6 from "@/assets/author6.png";
import author7 from "@/assets/author7.png";
import author8 from "@/assets/author8.png";
import businessIcon from "@/assets/business.svg";
import economyIcon from "@/assets/economy.svg";
import logo1 from "@/assets/Featured in.svg";
import johnMockedImg from "@/assets/JohnsMockedImg.png";
import logo2 from "@/assets/Logo 1.svg";
import logo3 from "@/assets/Logo 3.svg";
import logo4 from "@/assets/Logo 4.svg";
import logo5 from "@/assets/Logo 5.svg";
import mockedImg from "@/assets/postImg.png";
import reviewerPhoto from "@/assets/reviewer.png";
import startUpIcon from "@/assets/startUp.svg";
import techIcon from "@/assets/tech.svg";
import { Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import { Review } from "@/interfaces/review";

const ROUTES = {
  home: "/",
  blog: "/blog",
  blogPost: "/blog/",
  aboutUs: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy",
  categories: "/categories",
  authors: "/authors",
  author: "/authors/",
  category: "/categories/",
};

export const getRoute = (page: keyof typeof ROUTES) => {
  return ROUTES[page];
};

export const getCategoryImg = (category: string) => {
  return CATEGORY.find(({ title }) => title === category)?.icon;
};
const buildEnvVars = {
  EMAILJS_SECOND_TEMPLATE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_SECOND_TEMPLATE_ID,
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  EMAILJS_KEY: process.env.NEXT_PUBLIC_EMAILJS_KEY,
  EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
};

export const getBuildEnvVar = (envName: keyof typeof buildEnvVars): string => {
  return buildEnvVars[envName] as string;
};

export const HEADER_LINKS = [
  { title: "Home", link: getRoute("home") },
  { title: "Blog", link: getRoute("blog") },
  { title: "About us", link: getRoute("aboutUs") },
  { title: "Contact us", link: getRoute("contact") },
];
export const FOOTER_LINKS = [
  ...HEADER_LINKS,
  { title: "Privacy Policy", link: getRoute("privacyPolicy") },
];

export const REVIEWS: Review[] = [
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    id: "1",
    reviewer: {
      city: "New york",
      country: "USA",
      id: "1",
      name: "Jonathan Vallem",
      photo: reviewerPhoto,
    },
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    id: "2",
    reviewer: {
      city: "New york",
      country: "USA",
      id: "2",
      name: "Jonny Vallem",
      photo: reviewerPhoto,
    },
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    id: "3",
    reviewer: {
      city: "New york",
      country: "USA",
      id: "3",
      name: "Ilon Vallem",
      photo: reviewerPhoto,
    },
  },
];

export const LINKS_LIST = [logo1, logo2, logo3, logo4, logo5];

export const MOCKED_POSTS: Post[] = [
  {
    id: "1",
    author: {
      id: "10",
      about: "Content Writer @Company",
      name: "John Doe",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    date: "May 23, 2022",
    imgUrl: johnMockedImg,
    category: "Business",
    tags: ["Business", "Marketing"],
  },
  {
    id: "2",
    author: {
      id: "10",
      about: "Content Writer @Company",
      name: "John Doe",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "8 Figma design systems that you can download for free today.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    date: "Aug 23, 2021",
    imgUrl: johnMockedImg,
    category: "Business",
    tags: ["Business", "Marketing"],
  },
  {
    id: "3",
    author: {
      id: "10",
      about: "Content Writer @Company",
      name: "John Doe",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "8 Figma design systems that you can download for free today.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    date: "Aug 23, 2021",
    imgUrl: johnMockedImg,
    category: "Economy",
    tags: ["Business", "Marketing", "Life"],
  },
  {
    id: "4",
    author: {
      id: "10",
      about: "Content Writer @Company",
      name: "John Doe",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "8 Figma design systems that you can download for free today.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    date: "Aug 23, 2021",
    imgUrl: johnMockedImg,
    category: "Economy",
    tags: ["Marketing", "Life"],
  },
  {
    id: "5",
    author: {
      id: "10",
      about: "Content Writer @Company",
      name: "John Doe",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "8 Figma design systems that you can download for free today.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    date: "Aug 23, 2021",
    imgUrl: johnMockedImg,
    category: "Technology",
    tags: ["Technology", "Screen", "Life"],
  },
  {
    id: "6",
    author: {
      id: "9",
      about: "Content Writer @Company",
      name: "James West",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "Step-by-step guide to choosing great font pairs",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    date: "May 23, 2022",
    imgUrl: mockedImg,
    category: "Startup",
    tags: ["Experience", "Business"],
  },
  {
    id: "7",
    author: {
      id: "1",
      about: "Content Writer @Company",
      name: "Floyd Miles",
      photo: author1,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "The Ultimate Guide to Remote Work",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "Jul 12, 2023",
    imgUrl: mockedImg,
    category: "Technology",
    tags: ["Experience", "Business"],
  },
  {
    id: "8",
    author: {
      id: "2",
      about: "Content Writer @Company",
      name: "Dianne Russell",
      photo: author2,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "How to Build a Startup in 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    date: "Jan 20, 2024",
    imgUrl: johnMockedImg,
    category: "Startup",
    tags: ["Experience", "Business", "Life"],
  },
  {
    id: "9",
    author: {
      id: "3",
      about: "Content Writer @Company",
      name: "Jenny Wilson",
      photo: author3,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "10 Best Business Strategies for 2024",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Mar 5, 2024",
    imgUrl: mockedImg,
    category: "Business",
    tags: ["Experience", "Business", "Life"],
  },
  {
    id: "10",
    author: {
      id: "4",
      about: "Content Writer @Company",
      name: "Leslie Alexander",
      photo: author4,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "Economy Trends of 2024",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "Feb 15, 2024",
    imgUrl: mockedImg,
    category: "Economy",
    tags: ["Marketing"],
  },
  {
    id: "11",
    author: {
      id: "5",
      about: "Content Writer @Company",
      name: "Guy Hawkins",
      photo: author5,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "How to Grow Your Tech Business",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Aug 10, 2023",
    imgUrl: johnMockedImg,
    category: "Technology",
    tags: ["Experience", "Technology"],
  },
  {
    id: "12",
    author: {
      id: "6",
      about: "Content Writer @Company",
      name: "Eleanor Pena",
      photo: author6,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "How to Manage Startup Finances",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Dec 12, 2023",
    imgUrl: mockedImg,
    category: "Startup",
    tags: ["Experience", "Business", "Life"],
  },
  {
    id: "13",
    author: {
      id: "7",
      about: "Content Writer @Company",
      name: "Robert Fox",
      photo: author7,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "Mastering the Economy in 2024",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Nov 2, 2023",
    imgUrl: mockedImg,
    category: "Economy",
    tags: ["Marketing", "Life"],
  },
  {
    id: "14",
    author: {
      id: "8",
      about: "Content Writer @Company",
      name: "Jacob Jones",
      photo: author8,
      facebookLink: "https://www.facebook.com/",
      instargamLink: "https://www.instagram.com/undefined_duck/",
      linkedInLink: "https://www.linkedin.com/",
      twitterLink: "https://x.com/divineduck2",
    },
    title: "The Future of Business Strategies",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    date: "Jul 22, 2023",
    imgUrl: johnMockedImg,
    category: "Business",
    tags: ["Business", "Screen"],
  },
];

export const TAGS = [
  "Business",
  "Experience",
  "Screen",
  "Technology",
  "Marketing",
  "Life",
  "",
  "All",
];

export const VIDEO_URL =
  "https://www.youtube.com/embed/5uNQukWPsGM?autoplay=1&si=ut4W5v43IKm3enT5";

export const MOCKED_AUTHORS: Author[] = [
  {
    id: "1",
    about: "Content Writer @Company",
    name: "Floyd Miles",
    photo: author1,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "2",
    about: "Content Writer @Company",
    name: "Dianne Russell",
    photo: author2,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "3",
    about: "Content Writer @Company",
    name: "Jenny Wilson",
    photo: author3,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "4",
    about: "Content Writer @Company",
    name: "Leslie Alexander",
    photo: author4,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "5",
    about: "Content Writer @Company",
    name: "Guy Hawkins",
    photo: author5,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "6",
    about: "Content Writer @Company",
    name: "Eleanor Pena",
    photo: author6,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "7",
    about: "Content Writer @Company",
    name: "Robert Fox",
    photo: author7,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "8",
    about: "Content Writer @Company",
    name: "Jacob Jones",
    photo: author8,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "9",
    about: "Content Writer @Company",
    name: "James West",
    photo: author8,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
  {
    id: "10",
    about: "Content Writer @Company",
    name: "John Doe",
    photo: author8,
    facebookLink: "https://www.facebook.com/",
    instargamLink: "https://www.instagram.com/undefined_duck/",
    linkedInLink: "https://www.linkedin.com/",
    twitterLink: "https://x.com/divineduck2",
  },
];

export const CATEGORY: Category[] = [
  {
    icon: businessIcon,
    title: "Business",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    icon: startUpIcon,
    title: "Startup",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    icon: economyIcon,
    title: "Economy",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    icon: techIcon,
    title: "Technology",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

export const RANDOM_CHANCE = 0.5;
export const MAX_RECOMMENDED_POSTS = 3;
export const MAX_HOME_POSTS = 5;

export const ABOUT_US_INFO = [
  { info: "Blogs Published", value: "12+" },
  { info: "Views on Finsweet", value: "18K+" },
  { info: "Total active Users", value: "30K+" },
];
