<script lang="ts">
	import Project from '$lib/project.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import Timeline from '$lib/timeline.svelte';
	import type { PageData } from './$types';
	import Icon from '$lib/icon.svelte';
	import { text } from '$lib/stores';

	export let data: PageData;
</script>

<div class="lg:flex mx-8 my-16">
	<div class="lg:w-[55%] max-lg:w-0" />
	<div class="lg:fixed lg:w-[45%] lg:h-[calc(100vh-7rem)] flex flex-col justify-between">
		<div>
			<h1 class="font-bold text-6xl mb-7">Sparsh Goenka</h1>
			<Typewriter input={$text} />
		</div>
		<Timeline
			class="max-lg:hidden self-end"
			projects={data.projects.toSorted((a, b) =>
				a.created_at && b.created_at ? b.created_at.getTime() - a.created_at.getTime() : 0
			)}
		/>
		<div class="flex justify-between items-center">
			<div class="flex flex-wrap items-center gap-2.5">
				<div class="avatar mr-6">
					<div class="w-16 rounded-full">
						<img src="https://avatars.githubusercontent.com/u/43041139" alt="user-icon" />
					</div>
				</div>
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

			<label class="swap swap-rotate bg-base-300 rounded-full min-w-16 min-h-16">
				<input type="checkbox" class="theme-controller" value="cupcake" />
				<Icon icon="sun" class="swap-on size-8" />
				<Icon icon="moon" class="swap-off size-8" />
			</label>
		</div>
	</div>
	<div
		class="lg:w-[45%] grid gap-6 max-lg:justify-between lg:grid-cols-1 md:grid-cols-2 grid-cols-1"
	>
		{#each data.projects as project}
			<section id={project.title.replaceAll(' ', '-')}>
				<Project class="h-full" {project} />
			</section>
		{/each}
	</div>
</div>
