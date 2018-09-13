//add app, controller, ajax requests, dom manip
let monsterApp = angular.module('MonsterApp', []);

monsterApp.controller('MonsterController', ['$http', function($http ){
    let self = this;
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
    //$http.delete()
    self.updateList();

    self.deleteMonster = function(){

    };

    self.editMonster = function(){
        self.editBool = !self.editBool;
    };

    self.editMosnter = {};
    self.editMonster.name = '';
    self.editMonster.lethality = '';
}]);
