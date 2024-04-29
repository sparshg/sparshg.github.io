<script lang="ts">
	import type { ProjectData } from '../routes/+page';
	import Icon from './icon.svelte';

	export let projects: ProjectData[];

	const titleMap = new Map([
		['BITS Wi-Fi Login', 'Wi-Fi'],
		['The Block Game', 'Block Game'],
		['Tic-Tac-Toe', 'TicTacToe']
	]);

	let yearMap = new Set();
</script>

<ul class="timeline">
	{#each projects as project, i}
		<li>
			{#if i != 0}
				<hr />
			{/if}

			{#if !yearMap.has(project.created_at?.getFullYear()) && yearMap.add(project.created_at?.getFullYear())}
				<div class="timeline-start">{project.created_at?.getFullYear()}</div>
			{/if}
			<div class="timeline-middle">
				<Icon icon="star" />
			</div>
			<div class="timeline-end timeline-box">
				{titleMap.get(project.title) || project.title.split(' ')[0]}
			</div>
			{#if i != projects.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>
