<script lang="ts">
	import type { ProjectData } from '../routes/+page';
	export let project: ProjectData;
</script>

<div class="card bg-base-300 rounded-2xl hover:scale-105 transition duration-300 {$$props.class}">
	<a href={project.repo} target="_blank" rel="noopener noreferrer">
		<figure>
			<img src={project.image} alt={project.title + ' screenshot'} class="rounded-2xl" />
		</figure>
	</a>
	<div class="card-body">
		<h2 class="card-title flex justify-between mb-1 flex-wrap">
			<div class="flex items-center">
				<a class="link link-hover" href={project.repo} target="_blank" rel="noopener noreferrer">
					{project.title}
				</a>
				{#if project.links.find((link) => link.platform === 'Web')}
					<a
						href={project.links.find((link) => link.platform === 'Web')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="contents"
					>
						<div class="link badge badge-secondary p-3 ml-2">
							Web
							<svg
								class="ml-1.5 stroke-current"
								fill="none"
								stroke="currentColor"
								height="10"
								width="10"
								aria-hidden="true"
								viewBox="0 0 12 12"
								><path
									d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"
								></path><path
									d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"
								></path></svg
							>
						</div>
					</a>
				{/if}
				{#if project.links.find((link) => link.platform === 'Youtube')}
					<a
						href={project.links.find((link) => link.platform === 'Youtube')?.link}
						target="_blank"
						rel="noopener noreferrer"
						class="contents"
					>
						<div class="link badge badge-secondary p-3 ml-2">
							<svg
								height="16"
								width="22.8"
								aria-hidden="true"
								viewBox="0 0 28.57 20"
								preserveAspectRatio="xMidYMid meet"
							>
								<path
									d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
									fill="#FF0000"
								></path>
								<path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"
								></path>
							</svg>
							<svg
								class="ml-1.5"
								stroke="currentColor"
								height="10"
								width="10"
								aria-hidden="true"
								viewBox="0 0 12 12"
								><path
									d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"
								></path><path
									d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"
								></path></svg
							>
						</div>
					</a>
				{/if}
			</div>
			<div class="badge badge-secondary gap-1 p-3 transition hover:border-b-base-content">
				<svg
					class="mr-1 fill-current"
					aria-hidden="true"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					data-view-component="true"
				>
					<path
						d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
					/>
				</svg>
				{project.stars}
			</div>
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
					{#if links.platform !== 'Web' && links.platform !== 'Youtube'}
						<a href={links.link} target="_blank" rel="noopener noreferrer">
							<div class="link badge badge-outline">
								{links.platform}
								<svg
									class="ml-1.5 stroke-current"
									fill="none"
									stroke="currentColor"
									height="10"
									width="10"
									aria-hidden="true"
									viewBox="0 0 12 12"
									><path
										d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"
									></path><path
										d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"
									></path></svg
								>
							</div>
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
