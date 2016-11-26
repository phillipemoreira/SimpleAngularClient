app.factory("simpleFactory", function () {
    var people = [
        { name: 'zak', age: '22' },
        { name: 'Patrick', age: '11' },
        { name: 'Monica', age: '33' }
    ];

    var factory = {};
    factory.getPeople = function () {
        return people;
    }

    return factory;
});