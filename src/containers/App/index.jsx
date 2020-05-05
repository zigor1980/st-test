import React from 'react';
import Layout from 'components/Layout';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ClientsDataView from 'containers/ClientsDataView';
import ProductsDataView from 'containers/ProductsDataView';

function App() {
  return (
    <Layout menu={[
      { key: 'clients', title: 'Клиенты', path: '/clients' },
      { key: 'products', title: 'Продукты', path: '/products' },
    ]}
    >
      <Switch>
        <Route path="/clients">
          <ClientsDataView />
        </Route>
        <Route path="/products">
          <ProductsDataView />
        </Route>
        <Redirect to="/clients" />
      </Switch>
    </Layout>
  );
}

export default App;
