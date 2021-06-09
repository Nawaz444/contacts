async function post(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('contacts');
    const insert = await UserCollection.insertOne({
        contactId:  request .body.contactId,
        name:   request.body.name,
        number:request.body.number
    });
    response.send({ success: true, id: insert.insertedId });
}

module.exports = post;
