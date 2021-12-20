export const removeProduct = (array, item) => {
  console.log(item);
  console.log(array);
  if (array[0].name === item.name) {
    return array.slice(1);
  } else {
    return [array[0]].concat(removeProduct(array.slice(1), item));
  }
};

export const removeUnavailableProducts = (array) => {
  if (array.length === 0) {
    return [];
  } else if (array[0].quantity === 0) {
    return removeUnavailableProducts(array.slice(1));
  } else {
    return [array[0]].concat(removeUnavailableProducts(array.slice(1)));
  }
};

export const decreaseQuantityOfItem = (array, item) => {
  if (array.length === 0) {
    return [];
  } else if (array[0].name === item.name) {
    array[0].quantity--;
    return array;
  } else {
    return [array[0]].concat(decreaseQuantityOfItem(array.slice(1), item));
  }
};

export const increaseQuantityOfItem = (array, item) => {
  if (array.length === 0) {
    return [];
  } else if (array[0].name === item.name) {
    array[0].quantity++;
    return array;
  } else {
    return [array[0]].concat(increaseQuantityOfItem(array.slice(1), item));
  }
};
