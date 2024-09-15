import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Mhaskar",
  initials: "YM",
  url: "https://www.linkedin.com/in/yash-mhaskar-4bb181284/",
  location: "Pune, India 🇮🇳",
  locationLink: "https://maps.app.goo.gl/8YTbFE2iRWybqwhr9",
  description: "Python Developer & Data Analyst",
  summary:
    "Currently in my Third Year of my Artificial Intelligence & Data Science Degree @ DYPCOE, Akurdi",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "DSA",
    "Sqlite3",
    "Django",
    "FastAPI",
    "Langchain",
    "Git",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://github.com/capybara-brain346/my-resume/blob/main/Piyush%20Choudhari%20Resume.pdf",
      icon: NotebookIcon,
      label: "Resume",
    },
  ],
  contact: {
    email: "myash100@gmail.com",
    tel: "+91 7718875530",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/capybara-brain346",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piyush-choudhari",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/PiyushChou56092",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "D.Y.Patil College of Engineering, Akurdi",
      href: "http://www.dypcoeakurdi.ac.in/",
      degree: "Bachelor's Degree of Artificial Intelligence & Data Science",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "Present",
    },
    {
      school: "Elpro International School",
      href: "https://elproschools.edu.in/",
      degree: "High School",
      logoUrl: "/buildspace.jpg",
      start: "2012",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "RecycleNet18",
      href: "https://github.com/capybara-brain346/RecycleNet18",
      dates: "Jun 2024",
      active: true,
      description:
        "RecycleNet is a deep learning-based project designed to classify images of recyclable items into 30 distinct categories. Alongside the classification model, a chatbot is integrated to assist users in understanding how to recycle the identified items properly. The goal is to promote effective recycling practices and reduce environmental waste.",
      technologies: [
        "Python",
        "Pytorch",
        "Langchain",
        "Ollama - Llama2-7B",
        "Streamlit",
        "Github Actions",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/capybara-brain346/RecycleNet18",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/recyclenet.png",
    },
    {
      title: "Pokedex API",
      href: "https://github.com/capybara-brain346/pokedex-api",
      dates: "August 2024 - Present",
      active: true,
      description: "A Restful api for retrieving data regarding pokemons.",
      technologies: [
        "Python",
        "FastAPI",
        "Sqlite3",
        "SQL",
        "Postman",
        "Githun Actions",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/capybara-brain346/pokedex-api",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pysduck.jpg",
    },
    {
      title: "Intel AI Students Club Website",
      href: "https://iasc-web2.vercel.app/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Developed and currently maintaining the official website for the Intel AI Students Club",
      technologies: [
        "Python",
        "Django",
        "TailwindCSS",
        "FlowbiteCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Live",
          href: "https://iasc-web2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/iasc_website.png",
    },
    {
      title: "Mopi",
      href: "https://github.com/capybara-brain346/mopi",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "A Restful api developed to retrieve information about various movies. Written in GoLang",
      technologies: ["Go", "Sqlite3", "go-chi"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/capybara-brain346/mopi",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/brucelee.jpg",
    },
  ],
  hackathons: [
    {
      title: "VU Visionary Hackathon",
      dates: "Feb 8th, 2024",
      location: "Pune, India",
      description:
        "Developed a Deep Learning model to classify lung cancer CT-Scans. Achieved 4th Rank.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;