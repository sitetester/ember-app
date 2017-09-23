import DS from 'ember-data';


export default DS.JSONSerializer.extend({
	// this will convert backend provided array of json entities into Ember.js native jsonapi format
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		return this._super(store, primaryModelClass, payload, id, requestType);
	}

});
