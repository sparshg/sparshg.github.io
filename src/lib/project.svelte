<script lang="ts">
	import Icon from './icon.svelte';
	import type { ExperienceData, ProjectData } from '../routes/+page';
	import { selected } from './stores';
	import { text } from './stores';
	export let project: ProjectData | ExperienceData;
</script>

<div
	class="card bg-base-300 rounded-2xl lg:hover:scale-105 {$selected === project.id
		? 'max-lg:scale-105'
		: ''} transition duration-300 {$$props.class}"
	on:pointerover={() => {
		$selected = project.id;
		$text =
			'cd ~/' +
			('stars' in project ? 'Projects/' : 'Experience/') +
			project.title.toLowerCase().replaceAll(' ', '-').replaceAll('---', '-');
		if (window.matchMedia('(max-width: 1024px)').matches) return;
		const el = document.getElementById('#id' + $selected);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}}
	role="presentation"
>
	<a href={project.repo} target="_blank" rel="noopener noreferrer">
		<figure class="rounded-2xl">
			{@html project.image}
		</figure>
	</a>
	<div class="card-body">
		<h2 class="card-title flex justify-between mb-1">
			<div class="flex flex-wrap items-center">
				<a
					class="link link-hover mr-2"
					href={project.repo}
					target="_blank"
					rel="noopener noreferrer"
				>
					{project.title}
				</a>
				{#if project.links.find((link) => link.platform === 'Web')}
					<a
						href={project.links.find((link) => link.platform === 'Web')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						Web
						<Icon icon="link" />
					</a>
				{/if}
				{#if project.links.find((link) => link.platform === 'Youtube')}
					<a
						href={project.links.find((link) => link.platform === 'Youtube')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						<Icon icon="youtube" />
						<Icon icon="link" />
					</a>
				{/if}
				{#if project.links.find((link) => link.platform === 'PlayStore')}
					<a
						href={project.links.find((link) => link.platform === 'PlayStore')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						<Icon icon="playstore" />
						<Icon icon="link" />
					</a>
				{/if}
				{#if project.links.find((link) => link.platform === 'Itch')}
					<a
						href={project.links.find((link) => link.platform === 'Itch')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 mr-2"
					>
						<Icon icon="itch" />
						<Icon icon="link" />
					</a>
				{/if}
			</div>
			{#if 'stars' in project}
				<a
					href={project.repo}
					target="_blank"
					rel="noopener noreferrer"
					class="badge badge-neutral gap-1 p-3 transition hover:border-b-base-content"
				>
					<Icon icon="star" />
					{project.stars}
				</a>
			{/if}
			{#if 'from' in project}
				<a
					href={project.repo}
					target="_blank"
					rel="noopener noreferrer"
					class="h-fit link link-hover badge badge-neutral px-3 py-1"
				>
					{project.from?.toLocaleString('default', { month: 'short' })}
					{project.from?.getFullYear().toString().slice(2)}
					-
					{project.to?.toLocaleString('default', { month: 'short' })}
					{project.to?.getFullYear().toString().slice(2)}
				</a>
			{/if}
		</h2>
		<p>{@html project.description}</p>
		<div class="card-actions justify-between pt-2">
			<div>
				{#each project.tags as tag}
					<div class="badge badge-outline mr-1">{tag}</div>
				{/each}
			</div>
			{#if 'links' in project}
				<div>
					{#each project.links as links}
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
