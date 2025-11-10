use Learn

// 1. Horny - лес вокруг Москвы
db.unicorns.updateOne(
  { name: "Horny" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [37.3, 55.5],
          [37.9, 55.5],
          [37.9, 56.0],
          [37.3, 56.0],
          [37.3, 55.5]
        ]]
      }
    }
  }
)

// 2. Aurora - горная область в Альпах
db.unicorns.updateOne(
  { name: "Aurora" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [11.0, 47.0],
          [11.8, 47.0],
          [11.8, 47.6],
          [11.0, 47.6],
          [11.0, 47.0]
        ]]
      }
    }
  }
)

// 3. Unicrom - зона вокруг Байконура
db.unicorns.updateOne(
  { name: "Unicrom" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [62.8, 45.5],
          [63.8, 45.5],
          [63.8, 46.4],
          [62.8, 46.4],
          [62.8, 45.5]
        ]]
      }
    }
  }
)

// 4. Roooooodles - область вокруг Нью-Йорка
db.unicorns.updateOne(
  { name: "Roooooodles" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [-74.5, 40.4],
          [-73.5, 40.4],
          [-73.5, 41.0],
          [-74.5, 41.0],
          [-74.5, 40.4]
        ]]
      }
    }
  }
)

// 5. Solnara - луга Прованса
db.unicorns.updateOne(
  { name: "Solnara" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [5.0, 43.0],
          [5.7, 43.0],
          [5.7, 43.6],
          [5.0, 43.6],
          [5.0, 43.0]
        ]]
      }
    }
  }
)

// 6. Ayna -  область Исландии
db.unicorns.updateOne(
  { name: "Ayna" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [-22.3, 63.8],
          [-21.3, 63.8],
          [-21.3, 64.5],
          [-22.3, 64.5],
          [-22.3, 63.8]
        ]]
      }
    }
  }
)

// 7. Kenny - окрестности Лондона
db.unicorns.updateOne(
  { name: "Kenny" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [-0.5, 51.2],
          [0.3, 51.2],
          [0.3, 51.8],
          [-0.5, 51.8],
          [-0.5, 51.2]
        ]]
      }
    }
  }
)

// 8. Raleigh - окрестности Токио
db.unicorns.updateOne(
  { name: "Raleigh" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [139.3, 35.4],
          [140.0, 35.4],
          [140.0, 36.0],
          [139.3, 36.0],
          [139.3, 35.4]
        ]]
      }
    }
  }
)

// 9. Leia - окрестности Сиднея
db.unicorns.updateOne(
  { name: "Leia" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [150.8, -34.2],
          [151.6, -34.2],
          [151.6, -33.5],
          [150.8, -33.5],
          [150.8, -34.2]
        ]]
      }
    }
  }
)

// 10. Pilot - окрестности Берлина
db.unicorns.updateOne(
  { name: "Pilot" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [13.0, 52.2],
          [13.8, 52.2],
          [13.8, 52.8],
          [13.0, 52.8],
          [13.0, 52.2]
        ]]
      }
    }
  }
)

// 11. Nimue - окрестности Дублина
db.unicorns.updateOne(
  { name: "Nimue" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [-6.6, 53.0],
          [-5.9, 53.0],
          [-5.9, 53.7],
          [-6.6, 53.7],
          [-6.6, 53.0]
        ]]
      }
    }
  }
)

// 12. Dunx - окрестности Рима
db.unicorns.updateOne(
  { name: "Dunx" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [12.2, 41.6],
          [12.8, 41.6],
          [12.8, 42.2],
          [12.2, 42.2],
          [12.2, 41.6]
        ]]
      }
    }
  }
)

// 13. Barny - окрестности Парижа
db.unicorns.updateOne(
  { name: "Barny" },
  {
    $set: {
      habitat: {
        type: "Polygon",
        coordinates: [[
          [2.0, 48.5],
          [2.7, 48.5],
          [2.7, 49.1],
          [2.0, 49.1],
          [2.0, 48.5]
        ]]
      }
    }
  }
)