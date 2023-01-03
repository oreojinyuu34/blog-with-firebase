import { collection, getDocs } from 'firebase/firestore';
// import {  deleteDoc, doc, } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
// import { auth } from '../firebase';
import "./Home.css";



const Home = () => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({doc})));
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  },[]);
  /* 削除ボタンエラーのユーザー認証するとエラーが出るため実装保留 */
  // const handleDelete = async (id) => {
  //   await deleteDoc(doc(db, "posts", id));
  //   window.location.href = "/";
  // };


  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className='postContents' key={post.id}>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className='postTextContainer'><h3>{post.postsText}</h3>
            </div>
            <div className='nameAndDeleteButton'>
              <h3>@{post.author.username}</h3>

              {/* 削除ボタンエラーのユーザー認証するとエラーが出るため実装保留 */}
              {/* {post.author.id === auth.currentUser.uid && (<button onClick={() => handleDelete(post.id)}>削除</button>)} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
