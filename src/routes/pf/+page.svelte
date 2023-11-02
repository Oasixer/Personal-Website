<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import SPA from '@spa';

  let load_portfolio: string = $page.url.searchParams.get('proj') || 'default';
  console.log("blah: ", load_portfolio);
</script>

<SPA {load_portfolio} load_resume={false}></SPA>
