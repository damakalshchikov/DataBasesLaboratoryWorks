var findMale = function() {
    return db.unicorns.find({gender: "m"})
};

var cursor = findMale().sort({name: 1}).limit(2);

cursor.forEach(function(obj) {
    print(obj.name);
});