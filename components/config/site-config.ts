export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "4x4";
export type GridItemType = "social" | "equipment" | "mentor" | "project" | "experience" | "skills"
export type EquipmentItem = {
    title: string;
    link: string;
}



export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string
    buttonSecondaryText?: string
    /* Mentor */
    promotion?: string
    price?: string
    oldPrice?: string
    /* Project */
    stars?: number
    /* Equipments */
    equipments?: EquipmentItem[]
    image?: string
}

const GridItems: GridItemInterface[] = [
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "LinkedIn",
    //     icon: "linkedin",
    //     username: "michel-fawaz",
    //     description:
    //         "Connect with me on LinkedIn to explore my professional journey and stay updated on my latest achievements and projects showcased in my portfolio website.",
    //     color: "#0077b5",
    //     buttonTitle: "Connect With me!",
    //     buttonLink: "https://www.linkedin.com/in/michel-fawaz/",
    //     // buttonSecondaryText: "1.1K",
    // },
    {
        layout: "2x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@Morpheus",
        buttonTitle: "Follow Me!",
        buttonSecondaryText: "",
        buttonLink: "https://github.com/Muzych",
        color: "#070707",
        description:
            "Click on me to view my open-source projects!",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Twitter",
        icon: "twitter",
        username: "@muzych",
        buttonTitle: "Follow",
        buttonLink: "https://twitter.com/1Haxk4541",
        buttonSecondaryText: "5",
        color: "#1DA1F2",
        description:
            "Just A Normal Person. Follow Me on Twitter!",
    },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Resume",
    //     icon: "resume",
    //     username: "",
    //     buttonTitle: "Download",
    //     buttonLink: "https://utfs.io/f/f3db2131-47fe-47f2-a80b-6fa0bbea97a9-8a3mok.pdf",
    //     buttonSecondaryText: "",
    //     color: "#070707",
    //     description:
    //         "Download My resume!",
    // },
    {
        layout: "2x2",
        type: "social",
        title: "Telegram",
        icon: "telegram",
        username: "@Muzych",
        buttonTitle: "Chat With Me!",
        buttonLink: "https://t.me/Muzy_ch",
        buttonSecondaryText: "",
        color: "#070707",
        description: "Chat with me anytime!",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Mastodon",
        icon: "mastodon",
        username: "@Muzych",
        buttonTitle: "Chat With Me!",
        buttonLink: "https://t.me/Muzy_ch",
        buttonSecondaryText: "",
        color: "#070707",
        description: "Chat with me anytime!",
    },
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Calendly",
    //     icon: "calendly",
    //     username: "",
    //     description:
    //         "Book a 30 min Call with me",
    //     color: "#070707",
    //     buttonTitle: "Schedule",
    //     buttonLink: "https://calendly.com/michelfawaz/30min",
    //     // buttonSecondaryText: "1.1K",
    // },
    {
        layout: "2x1",
        type: "project",
        title: "Sign in with Ethereum",
        icon: "github",
        color: "#070707",
        buttonLink: "https://github.com/michelfawazz/SIWE-NextJs-Nestjs",
        stars: 1,
    },
    {
        layout: "2x1",
        type: "project",
        title: "NestJS JWT Auth template",
        icon: "github",
        color: "#070707",
        stars: 2,

        buttonLink: "https://github.com/michelfawazz/NestJS-Jwt-AUTH-arangodb",
    }
];

const GridItemsLower: GridItemInterface[] = [
 {
        layout: "1x2",
        type: "social",
        title: "InfinityTools",
        username: "",
        description:
            "A collection of AI tools",
        icon: "next",
        buttonTitle: "Coming Soon!",
        buttonSecondaryText: "",
        buttonLink:
            "/",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Restaurant Web3 Membership System NFT ",
        username: "Le Vesuvio",
        description:
            "NFT collection and membership website made for Le Vesuvio restaurant.",
        icon: "next",
        buttonTitle: "View Project",
        buttonSecondaryText: "",
        buttonLink:
            "https://vesuv.io/",
    },
    {
        layout: "1x2",
        type: "social",
        title: "AI Agency",
        username: "",
        description:
            "Generate Ai employees that you can Chat with!",
        icon: "next",
        buttonTitle: "Coming Soon!",
        buttonSecondaryText: "",
        buttonLink:
            "/",
    },
    {
        layout: "2x1",
        type: "project",
        title: "KnowledgeBase Chat AI Saas ",
        icon: "github",
        stars: 1,
        color: "#070707",
        buttonLink: "https://github.com/",
    }
    ,{
        layout: "2x2",
        type: "social",
        title: "AktionT4 NFT Collection & Backend",
        username: "",
        description:
            "Aktion T4 Blockchain and Backend Development",
        icon: "ethereum",
        buttonTitle: "View Project",
        buttonSecondaryText: "",
        buttonLink:
            "https://aktionT4.com",
    },
    {
        layout: "1x2",
        type: "social",
        title: "NFT GAME 1024",
        username: "",
        description:
            "Smart Contract and Website development of 1024 Blockchain Game",
        icon: "ethereum",
        buttonTitle: "View Project",
        buttonSecondaryText: "",
        buttonLink:
            "1024-landingpage-tan.vercel.app",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Priority Queue Management System",
        username: "QueueUp",
        description:
            "Priority Queue management system built with django",
        icon: "django",
        buttonTitle: "View Project",
        buttonSecondaryText: "",
        buttonLink:
            "https://github.com/michelfawazz/QueueUp",
    },
    {
        layout: "2x1",
        type: "project",
        title: "Portfolio Website Source Code",
        icon: "github",
        stars: 1,
        color: "#070707",
        buttonLink: "https://github.com/michelfawazz/Portfolio-Bento-style",
    }
];

export const siteConfig = {
    creator: "Muzych",
    title: "Indie Hacker",
    bio: "Software Engineer | Full Stack Developer | Computer Graphics | Artist | Poet |",
    location: "China",
    locationLink: "",
    email: "haxk1024@gmail.com",
    items: GridItems,
    itemsLower: GridItemsLower,
} as const