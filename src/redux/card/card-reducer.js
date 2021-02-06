import { createReducer } from '@reduxjs/toolkit';

import productActions from './card-action';

const isAddToCard = (state, { payload }) => {
  if (state.length === 0) {
    return [payload];
  }

  if (state.find(el => el.id === payload.id)) {
    return state.map(product => {
      if (product.id === payload.id) {
        return { ...product, amount: product.amount + payload.amount };
      }
      return product;
    });
  }
  return [...state, payload];
};

const isAddToCardOneProduct = (state, { payload }) => {
  return state.map(prod => {
    if (prod.id === payload) {
      return { ...prod, amount: prod.amount + 1 };
    }
    return prod;
  });
};

const isDelToCard = (state, { payload }) => {
  return state.reduce((acc, el) => {
    if (el.id === payload) {
      if (Number(el.amount) === 1) {
        return acc;
      }
      acc.push({ ...el, amount: el.amount - 1 });
      return acc;
    }
    acc.push(el);
    return acc;
  }, []);
};

const cardReducer = createReducer([], {
  [productActions.addToCard]: isAddToCard,
  [productActions.addToCardOneProduct]: isAddToCardOneProduct,
  [productActions.delToCard]: isDelToCard,
});

export default cardReducer;
