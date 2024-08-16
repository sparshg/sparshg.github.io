<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import type { BlogData, ExperienceData, ProjectData } from '$lib/types';
	import { selected } from '$lib/stores';
	import { text } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	export let card: ProjectData | ExperienceData | BlogData;
	export let cardType: 'Projects' | 'Experience' | 'Blogs';
</script>

<div
	class="card bg-base-300 rounded-2xl lg:hover:scale-105 {$selected === card.id
		? 'max-lg:scale-105'
		: ''} transition duration-300 {$$props.class}"
	on:pointerover={() => {
		$selected = card.id;
		$text = `cd ~/${cardType}/${card.title.toLowerCase().replaceAll(' ', '-').replaceAll('---', '-')}`;
		if (window.matchMedia('(max-width: 1024px)').matches) return;
		const el = document.getElementById('#id' + $selected);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}}
	role="presentation"
>
	{#if cardType === 'Blogs'}
		<button on:click={() => goto(card.repo || '', { noScroll: true })}>
			<figure class="rounded-2xl">
				{@html card.image}
			</figure>
		</button>
	{:else}
		<a href={card.repo} target="_blank" rel="noopener noreferrer">
			<figure class="rounded-2xl">
				{@html card.image}
			</figure>
		</a>
	{/if}

	<div class="card-body">
		<h2 class="card-title flex justify-between mb-1">
			<div class="flex flex-wrap items-center">
				{#if cardType === 'Blogs'}
					<button
						class="link link-hover mr-2 text-left"
						on:click={() => goto(card.repo || '', { noScroll: true })}
					>
						{card.title}
					</button>
				{:else}
					<a
						class="link link-hover mr-2"
						href={card.repo}
						target="_blank"
						rel="noopener noreferrer"
					>
						{card.title}
					</a>
				{/if}
				{#if card.links.find((link) => link.platform === 'Web')}
					<a
						href={card.links.find((link) => link.platform === 'Web')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						Web
						<Icon icon="link" />
					</a>
				{/if}
				{#if card.links.find((link) => link.platform === 'Youtube')}
					<a
						href={card.links.find((link) => link.platform === 'Youtube')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						<Icon icon="youtube" />
						<Icon icon="link" />
					</a>
				{/if}
				{#if card.links.find((link) => link.platform === 'PlayStore')}
					<a
						href={card.links.find((link) => link.platform === 'PlayStore')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						<Icon icon="playstore" />
						<Icon icon="link" />
					</a>
				{/if}
				{#if card.links.find((link) => link.platform === 'Itch')}
					<a
						href={card.links.find((link) => link.platform === 'Itch')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						<Icon icon="itch" />
						<Icon icon="link" />
					</a>
				{/if}
			</div>
			{#if 'stars' in card}
				<a
					href={card.repo}
					target="_blank"
					rel="noopener noreferrer"
					class="badge badge-neutral gap-1 p-3 transition hover:border-b-base-content"
				>
					<Icon icon="star" />
					{card.stars}
				</a>
			{/if}
			{#if 'from' in card}
				<a
					href={card.repo}
					target="_blank"
					rel="noopener noreferrer"
					class="h-fit hover:border-b-base-content badge badge-neutral px-3 py-1"
				>
					{card.from?.toLocaleString('default', { month: 'short' })}
					{card.from?.getFullYear().toString().slice(2)}
					-
					{card.to?.toLocaleString('default', { month: 'short' })}
					{card.to?.getFullYear().toString().slice(2)}
				</a>
			{/if}
			{#if cardType === 'Blogs'}
				<button
					on:click={() => goto(`${card.repo}`, { noScroll: true })}
					class="h-fit hover:border-b-base-content badge badge-neutral px-3 py-1"
				>
					Expand
				</button>
			{/if}
		</h2>
		<p>{@html card.description}</p>
		<div class="card-actions justify-between pt-2">
			<div>
				{#each card.tags as tag}
					<div class="badge badge-outline mr-1">{tag}</div>
				{/each}
			</div>
			{#if 'links' in card}
				<div>
					{#each card.links as links}
						{#if links.platform !== 'Web' && links.platform !== 'Youtube' && links.platform !== 'PlayStore' && links.platform !== 'Itch'}
							<a
								href={links.link}
								target="_blank"
								rel="noopener noreferrer"
								class="link badge badge-outline ml-1"
							>
								{links.platform}
								<Icon icon="link" />
							</a>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
