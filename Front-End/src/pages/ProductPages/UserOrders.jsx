import React, { useEffect, useState } from "react";
import { getAllUserOrders, userDeleteHisOrder } from "./../../api/apiOrder";
import FullScreenLoader from "./../../components/FullScreenLoader";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders();
  }, []); // should depend on order state

  if (!orders.length) {
    return <FullScreenLoader />;
  }

  function getUserOrders() {
    getAllUserOrders()
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function removeThisOrder(id) {
    console.log("Removing order with ID:", id);
    let result = await userDeleteHisOrder(id);
    if (result?.message === "deleted") {
      await getUserOrders();
    }
  }

  return (
    <>
      <div className="table-responsive container mt-5 pro-order">
        <h2 className="text-white text-center">MY ORDERS</h2>
        <table className="table table-striped table-hover table-borderless table-dark align-middle text-center  mx-auto">
          <thead className="">
            <tr>
              <th>ORDER ID</th>
              <th># OF PRODUCTS</th>
              <th>TOTAL PRICE</th>
              <th>ADDRESS</th>
              <th>REMOVE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {orders.length >= 1 &&
              orders.map((order) => (
                <tr key={order._id} >
                  <td scope="row">{order._id.slice(0, 6)}</td>
                  <td>{order.products.length}</td>
                  <td>${order.total_price}</td>
                  <td>
                    {`${order.address.city},${order.address.street},${order.address.building} `}
                  </td>
                  <td
                    onClick={() => {
                      if (order.status === "cancelled") return;
                      removeThisOrder(order._id);
                    }}
                  >
                    {order.status === "pending" ? (
                      <i
                        className="fa-solid fa-trash fs-5 del"
                        style={{ color: "#a70101" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-check fs-5 del"
                        style={{ color: "green" }}
                      ></i>
                    )}
                  </td>
                  <td>{order.status}</td>
                </tr>
              ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}
