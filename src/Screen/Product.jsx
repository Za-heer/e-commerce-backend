// import { Box } from "@mui/system";
// import React from "react";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProduct } from '../store/productSlice';

// const Product = () => {
//   const dispatch = useDispatch();
//   const {data, status } = useSelector((state)=>state.product);

//   useEffect(()=>{
//       dispatch(fetchProduct());
//   },[]);
//   console.log(data);
//   if(status === "loading"){
//     return <h1>LOADING.....</h1>;
//   }
//   return (
//     <>
//       <Box
//         sx={{
//           px: "20px",
//         }}
//       >
//         <div className="container">
//           <div className="header">
//             <h2>New Collection</h2>
//           </div>

//           {data?.map((product, index) => {
//             return (
//               <div className="mainbox border m-3" key={index}>
//                 <div className="images">
//                   <img src="" alt="" />
//                 </div>
//                 <div className="discription">
//                   <h4>{product.title}</h4>
//                   <h6>{product.price}</h6>
//                   <p>{product.disc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Box>
//     </>
//   );
// };

// export default Product;


//=============================================================================================


import React, { useState } from "react";
// import { useSelector } from 'react-redux';
import { useGetAllProductsQuery } from "../store/productApi";
function Home() {
  //white using create asyncthunk
  // const {items,status}= useSelector(state=> state.products)
  const { data, error, isloading } = useGetAllProductsQuery();
  const [alldata,setAlldata]= useState()
setAlldata(data)
  
  console.log(alldata)
  return (
    <div>
      {alldata && alldata?.map((e)=>{
        return<h1>{e.name}</h1>
      })}
      {/* <div className="container ">
        {isloading ? (
          <p>Loading....</p>
          ) : error ? (
            <p>An Error Occured...</p>
            ) : (
              <>
            <h1>New Arrival</h1>
              
            <div className="product d-flex justify-content-between">
              {data?.map((e, i) => {
                return (
                  <div
                    className="mainproduct"
                    style={{ height: "300px", width: "240px" }}
                    key={i}
                  >
                    <h4>{e.name}</h4>
                    <img
                      src={e.image}
                      width="100%"
                      height="100%"
                      alt={e.title}
                    />
                    <div className="discription d-flex justify-content-between">
                      <span>{e.disc}</span>
                      <span>{e.price}</span>
                    </div>
                    <button type="button" class="btn btn-success">
                      Add to cart
                    </button>
                  </div>
                );
              })
            }
            </div>
          </>
        )}
      </div> */};
    </div>
  );
}

export default Home;
