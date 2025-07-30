<script lang="ts">
	import CallActionSection from '$lib/components/section/CallActionSection.svelte'
	import CardLinkSection from '$lib/components/section/CardLinkSection.svelte'
	import HeroSection from '$lib/components/section/HeroSection.svelte'

	const { data } = $props()
</script>

<section id="home" class="h-screen w-full px-3 lg:px-6">
	<HeroSection
		nama={data.profile.nama}
		username={data.profile.username}
		role={data.profile.role}
		bio={data.profile.bio}
		fotoProfileUrl={data.profile.fotoProfileUrl}
	/>
</section>

<section
	id="tautan"
	class="container mx-auto flex max-h-full items-center px-3 lg:px-6 xl:h-[50vh]"
>
	<div
		class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:items-center xl:justify-center"
	>
		{#each data.socialLink as social}
			<CardLinkSection
				title={social.title}
				description={social.description}
				url={social.url}
				img={social.img}
			/>
		{/each}
	</div>
</section>

<section id="contact" class="container mx-auto h-screen px-3 lg:px-6">
	<CallActionSection />
</section>
