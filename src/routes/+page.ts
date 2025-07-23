import { type Types } from '$lib'

export async function load(): Promise<Types.typesProfile.PageData> {
	const dataProfile: Types.typesProfile.ProfileData = {
		nama: 'Purwa',
		username: 'prw',
		bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
		fotoProfileUrl:
			'https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg',
	}

	const linkButton: Types.typesProfile.DataLink[] = [
		{
			id: 1,
			url: '/',
			title: 'Home',
		},
		{
			id: 2,
			url: '/contact',
			title: 'Contact',
		},
		{
			id: 3,
			url: '/about',
			title: 'About',
		},
	]

	return {
		profile: dataProfile,
		dataLink: linkButton,
	}
}
