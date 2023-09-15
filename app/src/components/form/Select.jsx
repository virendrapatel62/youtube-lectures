function Select(props) {
  return (
    <div className="mt-3 form-group">
      <label htmlFor="" className="form-label">
        {props.label}
      </label>
      <select
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        class="form-select"
        aria-label="Default select example"
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export { Select };
