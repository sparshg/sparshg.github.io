<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.experience as experience}
	<section id="id{experience.id}">
		<Card class="h-full" card={experience} cardType="Experience" />
	</section>
{/each}
