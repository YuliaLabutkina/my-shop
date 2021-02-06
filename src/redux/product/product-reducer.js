import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import createProduct from '../../js/createProduct';
import productActions from './product-action';

const initialState = [...createProduct()];

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

const products = createReducer(initialState, {
  [productActions.addProducts]: (_, { payload }) => payload,
});

const card = createReducer([], {
  [productActions.addToCard]: isAddToCard,
  [productActions.addToCardOneProduct]: isAddToCardOneProduct,
  [productActions.delToCard]: isDelToCard,
});

const productReducer = combineReducers({
  products,
  card,
});

export default productReducer;
