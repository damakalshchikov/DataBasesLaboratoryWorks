db.unicorns.
    find(
    {
        gender: "m",
    },
    {
        name: 1,
        _id: 0,
        loves: {$slice: 1}
    }
    )
    .sort({name: 1})