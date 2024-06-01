const {addRunner, getRunnerByEmail} = require('../models/runnerModels.js')

const register = async (req, res) => {
    const {email, password, name, lastname, gender, photoPath, birth, country} = req.body

    if(!email, !password, !name, !lastname, !gender, !photoPath, !birth, !country){
        res.status(400).json({message: 'Fill all the poles'})
    }

    try{

    } catch(e){
        console.log(e);
    }
}