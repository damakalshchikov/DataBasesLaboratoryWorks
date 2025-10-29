db.unicorns.update(
    {name: "Raleigh"},
    {
        $set: {
            loves: ["redbull"]
        }
    }
)