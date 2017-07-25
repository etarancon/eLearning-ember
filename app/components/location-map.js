import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service('maps'),

  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
