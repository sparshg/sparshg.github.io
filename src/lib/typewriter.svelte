<script lang="ts">
	export let input: string;
	let charDelay = 50;
	let wordDelay = 100;

	let text = '';
	let state: 'typing' | 'deleting' | 'idle' = 'idle';
	let blinking = false;
	let interval: number;

	function getLastCommon() {
		let i = 0;
		while (i < text.length && i < input.length && text[i] === input[i]) {
			i++;
		}
		return i;
	}

	function deleteThenType() {
		if (state !== 'idle') {
			clearInterval(interval);
			clearTimeout(interval);
		}
		state = 'deleting';
		let i = getLastCommon();
		if (i === text.length) {
			return type();
		}
		interval = setInterval(() => {
			if (i === text.length) {
				clearInterval(interval);
				type();
			} else {
				text = text.slice(0, -1);
			}
		}, charDelay);
	}

	function type() {
		if (state !== 'idle') {
			clearInterval(interval);
			clearTimeout(interval);
		}
		state = 'typing';
		let i = text.length;
		interval = setInterval(() => {
			if (i === input.length) {
				clearInterval(interval);
				state = 'idle';
			} else if (i > 0 && text[i - 1] === ' ') {
				clearInterval(interval);
				interval = setTimeout(() => {
					text += input[i];
					type();
				}, wordDelay);
			} else {
				text += input[i];
				i++;
			}
		}, charDelay);
	}

	setInterval(() => {
		blinking = !blinking;
	}, 650);

	$: input, deleteThenType();

	const cursor = '<div class="bg-base-content inline-block">.</div>';
</script>

<div class="flex text-xl md:text-3xl font-mono min-h-20">
	<div class="mr-5">></div>
	<div>
		{#if text[text.length - 1] === ' '}
			{text.slice(0, -1)}&nbsp;{@html state !== 'idle' || blinking ? cursor : ''}
		{:else}
			{text}{@html state !== 'idle' || blinking ? cursor : ''}
		{/if}
	</div>
</div>
