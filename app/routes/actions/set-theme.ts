import { createThemeAction } from 'remix-themes';
import { themeSessionResolver } from '~/config/theme';

export const action = createThemeAction(themeSessionResolver);
