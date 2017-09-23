import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import RSVP from 'rsvp';

const App = Ember.Application.extend({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
	LOG_ACTIVE_GENERATION: true,
	LOG_VIEW_LOOKUPS: true,
	LOG_RESOLVER: true,
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver
});

RSVP.on('error', (error) => {
	Ember.assert(error, false);
});

loadInitializers(App, config.modulePrefix);

export default App;

