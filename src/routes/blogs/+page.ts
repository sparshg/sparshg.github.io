import type { PageLoad } from './$types';
import type { BlogData } from '$lib/types';

const blogs: BlogData[] = [
    {
        title: 'MapMyIndia Hackathon',
        description: 'How we won mapmuadad',
        image: '<img src="https://repository-images.githubusercontent.com/163664171/79a24eb9-077c-48a1-9caa-41fcf7e1db1c" />',
        tags: ["Flutter", "Flask", "Python"],
        links: [],
        repo: undefined,
        created_at: new Date(2022, 10, 10),
        id: 0,
    },
];

export const load: PageLoad = (() => {
    let timelineData = blogs.toSorted((a, b) =>
        b.created_at.getTime() - a.created_at.getTime()
    );
    return { blogs, timelineData };
});