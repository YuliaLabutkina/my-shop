import { createAction } from '@reduxjs/toolkit';

const addProducts = createAction('product/AddProduct');
const addToCard = createAction('product/AddToCard');
const addToCardOneProduct = createAction('product/AddToCardOneProduct');
const delToCard = createAction('product/DelToCard');

export default { addProducts, addToCard, addToCardOneProduct, delToCard };
