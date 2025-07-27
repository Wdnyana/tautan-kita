import { type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme')

	const currentTheme = theme === 'dark' || theme === 'light' ? theme : 'dark'

	event.locals.theme = currentTheme

	const res = await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('data-theme=""', `data-theme="${currentTheme}`)
		},
	})

	return res
}
