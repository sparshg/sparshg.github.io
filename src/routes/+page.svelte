<script lang="ts">
	import Project from '$lib/project.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import Timeline from '$lib/timeline.svelte';
	import type { PageData } from './$types';
	import Icon from '$lib/icon.svelte';

	export let data: PageData;
	let text = 'echo Hello World';
</script>

<div class="lg:flex mx-12 my-16">
	<div class="lg:w-[55%] max-lg:w-0" />
	<div class="lg:fixed lg:w-[45%] lg:h-[calc(100vh-7rem)] flex flex-col justify-between">
		<div>
			<h1 class="font-bold text-6xl mb-7">Sparsh Goenka</h1>
			<Typewriter input={text} />
		</div>
		<Timeline
			projects={data.projects.toSorted((a, b) =>
				a.created_at && b.created_at ? a.created_at.getTime() - b.created_at.getTime() : 0
			)}
		/>
		<div class="flex justify-between items-center">
			<div class="flex items-center gap-3">
				<div class="avatar">
					<div class="w-16 rounded-full">
						<img src="https://avatars.githubusercontent.com/u/43041139" alt="user-icon" />
					</div>
				</div>
				<a
					href="https://github.com/sparshg"
					target="_blank"
					rel="noopener noreferrer"
					class="badge badge-primary py-4 px-3 ml-8 transition hover:border-b-base-content"
				>
					<Icon icon="github" class="size-4 mr-2" />Github<Icon icon="link" />
				</a>
				<a
					href="https://youtube.com/c/radiium"
					target="_blank"
					rel="noopener noreferrer"
					class="badge badge-primary py-4 px-3 transition hover:border-b-base-content"
				>
					<Icon icon="youtube" class="size-4 mr-2" />Youtube<Icon icon="link" />
				</a>
				<a
					href="https://linkedin.com/in/sparshgoenka"
					target="_blank"
					rel="noopener noreferrer"
					class="badge badge-primary py-4 px-3 transition hover:border-b-base-content"
				>
					<Icon icon="linkedin" class="size-4 mr-2" />Linkedin<Icon icon="link" />
				</a>
			</div>

			<label class="swap swap-rotate bg-base-300 rounded-full size-16">
				<input type="checkbox" class="theme-controller" value="cupcake" />
				<Icon icon="sun" class="swap-on size-8" />
				<Icon icon="moon" class="swap-off size-8" />
			</label>
		</div>
	</div>
	<div class="lg:w-[45%] max-lg:grid max-lg:justify-between md:grid-cols-2">
		{#each data.projects as project}
			<Project class="mb-6 max-lg:mr-4 max-lg:w-" {project} />
		{/each}
	</div>
</div>
