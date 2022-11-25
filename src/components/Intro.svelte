<script>
  import MdiFacebook from '~icons/mdi/facebook';
  import MdiInstagram from '~icons/mdi/instagram';
  import MdiTwitter from '~icons/mdi/twitter';

  const socialIcons = [
    { name: 'Facebook', url: 'https://www.facebook.com/arunim.io/', icon: MdiFacebook },
    { name: 'Instagram', url: 'https://www.instagram.com/arunim.io/', icon: MdiInstagram },
    { name: 'Twitter', url: 'https://twitter.com/arunim_io', icon: MdiTwitter },
  ];
</script>

<section class="flex flex-col justify-center gap-x-10 sm:flex-row md:mx-14">
  <div class="flex flex-col justify-center">
    <p class="mx-auto mb-5 flex flex-col">
      <span class="text-start text-sm">Yo, I'm</span>
      <span class="text-2xl font-semibold text-primary-500 lg:text-3xl">Mugdha Arunim Ahmed</span>
      <span class="capitalize">An Enthusiastic developer</span>
    </p>
    <div class="grid grid-flow-col-dense justify-center gap-5 sm:justify-start">
      {#each socialIcons as { icon: Icon, url }}
        <a href={url}>
          <Icon class="h-7 w-7 dark:text-white" />
        </a>
      {/each}
    </div>
  </div>
</section>
