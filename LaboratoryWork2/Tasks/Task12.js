db.unicorns
    .find(
    {
        gender: "f",
        weight: {$gte: 500, $lte: 600}
    }
    )
    .count()