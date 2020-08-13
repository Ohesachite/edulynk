const knex = require("db");

exports.register = async (req, res) => {
    knex
        .insert({
            "username": req.body.username,
            "password": req.body.password
        })
        .then(() => {
            res.json({ message: "Successfully registered!" })
        })
        .catch(err => {
            res.json({ message: `Error in registering with username ${req.body.username}: ${err}` })
        })
}

exports.checkLogin = async (req, res) => {
    knex
        .where({
            "username": req.body.username,
            "password": req.body.password
        })
        .select('*')
        .then(() => {
            res.json({ message: "Login successful!" })
        })
        .catch(err => {
            res.json({ message: "Invalid username or password!" })
        })
}

exports.deleteLogin = async (req,res) => {
    knex
        .where({
            "username": req.body.username,
            "password": req.body.password
        })
        .then(() => {
            res.json({ message: "Sad to see you go!" })
        })
        .catch(err => {
            res.json({ message: "Ha! Trying to delete your login is a mistake!" })
        })
}