const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', async ( req, res ) => {
    const client = await pool.connect();
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding",               "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    
    try {
        const res = await client.query( sqlText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]);
    } catch (error) {
        console.log('Error in POST /feedback', error);
        res.sendStatus(500);
    } finally {
        client.release();
        console.log('made it');
        res.sendStatus(201);
    }
})

module.exports = router;