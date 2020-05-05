import React from 'react';
import { Button, Checkbox } from 'antd';

export default function getTableColumns(columns, {
  onDelete, onEdit,
}) {
  return [...columns.map((column) => {
    switch (column.key) {
      case 'status': return { ...column, render: (value) => <Checkbox checked={value} /> };
      default: return column;
    }
  }), {
    title: 'Действие',
    dataIndex: 'action',
    key: 'action',
    width: 300,
    render: (_, record) => (
      <>
        <Button
          onClick={onEdit(record)}
        >
          Изменить
        </Button>
        <Button
          type="danger"
          onClick={onDelete(record.id)}
        >
          Удалить
        </Button>
      </>
    ),
  }];
}
