import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitIcon5,
    benefitIcon6,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    aov,
    framer,
    dropoffs,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "Research",
      url: "https://doi.org/10.22541/au.171898908.88225808/v1",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Sign In",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Get a Demo",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [aov, dropoffs];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const raccoonServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const raccoonServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice activated commands",
      text: "Raccoon will be able to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "July 2024",
      status: "progress",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Raccoon RE",
      text: "Raccoon's hyper-personalization and recommendation engine that would allow targeting specific features and offers to each individual user and create lifetime value.",
      date: "Nov 2024",
      status: "progress",
      imageUrl: roadmap3,
    },
    {
      id: "2",
      title: "Raccoon Cam",
      text: "Monitor and analyze user behavior to gain valuable insights and optimize user experiences with intelligent recommendations.",
      date: "Jan 2025",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "3",
      title: "Raccoon GUI",
      text: "Automated UI Builder that generates UI components and fit them at exactly the right place in your app uniquely for every user.",
      date: "Apr 2025",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    `Raccoon Large Action Model boasts a groundbreaking approach for autonomous actions within 
    mobile and web apps. Utilizing SDK integrations, alongside sophisticated pre-processing, and adaptive 
    augmented generation systems, RAM-1 achieves unparalleled contextual relevance, accuracy and efficiency.`;
  
  export const collabContent = [
    {
      id: "0",
      title: "See and understand apps like us humans do",
    },
    {
      id: "1",
      title: "Ability to interact and take actions on mobile and web apps",
    },
    {
      id: "2",
      title: "Understand user's behaviour in realtime",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    // {
    //   id: "0",
    //   title: "Starter",
    //   description: "AI chatbot, personalized recommendations",
    //   price: "0",
    //   features: [
    //     "Upto 20,000 MAU",
    //     "5 Task Flows",
    //     "Upto 1,000 hands-free actions",
    //     "Upto 10,000 text messages",
    //     "Upto 5 team members",
    //     "Email support",
    //   ],
    // },
    {
      id: "1",
      title: "Growth",
      description: "AI chatbot, personalized recommendations",
      price: "299",
      features: [
        "Upto 100,000 MAU",
        "Unlimited Task Flows",
        "Upto 25,000 hands-free actions",
        "Upto 75,000 text messages",
        "Upto 10 team members",
        "Email and Slack support",
      ],
    },
    {
      id: "1",
      title: "Pro",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "599",
      features: [
        "Upto 500,000 MAU",
        "Unlimited Task Flows",
        "Upto 100,000 hands-free actions",
        "Upto 250,000 text messages",
        "Upto 20 team members",
        "Dedicated CSM",
      ],
    },
    {
      id: "2",
      title: "Custom",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "Unlimited MAU",
        "Unlimited Task Flows",
        "Unlimited hands-free actions",
        "Unlimited text messages",
        "Unlimited team members",
        "Custom Contract and SLA",
      ],
    },
  ];

export const benefits = [
  {
    id: "0",
    title: "Quick Integration",
    text: "Super easy plug and play setup, which is completely no-code after integration which takes less than 4 hours of your development bandwidth.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "The AI Agent",
    text: `Raccoon can understand and use the app like humans. 
           It helps your user's with whatever they need with intelligent automated actions and convert them faster.`,
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,

  },
  {
    id: "2",
    title: "The Copilot",
    text: `Raccoon is available as a copilot on your apps. Users tell it what they need, like a shirt for 
           a date and it finds and orders the perfect shirt for them based on their prefs and past orders.`,
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Contextual Nudging",
    text: `Raccoon recognises a drop off. User removes a item from cart
           or starts going back, It asks them to reconsider and suggests more info and alternatives 
           for the current items.`,
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Beyond Support",
    text: `Raccoon can take actions, answer questions and resolve queries 90% faster than humans 
           and brings you more money by upselling while answering queries.`,
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Behaviour Tracking",
    text: `Raccoon tracks the whole user journey on the app, and provides
           actionable insights on user patterns, and suggests UX improvements and how to group cohorts.`,
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];