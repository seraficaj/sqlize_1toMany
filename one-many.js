// SQLize Queries

const db = require('./models');

const relationshipCrud = async () => {
    try {
        // CREATE
            //find a user
            const foundUser = await db.user.findOne({
                where: {
                    firstName: 'Jason'
                }
            }) // finds first available user
            // give him/her a pet
            const petMongoose = await foundUser.createPet({
                name: 'Stella',
                description: 'The Spoiled Mongoose',

            });
            console.log(petMongoose);
        // READ
        const mongooseOwner = await petMongoose.getUser()
        console.log(mongooseOwner);
        // UPDATE
    }
    catch(err) {
        console.log(err);
    }
}

relationshipCrud();