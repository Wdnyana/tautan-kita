<script lang="ts">
	import '../app.css'

	import Navbar from '$lib/components/layouts/Navbar.svelte'
	import { Menu, X } from '@lucide/svelte'
	import { theme, type Theme } from '$lib/stores/theme'
	import { browser } from '$app/environment'
	import ToggleTheme from '$lib/components/button/ToggleTheme.svelte'
	import type { Snippet } from 'svelte'
	import type { NavbarLink } from '$lib/types/profile.types'
	import Footer from '$lib/components/layouts/Footer.svelte'

	let { children, data }: { children: Snippet; data: { theme: Theme; nav: NavbarLink[] } } =
		$props()
	let activeLink = $state(data.nav[0]?.url ?? '')
	let openMenu = $state(false)

	theme.set(data.theme)

	$effect(() => {
		if (browser) {
			document.documentElement.setAttribute('data-theme', $theme)
			document.cookie = `theme=${$theme}; path=/; max-age=31536000; secure; SameSite=Lax`
		}
	})

	function handleMenu() {
		openMenu = !openMenu
	}

	function handleActive(url: string) {
		activeLink = url
	}
</script>

<div class="relative grid w-full grid-rows-[auto_1fr_auto]">
	<header class="sticky top-[0.1px] z-10 container mx-auto p-3 lg:top-2 lg:my-3 lg:px-12 xl:px-0">
		<div class="flex items-center justify-between">
			<a class="sticky z-[11] ps-2 lg:ps-0" href="/">
				<h1>Tautan Kita</h1>
			</a>

			<!-- navbar mobile -->
			<div class="flex items-center gap-2 md:gap-3 lg:hidden">
				<div class="relative top-0.5 z-[11]">
					<ToggleTheme />
				</div>

				<button
					onclick={handleMenu}
					type="button"
					class="sticky z-[11] flex items-center justify-center rounded-full p-2"
				>
					{#if openMenu}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>

				{#if openMenu}
					<div class="bg-surface text-text fixed inset-1 rounded-[8px]">
						<div class="flex h-full w-full flex-col items-center justify-center gap-10">
							{#each data.nav as navs (navs.url)}
								<Navbar
									title={navs.title}
									url={navs.url}
									active={activeLink === navs.url}
									activeFunction={handleActive}
								/>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<!-- navbar desktop -->
			<div class="hidden gap-24 lg:flex lg:items-center">
				{#each data.nav as navs (navs.url)}
					<Navbar
						title={navs.title}
						url={navs.url}
						active={activeLink === navs.url}
						activeFunction={handleActive}
					/>
				{/each}

				<ToggleTheme />
			</div>
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer class=" px-3 py-10 lg:px-6">
		<Footer />
	</footer>
</div>
