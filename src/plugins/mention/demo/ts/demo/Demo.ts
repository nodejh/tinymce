import { console } from '@ephox/dom-globals';

declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'mention',
  height: 600,
  // toolbar: false,
  mention_ch: '@',
});

export {};
