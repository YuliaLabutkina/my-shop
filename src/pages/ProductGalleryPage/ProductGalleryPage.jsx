import { useSelector, useDispatch } from 'react-redux';

import Product from './Product/Product';
import Button from '../../components/Button/Button';
import { getProducts } from '../../redux/product/product-selector';
import createProduct from '../../js/createProduct';
import productActions from '../../redux/product/product-action';

import { List, ButtonContainer } from './ProductGalleryPage.style';

const ProductGalleryPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const addNewProducts = () => {
    const newProducts = createProduct(products);
    dispatch(productActions.addProducts(newProducts));
  };

  return (
    <div>
      <List>
        {products.map(({ id, price, color }) => (
          <Product key={id} color={color} price={price} id={id} />
        ))}
      </List>
      <ButtonContainer>
        <Button onClick={addNewProducts} text="Load More" />
      </ButtonContainer>
    </div>
  );
};

export default ProductGalleryPage;
