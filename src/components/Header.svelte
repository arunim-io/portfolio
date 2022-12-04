<script lang="ts">
  import { AppBar } from '@brainandbones/skeleton';
  import { onMount } from 'svelte/internal';
  import { writable } from 'svelte/store';

  import { headerDrawerStore } from '~/stores';

  import { links } from '../constants';

  import MaterialSymbolsMenuRounded from '~icons/material-symbols/menu-rounded';

  let currentHref = writable('');

  onMount(() => {
    const result = links.find((link) => link.href == window.location.pathname);
    if (result) currentHref.set(result.href);
  });
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a href="/">
      <h3>Arunim's Portfolio</h3>
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <div class="hidden sm:block">
      {#each links as { href, name }}
        <a
          {href}
          class={`btn ${
            href === $currentHref
              ? 'text-primary-500 underline'
              : 'hover:text-primary-500 hover:underline'
          }`}
        >
          {name}
        </a>
      {/each}
    </div>
    <button on:click={() => headerDrawerStore.set(true)} class="block sm:hidden">
      <MaterialSymbolsMenuRounded class="w-8 h-8" />
    </button>
  </svelte:fragment>
</AppBar>
