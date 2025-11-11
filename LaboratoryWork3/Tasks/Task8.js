// Издатели
var pub1 = db.unicorns.findOne({ name: "Aurora" })._id;
var pub2 = db.unicorns.findOne({ name: "Unicrom" })._id;

// Подписчики
var subA = db.unicorns.findOne({ name: "Horny" })._id;
var subB = db.unicorns.findOne({ name: "Kenny" })._id;
var subC = db.unicorns.findOne({ name: "Leia" })._id;
var subD = db.unicorns.findOne({ name: "Pilot" })._id;

// Создаём коллекцию издателей и их подписчиков
db.follow.insertMany([
  { _id: pub1, publisher: "Aurora", followers: [subA, subB, subC] },
  { _id: pub2, publisher: "Unicrom", followers: [subA, subD] }
]);

//
// Посмотреть содержимое коллекции follow
//
db.follow.find()

//
// Найти на кого подписан Kenny
//
var kenny = db.unicorns.findOne({ name: "Kenny" })._id;
db.follow.find(
  { followers: kenny },
  { publisher: 1, _id: 0 }
)
