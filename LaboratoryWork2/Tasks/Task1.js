db.unicorns.find({gender: "m"}).sort({name: 1})
db.unicorns.find({gender: "f"}).sort({name: 1}).limit(3)