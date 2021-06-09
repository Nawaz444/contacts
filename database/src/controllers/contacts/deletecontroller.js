const ObjectId = require('mongodb').ObjectId;

async function deleteController(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('contacts');
    await UserCollection.findOneAndDelete({
        _id: ObjectId(request.params.userId)
    });

    response.send({ success: true });
} 

module.exports = deleteController;
