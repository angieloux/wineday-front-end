import React, { useEffect } from "react";
import { useGlobalState } from "../../../context/globalContext";
import { getOrders } from "../../../services/orderServices";
import Layout from "../../shared/Layout";
import OrderPreview from "./OrderPreview";
import "./orders.styles.scss";

const OrdersList = () => {
  const { globalStore, globalDispatch } = useGlobalState();
  const { orders } = globalStore;
  const allOrders = orders.map((order) => (
    <OrderPreview {...order} key={order.id} />
  ));

  useEffect(() => {
    getOrders()
      .then((orders) => {
        globalDispatch({ type: `setOrders`, data: orders });
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <>
        <h1 className="orders-title">Orders</h1>
        {orders.length === 0 ? (
          <div className="empty-orders">Your orders are empty</div>
        ) : (
          <div className="orders-page">
            <div className="order-item-container">{allOrders}</div>
          </div>
        )}
      </>
    </Layout>
  );
};

export default OrdersList;

/* <div className="order-item-container">
              {loggedInUser && orders.length === 0 && (
                <div className="empty-orders">Nothing to see here</div>
              )}
              {loggedInUser && orders.length > 0 && allOrders} */

/* </div> */
