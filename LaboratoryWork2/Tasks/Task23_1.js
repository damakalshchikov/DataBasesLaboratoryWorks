db.unicorns.update(
    {name: "Horny"},
    {$set: {habitat: {$ref: "habitats", $id: "forest"}}}
)

db.unicorns.update(
    {name: "Aurora"},
    {$set: {habitat: {$ref: "habitats", $id: "mountains"}}}
)

db.unicorns.update(
    {name: "Solnara"},
    {$set: {habitat: {$ref: "habitats", $id: "meadow"}}}
)