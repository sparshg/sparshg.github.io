import type { PageLoad } from './$types';

export type ProjectData = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: { platform: Platform, link: string }[];
    repo: string;
    stars: number;
};

export type Platform = 'Web' | 'PlayStore' | 'AppStore' | 'Win' | 'Mac' | 'Linux' | 'Youtube';

export const load = (async ({ fetch }) => {
    let projects: ProjectData[] = [
        {
            title: 'Asteroids Genetic',
            description:
                'Interactive AI training simulation that uses <u>neural networks</u> and <u>genetic algorithm</u> to learn playing the arcade asteroids game. Everything, including the game and neural networks are implemented from scratch. Supports saving/loading the model, and also human mode to play the game.',
            image: 'https://raw.githubusercontent.com/sparshg/asteroids-genetic/main/assets/demo.png',
            repo: 'https://github.com/sparshg/asteroids-genetic',
            tags: ['Rust', 'WASM'],
            links: [
                {
                    platform: 'Web',
                    link: 'https://sparshg.github.io/asteroids-genetic/',
                },
                {
                    platform: 'Win',
                    link: 'https://github.com/sparshg/asteroids-genetic/releases'
                },
                {
                    platform: 'Linux',
                    link: 'https://github.com/sparshg/asteroids-genetic/releases'
                },
                {
                    platform: 'Mac',
                    link: 'https://github.com/sparshg/asteroids-genetic/releases'
                },
                {
                    platform: 'Youtube',
                    link: 'https://www.youtube.com/watch?v=cZny7WxmmqU'
                },
            ],
            stars: await fetch('https://api.github.com/repos/sparshg/asteroids-genetic').then(res => res.json()).then(data => data.stargazers_count)
        },
        {
            title: "PID Controller Simulation",
            description: "PID controller simulation with many adjustable parameters and real-time graph plotting. Physics engine implemented from scratch with Range-Kutta 4 integration.",
            repo: 'https://github.com/sparshg/pid-balancer',
            image: 'https://github.com/sparshg/pid-balancer/assets/43041139/0f4e9d4b-115e-437e-82c4-6cbdcc593822',
            tags: ['Rust', 'WASM'],
            links: [
                {
                    platform: 'Web',
                    link: 'https://sparshg.github.io/pid-balancer/',
                },
                {
                    platform: 'Win',
                    link: 'https://github.com/sparshg/pid-balancer/releases'
                },
                {
                    platform: 'Mac',
                    link: 'https://github.com/sparshg/pid-balancer/releases'
                },
                {
                    platform: 'Youtube',
                    link: 'https://www.youtube.com/watch?v=X5a01Xow_FY'
                }
            ],
            stars: await fetch('https://api.github.com/repos/sparshg/pid-balancer').then(res => res.json()).then(data => data.stargazers_count)
        },
        {
            title: "Fuzzy Controller",
            description: "PID controller simulation with many adjustable parameters and real-time graph plotting. Physics engine implemented from scratch with Range-Kutta 4 integration.",
            repo: 'https://github.com/sparshg/fuzzy-controller',
            image: 'https://github.com/sparshg/fuzzy-controller/assets/43041139/9cff3b79-e547-4152-8add-93db8e69804b',
            tags: ['Rust', 'WASM'],
            links: [
                {
                    platform: 'Web',
                    link: 'https://sparshg.github.io/fuzzy-controller/',
                },
            ],
            stars: await fetch('https://api.github.com/repos/sparshg/fuzzy-controller').then(res => res.json()).then(data => data.stargazers_count)
        },
    ];
    return { projects };
}) satisfies PageLoad;
