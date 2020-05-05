import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableView from 'components/TableView';
import { Modal } from 'antd';

class DataView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this.formRef = React.createRef();
    this.onCancel = this.onCancel.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEdit(entity) {
    this.setState({
      current: entity,
    });
  }

  onSubmit() {
    const { state: { current: entity }, props: { onEdit }, formRef: { current } } = this;

    if (current) {
      current.validateFields().then((values) => {
        const { id } = entity;
        this.setState({ current: null });
        onEdit(id, values);
      });
    }
  }

  onCancel() {
    this.setState({
      current: null,
    });
  }

  render() {
    const {
      state: { current }, props: {
        data, onDelete, formComponent: Form, tableColumns,
      },
    } = this;

    return (
      <>
        <Modal
          title="Редактирование"
          visible={Boolean(current)}
          onCancel={this.onCancel}
          onOk={this.onSubmit}
          okText="Cохранить"
          cancelText="Отменить"
          maskClosable
          destroyOnClose
        >
          <Form ref={this.formRef} entity={current} />
        </Modal>
        <TableView
          dataSource={data}
          columns={tableColumns}
          onDelete={onDelete}
          onEdit={this.onEdit}
        />
      </>
    );
  }
}

DataView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  formComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]),
  tableColumns: PropTypes.arrayOf(PropTypes.shape({})),
};

export default DataView;
