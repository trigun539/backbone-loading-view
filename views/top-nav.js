import Marionette from 'backbone.marionette';
import Template from './../templates/top-nav.hbs';

export default Marionette.ItemView.extend({

  template: Template,

  tagName: 'ul',

  id: 'top-nav-list',

  initialize () {
    // Fetch some stuff
  },

  onRender () {

  }
});