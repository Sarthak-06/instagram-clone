import React,{ useState } from 'react';
import './App.css';
import Post from "./Post";

function App() {

  const [posts,setPosts] = useState([
    {
      username:"CarryMinati",
      caption:"Kaise hai app log",
      imageUrl:"https://www.iwmbuzz.com/wp-content/uploads/2019/09/carryminati-completes-8-million-youtube-subscribers.jpg"
    },
    {
      username:"Sarthak",
      caption:"Yoo",
      imageUrl:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/tanmaybhat-1464599791.jpg"
    },
    {
      username:"Arya",
      caption:"Apkey yahan be aisa hota hai",
      imageUrl:"https://images.inuth.com/2018/11/feat-img-Gursimran-Khamba-final-Amazon.jpg"
    },
    {
      username:"Prateek",
      caption:"Mzaa anaa chaiye",
      imageUrl:"https://th.bing.com/th/id/OIP.3KUHFygi4z6zD6eq2e4IzwHaE8?pid=ImgDet&rs=1"
    }
  ])
  return (
    <div className="app">
     
     <div className="app__header">
       <img className="app__headerImage"
       src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
       alt=""
       />

       
     </div>
     <Post username="CarryMinati:" caption="Kaise hai app log" imageUrl="https://www.iwmbuzz.com/wp-content/uploads/2019/09/carryminati-completes-8-million-youtube-subscribers.jpg"/>
     <Post username="Sarthak:" caption="Yoo" imageUrl="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/tanmaybhat-1464599791.jpg"/>
     <Post username="Arya" caption="Tumhare yahan be aisa hota hai" imageUrl="https://images.inuth.com/2018/11/feat-img-Gursimran-Khamba-final-Amazon.jpg"/>
     <Post username="Prateek:" caption="Mzaa anaa chaiye" imageUrl="https://th.bing.com/th/id/OIP.3KUHFygi4z6zD6eq2e4IzwHaE8?pid=ImgDet&rs=1"/>
     <h1>Hello</h1>
     {
       posts.map(posts =>(
         <posts username = {posts.username} caption = {posts.caption} imageUrl={posts.imageUrl}/>
       ))
     }

    </div>
  );
}

export default App;
