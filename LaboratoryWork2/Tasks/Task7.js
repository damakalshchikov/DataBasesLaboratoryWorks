db.unicorns.find(
    {
        gender: "m",
        weight: {$gte: 500},
        loves: {$all: ["grape", "lemon"]}
    },
    {
        _id: 0
    }
)