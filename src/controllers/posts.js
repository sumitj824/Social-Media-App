const {Users,Posts} =require('../db/models')


async function createNewPost(userId, title, body) {
    const post = await Posts.create({
      title,
      body,
      userId
    })
  
    return post
  }
// showAllPosts({username: })
// showAllPosts({title: })

async function findAllPosts(){
  //todo handle query params

  let posts = await Posts.findAll({
    include:[Users]
  })
  return posts
}

module.exports={
  createNewPost,
  findAllPosts
}

// testing
/*
async function task() {
    // console.log(
    //   await createNewPost(
    //     2,
    //     'Tis a sample post',
    //     'The body of  post goes here'
    //   )
    // )

    const posts = await findAllPosts()
    for(let p of posts){
      console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n===============\n`);
    }
  }
task()
*/

