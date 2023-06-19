import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import {
  removeAllFromCart,
  removeFromCart,
  updateQuantity,
} from "./../../store/Slice/cart";
import { userPostNewOrder } from "../../api/apiOrder";
export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  let totalPrice =
    cartProducts.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    ) + 10;

  async function addNewOrder() {
    let newProducts = cartProducts.map((product) => ({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    }));
    let data = await userPostNewOrder({
      products: newProducts,
      total_price: totalPrice,
      address: {
        city: "alex",
        street: "miami",
        building: "55",
      },
      contact_phone: "01110464712",
    });
    console.log(data);
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Order Confirmed",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(removeAllFromCart());
    }
  }
  return (
    <section id="cart" className="section-p1 container text-light ">
      <table className="full-width">
        <thead>
          <tr>
            <td>IMAGE</td>
            <td>PRODUCT</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>AVAILABLE</td>
            <td>REMOVE</td>
            <td>SUBTOTAL</td>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <Link to={`/store/product/${product._id}`}>
                  <img src={product.images[0]?.secure_url} alt="" />
                </Link>
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <div className="qty text-center">
                  <span
                    className="minus bg-danger"
                    onClick={() => {
                      let newqunatity = product.quantity;
                      newqunatity--;
                      if (newqunatity < 1) return;
                      dispatch(
                        updateQuantity({
                          id: product._id,
                          quantity: newqunatity,
                        })
                      );
                    }}
                  >
                    -
                  </span>
                  <input
                    type="number"
                    className="count border-0 bg-transparent text-white "
                    name="qty"
                    value={product.quantity}
                    disabled
                    max={product.available}
                    placeholder={product.quantity}
                    min="1"
                  />
                  <span
                    className="plus bg-success"
                    onClick={() => {
                      let newqunatity = product.quantity;
                      newqunatity++;
                      if (newqunatity > product.available) return;
                      dispatch(
                        updateQuantity({
                          id: product._id,
                          quantity: newqunatity,
                        })
                      );
                    }}
                  >
                    +
                  </span>
                </div>
              </td>
              <td>{product.available - product.quantity}</td>
              <td onClick={() => dispatch(removeFromCart(product._id))}>
                <i
                  className="fa-solid fa-trash fs-5 del"
                  style={{ color: "#a70101" }}
                ></i>
              </td>
              <td> ${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <div className="total-price ml-auto">
          <table className="full-width">
            <tbody>


            <tr>
              <td>SUBTOTAL</td>
              <td>
                $
                {cartProducts.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.quantity * currentValue.price,
                  0
                )}{" "}
              </td>
            </tr>
            <tr>
              <td>TAX</td>
              <td>$10.00 </td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>{totalPrice}</td>
            </tr>
            </tbody>
          </table>
          <button
            className="btn btn-outline-success w-100"
            onClick={() => addNewOrder()}
          >
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
}
