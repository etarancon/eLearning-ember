import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let rental = Ember.Object.create({
  image: 'fake.png',
  title: 'test-title',
  owner: 'test-owner',
  propertyType: 'test-type',
  city: 'test-city',
  bedrooms: 3
});

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('should display rentals details', function(assert) {
  this.set('rentalObject', rental);
  this.render(hbs `{{rental-listing rental=rentalObject}}`);
  assert.equal(this.$('.listing h3').text(), 'test-title', 'title-test-title');
  assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'owner-test-owner');
});

test('should change the size of the image', function(assert) {
  this.set('rentalObject', rental);
  this.render(hbs `{{rental-listing rental=rentalObject}}`);
  assert.equal(this.$('.listing .image.wide').length, 0, 'The image is small');
  this.$('.listing .image').click();
  assert.equal(this.$('.listing .image.wide').length, 1, 'The image is larger');
  this.$('.listing .image').click();
  assert.equal(this.$('.listing .image.wide').length, 0, 'The image is smaller');
});
