<script lang="ts">
	import { iconGroup } from '$lib/utils/icons'
</script>

<div class="flex w-full items-center justify-evenly gap-3 py-3 md:w-3/4">
	{#each iconGroup as icons}
		<a
			href={icons.url}
			data-sveltekit-preload-data="tap"
			target="__blank"
			class="rounded-full border p-3"
		>
			<icons.icon class="h-6 w-6" />
		</a>
	{/each}
</div>
