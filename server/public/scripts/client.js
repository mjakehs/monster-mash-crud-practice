//add app, controller, ajax requests, dom manip
let monsterApp = angular.module('MonsterApp', []);

monsterApp.controller('MonsterController', ['$http', function($http ){
    let self = this;
    self.monsters = []; 
    //$http.put()
    //$http.post()
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
}]);
