import React, { useEffect, useState } from "react";
import { getAllUserOrders, userDeleteHisOrder } from "./../../api/apiOrder";
import FullScreenLoader from "./../../components/FullScreenLoader";
import Swal from "sweetalert2";

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
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00d0c5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "Cancel",
    });
    if (result.isConfirmed) {
      let result = await userDeleteHisOrder(id);
      if (result?.message === "deleted") {
        await getUserOrders();
      }

      Swal.fire({
        icon: "success",
        title: "Order Cancelled",
        showConfirmButton: false,
        timer: 1500,
      });
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
                <tr key={order._id}>
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
