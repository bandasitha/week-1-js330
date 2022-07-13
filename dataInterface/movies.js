const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://amber:Xuss6BVZiMdto0Aa@js330-test-cluster.l09khft.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
const databaseName = 'sample_mflix';
const collName = 'movies'

module.exports = {}

module.exports.getAll = async () => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    const query = {};
    let movieCursor = await movies.find(query).limit(10);
    return movieCursor.toArray();
}

module.exports.getbyId = (movieId) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    return []
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

module.exports.create = (newObj) => {
    const database = client.db(databaseName);
    const movies = database.collection(collName);
    return []
}