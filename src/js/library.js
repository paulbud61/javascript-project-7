import './team-load-to-modal';
import { refs } from './refs';

window.addEventListener('load', renderingFromStorage.loadFromStorageWatched);
refs.watchedQueueBtnBlock.addEventListener(
  'click',
  renderingFromStorage.onClickWatched
);
refs.btnWrapper.addEventListener('click', onBtnAddToLibrary);
refs.btnWrapper.addEventListener('click', updateMarkupLibrary);
refs.pagination.addEventListener('click', onBtnPageClick);
