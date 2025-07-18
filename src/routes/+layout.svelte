<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<div class="grid h-screen w-full grid-rows-[auto_1fr_auto]">
	<header><p class="py-4 text-center">Header</p></header>
	<main>
		{@render children()}
	</main>
	<footer><p class="py-4 text-center">Footer</p></footer>
</div>
