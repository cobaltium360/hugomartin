const db = require('../model')
const userModel = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.register = (req, res, next) => {
    async function signup(){

        if(req.body.username && req.body.username){
            const verif = await userModel.findOne({ where: {username: req.body.username}, paranoid:false});
            if (verif === null) {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        const user = userModel.build({ username: req.body.username , password: hash});
                        user.save()
                            .then(() => res.status(201).json({ message: 'Utilisateur crée !'}))
                            .catch(error => res.status(400).json({ error }));
                    }).catch(error => res.status(500).json({ error }));
            }else{
                res.status(400).json({message : "email ou username deja existant"});
            }
        }else{
            res.status(400).json({message : "il manque des informations"});
        }
    }
    signup();
}; 

exports.login = (req, res, next) => {
    async function login() {
        if (req.body.username) {
            const account = await userModel.findOne({ where: { username: req.body.username }, paranoid: false });
            if (account == null) {
                res.status(400).json({ message: "l'utilisateur n'existe pas" })
            } else {
                bcrypt.compare(req.body.password, account.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        }
                        res.status(200).json({
                            token: jwt.sign(
                                {
                                    userId: account.id,
                                },
                                process.env.JWTPRIV8,
                                { expiresIn: '24h' }
                            )
                        });
                    })
                    .catch(error => res.status(500).json({ error: " oui" }));
            }

        }else {
            res.status(500).json({ error: " oui" })
        }
    }
    login();
}