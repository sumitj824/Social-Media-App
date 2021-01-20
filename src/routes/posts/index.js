const route =require('express').Router()
const {createNewPost,findAllPosts}=require('../../controllers/posts')


route.get('/', async (req, res) =>{
    const posts =await findAllPosts()
    res.status(200).send(posts)
})

route.post('/', async (req, res) =>{
     const {userId,title,body} = req.body
     if( (!userId) || (!title) || (!body) ){
         res.status(400).send(({
             error:'Need userId, title and body to create post'
         }))
     }
     const posts= await createNewPost(userId,title,body)
     res.status(201).send(posts)
})




module.exports ={
    postsRoute:route
}