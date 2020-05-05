export default function getDataSet(keys) {
  const result = { ids: [], entities: {} };

  for (let i = 0; i < 30; i += 1) {
    result.ids.push(i);
    result.entities[i] = keys.reduce((memo, key) => {
      const buf = memo;

      switch (key) {
        case 'id': {
          buf[key] = i;

          break;
        }
        case 'status': {
          buf[key] = Boolean(i % 2);

          break;
        }
        default: {
          buf[key] = `${key} - ${i}`;
        }
      }

      return buf;
    }, {});
  }

  return result;
}

export function mapPropsToFields(data) {
  const result = Object.keys(data).reduce((values, key) => {
    values.push({
      name: key,
      value: data[key],
    });


    return values;
  }, []);

  return result;
}
