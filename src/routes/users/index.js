const route =require('express').Router()
const {getUserById,getUserByUsername,createAnonUser} = require('../../controllers/users')

route.get('/:id',async (req, res) =>{
   let user
   if(isNaN(parseInt(req.params.id))){
       //when param is username
        user= await getUserByUsername(req.params.id)
   }
   else{
       //when param is user id
        user=await getUserById(parseInt(req.params.id))
   }
   if(user){
       res.status(200).send(user)
   }
   else{
       res.status(404).send({
           error: 'User not found'
       })
   }
})

route.post('/',async (req, res) =>{
    const user = await createAnonUser()
    res.status(201).send(user);
})





module.exports ={
    usersRoute:route
}