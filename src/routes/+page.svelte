<script lang="ts">
	import Project from '$lib/project.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import Timeline from '$lib/timeline.svelte';
	import type { PageData } from './$types';
	import Icon from '$lib/icon.svelte';
	import { text } from '$lib/stores';
	import { fly } from 'svelte/transition';

	export let data: PageData;
	let page = 0;
</script>

<div class="lg:flex mx-8 pt-16 pb-12">
	<div class="lg:w-[55%] max-lg:w-0" />
	<div
		class="max-lg:contents lg:fixed lg:w-[45%] lg:h-[calc(100vh-7rem)] flex flex-col justify-between"
	>
		<div class="max-lg:contents">
			<h1 class="font-bold text-3xl md:text-6xl 2xl:text-7xl">Sparsh Goenka</h1>
			<Typewriter class="sticky top-0 z-50 py-4 -mx-5 px-5 bg-base-100" input={$text} />
		</div>
		<div class="text-xl 2xl:text-3xl font-mono">
			<button
				class="w-full cursor-pointer {page == 0
					? 'bg-base-content text-base-100'
					: 'hover:outline bg-base-300'} p-1 mb-2"
				on:click={() => (page = 0)}
			>
				Projects
			</button>
			<button
				class="w-full cursor-pointer {page == 1
					? 'bg-base-content text-base-100'
					: 'hover:outline bg-base-300'} p-1"
				on:click={() => (page = 1)}
			>
				Experience
			</button>
		</div>

		<div class="text-md 2xl:text-2xl flex h-full my-4 justify-between font-mono items-center">
			<p class="lg:basis-7/12">
				{#each data.about.split('\n') as about}
					{about}<br />
				{/each}
			</p>
			<div>
				<div
					class="h-[calc(100vh-30rem)] no-scrollbar overflow-y-scroll max-lg:hidden basis-7/12 fade-mask"
				>
					<div class="h-[calc(25vh-7.5rem)]"></div>
					<Timeline
						projects={data.projects.toSorted((a, b) =>
							a.created_at && b.created_at ? b.created_at.getTime() - a.created_at.getTime() : 0
						)}
					/>
					<div class="h-[calc(25vh-7.5rem)]"></div>
				</div>
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
						class="link badge badge-accent rounded-full py-4 px-3 transition hover:border-b-base-content"
						on:pointerover={() => ($text = 'cd ~/contacts/' + social.icon)}
					>
						<Icon icon={social.icon} class="size-4 mr-2" />
						<Icon icon="link" />
					</a>
				{/each}
			</div>
			<div class="flex-grow"></div>

			<label class="swap swap-rotate bg-base-300 rounded-full min-w-16 min-h-16">
				<input type="checkbox" class="theme-controller" value="nord" />
				<Icon icon="sun" class="swap-on size-8" />
				<Icon icon="moon" class="swap-off size-8" />
			</label>
		</div>
	</div>
	<div
		class="lg:w-[45%] grid gap-x-6 gap-y-8 max-lg:justify-between max-lg:mt-12 lg:grid-cols-1 md:grid-cols-2 grid-cols-1"
	>
		{#each data.projects as project}
			{#if page === 0}
				<section id={project.title.replaceAll(' ', '-')} transition:fly={{ x: 100, duration: 500 }}>
					<Project class="h-full" {project} />
				</section>
			{/if}
		{/each}
	</div>
</div>
