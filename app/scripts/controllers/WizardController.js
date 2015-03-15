
angular.module('formBuilderApp')
  .controller('WizardsController',
    function WizardsController( $scope,$location ) {
      'use strict';
	   $scope.model = {};
	   
       $scope.model.step1 = {};
	   
	   $scope.step2Model = {addAQuestion:'',na:false,naCamera:false,yn:false,ynCamera:false,desc:'',
							staffLocation:'',flag:false,req:false};
       $scope.model.step2 = [];
       
	   $scope.model.step3 = {};
       $scope.model.step4 = {};
       $scope.model.step5 = {};
       $scope.model.step6 = {};
	
		$scope.createSurveyName = function(){
			$scope.model.step1 = {formName:$scope.formName,formDescription:$scope.formDescription};
			$scope.step2Model = {};
			$location.path('/step2');
		};
	
		$scope.addQuestion = function(){
			//$scope.model.step2 = {na:$scope.na,yn:$scope.yn,desc:$scope.desc,staffLocation:$scope.staffLocation,flag:$scope.flag};
			$scope.model.step2.push($scope.step2Model);
			
		};
		
    });