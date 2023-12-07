import express from 'express';
let router = express.Router();

const responseBody = {"status":"UP"}

router.get('/health', function(req, res){
    res.status(200).json(responseBody)
});

export default router;