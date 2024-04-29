<script lang="ts">
	export let input: string;
	let charDelay = 50;
	let wordDelay = 100;

	let text = 'echo Hello World wfwf wf wfffff';
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
</script>

<div class="flex">
	<p class="text-3xl font-mono">
		>{#if text[text.length - 1] === ' '}
			&nbsp{text.slice(0, -1)}&nbsp;
		{:else if text.length > 0}
			&nbsp{text}
		{:else}
			&nbsp;
		{/if}
	</p>
	{#if state !== 'idle' || blinking}
		<div class="bg-base-content ml-0.5">.....</div>
	{/if}
</div>
