import portfolioImg from "../assets/portfolio.png";
import travelpediaImg from "../assets/onlinetravelpedia.png";
import foodDeliveryImg from "../assets/food-delivery.png";
import investmentImg from "../assets/investment.png";
import ecomImg from "../assets/e-comm.png";
import youtubeImg from "../assets/youtube.png";
import weatherImg from "../assets/weather.jpeg";

export const skills = [
  "React.js",
  "Next.js",
  "Redux",
  "Javascript(ES6+)",
  "HTML5/CSS",
  "State Management",
  "Responsive Design",
  "RESTful APIs",
  "Firebase",
  "React Router",
  "Version Control/git",
  "Web Performance Optimization",
  "Testing",
  "Build Tools",
];

export const projects = [
  {
    title: "My Portfolio",
    subtitle: "React Hooks",
    description:
      " Portfolio is a sleek and modern web application built using React.js, designed to showcase my skills, projects, and achievements in an engaging and user-friendly manner.",
    image: portfolioImg,
    link: "https://github.com/ankit0698/Ankit-portfolio",
  },
  {
    title: "Travel Blogger's Website",
    subtitle: "NextJs and Firebase",
    description:
      "Online Travel Pedia: A dynamic travel blog website built with Next.js and Firebase, offering a comprehensive platform for exploring destinations, sharing travel experiences, and discovering insider tips and recommendations",
    image: travelpediaImg,
    link: "https://onlinetravelpedia.netlify.app/",
  },
  {
    title: "Dummy E-commerce",
    subtitle: "React Router and redux toolkit",
    description:
      "An E-commerce app built using React Router and Redux Toolkit, where we can add products in the cart also increase and decrease it's quantity ",
    image: ecomImg,
    link: "https://github.com/ankit0698/fake-e-comm",
  },
  {
    title: "Weather Forecasting App",
    subtitle: "React hooks and weather API",
    description:
      "A weather app built using React hooks and the OpenWeather API is a web application that provides users with real-time weather information for a specified location.",
    image: weatherImg,
    link: "https://salmon-adrian-51.tiiny.site",
  },
  {
    title: "YouTube Clone App",
    subtitle: "React, Redux and Routing",
    description:
      "A YouTube clone app built using React is a web application that replicates the core functionalities and user interface of the popular video-sharing platform, YouTube.",
    image: youtubeImg,
    link: "https://github.com/ankit0698/YoutubeClone",
  },
  {
    title: "Food Delivery App",
    subtitle: "React and contextAPI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: foodDeliveryImg,
    link: "https://github.com/ankit0698/Food-delivery-app",
  },

  {
    title: "Investment Calculator App",
    subtitle: "React Hooks",
    description:
      "An investment calculator app built using React is a web application designed to help users estimate the future value of their investments based on various parameters.",
    image: investmentImg,
    link: "https://github.com/ankit0698/Investment-calculator-app",
  },
];
