import searchIcon from "../assets/svg/lupa.svg";
import uploadIcon from '../assets/svg/upload.svg';
import githubIcon from '../assets/svg/github.svg';
import notionIcon from '../assets/svg/notion.svg';
import { imgSearch, iconUpload, github, notion } from "./_vars";

export function configureSearchIcon() {
  imgSearch.style.background = `url(${searchIcon}) center no-repeat`;
}

export function configureUploadIcon() {
  iconUpload.style.background = `url(${uploadIcon}) center no-repeat`;
}

export function configureGithubIcon() {
  github.style.background = `url(${githubIcon}) center no-repeat`;
}
export function configureNotionIcon() {
  notion.style.background = `url(${notionIcon}) center no-repeat`;
}
