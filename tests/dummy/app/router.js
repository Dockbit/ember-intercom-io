import Ember from 'ember';
import config from './config/environment';

const  { Router } = Ember;

const R = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

R.map(function() {
  this.route('help');
});

export default R;
