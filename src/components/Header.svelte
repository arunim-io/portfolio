<script lang="ts">
  import { AppBar } from '@brainandbones/skeleton';

  import { links } from './Links';
</script>

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
