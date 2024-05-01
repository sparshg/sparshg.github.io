<script lang="ts">
	import { page, text, selected } from '$lib/stores';
	import type { ExperienceData, ProjectData } from '../routes/+page';
	import Icon from './icon.svelte';

	export let projects: ProjectData[] | ExperienceData[];

	const titleMap = new Map([
		['BITS Wi-Fi Login', 'Wi-Fi'],
		['The Block Game', 'BlockGame'],
		['Tic-Tac-Toe', 'TicTacToe']
	]);

	let yearMap = new Set();
	$: $page, yearMap.clear();

	function handleClick({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('id'));
		if (!el) return;
		$selected = target.getAttribute('id').slice(3);
		if ($page == 0) {
			$text =
				'cd ~/Projects/' +
				projects
					.find((project) => project.id == $selected)
					?.title.toLowerCase()
					.replaceAll(' ', '-')
					.replaceAll('---', '-');
		} else {
			$text =
				'cd ~/Experience/' +
				projects
					.find((project) => project.id == $selected)
					?.title.toLowerCase()
					.replaceAll(' ', '-')
					.replaceAll('---', '-');
		}

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

			{#if 'from' in project}
				{#if !yearMap.has(project.from?.getFullYear()) && yearMap.add(project.from?.getFullYear())}
					<div class="timeline-start">{project.from?.getFullYear()}</div>
				{/if}
			{:else if !yearMap.has(project.created_at?.getFullYear()) && yearMap.add(project.created_at?.getFullYear())}
				<div class="timeline-start">{project.created_at?.getFullYear()}</div>
			{/if}
			<div class="swap swap-rotate {$selected == project.id ? 'swap-active' : ''} timeline-middle">
				<Icon icon="star" class="swap-off" />
				<Icon icon="star-filled" class="swap-on" />
			</div>
			<button
				class="timeline-end timeline-box hover:cursor-pointer hover:bg-accent {$selected ==
				project.id
					? 'bg-base-300'
					: ''} transition"
				on:click={handleClick}
				id={'#id' + project.id}
			>
				{#if 'from' in project}
					{project.title.split('-')[0].slice(0, -1)}
				{:else}
					{titleMap.get(project.title) || project.title.split(' ')[0]}
				{/if}
			</button>
			{#if i != projects.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>
