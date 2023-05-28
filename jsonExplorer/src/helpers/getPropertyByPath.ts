const getPropertyByPath = (data: any, propertyPath: string) => {
  const pathSegments = propertyPath.split(".");
  let value = data;
  for (const pathSegment of pathSegments) {
    if (
      typeof value === "object" &&
      value !== undefined &&
      value !== null &&
      pathSegment in value
    ) {
      value = value[pathSegment];
    } else {
      value = undefined;
    }
  }
  return typeof (value === Object) ? JSON.stringify(value) : value;
};

export default getPropertyByPath;
