const fs = require('fs')
const axios = require('axios')


const fetchData = async (url) => {
  try {
    let res = await axios.get(url)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const writePostsIntoFile = async (url) => {
  try {
    const posts = await fetchData(url)
    const stringPosts = JSON.stringify(posts, null, 2)
    
    fs.writeFile('./result/posts.json', stringPosts, err => {
      if(err) throw err
      console.log('Posts written successfully')
    })
  } catch (error) {
    console.log(error)
  }
}

writePostsIntoFile('http://jsonplaceholder.typicode.com/posts')
