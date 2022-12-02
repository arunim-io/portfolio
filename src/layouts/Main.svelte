<script lang="ts">
  import { AppShell } from '@brainandbones/skeleton';

  import Header from '~/components/Header.svelte';
  import Sidebar from '~/components/Sidebar.svelte';
</script>

<AppShell slotSidebarRight="hidden md:block">
  <Header slot="header" />
  <Sidebar slot="sidebarRight" />
  <slot />
</AppShell>
