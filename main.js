import './public/style/_style.sass';
import { getPhotos } from './public/js/_getData';
import './public/js/_getSearch';
import { configureLogo } from './public/js/_logo.js';
import { configureSearchIcon, configureUploadIcon, configureGithubIcon, configureNotionIcon } from './public/js/_icons';


function initApp() {
  getPhotos();
  configureLogo();
  configureSearchIcon();
  configureUploadIcon();
  configureGithubIcon();
  configureNotionIcon();
}

document.addEventListener('DOMContentLoaded', initApp);