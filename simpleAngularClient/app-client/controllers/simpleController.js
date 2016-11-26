
app.controller("simpleController", function ($scope, simpleFactory) {

    $scope.people = {};

    init();
    function init(){
        $scope.people = simpleFactory.getPeople();
    }
    
});