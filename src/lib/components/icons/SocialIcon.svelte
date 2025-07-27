<script lang="ts">
	let { url, icon } = $props()
</script>

<div class="flex w-full items-center justify-evenly gap-3 py-3 md:w-3/4">
	<a href={url} data-sveltekit-preload-data="tap" target="__blank" class="rounded-full border p-3">
		<icon.icon class="h-6 w-6" />
	</a>
</div>
