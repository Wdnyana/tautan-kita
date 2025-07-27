<script lang="ts">
	let { nama, username, role, bio, fotoProfileUrl } = $props()
</script>

<div class="flex min-h-[80%] w-full flex-col items-center justify-center gap-5 text-center">
	<!-- render data name using text expression div for styling h1 -->
	<div class="">
		{@html nama}
	</div>
	<p>@{username}</p>

	<h3 class="mt-3">{role}</h3>
	<p class="w-full md:max-w-[95%] lg:max-w-[85%] xl:max-w-[65%]">
		{bio}
	</p>
</div>
