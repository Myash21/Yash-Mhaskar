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
    "Currently in my Third Year of my Artificial Intelligence & Data Science Degree @ DYPCOE, Akurdi. I love working with data and creating innovative solutions through data analysis, machine learning, and AI to solve complex problems and drive technological advancements.",
  avatarUrl: "/",
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
      href: "https://github.com/Myash21/My-Resume/blob/main/Yash%20Mhaskar%20Resume.pdf",
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
        url: "https://github.com/Myash21",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/yash-mhaskar-4bb181284",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Myash2004",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
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
      school: "Fergusson College",
      href: "https://www.fergusson.edu/departments/juniorcollege",
      degree: "Junior College",
      logoUrl: "/buildspace.jpg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Dr. Sarvepalli Radhakrishnan Vidyalaya",
      href: "https://www.dsrvmalad.org/",
      degree: "High School",
      logoUrl: "/buildspace.jpg",
      start: "2009",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Agrimate",
      href: "https://aaryanpalve5.github.io/agrimate/",
      dates: "Jun 2024",
      active: true,
      description:
        "Agrimate is an AI assistant for agriculture developed as collaborative project, it utilises time series and machine learning techniques for rainfall prediction and crop disease management as well as a deep learning model trained to correctly classify and predict 4 types of rice diseases from their images. Also contains user authentication system using Flask.",
      technologies: [
        "Python",
        "Pytorch",
        "ARIMA",
        "Flask",
        "Streamlit",
        "Github Actions",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Myash21/Agrimate",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Live",
          href: "https://aaryanpalve5.github.io/agrimate/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Screenshot 2024-06-09 063030.png",
    },
    {
      title: "RicePathBot",
      href: "https://github.com/Myash21/Agri-mate.github.io",
      dates: "August 2024 - Present",
      active: true,
      description: "Taking inspiration from the project Agrimate, added features such as chatbot made by fine-tuning an LLM on large amounts of data collected from different sources regarding various types of crop disease espescially for rice as well as creating a Retrieval-Augmented Generation model to extract important information about various government policies related to agriculture. Work in progess...",
      technologies: [
        "Python",
        "Flask",
        "Gradio",
        "NLTK",
        "Langchain",
        "Ollama",
        "Github Actions",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Myash21/Agri-mate.github.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.avif",
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
      image: "/Screenshot 2024-09-15 095234.png",
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
