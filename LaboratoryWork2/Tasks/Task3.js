db.unicorns.find({gender: "m"}, {loves: 0, gender: 0}).sort({name: 1})
db.unicorns.find({gender: "f"}, {loves: 0, gender: 0}).sort({name: 1}).limit(3)