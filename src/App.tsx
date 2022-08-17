import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from './app/stores/store';
import ManagementPage from './components/management/ManagementPage';
import OrderPage from './components/order/OrderPage';
import ShopPage from './components/shop/ShopPage';

function App() {
  const {pageStore} = useStore();

  const page = () => {
    switch(pageStore.currentPage) {
      case "Shop":
        return <ShopPage/>
      case "Management":
        return <ManagementPage/>
      case "Order": 
        return <OrderPage/>
    }
  }

  return (
    <>
      <div className="d-flex">
        <button className='btn-link' onClick={() => pageStore.setCurrentPage("Shop")}><h3>Магазин</h3></button>
        <button className='btn-link' onClick={() => pageStore.setCurrentPage("Management")}><h3>Страница менеджера</h3></button>
      </div>
      {page()}
    </>    
  );
}

export default observer(App);
