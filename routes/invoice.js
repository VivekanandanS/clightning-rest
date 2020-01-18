var express = require('express');
var router = express.Router();
var order = require('../library/order')
router.post('/', function (req, res, next) {

    try {
        var invoice = await order.place(req.body.user, req.body.cart);
        return res.status(200).json({ status: 'SUCCESS', invoice: invoice })
    } catch (error) {
        res.status(500).json({ status: 'ERROR', error: error })
    }
});

module.exports = router;
