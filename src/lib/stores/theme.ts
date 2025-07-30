import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export type Theme = 'dark' | 'light'

// get initial theme value from localStorage or default to 'dark'
const initThemeValue: Theme = (browser && (localStorage.getItem('theme') as Theme)) || 'dark'

// create a writable store for the theme with the initial value
export const theme = writable<Theme>(initThemeValue)

// set theme localstorage value if browser is available
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value)
	})
}
