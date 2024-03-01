
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta:{title:"Entrar"} },
      { path: 'register', component: () => import('pages/RegisterPage.vue'), meta:{title:"Cadastro"} },
      { path: 'send-reset', component: () => import('pages/SendResetPass.vue'), meta:{title:"Resetar"} },
      { path: 'reset', component: () => import('pages/ResetPass.vue'), meta:{title:"Resetar Senha"} },
      { path: 'dash', component: () => import('pages/Dashboard.vue'), meta:{protected:true,title:"Painel"} },
      { path: 'sell', component: () => import('pages/Sell.vue'), meta:{protected:true,title:"Vender"} },
      { path: 'clients', component: () => import('pages/Clients.vue'), meta:{protected:true,title:"Clientes"} },
      { path: 'products', component: () => import('pages/Products.vue'), meta:{protected:true,title:"Produtos"} },
      { path: 'sells', component: () => import('pages/Sells.vue'), meta:{protected:true,title:"Vendas"} },
      { path: 'receive', component: () => import('pages/Receive.vue'), meta:{protected:true,title:"À Receber"} },
      { path: 'pay', component: () => import('pages/Pay.vue'), meta:{protected:true,title:"À Pagar"} },
      { path: 'new-product', component: () => import('pages/NewProduct.vue'), meta:{protected:true,title:"Produto"} },
      { path: 'new-client', component: () => import('pages/NewClient.vue'), meta:{protected:true,title:"Cliente"} },
      { path: 'new-pay', component: () => import('pages/NewPay.vue'), meta:{protected:true,title:"Pagar"} },
      { path: 'new-receive', component: () => import('pages/NewReceive.vue'), meta:{protected:true,title:"Receber"} },
      { path: 'settings', component: () => import('pages/Settings.vue'), meta:{protected:true,title:"Configurar"} },
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
