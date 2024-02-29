<template>
  <q-page padding class="w-full h-full relative grid" style="grid-template-rows:70px 1fr">
    <div class="w-full flex justify-between items-center p-2">

      <q-input filled color="primary" label-color="primary" label="Pesquisar" class="w-[calc(100%_-_80px)]" dense v-model="search">
        <template #append>
          <q-btn round flat icon="search" color="primary" />
        </template>
      </q-input>
      <q-btn icon="mdi-filter-check-outline" outline color="primary" dense />
      <q-btn icon="mdi-open-in-new" color="primary" dense to="/new-pay"/>
    </div>
    <div class="w-full h-full">
      <q-scroll-area class="w-full h-full">
        <q-list class="text-info font-bold">
          <q-item v-for="item in products" :key="item.id">
            <q-item-section>
              <q-item-label caption class="w-full">
                <p class="w-full flex justify-between items-center">
                  <span class="text-grey-7">
                    {{ item.date }}
                  </span>
                </p>
              </q-item-label>
              <q-item-label class="text-info">
                {{ item.product }}
              </q-item-label>
              <q-item-label caption class="w-full">
                <p class="w-full flex justify-between items-center">
                  <span class="text-grey-7">
                    {{ item.code }}
                  </span>
                  <span class="text-primary font-bold">
                    {{ item.price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    }) }}
                  </span>
                </p>
              </q-item-label>
            </q-item-section>
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn color="info" icon="more_vert" flat dense>
                  <q-menu>
                    <q-list style="min-width: 128.85px" class="bg-secondary">
                      <q-item clickable v-close-popup>
                        <q-item-section side>
                          <q-icon name="check" flate dense color="green" />
                        </q-item-section>
                        <q-item-section class="uppercase text-info font-bold">
                          Pagar
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
                      <q-item clickable v-close-popup>
                        <q-item-section side>
                          <q-icon name="delete" flate dense color="red" />
                        </q-item-section>
                        <q-item-section class="uppercase text-info font-bold">
                          Apagar
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
      search:'',
      allProducts: [
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        },
        {
          code: '12344',
          product: 'nome do produto 1',
          client: "Nome do Cliente",
          price: 128.85,
          date: '23/02/2024'
        }
      ],
      columns: [
        {
          label: 'date',
          product: 'date',
          field: 'date',
          show: true,
        },
        {
          label: 'Produto',
          product: 'product',
          field: 'product',
          show: true,
        },
        {
          label: 'Valor para Venda',
          field: 'client',
          product: 'sale',
          show: true,
        },
        {
          label: 'Valor',
          field: 'price',
          product: 'price',
          show: false
        },
        {
          label: 'Total',
          product: 'total',
          show: true,
        },
        {
          label: '',
          product: 'actions',
          show: true,
        }
      ],
    }
  },
  computed: {
    products() {
      return this.allProducts.filter(c => c.product.toLowerCase().includes(this.search.toLowerCase()) || c.code.toString().includes(this.search.toLowerCase()))
    }
  }
}
</script>
