var express = require('express');
var router = express.Router();
var Superhero = require('./app/models/superhero')

router.use(function(req, res, next){
  console.log('Processing incoming request');
  next();
})

router.route('/superheroes')
  .post(function(req, res){
    var superhero = new Superhero();
    superhero.name = req.body.name;
    superhero.trigger = req.body.trigger;
    superhero.realName = req.body.realName;
    superhero.canFly = req.body.canFly;

    superhero.save(function(err){
      if(err)
        res.send(err)
      res.json({message: 'Super hero added successfully'})
    })
  })

  .get(function(req, res){
    Superhero.find(function(err, superheroes){
      if(err)
        res.send(err)
      res.json(superheroes);

    })
  })

router.route('/superheroes/:superheroId')
  .get(function(req, res){
    Superhero.findById(req.params.superheroId, function(err, superhero){
      if(err)
        res.send(err)
      res.json(superhero)
    })
  })
  .put(function(req, res){
    Superhero.findById(req.params.superheroId, function(err, superhero){
      if(err)
        res.send(err)
      superhero.name = req.body.name
      superhero.trigger = req.body.trigger
      superhero.realName = req.body.realName
      superhero.canFly = req.body.canFly
      superhero.save(function(err){
        if(err)
          res.send(err)
        res.json({message: 'Superhero updated'})
      })
    })

  })
  .delete(function(req, res){
    Superhero.remove(
      {_id: req.params.superheroId},
      function(err, superhero){
        if(err)
          res.send(err);
        res.json({message: 'Superhero deleted'})
      }
    )
  })

module.exports = router;