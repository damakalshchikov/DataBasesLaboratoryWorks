// Старая версия
db.unicorns.save({
  name: 'Barny',
  loves: ['grape'],
  weight: 340,
  gender: 'm'
})

// Новая версия
db.unicorns.insertOne({
  name: 'Barny',
  loves: ['grape'],
  weight: 340,
  gender: 'm'
})