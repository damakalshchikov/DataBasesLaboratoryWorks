db.towns.remove(
    {"mayor.party": {$exists: false}}
)