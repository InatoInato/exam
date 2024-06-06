const sponsorModels = require('../models/sponsorModels.js')

const newSponsor = async (req, res) => {
    const { name, runner, card, cardNumber, num1, num2, CVC, donation } = req.body;

    if (!name || !runner || !card || !cardNumber || !num1 || !num2 || !CVC || !donation) {
        return res.status(400).json({ message: 'Please fill all the fields' });
    }

    try{
        const newSponsor = await sponsorModels.addSponsor({name, runner, card, cardNumber, num1, num2, CVC, donation})
        res.status(201).json({message: 'Success!', sponsor: newSponsor})
    }
    catch(e){
        console.log('Sponsor err:'+e);
    }
}

module.exports = { newSponsor }