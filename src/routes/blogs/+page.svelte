<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/card.svelte';

	export let data: PageData;
</script>

{#each data.blogs as blogs}
	<section id="id{blogs.id}">
		<Card class="h-full" card={blogs} cardType="Blogs" />
	</section>
{/each}
