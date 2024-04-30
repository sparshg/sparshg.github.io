<script lang="ts">
	import Icon from './icon.svelte';
	import type { ProjectData } from '../routes/+page';
	import { selected } from './stores';
	import { text } from './stores';
	export let project: ProjectData;
</script>

<div
	class="card bg-base-300 rounded-2xl {$selected === project.title.replaceAll(' ', '-')
		? 'scale-105'
		: ''} transition duration-250 {$$props.class}"
	on:pointerover={() => {
		$selected = project.title.replaceAll(' ', '-');
		$text = 'cd ~/Projects/' + $selected.toLowerCase();
		const el = document.getElementById('#' + $selected);
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
		<h2 class="card-title flex justify-between mb-1 flex-wrap">
			<div class="flex flex-wrap items-center">
				<a class="link link-hover" href={project.repo} target="_blank" rel="noopener noreferrer">
					{project.title}
				</a>
				{#if project.links.find((link) => link.platform === 'Web')}
					<a
						href={project.links.find((link) => link.platform === 'Web')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="link badge badge-neutral p-3 ml-2"
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
						class="link badge badge-neutral p-3 ml-2"
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
						class="link badge badge-neutral p-3 ml-2"
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
						class="link badge badge-neutral p-3 ml-2"
					>
						<Icon icon="itch" />
						<Icon icon="link" />
					</a>
				{/if}
			</div>
			<a
				href={project.repo}
				target="_blank"
				rel="noopener noreferrer"
				class="badge badge-neutral gap-1 p-3 transition hover:border-b-base-content"
			>
				<Icon icon="star" />
				{project.stars}
			</a>
		</h2>
		<p>{@html project.description}</p>
		<div class="card-actions justify-between pt-2">
			<div>
				{#each project.tags as tag}
					<div class="badge badge-outline mr-1">{tag}</div>
				{/each}
			</div>
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
		</div>
	</div>
</div>
