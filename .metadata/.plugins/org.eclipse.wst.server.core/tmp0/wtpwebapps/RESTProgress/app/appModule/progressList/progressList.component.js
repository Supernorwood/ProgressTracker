angular.module('appModule').component('progressList', {
	templateUrl : 'app/appModule/progressList/progressList.component.html',

	controller : function(progressService) {
		var vm = this;

		vm.selected = null;

		vm.editAction = null;

		vm.actions = [];

		var reloadActions = function() {
			progressService.index() // returns promise of
			.then(function(response) {
				vm.actions = response.data;
			});
		};

		reloadActions();

		vm.actions = progressService.index();

		progressService.index().then(function(response) {
			console.log(response);
			console.log(response.data);
			vm.actions = response.data;
			console.log(vm.actions);
		})

		vm.deleteAction = function(action) {
			progressService.destroy(action);
		}

		vm.setEditAction = function() {
			vm.editAction = angular.copy(vm.selected);
		}

		vm.displayTable = function() {
			vm.selected = null;
		}

		vm.displayAction = function(action) {
			vm.selected = action;
		}
		
		vm.countActions = function() {
            return vm.actions.length;
        }
		
		// reloads index
		vm.reload = function() {
			progressService.index().then(function(res) {
				vm.actions = res.data;
			})
		}

		vm.reload();
		
		
		
		
		   // create
		vm.addAction = function(newAction) {
//			newTask.activity = '';
//			newTask.minutes = '';

			progressService.create(newAction).then(function() {
			
				vm.reload();
				
			})
		}
		
		
		// Update
		vm.updateAction = function(action) {

			console.log(action);
			var res = progressService.update(action);

			res.then(function(res) {
				vm.selected = res.data;
				vm.editAction = null;
				vm.reload();
			})

		}
		
		// Delete
		vm.deleteAction = function(id) {
			var res = progressService.destroy(id);

			res.then(function(res) {
				vm.reload();
			})
		}

	},
	controllerAs : 'vm'
});
