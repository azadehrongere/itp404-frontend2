import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('tasks', function() {
    this.route('new');
    this.route('edit', {path:'/edit/:task_id'});
  });
  this.route('applications');
  this.route('intro');
  this.route('task2');
  this.route('task3');
  this.route('task4');
  this.route('tasks2', function() {
    this.route('adventure');
    this.route('new');
  });
  this.route('tasks3');
  this.route('tasks4');

  this.resource('tasks', function() {
    this.route('new');
    this.route('edit', {path:'/edit/:task_id'});
  });
});

export default Router;
