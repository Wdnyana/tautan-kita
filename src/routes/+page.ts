import { type Types } from '$lib'

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
			description:
				'Explore my repositories, see the code behind each project, and discover how I solve problems.',
			url: 'https://github.com/Wdnyana',
			img: 'https://t4.ftcdn.net/jpg/03/85/94/91/360_F_385949189_W1ydL4Z3c6Uy2OfB9rZNdbxVaIMOs16F.jpg',
		},
		{
			title: 'Linkedin',
			description:
				'Connect with me professionally, view my career journey and expertise, and lets discuss opportunities for collaboration.',
			url: 'https://www.linkedin.com/feed/',
			img: 'https://brand.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/og-social-share-image.jpg',
		},
		{
			title: 'Instagram',
			description:
				'I share my learning journey through content, code snippets, and of course, coffee.',
			url: 'https://www.instagram.com/codevo.dev/',
			img: 'https://www.inserthere.me/sites/default/files/instagram.jpg',
		},
		{
			title: 'Website Portfolio',
			description:
				'My curated projects. View case studies on how I transform ideas into tangible digital solutions.',
			url: 'https://purwa-widnyana.vercel.app/',
			img: '/src/lib/assets/portfolio.png',
		},
	]

	return {
		profile: dataProfile,
		socialLink: socialIconLink,
	}
}
