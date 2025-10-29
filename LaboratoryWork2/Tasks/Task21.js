db.unicorns.update(
    {name: "Aurora"},
    {
        $addToSet: {loves: {$each: ["sugar", "lemon"]}}
    }
)