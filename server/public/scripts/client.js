//add app, controller, ajax requests, dom manip
let monsterApp = angular.module('MonsterApp', []);

monsterApp.controller('MonsterController', ['$http', function($http ){
    let self = this;
    $http.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };

    self.monsters = []; 
    //$http.put()
    //building objectToSend
    self.newMonster = {};
    self.newMonster.name = '';
    self.newMonster.lethality = '';

    self.editBool = false;

    self.addMonster = function(){
        $http({
            method: 'POST',
            url: '/monsters',
            data: self.newMonster
        }).then(function(response){
            console.log(response.status);
            self.updateList();
            self.newMonster.name = '';
            self.newMonster.lethality = '';
        }).catch(function(error){
            console.log('Error: ', error);
        })
    }
    self.updateList = function(){
        $http({
            method: 'GET',
            url: '/monsters'}).then(function(response){
            self.monsters = response.data;
        }).catch(function(error){
            console.log('Error: ', error);
        })
    }
    self.updateList();

    self.deleteMonster = function(monsterid){
        self.deleteId = {};
        self.deleteId._id = monsterid;
        console.log(self.deleteId)
        $http({
            method: 'delete',
            url: '/monsters',
            data: self.deleteId
        }).then(function(response){
            self.updateList();
        }).catch(function(error){
            console.log('Error: ', error);
        })
    };

    self.current_id = '';
    self.editMonster = {};
    self.editMonster.name = '';
    self.editMonster.lethality = '';

    self.editThisMonster = function(_id){
        self.editBool = !self.editBool;
        self.editMonster._id= _id;
    };

    self.putMonster = function(){
        $http({
            method: 'PUT',
            url: '/monsters',
            data: self.editMonster
        }).then(function(response){
            self.updateList();
            self.editBool = false;
        }).catch(function(error){
            console.log('Error: ', error);
        })
    }
}]);
