# <img src="/client/public/favicon.png"> Bookmarks Everywhere

<img src="https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B"> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">

> ### https://raopy.github.io/bookmarks-everywhere

A **MERN stack** app to save and access your bookmarks anywhere.
- Server deployed on <a href="https://www.heroku.com/">Heroku</a>. (Changed to <a href="https://www.cyclic.sh/">Cyclic</a>)
- User data stored on <a href="https://account.mongodb.com/account/login">MongoDB Atlas</a>.

<img src="https://user-images.githubusercontent.com/86762534/139536704-336397c7-9bc4-4397-b9d3-44ca33d59883.png" width="500px">
<img src="https://user-images.githubusercontent.com/86762534/139536895-a5f7b676-ce43-4ec6-8be8-4378b207ee19.png" width="500px">
<img src="https://user-images.githubusercontent.com/86762534/139536936-c7ae2e3b-c48a-46bc-b2e8-39b06032d51f.png" width="500px">

## How to run on localhost?

Clone the repo with `git clone https://github.com/RaoPY/bookmarks-everywhere.git`  
OR download _zip_ file: https://github.com/RaoPY/bookmarks-everywhere/archive/refs/heads/main.zip

Install dependencies for server and client
```
npm install
cd client && npm install
```

Add your MongoDB connection string
```javascript
const connectionString = ""; // MongoDB connection string
```

Run the server and client
```
npm run server
npm run client
```

Server will be started on port 5000 and client on 3000.
