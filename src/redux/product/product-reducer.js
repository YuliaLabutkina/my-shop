import { createReducer } from '@reduxjs/toolkit';

import createProduct from '../../js/createProduct';
import productActions from './product-action';

const initialState = [...createProduct()];

const productReducer = createReducer(initialState, {
  [productActions.addProducts]: (_, { payload }) => payload,
});

export default productReducer;
