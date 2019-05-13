/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Editor from 'tinymce/core/api/Editor';

const getMentionCh = (editor: Editor): string => {
  return editor.getParam('mention_ch', '@', 'string');
};

const getMentionMinChars = (editor: Editor): number => {
  return editor.getParam('mention_minChars', 2, 'number');
};

const getMentionFetch = (editor: Editor) => {
  return editor.getParam('mention_fetch');
};

const getMentionFormat = (editor: Editor) => {
  return editor.getParam('mention_format');
};

const getMentionCallback = (editor: Editor) => {
  return editor.getParam('mention_callback', () => {}, 'function');
};

export default {
  getMentionCh,
  getMentionMinChars,
  getMentionFormat,
  getMentionFetch,
  getMentionCallback
};