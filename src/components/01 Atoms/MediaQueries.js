/* From https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053 */

import {css} from 'styled-components';

export const sizes = {
    desktopL: 1440,
    desktop: 1024,
    tablet: 768,
    mobileL: 425,
    mobile: 320
};

// Object.keys : return the keys of the objects from sizes

export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`;
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
    return accumulator
}, {});
