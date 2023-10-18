// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPostsBySellerId } from '../../../Redux/actions';

// const CommentsRend = () => {
//   const sellerId = 'ID_DEL_VENDEDOR'; 
//   const posts = useSelector((state) => state.getPostsBySellerId); 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPostsBySellerId(sellerId)); 
//   }, [dispatch, sellerId]);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CommentsRend;