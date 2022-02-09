const User = require("./database/itemmodel")

 var getKid = (req,res)=>{
     User.find({})
     .then((users)=>{
         res.status(200).send(users)
     })
     .catch((err)=>{
         res.status(500).send(err)
     })

 }
 var updates=(req,res)=>{
     User.findByIdAndUpdate({})
     .then((result)=>{
         res.send(result)
     })
     .catch((err)=>{
         res.send(err)
     })


 }

var addKids=(req,res)=>{
    User.insertMany({
        email:req.body.email,
        password:req.body.password,
        id:req.body.id,
        username:req.body.username,
        steps:[{
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            option4:req.body.option4
        }]
    })
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{
        res.send(err);
    })
}
module.exports={addKids,updates,getKid}