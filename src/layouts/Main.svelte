<script>
  import { AppShell } from '@brainandbones/skeleton';

  import Header from '~/components/Header.svelte';
</script>

<AppShell>
  <Header slot="header" />
  <main class="flex flex-col gap-y-20 my-20 mx-10 sm:mx-16 lg:mx-20">
    <slot />
  </main>
</AppShell>
