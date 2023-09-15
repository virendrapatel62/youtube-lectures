function Input(props) {
  return (
    <div className="mt-3 form-group">
      <label htmlFor="" className="form-label">
        {props.label}
      </label>
      <input className="form-control" {...props} />
      <span className="text-danger">{props.error}</span>
    </div>
  );
}

export { Input };
