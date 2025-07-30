export interface ProfileData {
	nama: string
	username: string
	role: string
	bio: string
	fotoProfileUrl: string
}

export interface SocialLink {
	title: string
	description: string
	url: string
	img: string
}
// for navbar link
export interface NavbarLink {
	title: string
	url: string
	active?: boolean
	activeFunction?: (url: string) => void | undefined
}

// for data profile and
export interface PageData {
	profile: ProfileData
	socialLink: SocialLink[]
}
