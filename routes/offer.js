const express = require('express');
const router = express.Router();

// get all offers
router.get('/', function(req, res, next) {
  res.send('Get all offers')
});

//get a single offers
router.get('/:id', function(req, res, next) {
  res.send('Get a single offer');
});

//post a new offer
router.post('/', function(req, res, next){
  res.send('Post new offer')
})

//delete an offer
router.delete('/:id', function(req, res, next){
  res.send('Delete an offer')
})

//update an offer
router.patch('/:id', function(req, res, next){
  res.send('Update an offer')
})


module.exports = router;
