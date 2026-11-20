// The bruniverse theme. `astryx experimental theme editor` wrote this file once and never changes it again.
// The checked settings live in bruniverse.settings.json and the generated bruniverse.settings.ts;
// change them with `astryx experimental theme editor set bruniverse ...`. Add your own changes below: they win over the settings.
import {defineTheme} from '@astryxdesign/core/theme';
import {bruniverseSettings} from './bruniverse.settings';

export const bruniverseTheme = defineTheme({
  extends: bruniverseSettings,
  name: 'bruniverse',
});
