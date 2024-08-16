import type { LayoutLoad } from './$types';
import type { BlogData } from '$lib/types';
import { base } from '$app/paths';

const blogs: BlogData[] = [
    {
        title: 'ICPR 2024 Paper',
        description: 'Todo',
        image: `<img src="${base}/images/dfed.png" />`,
        tags: ["OpenGL", "C++", "CMake"],
        links: [],
        repo: `${base}/blogs/first`,
        created_at: new Date(2022, 10, 10),
        id: 0,
    },
    {
        title: 'MapMyIndia Hackathon',
        description: 'Todo',
        image: '<img src="https://repository-images.githubusercontent.com/163664171/79a24eb9-077c-48a1-9caa-41fcf7e1db1c" />',
        tags: ["Flutter", "Flask", "Tensorflow"],
        links: [],
        repo: `${base}/blogs/first`,
        created_at: new Date(2022, 10, 10),
        id: 0,
    },
    {
        title: 'OpenGL Workshop',
        description: 'Todo',
        image: `<img src="${base}/images/out.png" />`,
        tags: ["OpenGL", "C++"],
        links: [],
        repo: `${base}/blogs/first`,
        created_at: new Date(2022, 10, 10),
        id: 1,
    },
];

export const load: LayoutLoad = async () => {
    let timelineData = blogs.toSorted((a, b) =>
        b.created_at.getTime() - a.created_at.getTime()
    );
    return { blogs, timelineData };
};