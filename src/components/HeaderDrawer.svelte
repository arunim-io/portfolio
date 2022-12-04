<script>
  import { Drawer, ListBox, ListBoxItem } from '@brainandbones/skeleton';
  import { onMount } from 'svelte/internal';
  import { writable } from 'svelte/store';

  import { links } from '~/constants';

  import { headerDrawerStore } from '~/stores';

  let currentHref = writable('');

  onMount(() => {
    const result = links.find((link) => link.href == window.location.pathname);
    if (result) currentHref.set(result.href);
  });
</script>

<Drawer open={headerDrawerStore} position="right">
  <ListBox selected={currentHref} class="p-5 mt-5">
    {#each links as { name, href }}
      <ListBoxItem value={href}>{name}</ListBoxItem>
    {/each}
  </ListBox>
</Drawer>
