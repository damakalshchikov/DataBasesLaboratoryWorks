db.unicorns
    .aggregate(
    {
        $group: {
            _id: "$gender",
            count: {$sum: 1}
        }
    }
    )