import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createUser: function() {
			let self = this;

			/**
       Redirects to login after registration
      */
			function transitionToLogin() {
				self.transitionToRoute('/login');
			}

			let {
				username,
				password,
				cpassword,
				email,
				name,
				age
			} = this.getProperties('username', 'password', 'cpassword', 'email', 'name', 'age');

			if (!username || !password || !cpassword || !email) {
				this.set('errorMessage', 'Fields with * are mandatory.');
			} else if (password !== cpassword) {
				this.set('errorMessage', "Passwords don't match.");
			} else {
				let user = this.get('store').createRecord('user', {
					username: username,
					password: password,
					email: email,
					name: name,
					age: age
				});

				user.save()
					.then(transitionToLogin)
					.catch((failure) => {
						alert(failure);
					});
			}
		}
	}
});
