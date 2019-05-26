const HeroProject = require('../model/heromodel');
const heroOperations = {

    addHero(heroObject,response){

        HeroProject.create(heroObject,(err) =>{
            if(err){
                console.log('record not added',err);
                response.status(200).json({message: 'record not added' })
            } else{
                response.status(200).json({ message: 'record added' })
                console.log('record added');
            }
        })
    },
    searchHero(heroObject,response){
        console.log(heroObject);
        HeroProject.find({ "name": heroObject }, (err,docs) =>{
            if(err){
                response.status(500).json({message: 'error while searching'});
            }
            else{
                if(docs.username === heroObject){
                response.status(200).json({message: 'hero found', hero: heroObject , record: docs});
                // console.log('himanshu', docs);
            } else {
                response.status(200).json({message: 'no hero found'});
            }
        }
        }).collation( { locale: 'en', strength: 2 } );
    }
}
module.exports = heroOperations;