import { console } from '@ephox/dom-globals';

declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'mention',
  height: 600,

  mention_ch: '@',
  mention_callback: (v) => console.log('xxx ', v)
});

export {};
