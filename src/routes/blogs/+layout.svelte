<script lang="ts">
	import type { LayoutData } from './$types';
	import Card from '$lib/components/card.svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	export let data: LayoutData;
</script>

{#each data.blogs as blogs}
	<section id="id{blogs.id}">
		<Card class="h-full" card={blogs} cardType="Blogs" />
	</section>
{/each}

{#if $page.url.pathname.startsWith(`${base}/blogs/`)}
	<div
		class="fixed inset-0 flex items-center justify-center bg-base-200/70 backdrop-blur-2xl"
		transition:slide
	>
		<div
			class="h-full w-full py-10 px-10 md:px-32 lg:px-56 safari-only-blur overflow-y-auto overscroll-y-contain no-scrollbar font-mono text-md lg:text-lg flex flex-col items-center text-justify"
		>
			<button
				on:click={() => goto(`${base}/blogs`, { noScroll: true })}
				class="btn btn-md lg:btn-lg text-2xl lg:text-4xl btn-circle btn-ghost bg-base-content/10 absolute right-8 top-8"
				>✕</button
			>
			<slot />
		</div>
	</div>
{/if}

<style>
	@supports (hanging-punctuation: first) and (font: -apple-system-body) and
		(-webkit-appearance: none) {
		.safari-only-blur {
			--tw-backdrop-blur: blur(40px);
			backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
				var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
				var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
				var(--tw-backdrop-sepia);
		}
	}
</style>
