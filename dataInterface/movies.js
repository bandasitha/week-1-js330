const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

const uri = "mongodb+srv://amber:Xuss6BVZiMdto0Aa@js330-test-cluster.l09khft.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
const databaseName = 'sample_mflix';
const collName = 'movies'

module.exports = {}

module.exports.getAll = async () => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    const query = {};
    let movieCursor = await movies.find(query).limit(10).project({title: 1, runtime: 1}).sort({runtime: -1});
    return movieCursor.toArray();
}

module.exports.getbyId = async (movieId) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    const query = {_id: ObjectId(movieId)};
    let movie = await movies.findOne(query)
    return movie
}

module.exports.getbyTitle = async (movieTitle) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    const query = {title: (movieTitle)};
    let movie = await movies.findOne(query)
    return movie
}

module.exports.deleteById = (movieId) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    return []
}

module.exports.updateById = (movieId, newObj) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    return []
}

module.exports.create = async (newObj) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    result = await movies.insertOne(newObj);
    console.log(result);
    return {};
}