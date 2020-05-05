import React from 'react';
import PropTypes from 'prop-types';

const DataContext = React.createContext();

export function getDataByKey(data = {}, key) {
  const { ids = [], entities = {} } = data[key];

  return ids.map((id) => entities[id]);
}


export function withData(key, Component) {
  return (props) => (
    <DataContext.Consumer>
      {({ data, onEdit, onDelete }) => (
        <Component
          {...props}
          data={getDataByKey(data, key)}
          onEdit={onEdit(key)}
          onDelete={onDelete(key)}
        />
      )}
    </DataContext.Consumer>
  );
}

export default class DataStore extends React.Component {
  constructor(props) {
    super(props);
    const { store } = this.props;
    this.state = {
      store,
    };
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onDelete(key) {
    return (deletedId) => {
      this.setState(({ store }) => ({
        store: {
          ...store,
          [key]: {
            ...store[key],
            ids: store[key].ids.filter((id) => id !== deletedId),
          },
        },
      }));
    };
  }

  onEdit(key) {
    return (id, values) => {
      this.setState(({ store }) => {
        const { entities } = store[key];

        return {
          store: {
            ...store,
            [key]: {
              ...store[key],
              entities: {
                ...entities,
                [id]: {
                  ...entities[id],
                  ...values,
                },
              },
            },
          },
        };
      });
    };
  }

  render() {
    const { state: { store }, props: { children } } = this;

    return (
      <DataContext.Provider value={{
        data: store,
        onDelete: this.onDelete,
        onEdit: this.onEdit,
      }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

DataStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  store: PropTypes.shape({}),
};
