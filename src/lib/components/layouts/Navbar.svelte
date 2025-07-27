<script lang="ts">
	import type { NavbarLink } from '$lib/types/profile.types'

	let { title, url, active, activeFunction }: NavbarLink = $props()
</script>

<button
	type="button"
	class="m-0 flex items-center border-none bg-transparent p-0"
	onclick={() => activeFunction && activeFunction(url)}
>
	<a
		class="rounded-[7px] px-4 py-2 text-center transition-colors duration-200 lg:px-6"
		href={url}
		class:bg-green-100={active}
		class:text-green-700={active}
		class:font-medium={active}>{title}</a
	>
</button>
