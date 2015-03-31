'use strict';

app.controller('FireBaseController', function FireBaseController($scope, FormService) {


    $scope.forms = FormService.all;
    
    $scope.formData = {
        form_id: '',
        form_name: ''
    }

    $scope.storeFormData = function () {
        debugger;
        FormService.create($scope.formData).then(function(){
            alert('Form data saved to firebase');
        });
    }
    
    $scope.deleteForm = function(){
        //TODO: 
    }


});