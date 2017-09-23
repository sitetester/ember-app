import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller, login) {
		this._super(controller, login);
		// this will hide the error message from page which stays there wheile clicking between links
		this.controllerFor('login').set('errorMessage', false);
	}
});
