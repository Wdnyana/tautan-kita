<script lang="ts">
	let { url, title } = $props()
</script>

<a
	class="rounded-md border px-6 py-3"
	href={url}
	target="__blank"
	data-sveltekit-preload-data="tap"
>
	<button class="h-full w-full cursor-pointer">{title}</button>
</a>
