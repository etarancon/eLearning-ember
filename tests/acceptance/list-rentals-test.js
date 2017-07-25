import {
  test
} from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, "Should show three rentals")
  })
});
test('should link to information about the company', function(assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  })
});
test('should link to contact information.', function(assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  })
});

test('should list available rentals.', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see three listing')
  })
});

test('should filter the list of rentals by city.', function(assert) {});

test('should show details for a selected rental', function(assert) {
  visit('/rentals/grand-old-mansion');

  andThen(function() {
    assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to grand-old-mansion rental');
    assert.equal(find('.description').length, 1);
    assert.equal(find('h2.title').length, 1);
  })
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});
