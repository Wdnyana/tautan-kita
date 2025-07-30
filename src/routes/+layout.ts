import { type Types } from '$lib'

// forward data theme dorm +layout.server using param data and return using spread operator(...data)
export async function load({ data }) {
	const Navlink: Types.typesProfile.NavbarLink[] = [
		{
			url: '#home',
			title: 'Home',
		},
		{
			url: '#tautan',
			title: 'Tautan',
		},
		{
			url: '#contact',
			title: 'Contact',
		},
	]

	return {
		nav: Navlink,
		...data,
	}
}
