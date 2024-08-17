
export type ProjectData = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: { platform: Platform, link: string }[];
    repo: string | undefined;
    stars: number | undefined;
    created_at: Date | undefined;
};

export type ExperienceData = {
    id: number;
    title: string;
    description: string;
    image: string;
    links: { platform: Platform, link: string }[];
    tags: string[];
    repo: string | undefined;
    from: Date;
    to: Date;
};

export type BlogData = {
    id: number;
    title: string;
    repo: string | undefined
    description: string;
    image: string;
    tags: string[];
    links: { platform: Platform, link: string }[];
    created_at: Date;
};

export type Social = {
    icon: IconType;
    link: string;
};

export type Platform = 'Web' | 'PlayStore' | 'Youtube' | 'Itch' | 'GitHub' | string;
export type IconType = 'link' | 'star' | 'star-filled' | 'youtube' | 'playstore' | 'itch' | 'sun' | 'moon' | 'github' | 'linkedin' | 'email';
