<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	export const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<!-- <svelte:window on:keydown={handle_keydown}/> -->

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot></slot>
	<!-- svelte-ignore a11y-autofocus -->
	<button autofocus on:click={close}>close modal</button>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		/* left: 0%; */
		/* top: 0%; */
    bottom: -1000px;
    right: 0;

		width: calc(100vw - 1em);
		max-width: 45em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		/* transform: translate(-50%,-50%); */
		padding: 1em;
		border-radius: 0.2em;
		background: white;
    z-index: 30;
	}

	button {
		display: block;
	}
</style>
