import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('user');
	},
	setupController(controller, register) {
		this._super(controller, register);
		// this will hide the error message from page which stays there wheile clicking between links
		this.controllerFor('register').set('errorMessage', false);
	}
});
