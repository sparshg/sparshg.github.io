<script lang="ts">
	import { text, selected } from '$lib/stores';
	import { page } from '$app/stores';
	import type { BlogData, ExperienceData, ProjectData } from '$lib/types';
	import Icon from '$lib/components/icon.svelte';
	import { base } from '$app/paths';

	export let cards: ProjectData[] | ExperienceData[] | BlogData[];

	const titleMap = new Map([
		['BITS Wi-Fi Login', 'Wi-Fi'],
		['The Block Game', 'BlockGame'],
		['Tic-Tac-Toe', 'TicTacToe']
	]);

	let yearMap: Map<number, number>;

	$: $page.url.pathname, (yearMap = getYearMap());

	function getYearMap() {
		let yearMap = new Map();
		for (const project of cards.slice().reverse()) {
			if ('from' in project) {
				if (!yearMap.has(project.from?.getFullYear())) {
					yearMap.set(project.from?.getFullYear(), project.id);
				}
			} else if (!yearMap.has(project.created_at?.getFullYear())) {
				yearMap.set(project.created_at?.getFullYear(), project.id);
			}
		}
		return yearMap;
	}

	function handleClick({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('id'));
		if (!el) return;
		$selected = target.getAttribute('id').slice(3);
		$text = `cd ~/${
			$page.url.pathname == `${base}/experience`
				? 'Experience'
				: $page.url.pathname == `${base}/blogs`
					? 'Blogs'
					: 'Projects'
		}/${cards
			.find((card) => card.id == $selected)
			?.title.toLowerCase()
			.replaceAll(' ', '-')
			.replaceAll('---', '-')}`;

		el.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}
</script>

<ul class="timeline timeline-horizontal lg:timeline-vertical {$$props.class}">
	{#each cards as project, i}
		<li>
			{#if i != 0}
				<hr />
			{/if}

			{#if 'from' in project}
				{#if yearMap.get(project.from.getFullYear()) == project.id}
					<div class="timeline-start">{project.from?.getFullYear()}</div>
				{/if}
			{:else if yearMap.get(project.created_at?.getFullYear() || -1) == project.id}
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
			{#if i != cards.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>
