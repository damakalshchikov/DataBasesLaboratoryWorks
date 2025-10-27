db.createCollection("towns")
db.towns.insertMany(
    [
        {
          name: "Punxsutawney",
          population: 6200,
          last_census: ISODate("2008-01-31"),
          famous_for: [""],
          mayor: {
            name: "Jim Wehrle"
          }
        },
        {
          name: "New York",
          population: 22200000,
          last_census: ISODate("2009-07-31"),
          famous_for: ["status of liberty", "food"],
          mayor: {
            name: "Michael Bloomberg",
            party: "I"
          }
        },
        {
          name: "Portland",
          population: 528000,
          last_census: ISODate("2009-07-20"),
          famous_for: ["beer", "food"],
          mayor: {
            name: "Sam Adams",
            party: "D"
          }
        }
    ]
)