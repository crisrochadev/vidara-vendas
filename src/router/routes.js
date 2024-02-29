
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'sell', component: () => import('pages/Sell.vue') },
      { path: 'clients', component: () => import('pages/Clients.vue') },
      { path: 'products', component: () => import('pages/Products.vue') },
      { path: 'sells', component: () => import('pages/Sells.vue') },
      { path: 'receive', component: () => import('pages/Receive.vue') },
      { path: 'pay', component: () => import('pages/Pay.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
