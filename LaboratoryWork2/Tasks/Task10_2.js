db.towns.find(
    {
        "mayor.party": {$exists: false}
    },
    {
        _id: 0,
        name: 1,
        mayor: 1
    }
)