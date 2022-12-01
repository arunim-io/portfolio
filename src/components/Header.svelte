<script lang="ts">
  import { AppBar } from '@brainandbones/skeleton';

  import { links } from './Links';
</script>

<header>
  <p class="bg-warning-700 text-center font-mono text-sm text-white">
    This web site is still under a work in progress. If you have any problem, please feel free to
    open a new issue on
    <a href="https://github.com/arunim-io/portfolio/issues">GitHub</a>.
  </p>
  <AppBar class="block md:hidden">
    <svelte:fragment slot="lead">
      <a href="/"><h3>Arunim's Portfolio</h3></a>
    </svelte:fragment>
    <div slot="trail">
      {#each links as { href, name }}
        <a {href} class="btn hover:text-primary-500 hover:underline">
          {name}
        </a>
      {/each}
    </div>
  </AppBar>
</header>
