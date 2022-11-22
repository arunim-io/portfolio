<script lang="ts">
  import { AppBar } from '@brainandbones/skeleton';
</script>

<header>
  <p class="bg-warning-600 text-center font-mono text-sm text-white">
    This web site is still under a work in progress. If you have any problem, please feel free to
    open a new issue on
    <a href="https://github.com/arunim-io/portfolio/issues">GitHub</a>.
  </p>
  <AppBar>
    <svelte:fragment slot="lead">
      <h3>Arunim's Portfolio</h3>
    </svelte:fragment>
    <svelte:fragment slot="trail">
      <div>
        <a class="btn btn-xl" href="/blog" target="_blank" rel="noreferrer"> Blog </a>
      </div>
    </svelte:fragment>
  </AppBar>
</header>
