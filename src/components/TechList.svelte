<script>
  import { skills } from '~/constants';

  import Icon from './Icon.svelte';
</script>

<ul
  class="logo-cloud grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
>
  {#each skills as { icon, name }}
    <li class="logo-item p-20">
      <span>
        <Icon {icon} class="h-10 w-10" />
      </span>
      <span>{name}</span>
    </li>
  {/each}
</ul>
