import React, { useState, useEffect } from 'react';
import './App.css';
import Post from "./Post";

i
import ImageUpload from './ImageUpload';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { db ,auth } from "./firebase";
import { Button, Input } from '@material-ui/core';
function getModalStyle() {
  const top = 0;
  const left = 0;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({

  paper: {
    margin: '450px',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {

  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [openSignIn, setOpenSignIn]=useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);

      }
      else {
        setUser(null);

      }

    })
    return()=>{
      unsubscribe();
    }
  }, [user, username]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);
  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        })
      })
      .catch((error) => (error.message))
      setOpen(false);
  }
  const signIn =(event)=>{
    event.preventDefault();
    auth.isSignInWithEmailAndPassword(email,password)
    .catch((error) => (error.message))
    setOpenSignIn(false);
  }
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

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      />
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              /></center>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}

            />
            <input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <Button type='submit ' onCLick={signUp}>SignUp</Button>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              /></center>
      
            <input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <Button type='submit ' onCLick={signIn}>SignIn</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />


      </div>


     
      {user?(<Button onClick={() => auth.signOut()}>Logout</Button>):
      (<div className="app_loginContainer">
      <Button onClick={() => setOpen(true)}>SignIn</Button>
      <Button onClick={() => setOpen(true)}>SignUp</Button>
     </div>
     )}
      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
