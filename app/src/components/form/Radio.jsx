function Radio(props) {
  return (
    <div className="mt-3 form-group">
      <label htmlFor="" className="form-label">
        {props.label}
      </label>

      {props.options.map((option, index) => (
        <div class="form-check" key={option.value}>
          <input
            id={`${props.name}_${index}`}
            class="form-check-input"
            {...props}
            onChange={props.onChange}
            value={option.value}
          />
          <label htmlFor={`${props.name}_${index}`} class="form-check-label">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export { Radio };
