
import gif from './media/gif';

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
export default {
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" '
      + 'src="' + gif + '">';

    return element.querySelector('img');
  },
};
