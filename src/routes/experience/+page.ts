import type { PageLoad } from './$types';
import type { ExperienceData } from '$lib/types';
import { base } from '$app/paths';

const experience: ExperienceData[] = [
    {
        title: 'Apple - Intern',
        description: "Part of the Rapid Application Development team.",
        image: '<img src=https://logocreator.io/wp-content/uploads/2023/11/apple-inc-minimalism-logo-simple-wallpaper-preview.jpg class="h-50%" />',
        repo: undefined,
        tags: [""],
        links: [],
        from: new Date(2025, 0, 13),
        to: new Date(2025, 5, 29),
        id: 0
    },
    {
        title: 'Wells Fargo - Intern',
        description: "Built two VSCode extensions for developers to reduce manual overhead. <u>Proxy Orchestrator</u> to automatically route other extensions' traffic and <u>Salesforce Diff Viewer</u> to integrate Git diff viewer with Salesforce Org.",
        image: '<img src=https://www.wellsfargo.com/assets/images/logos/wellsfargo/logo_974x1050.png class="h-44 bg-[#d61f28] w-full object-contain" />',
        repo: undefined,
        tags: ["Typescript"],
        links: [],
        from: new Date(2024, 5, 3),
        to: new Date(2024, 7, 26),
        id: 1
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
        // from: new Date(2023, 4, 29), //actual
        from: new Date(2023, 5, 1),
        to: new Date(2023, 7, 28),
        id: 2
    },
    {
        title: 'Centre for Railway Information Systems (CRIS) - Intern',
        description: "Collaborated with the CRIS team to enhance system efficiency through detailed analysis and feedback of the Crew Management System (CMS) at the local headquarters.",
        image: '<img src=https://convergenttec.com/wp-content/uploads/2014/10/railway_logo.png />',
        repo: undefined,
        tags: ["Java", "Spring Boot"],
        links: [],
        from: new Date(2023, 4, 27),
        to: new Date(2023, 6, 21),
        id: 3
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
        id: 4
    },
];

export const load: PageLoad = (() => {
    let timelineData = experience.toSorted((a, b) =>
        b.from.getTime() - a.from.getTime()
    );
    return { experience, timelineData };
});