const cleanBlankFields = (obj) => {
  for (var propName in obj) {
    if (
      obj[propName] === '' ||
      obj[propName] === null ||
      obj[propName] === undefined
    ) {
      delete obj[propName];
    }
  }
  return obj;
};

export default cleanBlankFields;
