import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { mapPropsToFields } from 'utils';
import PropTypes from 'prop-types';

const { Item } = Form;

const ProductForm = React.forwardRef(
  ({ entity }, ref) => {
    const { form } = Form.useForm();
    const fields = mapPropsToFields(entity);

    return (
      <Form form={form} fields={fields} ref={ref}>
        <Item label="Название" name="title">
          <Input />
        </Item>
        <Item label="Цена" name="price">
          <Input />
        </Item>
        <Item label="Статус" name="status" valuePropName="checked">
          <Checkbox />
        </Item>
      </Form>
    );
  },
);

ProductForm.propTypes = {
  entity: PropTypes.shape({}),
};

export default ProductForm;
