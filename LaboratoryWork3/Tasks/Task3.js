use Learn

// Horny - недалеко от Москвы
db.unicorns.updateOne(
  { name: "Horny" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [37.6173, 55.7558]  // Москва
      }
    }
  }
)

// Aurora - живёт в горах
db.unicorns.updateOne(
  { name: "Aurora" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [11.3969, 47.2692]  // Инсбрук
      }
    }
  }
)

// Unicrom
db.unicorns.updateOne(
  { name: "Unicrom" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [63.3055, 45.9650]  // Байконур
      }
    }
  }
)

// Roooooodles - Нью-Йорк
db.unicorns.updateOne(
  { name: "Roooooodles" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [-74.0060, 40.7128]  // NY
      }
    }
  }
)

// Solnara - луга
db.unicorns.updateOne(
  { name: "Solnara" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [5.3698, 43.2965]  // Марсель
      }
    }
  }
)

// Ayna - Исландия
db.unicorns.updateOne(
  { name: "Ayna" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [-21.8174, 64.1466]  // Рейкьявик
      }
    }
  }
)

// Kenny - Лондон
db.unicorns.updateOne(
  { name: "Kenny" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [-0.1278, 51.5074]  // London
      }
    }
  }
)

// Raleigh - Токио
db.unicorns.updateOne(
  { name: "Raleigh" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [139.6917, 35.6895]  // Tokyo
      }
    }
  }
)

// Leia - Сидней
db.unicorns.updateOne(
  { name: "Leia" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [151.2093, -33.8688]  // Sydney
      }
    }
  }
)

// Pilot - Берлин
db.unicorns.updateOne(
  { name: "Pilot" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [13.4050, 52.5200]  // Berlin
      }
    }
  }
)

// Nimue - Дублин
db.unicorns.updateOne(
  { name: "Nimue" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [-6.2603, 53.3498]  // Dublin
      }
    }
  }
)

// Dunx - Рим
db.unicorns.updateOne(
  { name: "Dunx" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [12.4964, 41.9028]  // Rome
      }
    }
  }
)

// Barny - Париж
db.unicorns.updateOne(
  { name: "Barny" },
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [2.3522, 48.8566]  // Paris
      }
    }
  }
)