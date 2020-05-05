import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Table, Modal } from 'antd';
import getTableColumns from './utils';

const rowKey = (record) => record.id;

const TableViewList = ({
  entity, push, columns, onDelete, onEdit, ...props
}) => {
  const onDeleteRow = useCallback((id) => () => {
    Modal.confirm({
      title: 'Удаление',
      content: 'Вы действительно хотите удалить эту запись?',
      onOk: () => {
        onDelete(id);
        Modal.destroyAll();
      },
      onCancel: Modal.destroyAll,
    });
  }, [onDelete]);

  const onEditRow = useCallback((id) => () => {
    onEdit(id);
  }, [onEdit]);


  const tableColumns = useMemo(() => getTableColumns(columns, {
    onDelete: onDeleteRow, onEdit: onEditRow,
  }), [columns, onDeleteRow, onEditRow]);

  return (
    <Table
      rowKey={rowKey}
      columns={tableColumns}
      {...props}
    />
  );
};

TableViewList.propTypes = {
  entity: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  push: PropTypes.func,
};

export default TableViewList;
