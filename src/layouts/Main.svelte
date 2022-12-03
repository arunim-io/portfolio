<script lang="ts">
  import { AppShell } from '@brainandbones/skeleton';

  import Header from '~/components/Header.svelte';
  import Sidebar from '~/components/Sidebar.svelte';
</script>

<AppShell slotSidebarRight="hidden md:flex h-">
  <Header slot="header" />
  <Sidebar slot="sidebarRight" />
  <main class="my-20 mx-10 flex flex-col gap-y-20 sm:mx-16 lg:mx-20">
    <slot />
  </main>
</AppShell>
