const HeroProject = require('../model/heromodel');
const heroOperations = {

    addHero(heroObject,response){

        HeroProject.create(heroObject,(err) =>{
            if(err){
                console.log('record not added',err);
                response.status(200).json({message: 'record not added' })
            } else{
                response.status(200).json({ message: 'record added' })
            }
        })
    },
    searchHero(heroObject,response){
        console.log(heroObject);
        HeroProject.find({"name": heroObject}, (err,docs) =>{
            if(err){
                response.status(500).json({message: 'error while searching'});
            }
            else{
                response.status(200).json({message: 'hero found', record: docs});
                console.log('himanshu',docs);
            }
        })
    }
}
module.exports = heroOperations;