db.unicorns.update(
    {name: "Pilot"},
    {$push: {loves: "chocolate"}}
)