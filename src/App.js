import React,{ useState, useEffect } from 'react';
import './App.css';
import Post from "./Post";
import { db } from "./firebase"
import ImageUpload from './ImageUpload';
function App() {

  const [posts,setPosts] = useState([
    
  ])
  useEffect(()=>{
db.collection('posts').onSnapshot(snapshot =>{
  setPosts(snapshot.docs.map(doc=>({
    id: doc.id,
    post: doc.data()
  })));
})
  },[]);
  return (
    <div className="app">
      {user.displayName?(

     
      <ImageUpload username={user.displayName}/>
      ):(
         <h3>Sorry you need to login again</h3>
      )
}
     
     <div className="app__header">
       <img className="app__headerImage"
       src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
       alt=""
       />

       
     </div>
     
    
     <h1>Hello</h1>
     {
       posts.map(({id,post}) =>(
         <Post key={id} username = {post.username} caption = {post.caption} imageUrl={post.imageUrl}/>
       ))
     }

    </div>
  );
}

export default App;
