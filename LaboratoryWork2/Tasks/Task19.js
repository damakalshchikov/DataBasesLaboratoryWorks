db.towns.update(
    {name: "Portland"},
    {$unset: {"mayor.party": 1}}
)