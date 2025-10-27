db.unicorns.find(
    {
        gender: "f",
        weight: {$gte: 500, $lte: 700}
    },
    {
        _id: 0
    }
)