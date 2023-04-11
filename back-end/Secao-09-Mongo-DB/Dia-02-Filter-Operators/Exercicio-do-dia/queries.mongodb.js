// docker run --name mongo -d -p 27017:27017 mongo:4
// docker cp superheroes.json mongo:/tmp/superheroes.json
// docker exec mongo mongoimport --db class --collection superheroes /tmp/superheroes.json --jsonArray
// docker exec -it mongo mongo

use ('class');

db.superheroes.findOne();

db.superheroes.find(
  { "aspects.height": { $lt: 180 } }
).pretty();

db.superheroes.countDocuments(
  { "aspects.height": { $lt: 180 } }
);

db.superheroes.findOne(
  { "aspects.height": { $gte: 200 } }
);

db.superheroes.countDocuments(
  { "aspects.height": { $gte: 200 } }
);

db.superheroes.find(
  { "aspects.eyeColor": "green"}
);

db.superheroes.countDocuments(
  { "aspects.eyeColor": "blue"}
);

db.superheroes.find(
  { "aspects.hairColor": { $in: ["black", "no hair"] } }
).pretty();

db.superheroes.countDocuments(
  { "aspects.hairColor": { $nin: ["black", "no hair"] } }
);

db.superheroes.find(
  {
      $nor: [
          { race: "Human" },
          { "aspects.height": { $gt: 180 } }
      ]
  }
).pretty();

db.superheroes.find(
  {
      $and:[
          {
              $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
          },
          {
              publisher: "Marvel Comics"
          }
      ]
  }
).pretty();

db.superheroes.find(
  {
      $and: [
          {
              "aspects.weight": { $gte: 80, $lte: 100 }
          },
          {
              $or: [{ race: "Human" }, { race: "Mutant" }]
          },
          {
              publisher: { $ne: "DC Comics" }
          }
      ]
  }
).pretty();

db.superheroes.countDocuments(
  { race: { $exists: false } }
);

db.superheroes.countDocuments(
  { "aspects.hairColor": { $exists: true } }
);

db.superheroes.deleteOne(
  { publisher: "Sony Pictures" }
);

db.superheroes.deleteMany(
  { publisher: "George Lucas" }
);

