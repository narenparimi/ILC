//TODO: Break this controller into tiny controllers.
angular.module('formBuilderApp')
	.controller('WizardsController',
		function WizardsController($scope, $location) {
			'use strict';
			$scope.model = {};
			
			var YNA = 'YNA';
			var YN = 'YN';
			var DETAILS = 'DETAILS';
	
			$scope.model.step1 = {};

			$scope.breadCrumbs = [{
				id: '1',
				value: 'Step 1'
            }, {
				id: '2',
				value: 'Step 2'
            }, {
				id: '3',
				value: 'Step 3'
            }, {
				id: '4',
				value: 'Step 4'
            }, {
				id: '5',
				value: 'Step 5'
            }, {
				id: '6',
				value: 'Step 6'
            }];

			/*$scope.step2Model = {
				addAQuestion: '',
				na: false,
				naCamera: false,
				yn: false,
				ynCamera: false,
				desc: '',
				staffLocation: '',
				flag: false,
				req: false
			};*/

			$scope.step2Model = {
				addAQuestion: '',
				typeOfQuestion: false,
				ynaCamera: false,
				ynCamera: false,
				details: '',
				flag: false,
				req: false
			};

			$scope.model.step2 = {
				selected: null,
				listOfQuestions: []
			};

			$scope.model.step3 = {};
			$scope.model.step4 = {};
			$scope.model.step5 = {};
			$scope.model.step6 = {};

			$scope.createSurveyName = function () {
				$scope.model.step1 = {
					formName: $scope.formName,
					formDescription: $scope.formDescription
				};
				$scope.step2Model = {};
				$scope.nextStep(1);
			};

			$scope.addQuestion = function () {
				$scope.model.step2.listOfQuestions.push($scope.step2Model);
				$scope.resetStep2();
			};

			$scope.nextStep = function (currentStep) {
				$location.path('/step' + (currentStep + 1));
			};

			$scope.resetStep2 = function () {
				$scope.step2Model = {
					addAQuestion: '',
					typeOfQuestion: false,
					ynaCamera: false,
					ynCamera: false,
					details: '',
					flag: false,
					req: false
				};
			};
	
			$scope.resetTypeOfQuestions = function(){
				if($scope.step2Model.typeOfQuestion !=YNA){
					$scope.step2Model.ynaCamera = false;
				}
				
				if($scope.step2Model.typeOfQuestion !=YN){
					$scope.step2Model.ynCamera = false;
				}
				if($scope.step2Model.typeOfQuestion !=DETAILS){
					$scope.step2Model.details = '';
				}
			}

			$scope.editQuestion = function(item){
				$scope.step2Model = item;
			}
			
			 $scope.deleteQuestion = function (uuid) {
				var quest = $scope.model.step2.listOfQuestions[uuid];
				 $scope.model.step2.listOfQuestions.splice(uuid, 1);
				 $scope.resetStep2();
			 }

		});