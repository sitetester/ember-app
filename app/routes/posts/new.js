import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller, posts) {
		this._super(controller, posts.new);
		// this will hide the 'Add New Post' link on /posts/new template
		this.controllerFor('posts').set('showAddNewPostLink', false);
	}
});
