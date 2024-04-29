import type { PageLoad } from './$types';

export type ProjectData = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: { platform: Platform, link: string }[];
    repo: string;
    stars: number | undefined;
    created_at: Date | undefined;
};

export type Platform = 'Web' | 'PlayStore' | 'AppStore' | 'Win' | 'Mac' | 'Linux' | 'Youtube' | 'Itch' | 'Android';

const projects: ProjectData[] = [
    {
        title: 'Asteroids Genetic',
        description:
            'Interactive AI training simulation that uses <u>neural networks</u> and <u>genetic algorithm</u> to learn playing the arcade asteroids game. Everything, including the game and neural networks are implemented from scratch. Supports saving/loading the model, and also human mode to play the game.',
        image: '<img src=https://raw.githubusercontent.com/sparshg/asteroids-genetic/main/assets/demo.png />',
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
        stars: undefined,
        created_at: undefined,
    },
    {
        title: "PID Controller Simulation",
        description: "PID controller simulation with many adjustable parameters and real-time graph plotting. Physics engine implemented from scratch with Range-Kutta 4 integration.",
        repo: 'https://github.com/sparshg/pid-balancer',
        image: '<img src=https://github.com/sparshg/pid-balancer/assets/43041139/0f4e9d4b-115e-437e-82c4-6cbdcc593822 />',
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
        stars: undefined,
        created_at: undefined,
    },
    {
        title: "BITS Wi-Fi Login",
        description: "An app that allows you to login to captive portal of BITS (Pilani, Goa, Hyderabad) campus Wi-Fi without requiring you to sign-in manually.",
        repo: 'https://github.com/sparshg/wifi-login',
        image: '<img src=https://raw.githubusercontent.com/sparshg/wifi-login/main/demo/icon.png class="w-3/5" />',
        tags: ['Kotlin', 'Jetpack Compose'],
        links: [
            {
                platform: 'PlayStore',
                link: 'https://play.google.com/store/apps/details?id=dev.sparshg.bitslogin',
            },
            {
                platform: 'Android',
                link: 'https://play.google.com/store/apps/details?id=dev.sparshg.bitslogin',
            },
        ],
        stars: undefined,
        created_at: undefined,
    },
    {
        title: "Fuzzy Controller",
        description: "A fuzzy controller that uses <u>Mamdani Fuzzy inference</u> system to control a drone, simulated using my physics engine. The drone has 2 thrusters controlled by 2 fuzzy controllers which analyze the current state of the system and output the required thrust for each thruster. Read more in repository's README.",
        repo: 'https://github.com/sparshg/fuzzy-controller',
        image: '<img src=https://github.com/sparshg/fuzzy-controller/assets/43041139/9cff3b79-e547-4152-8add-93db8e69804b />',
        tags: ['Rust', 'WASM'],
        links: [
            {
                platform: 'Web',
                link: 'https://sparshg.github.io/fuzzy-controller/',
            },
        ],
        stars: undefined,
        created_at: undefined,
    },
    {
        title: "The Block Game",
        description: "A simple block game where you have to stack the blocks as high as possible. The game has a leaderboard and a global highscore system.",
        repo: 'https://github.com/sparshg/block-game',
        image: '<img src=https://github.com/sparshg/block-game/assets/43041139/c01e39c0-d5d2-4c4a-b132-6fffcebeed89 />',
        tags: ['Unity', 'C#', 'ShaderLab'],
        links: [
            {
                platform: 'Itch',
                link: 'https://sparshg.itch.io/the-block-game',
            },
            {
                platform: 'Win',
                link: 'https://sparshg.itch.io/the-block-game',
            },
            {
                platform: 'Mac',
                link: 'https://sparshg.itch.io/the-block-game',
            },
        ],
        stars: undefined,
        created_at: undefined,
    },
    {
        title: "Tic-Tac-Toe",
        description: "The classic Tic Tac Toe game. You can play in two player mode or with AI at 4 difficulty levels, including impossible mode. The AI uses <u>minimax algorithm</u> with <u>alpha-beta pruning</u> to make decisions.",
        repo: 'https://github.com/sparshg/tictactoe',
        image: '<img src=https://play-lh.googleusercontent.com/UVdZNGAdZ2eiPjYVg6Iwh6Hyn7S6gH9LsCxOhEXRz44Opl-xqKJOafTY1I8GFKwHDw=w1280-h720-rw />',
        tags: ['Flutter'],
        links: [
            {
                platform: 'PlayStore',
                link: 'https://play.google.com/store/apps/details?id=dev.sparshg.tictactoe',
            },
            {
                platform: 'Android',
                link: 'https://play.google.com/store/apps/details?id=dev.sparshg.tictactoe',
            },
        ],
        stars: undefined,
        created_at: undefined,
    },
];

export const load = (async ({ fetch, setHeaders }) => {

    setHeaders({ age: '600', 'cache-control': 'public, max-age=600' });

    if (projects[0].created_at === undefined) {
        for (let project of projects) {
            let repo = project.repo.split('/').slice(-2).join('/');
            // let res = await fetch(`https://api.github.com/repos/${repo}`);
            // let data = await res.json();
            // project.stars = data.stargazers_count;
            // project.created_at = new Date(parseInt(data.created_at.slice(0, 4)), parseInt(data.created_at.slice(5, 7)) - 1, parseInt(data.created_at.slice(8, 10)));
            project.stars = 0;
            project.created_at = new Date("2022-01-01");
        }
    }

    return { projects };
}) satisfies PageLoad;