import { createSelector } from '@reduxjs/toolkit';

const getProducts = state => state.product.products;
const getCard = state => state.product.card;

const getSumOfUnits = createSelector([getCard], card => {
  return card.reduce((acc, el) => acc + el.amount, 0);
});

const getOrderAmount = createSelector([getCard], card => {
  return card.reduce((acc, el) => acc + el.amount * el.price, 0);
});

export { getProducts, getCard, getSumOfUnits, getOrderAmount };
