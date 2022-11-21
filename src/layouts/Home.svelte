<script>
  import { AppShell } from '@brainandbones/skeleton';

  import Header from '~/components/Header.svelte';
  import Sidebar from '~/components/Sidebar.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <Header slot="header" />
  <Sidebar slot="sidebarLeft" />
  <slot />
</AppShell>
