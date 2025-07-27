import { type Types } from '$lib'

import { Github, Instagram, Linkedin, Globe } from '@lucide/svelte'

export async function load(): Promise<Types.typesProfile.PageData> {
	const dataProfile: Types.typesProfile.ProfileData = {
		nama: '<h1>I Putu Purwa Wiadnyana Putra</h1>',
		username: 'purwa_wiadnyana',
		role: 'Web Developer Enthusiast',
		bio: 'A Motivated Web Developer with a strong background in programming languages, Web technologies, and a deep passion for Full-stack Development. Finding joy in achieving goals through designing, Developing, and maintaining Web Applications, combining reliable functionality with visually appealing designs. Dedicated to adding elegant, eye-catching touches to every interactive animation on the Front-end while ensuring robust and scalable solutions on the Back-end. Committed to collaborating with teams to achieve project objectives and  continuously enhancing technical skills across all aspects of Development.',
		fotoProfileUrl: 'string',
	}

	const socialIconLink: Types.typesProfile.SocialLink[] = [
		{
			title: 'Github',
			description: '',
			url: 'https://github.com/Wdnyana',
			icon: Github,
		},
		{
			title: 'Linkedin',
			description: '',
			url: 'https://www.linkedin.com/feed/',
			icon: Linkedin,
		},
		{
			title: 'Instagram',
			description: '',
			url: 'https://www.instagram.com/codevo.dev/',
			icon: Instagram,
		},
		{
			title: 'Website Portfolio',
			description: '',
			url: 'https://purwa-widnyana.vercel.app/',
			icon: Globe,
		},
	]

	return {
		profile: dataProfile,
		socialLink: socialIconLink,
	}
}
