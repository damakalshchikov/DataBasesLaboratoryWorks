#!/usr/bin/env node

const { MongoClient } = require('mongodb');

async function reverseGeocode(lon, lat) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  const response = await fetch(url, {
    headers: { 'User-Agent': 'MongoDB-Unicorns-Lab/1.0' }
  });
  
  if (response.ok) {
    const data = await response.json();
    return {
      city: data.address.city || data.address.town || data.address.village,
      country: data.address.country,
      country_code: data.address.country_code.toUpperCase()
    };
  }
  return null;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const uri = 'mongodb+srv://damakalshchikov_ma:1234567890@main.vupe3wn.mongodb.net/';
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const unicorns = client.db('Learn').collection('unicorns');
    
    const cursor = unicorns.find({ location: { $exists: true } });
    
    for await (const unicorn of cursor) {
      const [lon, lat] = unicorn.location.coordinates;
      
      console.log(`Обработка: ${unicorn.name}`);
      
      const address = await reverseGeocode(lon, lat);
      
      if (address) {
        await unicorns.updateOne(
          { _id: unicorn._id },
          { $set: { address: address } }
        );
        console.log(`  → ${address.city}, ${address.country}\n`);
      }
      
      await sleep(1000);
    }
    
    // Результаты
    const results = await unicorns.find(
      { address: { $exists: true } },
      { projection: { name: 1, address: 1, _id: 0 } }
    ).toArray();
    
    console.log('\nРезультаты:');
    results.forEach(u => {
      console.log(`${u.name}: ${u.address.city}, ${u.address.country}`);
    });
    
  } catch (error) {
    console.error('Ошибка:', error.message);
  } finally {
    await client.close();
  }
}

main();
