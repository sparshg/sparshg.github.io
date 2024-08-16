<script lang="ts">
	import type { LayoutData } from './$types';
	import Card from '$lib/components/card.svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
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
			class="h-full w-full p-10 safari-only-blur overflow-y-auto overscroll-y-contain no-scrollbar font-mono text-xl"
		>
			<a
				href={`${base}/blogs`}
				class="btn btn-lg text-4xl btn-circle btn-ghost bg-base-300/30 absolute right-8 top-8">✕</a
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
