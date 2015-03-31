'use strict';

app.factory('FormService', function ($firebase, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var forms = $firebase(ref.child('individual_forms')).$asArray();

    var Form = {
        all: forms,
        create: function (form) {
            return forms.$add(form);
        },
        get: function (formId) {
            return $firebase(ref.child('individual_forms').child('form_id')).$asObject();
        },
        delete: function (form) {
            return forms.$remove(form);
        }
    };
    return Form;

});