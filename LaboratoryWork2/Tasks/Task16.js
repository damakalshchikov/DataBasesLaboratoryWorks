// Старая версия
db.unicorns.update(
  {
      name: 'Ayna',
      weight: 733,
      vampires: 40,
      gender: "f",
      loves: ['strawberry', 'lemon']
  },
  {
    name: 'Ayna',
    weight: 800,
    vampires: 51,
    gender: 'f',
    loves: ['strawberry', 'lemon']
  }
)

// Новая версия
db.unicorns.update(
  { name: 'Ayna' },
  {
    $set: {
      weight: 800,
      vampires: 51
    }
  }
)