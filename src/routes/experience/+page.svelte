<script lang="ts">
	import Project from '$lib/components/project.svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.experience as experience}
	<section id="id{experience.id}">
		<Project class="h-full" project={experience} />
	</section>
{/each}
