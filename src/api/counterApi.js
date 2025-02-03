export const fetchCount = (amount = 1) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
};

export const fetchDecrement = (amount) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
};
