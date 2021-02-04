import { lazy } from 'react';

export const lazyRoutes = [
  {
    path: '/',
    label: 'home',
    exact: true,
    component: lazy(() =>
      import(
        './pages/ProductGalleryPage/ProductGalleryPage' /* webpackChunkName: "home" */
      ),
    ),
  },

  {
    path: '/product/:productId',
    label: 'detailsPage',
    exact: false,
    component: lazy(() =>
      import(
        './pages/ProductDetailsPage/ProductDetailsPage' /* webpackChunkName: "home" */
      ),
    ),
  },

  {
    path: '/card',
    label: 'cardPage',
    exact: true,
    component: lazy(() =>
      import('./pages/CardPage/CardPage' /* webpackChunkName: "home" */),
    ),
  },
];

export default {
  home: '/',
  detailsPage: '/product/:productId',
  cardPage: '/card',
};
