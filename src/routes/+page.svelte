<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.projects as project}
	<section id="id{project.id}">
		<Card class="h-full" card={project} cardType="Projects" />
	</section>
{/each}
