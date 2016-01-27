import Marionette from 'backbone.marionette';
import Template from './../templates/side-nav.hbs';

export default Marionette.ItemView.extend({

  template: Template,

  tagName: 'ul',

  id: 'side-nav-list',

  initialize () {
    // Fetch some stuff
  },

  onRender () {

  }
});