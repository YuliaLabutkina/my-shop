import { createSelector } from '@reduxjs/toolkit';

const getProducts = state => state.product;
const getCard = state => state.card;

const getSumOfUnits = createSelector([getCard], card => {
  return card.reduce((acc, el) => acc + el.amount, 0);
});

const getOrderAmount = createSelector([getCard], card => {
  return card.reduce((acc, el) => acc + el.amount * el.price, 0);
});

export { getProducts, getCard, getSumOfUnits, getOrderAmount };
