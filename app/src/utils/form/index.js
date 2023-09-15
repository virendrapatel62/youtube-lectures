function getInitialFormValue(userFormConfig) {
  return userFormConfig.reduce((obj, field) => {
    Object.assign(obj, {
      [field.name]: "",
    });
    return obj;
  }, {});
}

export { getInitialFormValue };
