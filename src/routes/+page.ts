import type { PageLoad } from './$types';
import type { ProjectData } from '$lib/types';
import { base } from '$app/paths';

const projects: ProjectData[] = [
    {
        title: 'Asteroids Genetic',
        description: 'Interactive AI training simulation that uses <u>neural networks</u> and <u>genetic algorithm</u> to learn playing the arcade asteroids game. Everything, including the game and neural networks are implemented from scratch. Supports saving/loading the model, and also human mode to play the game.',
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
        id: 0
    },
    {
        title: "PID Controller",
        description: "A PID controller simulation with many adjustable parameters and real-time graph plotting. Physics engine implemented from scratch with Range-Kutta 4 integration.",
        repo: 'https://github.com/sparshg/pid-balancer',
        image: '<img src=https://github.com/user-attachments/assets/7dae2fd2-5dac-48cd-b440-f2f13524ac41 />',
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
        id: 1
    },
    {
        title: "Battleship Multiplayer",
        description: "A multiplayer battleship game implemented with <u>WebSockets</u> for real-time communication. Supports multiple rooms, session retention on refresh. Dockerized and deployed, fully scalable.",
        repo: 'https://github.com/sparshg/battleship',
        image: '<img src=https://github.com/sparshg/battleship/blob/main/demo/1.png?raw=true />',
        tags: ['Typescript', 'Rust', 'WebSockets', 'Docker', 'Postgres', 'Svelte'],
        links: [
            {
                platform: 'Web',
                link: 'https://sparshg.github.io/battleship/',
            },
        ],
        stars: undefined,
        created_at: undefined,
        id: 2
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
        id: 3
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
        id: 4
    },
    {
        title: 'Stock Market Simulator',
        description: "App made for college's annual tech fest to simulate real scenarios of stock market. Provides interface to buy and sell the stocks, news section for updates, leaderboard, and wallet to redeem the points collected.",
        repo: 'https://play.google.com/store/apps/details?id=com.cc.sms_2023_cc',
        tags: ['Flutter', 'Firebase', 'WebSockets'],
        links: [
            {
                platform: 'PlayStore',
                link: 'https://play.google.com/store/apps/details?id=com.cc.sms_2023_cc',
            }
        ],
        id: 5,
        image: `<img src=${base}/images/sms.png />`,
        stars: undefined,
        created_at: new Date(2024, 1, 18),
    },
    {
        title: "The Block Game",
        description: "A unique game where your cube can topple around the big cube, but be careful, the floor explodes! Collect all the lucky blocks or play with a friend in split screen mode.",
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
        id: 6
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
        id: 7
    },
];
export const load: PageLoad = async ({ fetch, setHeaders }) => {

    // setHeaders({ age: '600', 'cache-control': 'public, max-age=600' });

    if (projects[0].created_at === undefined) {
        for (let project of projects) {
            if (!project.repo || !project.repo.startsWith('https://github.com/')) continue;
            let repo = project.repo.split('/').slice(-2).join('/');
            let res = await fetch(`https://api.github.com/repos/${repo}`);
            let data = await res.json();
            if (!import.meta.env.DEV) {
                project.stars = data.stargazers_count;
                project.created_at = new Date(parseInt(data.created_at.slice(0, 4)), parseInt(data.created_at.slice(5, 7)) - 1, parseInt(data.created_at.slice(8, 10)));
            } else {
                project.stars = 0;
                project.created_at = new Date("2022-01-01");
            }
        }
    }

    let timelineData = projects.toSorted((a, b) =>
        b.created_at!.getTime() - a.created_at!.getTime()
    );

    return { projects, timelineData };
}