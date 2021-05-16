
import './App.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
     
     <div className="app__header">
       <img className="app__headerImage"
       src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
       alt=""
       />

       
     </div>
     <Post username="CarryMinati:" caption="Kaise hai app log" imageUrl="https://www.iwmbuzz.com/wp-content/uploads/2019/09/carryminati-completes-8-million-youtube-subscribers.jpg"/>
     <Post username="Sarthak:" caption="Yoo" imageUrl="C:\Users\Asus\OneDrive\Desktop\instagram-clone\public\pic.jpeg"/>
     <Post username="Arya" caption="Apkey yahan be aisa hota hai" imageUrl="https://www.iwmbuzz.com/wp-content/uploads/2019/09/carryminati-completes-8-million-youtube-subscribers.jpg"/>
     <Post username="Prateek:" caption="Mzaa anaa chaiye" imageUrl="https://www.iwmbuzz.com/wp-content/uploads/2019/09/carryminati-completes-8-million-youtube-subscribers.jpg"/>
     <h1>Hello</h1>

    </div>
  );
}

export default App;
