declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'mention',
  height: 600,

  mention_ch: '@',
});

export {};
