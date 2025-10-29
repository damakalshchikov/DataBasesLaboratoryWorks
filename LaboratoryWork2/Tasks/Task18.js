// Старая версия
db.unicorns.update(
    {gender: "m"},
    {$inc: {vampires: 5}},
    {multi: true}
)

// Новая версия
db.unicorns.updateMany(
    {gender: "m"},
    {$inc: {vampires: 5}},
)