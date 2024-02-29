<template>
  <q-page padding class="w-full h-full relative grid" style="grid-template-rows:70px 1fr">
    <div class="w-full flex justify-between items-center p-2">
      <h2 class="text-primary uppercase font-bold">Produtos</h2>
      <q-btn label="Novo" icon-right="add" color="primary" flat dense />
    </div>
    <div class="w-full h-full">
      <q-scroll-area class="w-full h-full">
        <q-list class="text-info font-bold">
          <q-item v-for="item in products" :key="item.id">
            <q-item-section side>
              {{ item.qtd }}
            </q-item-section>
            <q-item-section>
              <q-item-label caption class="w-full">
                <p class="w-full flex justify-between items-center">
                  <span class="text-grey-7">
                    {{ item.code }}
                  </span>
                  <span>
                    -
                    <!-- {{ item.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  }) }} -->
                  </span>
                </p>
              </q-item-label>
              <q-item-label>
                {{ item.name }}
              </q-item-label>

            </q-item-section>
            <q-item-section side class="text-primary font-extrabold">
              {{ item.salePrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }) }}
            </q-item-section>
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn color="info" icon="more_vert" flat dense>
                  <q-menu>
                    <q-list style="min-width: 100px" class="bg-secondary">
                      <q-item clickable v-close-popup>
                        <q-item-section side>
                          <q-icon name="delete" flate dense color="red" />
                        </q-item-section>
                        <q-item-section class="uppercase text-info font-bold">
                          Apagar
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable v-close-popup>
                        <q-item-section side>
                          <q-icon name="edit" flate dense color="blue" />
                        </q-item-section>
                        <q-item-section class="uppercase text-info font-bold">
                          Editar
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        },
        {
          code: '12344',
          name: 'nome do produto 1',
          salePrice: 129.80,
          price: 100,
          qtd: 10
        }
      ],
      columns: [
        {
          label: 'Qtd',
          name: 'qtd',
          field: 'qtd',
          show: true,
        },
        {
          label: 'Produto',
          name: 'product',
          field: 'name',
          show: true,
        },
        {
          label: 'Valor para Venda',
          field: 'salePrice',
          name: 'sale',
          show: true,
        },
        {
          label: 'Valor',
          field: 'price',
          name: 'price',
          show: false
        },
        {
          label: 'Total',
          name: 'total',
          show: true,
        },
        {
          label: '',
          name: 'actions',
          show: true,
        }
      ],
    }
  }
}
</script>
