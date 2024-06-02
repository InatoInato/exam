const runnerModels = require('../models/runnerModels.js');
const bcrypt = require('bcryptjs')

const newRunner = async (req, res) => {
    const { email, password, name, lastname, gender, photoPath, birth, country } = req.body;

    if (!email || !password || !name || !lastname || !gender || !photoPath || !birth || !country) {
        res.status(400).json({ message: 'Fill all the fields' });
    }

    try {
        const existing = await runnerModels.getRunnerByEmail(email); 
        if (existing) {
            res.status(400).json({ error: "The runner is already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newRunner = await runnerModels.addRunner({ email, password: hashedPassword, name, lastname, gender, photoPath, birth, country });
        res.status(201).json({ message: 'Success!!!' });
    } catch (e) {
        res.status(500).json({ e: e.message });
    }
}


module.exports = { newRunner };
