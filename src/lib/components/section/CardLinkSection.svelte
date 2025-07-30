<script lang="ts">
	import Button from '../button/Button.svelte'

	let { title, description, url, img } = $props()
</script>

<div class="flex h-full w-full flex-col gap-5 rounded-lg p-4 shadow-md xl:gap-4">
	<div class="aspect-[16/11] overflow-hidden rounded-md">
		<img src={img} alt={title} class="h-full w-full rounded-md object-cover object-center" />
	</div>

	<div class="mt-3 mb-4 flex flex-grow flex-col gap-4">
		<h1>{title}</h1>
		<p>{description}</p>
	</div>

	<Button {url} {title} />
</div>
