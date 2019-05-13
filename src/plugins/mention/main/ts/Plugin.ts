/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import PluginManager from 'tinymce/core/api/PluginManager';

import * as Autocompletion from './ui/Autocompletion';

/**
 * This class contains all core logic for the mention plugin.
 *
 * @class tinymce.mention.Plugin
 * @private
 */

PluginManager.add('mention', function (editor, pluginUrl) {
  Autocompletion.init(editor);
});

export default function () { }