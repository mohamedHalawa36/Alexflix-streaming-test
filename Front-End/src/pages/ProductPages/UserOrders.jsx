import React, { useEffect, useState } from "react";
import { getAllUserOrders } from "./../../api/apiOrder";
import FullScreenLoader from "./../../components/FullScreenLoader";

//   <p className="lead col">Address</p>
//   <p className="lead col">Contact</p>
//   <p className="lead col text-center">Total_price</p>
//   <p className="lead col text-center">Products</p>
//   <p className="lead col text-center">Status</p>
//   <p className="lead col text-center">Action</p>
export default function UserOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllUserOrders()
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!orders.length) {
    return <FullScreenLoader />;
  }
  
  return (
    <>
      <section
        id="cart"
        className="section-p1 container text-light border border-1 "
      >
        <table className="full-width">
          <thead>
            <tr>
              <td>ORDER ID</td>
              <td># OF PRODUCTS</td>
              <td>TOTAL PRICE</td>
              <td>ADDRESS</td>
              <td>STATUS</td>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id.slice(0,6)}</td>
                  <td>{order.products.length}</td>
                  <td>${order.total_price}</td>
                  <td>
                    {`${order.address.city},${order.address.street},${order.address.building} `}
                  </td>
                  <td> {order.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
