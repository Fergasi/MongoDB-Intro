/*
* Write a script in NoSqlBooster that does the following: Insert a new blog post, Read the new blog post, Update the new blog post with a new title, Delete the new blog post
* Once you have the script complete, create a new github repo with your solution and upload it to populi
* Stretch Goal: Implement the above but for multiple posts
*/

//Insert One
db.posts.insertOne({
    createdAt: "2022-03-22T10:36:37.176Z",
      title: "dicta",
      text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
      author: "Fergus Reilly",
      id: "1",
})

//Read One
db.posts.find({
    author: "Fergus Reilly" 
})

//Update One
db.posts.updateOne({
    title: "dicta"
},{$set:{
    title: "My Wonderful NoSQL Adventure"
}})

//Delete One
db.posts.deleteOne({
    _id:ObjectId("628d09a933613586f1fd1f4e")
})

//Functions For Same Instrutions Applied To All/Many Posts

//Insert Many
db.posts.insertMany([
    {
      createdAt: "2022-03-22T10:36:37.176Z",
      title: "dicta",
      text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
      author: "Fergus Reilly",
      id: "1",
    },
    {
      createdAt: "2022-03-22T15:16:56.285Z",
      title: "ducimus",
      text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
      author: "Luke Rogahn PhD",
      id: "2",
    },
    {
      createdAt: "2022-03-21T20:09:32.298Z",
      title: "quod",
      text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
      author: "Maryann Schneider",
      id: "3",
    },
    {
      createdAt: "2022-03-21T23:07:53.447Z",
      title: "ut",
      text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
      author: "Dr. Lorenzo Anderson",
      id: "4",
    },
    {
      createdAt: "2022-03-22T15:14:39.819Z",
      title: "id",
      text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
      author: "Bobbie Dach",
      id: "5",
    },
])

//Read All
db.posts.find({})

//Update All
db.posts.updateMany({},{$set:{
    title: "Fergasi's Story"
}})

//Delete All
db.posts.deleteMany({})

/*
* Write a new function getPosts(limit, skip, sortField, sortOrder, filterField, filterValue )
* When getPosts is invoked it should
* Return all blog posts if there are no arguments given
* If limit is given, the returned posts length should be equal or less than limit
* If skip is given, the returned posts should be the next page of results given a limit
* If sortField and sortOrder are given, the returned posts should be sorted on the field given by sortField and ordered by sortOrder. E.G. sortField="date", sortOrder=1 should sort the result by date in ascending order.
* If filterParam is given, the result should be filter the result based upon the filterParam field. E.G. if filterParam="category" and the filterValue="dog" the result should only show posts in which the category is dog. 
*/

const getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {
    
    //Expand this functionality
    const dbLimit = limit ? limit : 10
    const dbSkip = skip ? skip : 0
    const dbSort = sortField && sortOrder ? {[sortField]: sortOrder} : {}
    const dbFilter = filterField && filterValue ? {[filterField]: filterValue} : {}
    
    const dbResult = db.blogs50.find(dbFilter).sort(dbSort).limit(dbLimit).skip(dbSkip).toArray();
    
    return dbResult
}

console.log(getPosts(50, 0, 'id', 1, "category", "illum")) 

/*
* Continue to build your database functionality by implementing the following functions:
    * [OPTIONAL] Convert all the blog post id's from the string type to the number type. Hint: if you run the following code in noSqlBooster, this will convert the field type from a string to an int32 for all id's in the posts collection. Note: if your posts collection is named differently, you'll have to change the string being passed into db.getCollection() from "posts" to whatever you named your posts collection.
        * db.getCollection("posts").update(
            {},
            [{
                $set: {
                    "id":
                    {
                        $convert: {
                            input: "$id",
                            to: "int"
                        }
                    },
                }
            }],
            { multi: true }
        )
*/
   
//* findPost(blogId) should return a single blog post given an ID
const findPost = (blogId) => {
    const postFound = db.blogs50.find({id: blogId}).toArray()

    return postFound
}
   
console.log(findPost(5))

// * getPostsCollectionLength() should return a number representing the total length of the blog posts collection.
const getPostsCollectionLength = () => {
    return db.blogs50.count()
}

console.log(getPostsCollectionLength())

//* makePost(blogId, title, text, author, category) should create a new blog post in mongo. Remember you need to generate and add a createdAt date, and a lastModified date to the post before inserting it into the collection. Additionally, blogId should be calculated by taking the total length of blog posts in the database and adding 1 to it. Hint: use the getPostsCollectionLength() function to quickly determine the current length of the collection.
const makePost = (title, text, author, category) => {
    const blogTitle = title ? title : '';
    const blogText = text ? text : '';
    const blogAuthor = author ? author : '';
    const blogCat = category ? category : '';
    
  const newBlog = {
        createdAt: new Date() ,
          title: blogTitle,
          text: blogText,
          author: blogAuthor,
          lastModified: new Date(),
          category: blogCat,
          id: db.blogs50.count()+1,
    }
    
    db.blogs50.insertOne(newBlog)
    
    return newBlog
}

makePost('Blue', 'Testing blah blah blah', 'Test', 'Biography')

//* updatePost(blogId, title, text, author, category) should find a post matching the id of blogId and then update the title, text, author and category fields with the inputted information. Remember, since lastModified is a representation of when the post was last updated (including creation), you will have to update lastModified to the current date and time as well.
const updatePost = (blogId, title, text, author, category) => {
    
    const blogToUpdate = findPost(blogId)[0]
    
    const blogTitle = title ? title : blogToUpdate.title;
    const blogText = text ? text : blogToUpdate.text;
    const blogAuthor = author ? author : blogToUpdate.author;
    const blogCat = category ? category : blogToUpdate.category;
    
    const updatedBlog = {
        title: blogTitle,
        text: blogText,
        author: blogAuthor,
        lastModified: new Date(),
        category: blogCat,
    }
    
    return db.blogs50.updateOne({id: 51},{$set:updatedBlog})
}

updatePost(51, 'Get Hard!', 'Join my Triathlon high-performance academy!', 'Corey' ,'Sports')

/* deletePosts(blogIds) should take in an ARRAY of blogId's in the blogIds param. The function should iterate through the array of blogId's and delete all the blog posts with matching id's.
*/
const deletePosts = (blogIds) => {
    for (let id of blogIds){
        db.blogs50.deleteOne({id: id})
    }
}

deletePosts([4,16,21,47])

/* Stretch Goal: 
    * Iterate through the posts collection and generate a list of author names. Create a new collection in your blogs database called users (this collection should be on the same hierarchical level as the posts collection). For every author in the list do the following: 
    * Create and insert a new user object into the users collection with the following fields: 
        * firstName 
        * lastName 
        * userId - a unique id. It can be the same scheme as the posts id, a number representing the current length of the collection + 1
        * email - should be the following format <firstName>.<lastName>@gmail.com, all lowercase letters, with no whitespace in the email address.
        * posts - should be a list of mongo OBJECTID's representing a list of every post that author has made. 
        * E.G. if this post exists: 
            {
                "_id": new ObjectId("628d233e1505f82ea360a613")
                "createdAt": "2021-06-08T12:25:55.889Z",
                "title": "officia",
                "text": "Lorem Ipsum.",
                "author": "Jacqueline Hudson",
                "lastModified": "2022-05-24T00:55:08.105Z",
                "category": "dolores",
                "id": "2"
            }
        Then the following user should be generated and inserted into the users collection:
            {
                "firstName": "Jacqueline"
                "lastName": "Hudson"
                "userId": "1"
                "email": "jacqueline.hudson@gmail.com"
                "posts": [new ObjectId("628d233e1505f82ea360a613")]
            }
*/

const updateUserDB = () => {
    const allBlogs = db.blogs50.find({})
    //const allBlogsLength = db.blogs50.count()
    
    allBlogs.forEach(element => {
        let fullName = element.author
        let authorName = element.author.split(" ");
        let docsPerAuthor = db.blogs50.find({author: {$exists: true, $in: [element.author]}});
        let postsVal = [];
        
        docsPerAuthor.forEach(element => {
            postsVal.push(element._id)
        })
        
        if (authorName[0] === 'Miss' || authorName[0] === 'Dr.' || authorName[0] === 'Ms.' || authorName[0] === 'Mrs.'){
            authorName.shift()
        }
         
        if (authorName.length > 2){
            authorName.pop()
        }
        
        let newObj = {
            firstname: authorName[0],
            lastName: authorName[1],
            userId: db.users.count()+1,
            email: authorName[0] + "." + authorName[1] + "@gmail.com",
            posts: postsVal
            
        }
        
        let dupCheck = db.users.find({email: newObj.email}).toArray()
        
        
        if (dupCheck.length >= 1){} else {
             db.users.insertOne(newObj)
        }
    }) 
    
    
}

updateUserDB()

/* Super Strech Goal: Write a function getUser(email) that will lookup a user in the users collection. The function should also loop through the posts array on the user object and transform the ObjectId's into the corresponding post document before returning it. E.G. running getUser("jacqueline.hudson@gmail.com") should return:
    * {
        "firstName": "Jacqueline"
        "lastName": "Hudson"
        "userId": "1"
        "email": "jacqueline.hudson@gmail.com"
        "posts": [{
            "_id": new ObjectId("628d233e1505f82ea360a613")
            "createdAt": "2021-06-08T12:25:55.889Z",
            "title": "officia",
            "text": "Lorem Ipsum.",
            "author": "Jacqueline Hudson",
            "lastModified": "2022-05-24T00:55:08.105Z",
            "category": "dolores",
            "id": "2"
        }]
    }
*/

const getUser = (email) => {
    const user = db.users.find({email: email}).toArray()[0];
    const postsArr = user.posts;
    const blogDocArr = [];
    for (let post of postsArr) {
        const blogDoc = findBlogByKey('_id', post)
        blogDocArr.push(blogDoc);
    }
    user.posts = blogDocArr;
    return user;
}

const findBlogByKey = (key, value) => {
    return db.blogs50.find({[key] : value}).toArray()[0];
}

getUser('Duane.Crist@gmail.com')


// Alternative method using MongoDG operations
// Does not mutate the data, just enriches the entries and displays them to you
db.users.aggregate([
    {
        $lookup:
        {
            from: 'posts', //<-- the collection being searched
            localField: 'posts', //<-- the local field within the DB document 
            foreignField: '_id', //<-- the foreign field in the DB being matched
            as: 'enrichedPosts' //<-- Append the matched DB document to the original post as new field 'enrichedPosts'
        }
    }
])
.match({}) //<-- works as a substitute for find

// How to incorporate into functiom for the Super Stretch solution

const getUser = (email) => {
    const users = db.users.aggregate([
        {
            $lookup:
            {
                from: "posts",
                localField: "posts",
                foreignField: "_id",
                as: "matchedPosts"
            }
        }
    ])
        .match({
            email
        }).toArray()
    return users
}