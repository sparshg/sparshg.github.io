<script lang="ts">
	import Project from '$lib/project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="lg:flex mx-12 my-16">
	<div class="lg:w-7/12 max-lg:w-0" />
	<div class="lg:fixed lg:w-7/12">
		<h1 class="font-bold text-6xl mb-7">Sparsh Goenka</h1>
		<p class="text-3xl font-mono">> echo hello World</p>
	</div>
	<div class="lg:w-5/12 max-lg:grid max-lg:justify-between md:grid-cols-2">
		{#each data.projects as project}
			<Project class="mb-6 max-lg:mr-4 max-lg:w-" {project} />
		{/each}
	</div>
</div>
