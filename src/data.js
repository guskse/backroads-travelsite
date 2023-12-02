import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    img: tour1,
    date: "august 26th of 2023",
    title: "Tibet Adventure",
    text: "Lorem ispum dollor ipsu met superioris amort a nimicus adipscing elit. Asperiores Aposterioris.",
    country: "china",
    days: "6",
    price: "2100",
    id: 1,
  },
  {
    img: tour3,
    date: "30 July of 2023",
    title: "Oklahoma City Thunder",
    text: "Lorem ispum dollor ipsu met superioris amort a nimicus adipscing elit. Asperiores Aposterioris.",
    country: "EUA",
    days: "12",
    price: "4500",
    id: 2,
  },
  {
    img: tour2,
    date: "February 15th of 2025",
    title: "Kangaroo Hunt",
    text: "Lorem ispum dollor ipsu met superioris amort a nimicus adipscing elit. Asperiores Aposterioris.",
    country: "Australia",
    days: "26",
    price: "2360",
    id: 3,
  },
  {
    img: tour4,
    date: "august 1st of 2023",
    title: "Africa Safari",
    text: "Lorem ispum dollor ipsu met superioris amort a nimicus adipscing elit. Asperiores Aposterioris.",
    country: "Africa",
    days: "3",
    price: "9500",
    id: 4,
  },
  {
    img: tour5,
    date: "December 3rd",
    title: "Zebra Zoo",
    text: "Lorem ispum dollor ipsu met superioris amort a nimicus adipscing elit. Asperiores Aposterioris.",
    country: "Africa",
    days: 1,
    price: "7500",
    id: 5,
  },
];
