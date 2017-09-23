import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model() {
		return this.get('store').findAll('post');
	},

	setupController(controller, posts) {
		this._super(controller, posts);
		this.controllerFor('posts').set('showAddNewPostLink', true);
	}
});
