// .storybook/manager.ts
import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
    theme: {
        ...themes.dark,
        brandTitle: 'Raven UI',
        brandUrl: 'https://www.npmjs.com/package/@obonelli/raven-ui'
    }
});
