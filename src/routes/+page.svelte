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
	<div class="lg:fixed lg:w-[45%] lg:h-[85vh] flex flex-col justify-between">
		<div>
			<h1 class="font-bold text-6xl mb-7">Sparsh Goenka</h1>
			<Typewriter input={text} />
		</div>
		<Timeline
			projects={data.projects.toSorted((a, b) =>
				a.created_at && b.created_at ? a.created_at.getTime() - b.created_at.getTime() : 0
			)}
		/>
		<div class="flex justify-between">
			<div class="avatar">
				<div class="w-16 rounded-full">
					<img src="https://avatars.githubusercontent.com/u/43041139" alt="user-icon" />
				</div>
			</div>

            <Icon 

			<label class="swap swap-rotate">
				<input type="checkbox" class="theme-controller" value="cupcake" />
				<Icon icon="sun" />
				<Icon icon="moon" />
			</label>
		</div>
	</div>
	<div class="lg:w-[45%] max-lg:grid max-lg:justify-between md:grid-cols-2">
		{#each data.projects as project}
			<Project class="mb-6 max-lg:mr-4 max-lg:w-" {project} />
		{/each}
	</div>
</div>
