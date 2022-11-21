<script>
  import { AppBar } from '@brainandbones/skeleton';
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <h1>Skeleton</h1>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a class="btn btn-sm" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
  </svelte:fragment>
</AppBar>
