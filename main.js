import './public/style/_style.sass';
import { getPhotos } from './public/js/_getData';
import './public/js/_getSearch';
import { configureLogo } from './public/js/_logo.js';
import { configureSearchIcon, configureUploadIcon, configureGithubIcon, configureNotionIcon } from './public/js/_icons';
import { listenToScreenWidth } from './public/js/_getWidth';
import { listenToScreenWidth } from './public/js/_listenWidth';


function initApp() {
  configureLogo();
  configureSearchIcon();
  configureUploadIcon();
  configureGithubIcon();
  configureNotionIcon();
  listenToScreenWidth();
}

document.addEventListener('DOMContentLoaded', initApp);



