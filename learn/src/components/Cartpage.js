import React, { useContext, useEffect, useState } from 'react'
import { contextapi } from '../Contextapi'

const CartPage = () => {
const [message , setMessage] = useState("")
const [prod , setProd] = useState([])

    const {cart , setCart ,totalitems  , PPrice , } = useContext(contextapi)
    useEffect(() => {
      //make a amount portal;
      if (cart && cart.items) {
        fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: Object.keys(cart.items) }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              setProd(data.apiData);
            } else {
              setMessage(data.message);
            }
          })
          .catch((error) => console.error("Error fetching cart data:", error));
      } else {
        setMessage("Cart is empty or undefined");
      }
    }, [cart]);

  
  function handleQty(id){
    return cart.items[id]
  }


  function handleinc(e , id , qty){
   
    let currentqty = handleQty(id)
    let _cart = {...cart}
    _cart.items[id]= currentqty+1
    _cart.totalitems += 1;
    setCart(_cart)
  }

  function handledec(e,id){
   
    let currentqty = handleQty(id)
    if(currentqty===1){
      return
    }
    let _cart = {...cart}
    _cart.items[id]= currentqty-1
    _cart.totalitems -= 1;
    setCart(_cart)
  }

  return (
    <div>
    <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0"> Cart Item : {prod.length} </h5>
          </div>
          <div className="card-body">
            {/* Single item */}
            { prod.map((item)=>(
                       <div className="row">
                      
                       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      
                         <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                           <img src={`upload/${item.PImg}`} className="w-100" alt="Blue Jeans Jacket" />
                           <a href="#!">
                             <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                           </a>
                         </div>
                     
                       </div>
                       <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                       
                         <p><strong>{item.PName}</strong></p>
                         <p>{item.PDesc}</p>
                         {/* <p>{item.PQty}</p> */}
                         <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item">
                           <i className="fas fa-trash" />
                         </button>
                         <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init title="Move to the wish list">
                           <i className="fas fa-heart" />
                         </button>
                        
                       </div>
                       <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                       
                         <div className="d-flex mb-4" style={{maxWidth: 300}}>
                           <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" onClick={(e)=>{handledec(e  , item._id )}}>
                             <i className="fas fa-minus" />
                           </button>
                           <div data-mdb-input-init className="form-outline">
                             <input id="form1"   type="number" className="form-control" />
                             <label className="form-label" htmlFor="form1">{handleQty(item._id) }</label>
                           </div>
                           <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" onClick={(e)=>{handleinc(e , item._id )}}>
                             <i className="fas fa-plus" />
                           </button>
                         </div>
                        
                       
                         <p className="text-start text-md-center">
                           <strong>{}</strong>
                         </p>
                    
                       </div>
                     </div>
                     ))}
                     <hr className="my-4" />
                  
                
                     {/* Single item */}
                   </div>
         
        
        </div>
     
     
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity
                <span>{cart.totalitems}</span>
              </li>
            
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
              
                </div>
                <span><strong>${}</strong></span>
              </li>
            </ul>
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
              Go to checkin
            </button>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>



  

  )
}

export default CartPage

//----------------------------------------------------------------------------------------------------


// import React, { useContext, useEffect, useState } from 'react';
// import { contextapi } from '../Contextapi';

// const CartPage = () => {
//   const [message, setMessage] = useState("");
//   const [prod, setProd] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const { cart, setCart, totalitems } = useContext(contextapi);

//   useEffect(() => {
//     if (cart && cart.items) {
//       fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ids: Object.keys(cart.items) }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             setProd(data.apiData);
//             calculateTotalPrice(data.apiData);
//           } else {
//             setMessage(data.message);
//           }
//         })
//         .catch((error) => console.error("Error fetching cart data:", error));
//     } else {
//       setMessage("Cart is empty or undefined");
//     }
//   }, [cart]);

//   const calculateTotalPrice = (products) => {
//     let total = 0;
//     products.forEach((item) => {
//       const quantity = cart.items[item._id] || 1;
//       total += item.PPrice * quantity;
//     });
//     setTotalPrice(total);
//   };

//   function handleQty(id) {
//     return cart.items[id];
//   }

//   function handleInc(e, id) {
//     let currentQty = handleQty(id);
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty + 1;
//     _cart.totalitems += 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDec(e, id) {
//     let currentQty = handleQty(id);
//     if (currentQty === 1) return;
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty - 1;
//     _cart.totalitems -= 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDelete(id) {
//     let _cart = { ...cart };
//     const itemQty = _cart.items[id];
//     delete _cart.items[id];
//     _cart.totalitems -= itemQty;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   return (
//     <div>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5">
//           <div className="row d-flex justify-content-center my-4">
//             <div className="col-md-8">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Cart Item: {prod.length}</h5>
//                 </div>
//                 <div className="card-body">
//                   {prod.map((item) => (
//                     <div className="row" key={item._id}>
//                       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
//                         <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
//                           <img src={`upload/${item.PImg}`} className="w-100" alt={item.PName} />
//                         </div>
//                       </div>
//                       <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
//                         <p><strong>{item.PName}</strong></p>
//                         <p>{item.PDesc}</p>
//                         <p>Price per item: ${item.PPrice}</p>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-sm me-1 mb-2"
//                           onClick={() => handleDelete(item._id)}
//                           title="Remove item"
//                         >
//                           <i className="fas fa-trash" />
//                         </button>
//                       </div>
//                       <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
//                         <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
//                           <button className="btn btn-primary px-3 me-2" onClick={(e) => handleDec(e, item._id)}>
//                             <i className="fas fa-minus" />
//                           </button>
//                           <div className="form-outline">
//                             <input type="number" className="form-control" value={handleQty(item._id)} readOnly />
//                           </div>
//                           <button className="btn btn-primary px-3 ms-2" onClick={(e) => handleInc(e, item._id)}>
//                             <i className="fas fa-plus" />
//                           </button>
//                         </div>
//                         <p className="text-start text-md-center">
//                           <strong>Total: ${item.PPrice * handleQty(item._id)}</strong>
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <hr className="my-4" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Summary</h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                       Total Quantity
//                       <span>{totalitems}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                       <div>
//                         <strong>Total amount</strong>
//                       </div>
//                       <span><strong>${totalPrice.toFixed(2)}</strong></span>
//                     </li>
//                   </ul>
//                   <button type="button" className="btn btn-primary btn-lg btn-block">
//                     Go to checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CartPage;

//---------------------------------------------------------------------------------------------


// import React, { useContext, useEffect, useState } from 'react';
// import { contextapi } from '../Contextapi';

// const CartPage = () => {
//   const [message, setMessage] = useState("");
//   const [prod, setProd] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const { cart, setCart, totalitems } = useContext(contextapi);

//   useEffect(() => {
//     // Load cart from localStorage if available
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }

//     if (cart && cart.items) {
//       fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ids: Object.keys(cart.items) }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             setProd(data.apiData);
//             calculateTotalPrice(data.apiData);
//           } else {
//             setMessage(data.message);
//           }
//         })
//         .catch((error) => console.error("Error fetching cart data:", error));
//     } else {
//       setMessage("Cart is empty or undefined");
//     }
//   }, [cart]);

//   useEffect(() => {
//     // Save cart to localStorage whenever it changes
//     if (cart) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }
//   }, [cart]);

//   const calculateTotalPrice = (products) => {
//     let total = 0;
//     products.forEach((item) => {
//       const quantity = cart.items[item._id] || 1;
//       total += item.PPrice * quantity;
//     });
//     setTotalPrice(total);
//   };

//   function handleQty(id) {
//     return cart.items[id];
//   }

//   function handleInc(e, id) {
//     let currentQty = handleQty(id);
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty + 1;
//     _cart.totalitems += 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDec(e, id) {
//     let currentQty = handleQty(id);
//     if (currentQty === 1) return;
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty - 1;
//     _cart.totalitems -= 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDelete(id) {
//     let _cart = { ...cart };
//     const itemQty = _cart.items[id];
//     delete _cart.items[id];
//     _cart.totalitems -= itemQty;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   return (
//     <div>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5">
//           <div className="row d-flex justify-content-center my-4">
//             <div className="col-md-8">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Cart Item: {prod.length}</h5>
//                 </div>
//                 <div className="card-body">
//                   {prod.map((item) => (
//                     <div className="row" key={item._id}>
//                       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
//                         <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
//                           <img src={`upload/${item.PImg}`} className="w-100" alt={item.PName} />
//                         </div>
//                       </div>
//                       <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
//                         <p><strong>{item.PName}</strong></p>
//                         <p>{item.PDesc}</p>
//                         <p>Price per item: ${item.PPrice}</p>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-sm me-1 mb-2"
//                           onClick={() => handleDelete(item._id)}
//                           title="Remove item"
//                         >
//                           <i className="fas fa-trash" />
//                         </button>
//                       </div>
//                       <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
//                         <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
//                           <button className="btn btn-primary px-3 me-2" onClick={(e) => handleDec(e, item._id)}>
//                             <i className="fas fa-minus" />
//                           </button>
//                           <div className="form-outline">
//                             <input type="number" className="form-control" value={handleQty(item._id)} readOnly />
//                           </div>
//                           <button className="btn btn-primary px-3 ms-2" onClick={(e) => handleInc(e, item._id)}>
//                             <i className="fas fa-plus" />
//                           </button>
//                         </div>
//                         <p className="text-start text-md-center">
//                           <strong>Total: ${item.PPrice * handleQty(item._id)}</strong>
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <hr className="my-4" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Summary</h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                       Total Quantity
//                       <span>{totalitems}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                       <div>
//                         <strong>Total amount</strong>
//                       </div>
//                       <span><strong>${totalPrice.toFixed(2)}</strong></span>
//                     </li>
//                   </ul>
//                   <button type="button" className="btn btn-primary btn-lg btn-block">
//                     Go to checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CartPage;


//---------------------------------------------------------------------------------------------------

// import React, { useContext, useEffect, useState } from 'react';
// import { contextapi } from '../Contextapi';

// const CartPage = () => {
//   const [message, setMessage] = useState("");
//   const [prod, setProd] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const { cart, setCart, totalitems } = useContext(contextapi);

//   useEffect(() => {
//     // Load cart from localStorage if available
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }

//     if (cart && cart.items) {
//       fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ids: Object.keys(cart.items) }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             setProd(data.apiData);
//             calculateTotalPrice(data.apiData);
//           } else {
//             setMessage(data.message);
//           }
//         })
//         .catch((error) => console.error("Error fetching cart data:", error));
//     } else {
//       setMessage("Cart is empty or undefined");
//     }
//   }, [cart]);

//   useEffect(() => {
//     // Save cart to localStorage whenever it changes
//     if (cart) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }
//   }, [cart]);

//   const calculateTotalPrice = (products) => {
//     let total = 0;
//     products.forEach((item) => {
//       const quantity = cart.items[item._id] || 1;
//       total += item.PPrice * quantity;
//     });
//     setTotalPrice(total);
//   };

//   function handleQty(id) {
//     return cart.items[id];
//   }

//   function handleInc(e, id) {
//     let currentQty = handleQty(id);
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty + 1;
//     _cart.totalitems += 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDec(e, id) {
//     let currentQty = handleQty(id);
//     if (currentQty === 1) return;
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty - 1;
//     _cart.totalitems -= 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDelete(id) {
//     let _cart = { ...cart };
//     const itemQty = _cart.items[id];
//     delete _cart.items[id];
//     _cart.totalitems -= itemQty;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   return (
//     <div>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5">
//           <div className="row d-flex justify-content-center my-4">
//             <div className="col-md-8">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Cart Item: {prod.length}</h5>
//                 </div>
//                 <div className="card-body">
//                   {prod.map((item) => (
//                     <div className="row" key={item._id}>
//                       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
//                         <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
//                           <img src={`upload/${item.PImg}`} className="w-100" alt={item.PName} />
//                         </div>
//                       </div>
//                       <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
//                         <p><strong>{item.PName}</strong></p>
//                         <p>{item.PDesc}</p>
//                         <p>Price per item: ${item.PPrice}</p>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-sm me-1 mb-2"
//                           onClick={() => handleDelete(item._id)}
//                           title="Remove item"
//                         >
//                           <i className="fas fa-trash" />
//                         </button>
//                       </div>
//                       <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
//                         <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
//                           <button className="btn btn-primary px-3 me-2" onClick={(e) => handleDec(e, item._id)}>
//                             <i className="fas fa-minus" />
//                           </button>
//                           <div className="form-outline">
//                             <input type="number" className="form-control" value={handleQty(item._id)} readOnly />
//                           </div>
//                           <button className="btn btn-primary px-3 ms-2" onClick={(e) => handleInc(e, item._id)}>
//                             <i className="fas fa-plus" />
//                           </button>
//                         </div>
//                         <p className="text-start text-md-center">
//                           <strong>Total: ${item.PPrice * handleQty(item._id)}</strong>
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <hr className="my-4" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Summary</h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                       Total Quantity
//                       <span>{totalitems}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                       <div>
//                         <strong>Total amount</strong>
//                       </div>
//                       <span><strong>${totalPrice.toFixed(2)}</strong></span>
//                     </li>
//                   </ul>
//                   <button type="button" className="btn btn-primary btn-lg btn-block">
//                     Go to checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CartPage;

//--------------------------------------------------------------------------------------------

// import React, { useContext, useEffect, useState } from 'react';
// import { contextapi } from '../Contextapi';

// const CartPage = () => {
//   const [message, setMessage] = useState("");
//   const [prod, setProd] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const { cart, setCart, totalitems } = useContext(contextapi);

//   useEffect(() => {
//     // Load cart from localStorage if available
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }

//     if (cart && cart.items) {
//       fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ids: Object.keys(cart.items) }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             setProd(data.apiData);
//             calculateTotalPrice(data.apiData);
//           } else {
//             setMessage(data.message);
//           }
//         })
//         .catch((error) => console.error("Error fetching cart data:", error));
//     } else {
//       setMessage("Cart is empty or undefined");
//     }
//   }, [cart]);

//   useEffect(() => {
//     // Save cart to localStorage whenever it changes
//     if (cart) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }
//   }, [cart]);

//   const calculateTotalPrice = (products) => {
//     let total = 0;
//     products.forEach((item) => {
//       const quantity = cart.items[item._id] || 1;
//       total += item.PPrice * quantity;
//     });
//     setTotalPrice(total);
//   };

//   function handleQty(id) {
//     return cart.items[id];
//   }

//   function handleInc(e, id) {
//     let currentQty = handleQty(id);
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty + 1;
//     _cart.totalitems += 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDec(e, id) {
//     let currentQty = handleQty(id);
//     if (currentQty === 1) return;
//     let _cart = { ...cart };
//     _cart.items[id] = currentQty - 1;
//     _cart.totalitems -= 1;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   function handleDelete(id) {
//     let _cart = { ...cart };
//     const itemQty = _cart.items[id];
//     delete _cart.items[id];
//     _cart.totalitems -= itemQty;
//     setCart(_cart);
//     calculateTotalPrice(prod);
//   }

//   return (
//     <div>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5">
//           <div className="row d-flex justify-content-center my-4">
//             <div className="col-md-8">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Cart Item: {prod.length}</h5>
//                 </div>
//                 <div className="card-body">
//                   {prod.map((item) => (
//                     <div className="row" key={item._id}>
//                       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
//                         <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
//                           <img src={`upload/${item.PImg}`} className="w-100" alt={item.PName} />
//                         </div>
//                       </div>
//                       <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
//                         <p><strong>{item.PName}</strong></p>
//                         <p>{item.PDesc}</p>
//                         <p>Price per item: ${item.PPrice}</p>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-sm me-1 mb-2"
//                           onClick={() => handleDelete(item._id)}
//                           title="Remove item"
//                         >
//                           <i className="fas fa-trash" />
//                         </button>
//                       </div>
//                       <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
//                         <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
//                           <button className="btn btn-primary px-3 me-2" onClick={(e) => handleDec(e, item._id)}>
//                             <i className="fas fa-minus" />
//                           </button>
//                           <div className="form-outline">
//                             <input type="number" className="form-control" value={handleQty(item._id)} readOnly />
//                           </div>
//                           <button className="btn btn-primary px-3 ms-2" onClick={(e) => handleInc(e, item._id)}>
//                             <i className="fas fa-plus" />
//                           </button>
//                         </div>
//                         <p className="text-start text-md-center">
//                           <strong>Total: ${item.PPrice * handleQty(item._id)}</strong>
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <hr className="my-4" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Summary</h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                       Total Quantity
//                       <span>{totalitems}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                       <div>
//                         <strong>Total amount</strong>
//                       </div>
//                       <span><strong>${totalPrice.toFixed(2)}</strong></span>
//                     </li>
//                   </ul>
//                   <button type="button" className="btn btn-primary btn-lg btn-block">
//                     Go to checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CartPage;



