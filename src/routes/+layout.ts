import type { LayoutLoad } from './$types';
import type { Social } from '$lib/types';
import { base } from '$app/paths';

export const prerender = true;
export const ssr = false;

const socials: Social[] = [
    {
        icon: 'github',
        link: 'https://github.com/sparshg'
    },
    {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sparshgoenka'
    },
    {
        icon: 'youtube',
        link: 'https://www.youtube.com/c/radiium'
    },
    {
        icon: 'email',
        link: 'mailto: sparshg.contact@gmail.com'
    },
];

const about = "I like tinkering with code and making random stuff... diving into low-level graphics, playing around with Rust, making animations with code, or messing with some Android apps...\n\n It's all about learning by doing.";


export const load: LayoutLoad = async ({ url }) => {
    let path = url.pathname;
    if (base && path.startsWith(base)) {
        path = path.slice(base.length);
    }
    path = path.split('/')[1];
    return { socials, about, path };
};