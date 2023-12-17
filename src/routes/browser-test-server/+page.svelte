<script>
	export let data;
</script>
<div class="m-5">
<h1 class="text-3xl font-bold">Mobile Phone Model :</h1>
<h1 class="text-3xl font-bold">
     {data.headers.model
        ? data.headers.model
        : "Not Found!"}
</h1>
<h2 class="text-2xl font-bold">Brands:</h2>
<h1>{data.headers.brands}</h1>
<h2 class="text-2xl font-bold">Mobile (Y/N):</h2>
<h1>{data.headers.mobile=="?1" ? 'Yes' : 'No'}</h1>
<h2 class="text-2xl font-bold">Platform:</h2>
<h1>{data.headers.platform}</h1>
<h2 class="text-2xl font-bold">Other Details:</h2>
<h1>{data.headers.userAgent}</h1>
</div>