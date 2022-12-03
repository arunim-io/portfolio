<script>
  import MaterialSymbolsFlutter from '~icons/material-symbols/flutter';
  import MdiLanguageCss3 from '~icons/mdi/language-css3';
  import MdiLanguageHtml5 from '~icons/mdi/language-html5';
  import MdiLanguageJavascript from '~icons/mdi/language-javascript';
  import MdiLanguageMarkdown from '~icons/mdi/language-markdown';
  import MdiLanguagePython from '~icons/mdi/language-python';
  import MdiLanguageTypescript from '~icons/mdi/language-typescript';
  import MdiReact from '~icons/mdi/react';
  import MdiTailwind from '~icons/mdi/tailwind';
  import SimpleIconsAstro from '~icons/simple-icons/astro';
  import SimpleIconsDart from '~icons/simple-icons/dart';
  import SimpleIconsDjango from '~icons/simple-icons/django';
  import SimpleIconsRedux from '~icons/simple-icons/redux';

  const skills = [
    { name: 'HTML', icon: MdiLanguageHtml5 },
    { name: 'CSS', icon: MdiLanguageCss3 },
    { name: 'Python', icon: MdiLanguagePython },
    { name: 'JavaScript', icon: MdiLanguageJavascript },
    { name: 'Markdown', icon: MdiLanguageMarkdown },
    { name: 'Django', icon: SimpleIconsDjango },
    { name: 'React', icon: MdiReact },
    { name: 'TypeScript', icon: MdiLanguageTypescript },
    { name: 'tailwindcss', icon: MdiTailwind },
    { name: 'Redux', icon: SimpleIconsRedux },
    { name: 'Dart', icon: SimpleIconsDart },
    { name: 'Flutter', icon: MaterialSymbolsFlutter },
    { name: 'astro', icon: SimpleIconsAstro },
  ];
</script>

<ul
  class="logo-cloud grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
>
  {#each skills as { icon: Icon, name }}
    <li class="logo-item p-20">
      <span>
        <Icon class="h-10 w-10" />
      </span>
      <span>{name}</span>
    </li>
  {/each}
</ul>
