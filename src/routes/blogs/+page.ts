import type { PageLoad } from './$types';
import type { ExperienceData } from '$lib/types';
import { base } from '$app/paths';

const experience: ExperienceData[] = [
    {
        title: 'Wells Fargo - Intern',
        description: "Built two VSCode extensions for developers to reduce manual overhead. <u>Proxy Orchestrator</u> to automate route other extension's traffic and <u>Salesforce Diff Viewer</u> to integrate Git diff viewer with Salesforce Org.",
        image: '<img src=https://www.wellsfargo.com/assets/images/logos/wellsfargo/logo_974x1050.png class="h-44 bg-[#d61f28] w-full object-contain" />',
        repo: '',
        tags: ["Typescript"],
        links: [],
        from: new Date(2024, 5, 3),
        to: new Date(2024, 7, 26),
        id: 0
    },
    {
        title: 'Sugar Labs - Intern (GSoC 2023)',
        description: "Worked on porting of Sugar applications to <u>Flatpak</u> and updating the existing packages, for easy distribution across Linux distros, including two major applications, Pippy code editor and Physics simulator.",
        image: '<div class="flex flex-col justify-center h-56 bg-white w-full"><img src=https://www.sugarlabs.org/assets/logo.png class="h-24 object-contain" /><img src=https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-Horizontal.png class="h-20 object-contain" /></div>',
        repo: 'https://summerofcode.withgoogle.com/archive/2023/projects/GUSDsFPO',
        tags: ["Python", "Flatpaks", "GTK"],
        links: [{
            platform: "Certificate",
            link: `${base}/completion_certificate_2023_contributor.pdf`
        }],
        from: new Date(2023, 4, 29),
        to: new Date(2023, 7, 28),
        id: 1
    },
    {
        title: 'Sugar Labs - Intern (GSoC 2022)',
        description: "Maintained and improved applications for Sugar, written in <u>GTK+</u> and <u>Python</u>. Sugar labs ships these applications in various ways like with their OS, Desktop Environment, Flatpak Packages, Web versions, etc",
        image: '<div class="flex flex-col justify-center h-56 bg-white w-full"><img src=https://www.sugarlabs.org/assets/logo.png class="h-24 object-contain" /><img src=https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-Horizontal.png class="h-20 object-contain" /></div>',
        repo: 'https://summerofcode.withgoogle.com/archive/2022/projects/sTY158cC',
        tags: ["Python", "GTK", "PyGame"],
        links: [{
            platform: "Certificate",
            link: `${base}/completion_certificate_2022_contributor.pdf`
        }],
        from: new Date(2022, 5, 13),
        to: new Date(2022, 8, 12),
        id: 2
    },
];

export const load: PageLoad = (() => {
    let timelineData = experience.toSorted((a, b) =>
        b.from.getTime() - a.from.getTime()
    );
    return { experience, timelineData };
});