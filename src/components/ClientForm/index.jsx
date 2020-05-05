import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { mapPropsToFields } from 'utils';
import PropTypes from 'prop-types';

const { Item } = Form;

const ClientForm = React.forwardRef(
  ({ entity }, ref) => {
    const { form } = Form.useForm();
    const fields = mapPropsToFields(entity);

    return (
      <Form form={form} fields={fields} ref={ref}>
        <Item label="Имя" name="name">
          <Input />
        </Item>
        <Item label="Страна" name="country">
          <Input />
        </Item>
        <Item label="Статус" name="status" valuePropName="checked">
          <Checkbox />
        </Item>
        <Item label="Страна" name="address">
          <Input />
        </Item>
      </Form>
    );
  },
);

ClientForm.propTypes = {
  entity: PropTypes.shape({}),
};

export default ClientForm;
