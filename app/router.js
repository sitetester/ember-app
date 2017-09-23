import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('login');
	this.route('register');

	this.route('posts', function() {
		this.route('new');
	});

});

export default Router;
