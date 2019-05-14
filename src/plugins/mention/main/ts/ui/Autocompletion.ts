/**
 * mention plugin
 * @author zhuanggong.jh
 */

import Editor from 'tinymce/core/api/Editor';
import Promise from 'tinymce/core/api/util/Promise';
import XHR from 'tinymce/core/api/util/XHR';
import JSON from 'tinymce/core/api/util/JSON';

import Actions from '../core/Actions';
import Settings from '../api/Settings';

const init = (editor: Editor): void => {
  const config = {
    ch: Settings.getMentionCh(editor),
    minChars: Settings.getMentionMinChars(editor),
    columns: 1,
    fetch: Settings.getMentionFetch(editor),
    onAction: (autocompleteApi, rng, value) => {
      const format = Settings.getMentionFormat(editor);
      const callback = Settings.getMentionCallback(editor);

      editor.selection.setRng(rng);

      if (typeof format === 'function') {
        Actions.insertMention(editor, format(value));
      } else {
        Actions.insertMention(editor, value);
      }

      if (typeof callback === 'function') {
        callback(value);
      }

      autocompleteApi.hide();
    }
  };

  if (!config.fetch) {
    config.fetch = function (pattern, maxResults) {
      return new Promise(function (resolve) {

        XHR.send({
          url: `https://restcountries.eu/rest/v2/name/${pattern}?fields=name;flag`,
          success (text) {
            const result = [];
            const response = JSON.parse(text);
            const length = response.length > maxResults ? maxResults : response.length;
            for (let i = 0; i < length; i++) {
              const item = response[i];
              result.push({
                value: `<img src="${item.flag}" alt="${item.name}" width="48" height="24">`,
                text: item.name,
                icon: `<img src="${item.flag}" width="28" height="14" style="width:28px; height:14px;">`,
              });
            }
            resolve(result);
          }
        });
      });
    };
  }
  editor.ui.registry.addAutocompleter('mention', config);

};

export {
  init
};