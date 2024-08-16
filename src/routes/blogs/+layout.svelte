<script lang="ts">
	import type { LayoutData } from './$types';
	import Card from '$lib/components/card.svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	export let data: LayoutData;

	$: if ($page.url.pathname.startsWith(`${base}/blogs/`)) {
		document.documentElement.style.overflow = 'hidden';
	} else {
		document.documentElement.style.overflow = '';
	}
</script>

{#each data.blogs as blogs}
	<section id="id{blogs.id}">
		<Card class="h-full" card={blogs} cardType="Blogs" />
	</section>
{/each}

{#if $page.url.pathname.startsWith(`${base}/blogs/`)}
	<div class="fixed inset-0 flex items-center justify-center bg-base-200/40" transition:slide>
		<div
			class="h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-xl backdrop-blur-3xl p-10 overflow-y-auto overscroll-y-contain no-scrollbar"
		>
			<a href="{base}/blogs" class="btn btn-lg text-2xl btn-circle btn-ghost absolute right-8 top-8"
				>✕</a
			>
			<slot />
		</div>
	</div>
{/if}
