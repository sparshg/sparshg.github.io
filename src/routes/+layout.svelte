<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import Project from '$lib/components/project.svelte';
	import Typewriter from '$lib/components/typewriter.svelte';
	import Timeline from '$lib/components/timeline.svelte';
	import Icon from '$lib/components/icon.svelte';
	import { text } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let data: LayoutData;
</script>

<div class="lg:flex mx-8 pt-16 pb-12">
	<div class="lg:w-[55%] max-lg:w-0" />
	<div
		class="max-lg:contents lg:fixed lg:w-[45%] lg:h-[calc(100vh-7rem)] flex flex-col justify-between"
	>
		<div class="max-lg:contents">
			<h1 class="font-bold text-3xl md:text-6xl 2xl:text-7xl">Sparsh Goenka</h1>
			<Typewriter class="sticky top-0 z-50 py-3 my-1 -mx-5 px-5 max-lg:bg-base-100" input={$text} />
		</div>
		<div class="text-xl 2xl:text-3xl font-mono">
			<a href="{base}/">
				<button
					class="w-full cursor-pointer {$page.url.pathname == `${base}/`
						? 'bg-base-content text-base-100'
						: 'hover:outline bg-base-300'} p-1 mb-2"
					on:click={() => ($text = 'cd ~/Projects/')}
				>
					Projects
				</button></a
			>
			<a href="{base}/experience"
				><button
					class="w-full cursor-pointer {$page.url.pathname == `${base}/experience`
						? 'bg-base-content text-base-100'
						: 'hover:outline bg-base-300'} p-1 mb-2"
					on:click={() => ($text = 'cd ~/Experience/')}
				>
					Experience
				</button></a
			>
			<a href="{base}/blogs">
				<button
					class="w-full cursor-pointer {$page.url.pathname == `${base}/blogs`
						? 'bg-base-content text-base-100'
						: 'hover:outline bg-base-300'} p-1"
					on:click={() => ($text = 'cd ~/Blogs/')}
				>
					Blogs
				</button></a
			>
		</div>

		<div
			class="flex lg:flex-row flex-col text-md 2xl:text-2xl h-full my-4 justify-between font-mono items-center"
		>
			<p class="lg:basis-7/12">
				{#each data.about.split('\n') as a}
					{a}<br />
				{/each}
			</p>
			<div
				class="basis-5/12 fade-mask-y max-lg:fade-mask-x content-center no-scrollbar overflow-auto lg:max-h-[calc(100vh-32rem)]"
			>
				<div class="lg:h-[calc(25vh-9rem)]" />
				<Timeline projects={$page.data.timelineData} />
				<div class="lg:h-[calc(25vh-9rem)]" />
			</div>
		</div>

		<div class="flex items-center max-lg:mt-4">
			<div class="avatar mr-6">
				<div class="w-16 rounded-full">
					<img src="https://avatars.githubusercontent.com/u/43041139" alt="user-icon" />
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-2.5">
				{#each data.socials as social}
					<a
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-outline hover:bg-accent rounded-full py-4 px-3 transition"
						on:pointerover={() => ($text = 'cd ~/Contacts/' + social.icon)}
					>
						<Icon icon={social.icon} class="size-4 mr-2" />
						<Icon icon="link" />
					</a>
				{/each}
			</div>
			<div class="flex-grow"></div>

			<label class="swap swap-rotate bg-base-300 hover:bg-accent rounded-full min-w-16 min-h-16">
				<input type="checkbox" class="theme-controller" value="cupcake" />
				<Icon icon="sun" class="swap-on size-8" />
				<Icon icon="moon" class="swap-off size-8" />
			</label>
		</div>
	</div>
	<div
		class="lg:w-[45%] grid gap-x-6 gap-y-8 max-lg:justify-between max-lg:mt-12 lg:grid-cols-1 md:grid-cols-2 grid-cols-1"
		transition:fly={{ x: -100, duration: 500 }}
	>
		<slot />
	</div>
</div>
