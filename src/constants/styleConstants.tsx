const XS_MAX_WIDTH = '576px';
const SM_MAX_WIDTH = '768px';
const MD_MAX_WIDTH = '992px';
const LG_MAX_WIDTH = '1200x';
const XL_MAX_WIDTH = '1600px';

/**
 *
 * @const
 * @type {object}
 * globally used MediaQueries, follow bootstrap and antd rules
 */
export const MEDIA_QUERY = Object.freeze({
  XS: `(max-width: ${XS_MAX_WIDTH})`,
  SM: `(max-width: ${SM_MAX_WIDTH})`,
  MD: `(max-width: ${MD_MAX_WIDTH})`,
  LG: `(max-width: ${LG_MAX_WIDTH})`,
  XL: `(max-width: ${XL_MAX_WIDTH})`,
});

/**
 *
 * @const
 * @type {object}
 * globally used size
 */
export const GLOABL_SIZE = Object.freeze({
  headHeight: 80,
  footerHeight: 80,
});

export const THEME_COLOR = Object.freeze({
  primary: '#455a64',
  primaryLight: '#718792',
  primaryDark: '#1c313a',
  secondary: '#b0bec5',
  secondaryLight: '#e2f1f8',
  secondaryDark: '#808e95',
  primaryText: '#ffffff',
  secondaryText: '#000000',
  white: '#ffffff',
});
