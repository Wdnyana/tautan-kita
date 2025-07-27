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

<section id="tautan" class="container mx-auto h-screen px-3 lg:px-6"><CardLinkSection /></section>

<section id="contact" class="container mx-auto h-screen px-3 lg:px-6">
	<CallActionSection />
</section>
