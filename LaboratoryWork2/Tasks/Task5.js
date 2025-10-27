db.unicorns.find(
    {},
    {
        loves: {$slice: 1},
        _id: 0
    }
)