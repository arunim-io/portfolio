<script lang="ts">
  import { AppRail, AppRailTile } from '@brainandbones/skeleton';

  import { links } from './Links';
</script>

<AppRail>
  <section slot="lead">
    <AppRailTile tag="a" href="/">Arunim's Portfolio</AppRailTile>
  </section>
  <section slot="trail">
    {#each links as { href, icon: Icon }}
      <AppRailTile tag="a" {href}>
        <Icon class="h-10 w-10" />
      </AppRailTile>
    {/each}
  </section>
</AppRail>
