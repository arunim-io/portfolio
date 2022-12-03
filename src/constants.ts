import MaterialSymbolsFlutter from '~icons/material-symbols/flutter';
import MaterialSymbolsInfo from '~icons/material-symbols/info';
import MdiLanguageCss3 from '~icons/mdi/language-css3';
import MdiLanguageHtml5 from '~icons/mdi/language-html5';
import MdiLanguageJavascript from '~icons/mdi/language-javascript';
import MdiLanguageMarkdown from '~icons/mdi/language-markdown';
import MdiLanguagePython from '~icons/mdi/language-python';
import MdiLanguageTypescript from '~icons/mdi/language-typescript';
import MdiNewspaperVariantMultiple from '~icons/mdi/newspaper-variant-multiple';
import MdiReact from '~icons/mdi/react';
import MdiTailwind from '~icons/mdi/tailwind';
import SimpleIconsAstro from '~icons/simple-icons/astro';
import SimpleIconsDart from '~icons/simple-icons/dart';
import SimpleIconsDjango from '~icons/simple-icons/django';
import SimpleIconsRedux from '~icons/simple-icons/redux';

export const links = [
  { name: 'About Me', href: '/about', icon: MaterialSymbolsInfo },
  { name: 'Blog', href: '/blog', icon: MdiNewspaperVariantMultiple },
];

export const skills = [
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
