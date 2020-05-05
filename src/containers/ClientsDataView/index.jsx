import React from 'react';
import { withData } from 'containers/DataStore';
import DataView from 'containers/DataView';
import ClientForm from 'components/ClientForm';
import tableColumns from './constants';

function ClientsDataView(props) {
  return <DataView {...props} tableColumns={tableColumns} formComponent={ClientForm} />;
}

export default withData('clients', ClientsDataView);
