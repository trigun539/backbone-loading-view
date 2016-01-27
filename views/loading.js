import Marionette from 'backbone.marionette';
import Template from './../templates/loading.hbs';

export default Marionette.ItemView.extend({

  template: Template,

  ui: {
    loader: '.loader'
  },

  onRender () {
    console.log('Showing the loading view!');
  }
});