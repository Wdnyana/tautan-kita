<script lang="ts">
	let { url, title } = $props()
</script>

<a
	class="rounded-md border px-6 py-3 text-center xl:py-4"
	href={url}
	target="__blank"
	data-sveltekit-preload-data="tap"
>
	<button class="w-full cursor-pointer text-center">{title}</button>
</a>
