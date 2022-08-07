import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../../context/globalContext";
import { getOrders } from "../../../services/orderServices";
import Layout from "../../shared/Layout";
import OrderPreview from "./OrderPreview";
import "./orders.styles.scss";
import { Heading } from "react-bulma-components";

const OrdersList = () => {
  const { globalStore, globalDispatch } = useGlobalState();
  const { orders } = globalStore;
  const [loading, setLoading] = useState(false);
  const allOrders = orders.map((order) => (
    <OrderPreview {...order} key={order.id} />
  ));

  useEffect(() => {
    setLoading(true);
    getOrders()
      .then((orders) => {
        globalDispatch({ type: `setOrders`, data: orders });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [globalDispatch]);

  return (
    <Layout>
      <>
        <Heading className="orders-title">Orders</Heading>
        {!loading && orders.length === 0 && (
          <div className="empty-orders">Your orders are empty</div>
        )}
        {loading && <p> loading</p>}
        {!loading && orders.length > 0 && (
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
