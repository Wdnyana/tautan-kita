<script lang="ts">
	import { theme } from '$lib/stores/theme'
	import { Sun, Moon } from '@lucide/svelte'

	function handleToggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark'
	}
</script>

<button onclick={handleToggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<Moon class="h-6 w-6" />
	{:else}
		<Sun class="h-6 w-6" />
	{/if}
</button>
