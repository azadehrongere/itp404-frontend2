import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		editTask: function(id){
			var self = this;

			var type = this.get('model.type');
			var title = this.get('model.title');
			var description = this.get('model.description');
			var date = this.get('model.date');

			this.store.findRecord('task', id).then(function(task){
				task.set('type', type);
				task.set('title', title);
				task.set('description', description);
				task.set('date', new Date(date));

				task.save();

				self.transitionTo('tasks');

			});

			
			
		}
	}
});
