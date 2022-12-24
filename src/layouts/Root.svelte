<script>
  import { AppShell } from '@brainandbones/skeleton';

  import Header from '~/components/Header.svelte';
  import HeaderDrawer from '~/components/HeaderDrawer.svelte';
</script>

<HeaderDrawer />

<AppShell>
  <Header slot="header" />
  <main class={$$props.class ?? 'my-20 mx-10 flex flex-col gap-y-20 sm:mx-16 lg:mx-20'}>
    <slot />
  </main>
</AppShell>
