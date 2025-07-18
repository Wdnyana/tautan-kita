export interface ProfileData {
	nama: string
	username: string
	bio: string
	fotoProfileUrl: string
}

export interface DataLink {
	id: number
	title: string
	url: string
}

export interface PageData {
	profile: ProfileData
	dataLink: DataLink[]
}
