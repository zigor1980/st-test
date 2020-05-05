import React from 'react';
import { withData } from 'containers/DataStore';
import DataView from 'containers/DataView';
import ProductForm from 'components/ProductForm';
import tableColumns from './constants';

function ProductsDataView(props) {
  return <DataView {...props} tableColumns={tableColumns} formComponent={ProductForm} />;
}

export default withData('products', ProductsDataView);
