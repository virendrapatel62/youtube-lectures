import { Input } from "./Input";
import { Radio } from "./Radio";
import { Select } from "./Select";

export function Field(props) {
  const field = props.field;
  const type = field.type;

  const inputProps = {
    ...field,
    onBlur: props.onBlur,
    onChange: props.onChange,
    error: props.error,
  };

  switch (type) {
    case "text":
    case "number":
    case "email":
    case "password":
      return <Input {...inputProps} />;

    case "select": {
      return <Select {...inputProps} />;
    }
    case "radio": {
      return <Radio {...inputProps} />;
    }
  }

  return <Fragment />;
}
