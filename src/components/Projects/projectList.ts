import type { JSXElement } from 'solid-js';

import tbank from '../../assets/projects/tbank.png';
import avito from '../../assets/projects/autoteka.png';
import taxi from '../../assets/projects/taxi.png';

import gamesPreview from '../../assets/projects/gamesPreview.png';
import worktimePreview from '../../assets/projects/worktimePreview.png';
import mockupPreview from '../../assets/projects/mockupPreview.png';
import vkmutePreview from '../../assets/projects/vkmutePreview.png';
import bakeryPreview from '../../assets/projects/bakeryPreview.png';
import sleepycarePreview from '../../assets/projects/sleepycarePreview.png';

import {
  Icon, npm, extension, pwa, github
} from './iconList';

export class Project {
  name: string;
  preview: string | (() => JSXElement);
  link: string;
  repo?: string;
  npm?: string;
  descriptionSlug: string;
  previewStyle?: string;
  halfWidth?: boolean;
  icons?: Icon[];
  desktopOnly?: boolean;
  flip?: boolean;

  constructor(project: Project) {
    this.name = project.name
    this.preview = project.preview
    this.link = project.link
    this.repo = project.repo
    this.npm = project.npm
    this.descriptionSlug = project.descriptionSlug
    this.previewStyle = project.previewStyle
    this.halfWidth = project.halfWidth
    this.icons = project.icons
    this.desktopOnly = project.desktopOnly
    this.flip = project.flip
  }
}

export default [
  // new Project({
  //   name: 'Warframe Center',
  //   preview: warframePreview,
  //   link: 'https://warframe.center',
  //   descriptionSlug: 'warframe_desc'
  // }),
  new Project({
    name: 'Яндекс.Такси',
    preview: taxi,
    link: 'https://taxi.yandex.ru/ru_ru/',
    descriptionSlug: 'yandex_taxi_desc',
  }),
  new Project({
    name: 'Авито и Автотека',
    preview: avito,
    link: 'https://www.avito.ru/',
    descriptionSlug: 'avito_desс',
  }),

  new Project({
    name: 'T-Bank Умная камера',
    preview: tbank,
    link: 'https://www.tinkoff.ru/about/news/05122023-tinkoff-launched-the-first-smart-financial-camera/',
    descriptionSlug: 'tbank_desc',
  }),
  new Project({
    name: 'VK Mute',
    preview: vkmutePreview,
    link: 'https://chrome.google.com/webstore/detail/vk-mute/mcnkfnjggkbenehgfelnnkklpkpjeibl',
    descriptionSlug: 'vkmute_desc',
    halfWidth: true,
    icons: [ extension, github ]
  }),
  new Project({
    name: 'Vue 3D Mockup',
    preview: mockupPreview,
    link: '',
    npm: 'https://www.npmjs.com/package/vue-three-d-mockup',
    descriptionSlug: 'mockup_desc',
    halfWidth: true,
    icons: [ npm, github ]
  }),
  new Project({
    name: 'GameJolt Games',
    preview: gamesPreview,
    link: 'https://gamejolt.com/@dryrainbow/games',
    descriptionSlug: 'games_desc',
    flip: true,
  })
]
