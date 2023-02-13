// external imports
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// internal imports
import {
    getDb
} from '../db.js'

dotenv.config()

const userRoutes = express.Router()

/* ----------------------
    POST: Add new user
---------------------- */
userRoutes.route("/register").post(async function(req, res, next) {
    // validate 
    const {name, password } = req.body

    if (!name || !password) {
        res.status(400)
        throw new Error("Name and password are required fields.")
    }

    // check if user already exists
    const userExists = await getDb().find({name: name}).count()
    console.log(userExists)
    if (userExists) {
        res.status(400)
        throw new Error("User already exists.")
    }

    // hash pass with bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    // get user details from body
    const newUser = {
        name: name,
        level: 1,
        chalk: 0,
        climbs: [],
        password: hashPass,
        avatar: []
    }

    await getDb().insertOne(newUser, function (err, result) {
        if (err) {
          res.status(400).send("Error inserting matches!");
        } else {
          console.log(`Added a new match with id ${result.insertedId}`);
          res.status(204).json({
              _id: result.id,
              name: result.name,
              // token: generateToken(result._id)
          });
        }
    })

    res.send(`Added new user with name ${newUser.name}`)
})

/* ----------------------
    POST: Authenticate User
---------------------- */
userRoutes.route("/login").post(async function(req, res, next) {
    const {name, password } = req.body

    const user = await getDb().find({name: name})
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid credentials')
      }

})

/* ----------------------
    JWT Helper
---------------------- */
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '30d'})
}

export default userRoutes