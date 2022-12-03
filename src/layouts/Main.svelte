<script lang="ts">
  import { AppShell, Drawer } from '@brainandbones/skeleton';

  import Header from '~/components/Header.svelte';
  import { headerDrawerStore } from '~/stores';
</script>

<Drawer open={headerDrawerStore} position="right">(contents)</Drawer>

<AppShell>
  <Header slot="header" />
  <main class="my-20 mx-10 flex flex-col gap-y-20 sm:mx-16 lg:mx-20">
    <slot />
  </main>
</AppShell>
