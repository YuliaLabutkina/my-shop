import { createAction } from '@reduxjs/toolkit';

const addToCard = createAction('product/AddToCard');
const addToCardOneProduct = createAction('product/AddToCardOneProduct');
const delToCard = createAction('product/DelToCard');

export default { addToCard, addToCardOneProduct, delToCard };
