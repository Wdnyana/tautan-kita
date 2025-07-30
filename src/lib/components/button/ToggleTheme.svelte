<script lang="ts">
	import { theme } from '$lib/stores/theme'
	import { Sun, Moon } from '@lucide/svelte'

	function handleToggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark'
	}
</script>

<button class="cursor-pointer" onclick={handleToggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<Moon class="h-5 w-5 lg:h-6 lg:w-6" />
	{:else}
		<Sun class="h-5 w-5 lg:h-6 lg:w-6" />
	{/if}
</button>
