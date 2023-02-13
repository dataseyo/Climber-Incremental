// external imports
import express from 'express'
import { ObjectId } from 'mongodb'

// internal imports
import {
    getDb
} from '../db.js'

const climbRoutes = express.Router()

/* ----------------------
    UPDATE: Add new climb to existing user
---------------------- */
climbRoutes.route("/add").patch(async function(req, res) {
    // need user name and climb details to add to user: { climb: [ { climb1, climb2, climb3 } ] }
    const userId = req.body.userId
    const newClimb = req.body.climb

    await getDb().updateOne(
        {_id: new ObjectId(userId)},
        {$push: {
            climbs: {id: new ObjectId(), ...newClimb}
        }},
        console.log(`climb added`)
    )

    res.end()
})

/* ----------------------
    GET: View all climbs
---------------------- */
climbRoutes.route("/list").get(async function(req, res) {
    const userId = req.body.userId

    const result = await getDb().find(
        {_id: new ObjectId(userId)},
    ).toArray(function(err, result) { 

    })

    res.send(result[0].climbs)
})

/* ----------------------
    GET: View one climb
---------------------- */
climbRoutes.route("/:id").get(async function(req, res) {
    // const userId = req.body.userId

    // const result = await getDb().find(
    //     {_id: new ObjectId(userId)},
    // ).toArray(function(err, result) { 
        
    // })

    // res.send(result[0].climbs)
})

/* ----------------------
    PATCH: Update a climb
---------------------- */
climbRoutes.route("/update").patch(async function(req, res) {
    
})

/* ----------------------
    DELETE: Delete a climb
---------------------- */
climbRoutes.route("/delete/:id").delete(async function(req, res) {
    
})

export default climbRoutes