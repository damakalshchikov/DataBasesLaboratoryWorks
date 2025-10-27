db.towns.find(
    {
        "mayor.party": "I"
    },
    {
        _id: 0,
        name: 1,
        mayor: 1
    }
)