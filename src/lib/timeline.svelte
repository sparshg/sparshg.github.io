<script lang="ts">
	import { selected } from '$lib/stores';
	import { text } from '$lib/stores';
	import type { ProjectData } from '../routes/+page';
	import Icon from './icon.svelte';

	export let projects: ProjectData[];

	const titleMap = new Map([
		['BITS Wi-Fi Login', 'Wi-Fi'],
		['The Block Game', 'Block Game'],
		['Tic-Tac-Toe', 'TicTacToe']
	]);

	let yearMap = new Set();

	function handleClick({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('id'));
		if (!el) return;
		$selected = target.getAttribute('id').slice(1);
		$text = 'cd ~/Projects/' + $selected.toLowerCase();
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}
</script>

<ul class="timeline timeline-vertical {$$props.class}">
	{#each projects as project, i}
		<li>
			{#if i != 0}
				<hr />
			{/if}

			{#if !yearMap.has(project.created_at?.getFullYear()) && yearMap.add(project.created_at?.getFullYear())}
				<div class="timeline-start">{project.created_at?.getFullYear()}</div>
			{/if}
			<div
				class="swap swap-rotate {$selected === project.title.replaceAll(' ', '-')
					? 'swap-active'
					: ''} timeline-middle"
			>
				<Icon icon="star" class="swap-off" />
				<Icon icon="star-filled" class="swap-on" />
			</div>
			<button
				class="timeline-end timeline-box hover:cursor-pointer hover:bg-accent {$selected ===
				project.title.replaceAll(' ', '-')
					? 'bg-base-300'
					: ''} transition"
				on:click={handleClick}
				id={'#' + project.title.replaceAll(' ', '-')}
			>
				{titleMap.get(project.title) || project.title.split(' ')[0]}
			</button>
			{#if i != projects.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>
