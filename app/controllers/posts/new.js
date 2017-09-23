import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		doAddNewPost() {
			let self = this;
			/**
      Redirects to posts page after login
      */
			function transitionToPosts() {
				self.transitionToRoute('/posts');
			}

			/**
       * Handle the error
       * @param {string} reason - Failure reason
       */
			function failure(reason) {
				// Handle in greaceful way
			}

			let {
				title,
				body
			} = this.getProperties('title', 'body');

			if (!title || !body) {
				this.set('errorMessage', 'Title/Body missing.');
			} else {
				let post = this.get('store').createRecord('post', {
					title: title,
					body: body
				});

				post.save().then(transitionToPosts).catch(failure);
			}
		}
	}
});
