const db = require("../models");

const passport = require('passport');

// Defining methods for the UserController
module.exports = {
  // auth: (req, res) =>(req.isAuthenticated())? res.json(true) : res.json(false),
  // find: (req, res) => {
  //   if(req.isAuthenticated()){
  //     db.User
  //     .findById(req.session.passport.user)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err));
  //   }
  //   res.status(401).json(err);  
  // },
  // delete: (req, res) => {
  //   if(req.isAuthenticated()){
  //     db.User
  //     .findById({ uuid: req.session.passport.user })
  //     .then(dbUser => dbUser.remove())
  //     .then(dbUser => {
  //       db.Account
  //       .find({where:{ userUUID: req.session.passport.user }})
  //       .then(dbAccount => dbAccount.remove())
  //       .then(dbUser => res.json(true))
  //       .catch(err => res.status(422).json(err));
  //     })
  //     .catch(err => res.status(422).json(err));
  //   }
  //   res.status(401).json(err);  
  // },
  getUser: (req, res) =>{
  
    if(req.isAuthenticated){
      db.User
      .findOne({where: {uuid: req.session.passport.user}})
      .then(dbUser => {
        let user = {
          first_name:dbUser.dataValues.first_name,
          last_name: dbUser.dataValues.last_name, 
          email: dbUser.dataValues.email,
          address:dbUser.dataValues.address,
          zipcode: dbUser.dataValues.zipcode,
          city:dbUser.dataValues.city,
          userName:dbUser.dataValues.userName,
          userType:dbUser.dataValues.userType,
          phone:dbUser.dataValues.phone,
          createAt:dbUser.dataValues.createAt
        }
        res.json(user)
      })
    }else {
      res.json(false)
    }
  },
  updateUser: (req, res) =>{
    console.log(req.body)
    
    if(req.isAuthenticated){
      console.log( req.session.passport.user)
      db.User
      .update(req.body, {where: {uuid: req.session.passport.user}})
      .then(dbUser => {
        if(dbUser[0] > 0){
          db.User
          .findOne({where: {uuid: req.session.passport.user}})
          .then(dbUser => {
            let user = {
              first_name:dbUser.dataValues.first_name,
              last_name: dbUser.dataValues.last_name, 
              email: dbUser.dataValues.email,
              address:dbUser.dataValues.address,
              zipcode: dbUser.dataValues.zipcode,
              city:dbUser.dataValues.city,
              userName:dbUser.dataValues.userName,
              userType:dbUser.dataValues.userType,
              phone:dbUser.dataValues.phone,
              createAt:dbUser.dataValues.createAt
            }
            res.json(user)
          })
        }else {
          res.json(false)
        }
       
      })
    }else {
      res.json(false)
    }
  },

  findUsers: (req,res) => {
    // if (req.isAuthenticated())
    db.Users.findAll({
      // where: {
      //   UserType: req.params.UserType,
      // },
    }).then(data => {
      res.json(data);
    }).catch(err => {
      console.log(err);
    })
  },
  findfarmersByProduce: (req,res) => {
    db.User.findAll({
      where: {
        userType: 'farmer',  
      },
      // include: [{
      //   models: db.FarmerProduce,
      //   where: {
      //     prod_Name: req.body.prod_Name
      //   }
      // }]
    }).then((users) => {
     
      let farmers = []
      users.forEach(user=>{
        console.log();
        if(user.dataValues.uuid !== req.session.passport.user) {
          let farmer = {
            first_name:user.dataValues.first_name,
            last_name: user.dataValues.last_name, 
            email: user.dataValues.email,
            address:user.dataValues.address,
            zipcode: user.dataValues.zipcode,
            city:user.dataValues.city,
            userName:user.dataValues.userName,
            userType:user.dataValues.userType,
            phone:user.dataValues.phone,
            createAt:user.dataValues.createAt
          }
          farmers.push(farmer);
        }
     })

      res.json(farmers);
    }).catch(err => {
      console.log(err);
    });         
  },
  findStoresByInventory: (req,res) => {
    db.Users.findAll({
      where: {
        userType: 'store',
      },
      include: [{
        models: db.storeProduces,
        where: {
          prod_Name: req.params.prod_Name,
          // price: req.params.price
        }
      }]
    }).then(data => {
      res.json(data);
    }).catch(err => {
      console.log(err);
    }); 
  },
  insertFarmers: (req,res) => {
    if (req.isAuthenticated())
    db.Users.create({
        userName: req.body.userName,
        userType: req.body.userType,
        zipcode: req.body.zipcode,
        city:  req.body.city,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
      
    }).then(data => {
      res.json(data);
    });
  },
 insertStores: (req,res) => {
  if (req.isAuthenticated())
   db.Users.create({
       userName: req.body.userName,
       userType: req.body.userType,
       zipcode: req.body.zipcode,
       city:req.body.city,
       address: req.body.address,
       phone: req.body.phone,
       email:req.body.email
   }).then(data => {
     res.json(data);
     console.log("insertStores:" + data);
   });
 }
};