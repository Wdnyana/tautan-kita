<script lang="ts">
	import ButtonLink from '$lib/components/button/ButtonLink.svelte'
	import SocialIcon from '$lib/components/icons/SocialIcon.svelte'

	let { data } = $props()
</script>

<div class="grid h-screen w-full grid-rows-[1fr_1fr_auto] gap-3 lg:grid-cols-12 lg:grid-rows-12">
	<section
		class="flex flex-col items-center justify-center px-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-11 lg:justify-start"
	>
		<div class="relative mt-8 mb-7 h-[120px] w-[120px] rounded-full bg-gray-500">
			<img
				src={data.dataProfile.fotoProfileUrl}
				alt="Profile"
				class="h-full w-full rounded-full object-cover object-center"
			/>
		</div>
		<h1 class="mb-5 text-[26px]">{data.dataProfile.nama}</h1>
		<p class="text-muted mb-6 text-[18px]">@{data.dataProfile.username}</p>
		<p class="text-center">{data.dataProfile.bio}</p>
	</section>
	<section
		class="flex flex-col items-center justify-start px-3 lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:row-end-13"
	>
		<div class="my-5 flex w-full flex-col items-center justify-evenly gap-5 md:flex-row lg:gap-0">
			{#each data.linkButton as dataLink}
				<ButtonLink url={dataLink.url} title={dataLink.title} />
			{/each}
		</div>
	</section>
	<section
		class="flex flex-col items-center justify-center px-3 lg:col-start-1 lg:col-end-5 lg:row-start-11 lg:row-end-13"
	>
		<SocialIcon />
	</section>
</div>
