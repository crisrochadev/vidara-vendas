<template>
  <q-page padding class="w-full h-full relative grid" style="grid-template-rows:70px 1fr">
    <div class="w-full flex justify-between items-center p-2">

      <q-input filled color="primary" label-color="primary" label="Pesquisar" class="w-[calc(100%_-_40px)]" dense v-model="search">
        <template #append>
          <q-btn round flat icon="search" color="primary" />
        </template>
      </q-input>
      <q-btn icon="add" color="primary" dense to="/new-product" />
    </div>
    <div class="w-full h-full">
      <div class="w-full h-full flex justify-center items-center" v-if="!apiIsReady">
        <q-spinner-pie color="primary" size="lg"/>
      </div>
      <q-scroll-area class="w-full h-full" v-else>

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
              <q-item-label class="text-primary uppercase">
                {{ item.description }}
              </q-item-label>

            </q-item-section>
            <q-item-section side class="text-secondary font-extrabold">
              {{ item.salePrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',

              }) }}
            </q-item-section>
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn color="info" icon="more_vert" flat dense>
                  <q-menu>
                    <q-list style="min-width: 100px" class="bg-positive">
                      <q-item clickable v-close-popup @click="del(item.id)">
                        <q-item-section side>
                          <q-icon name="delete" flate dense color="red" />
                        </q-item-section>
                        <q-item-section class="uppercase text-info font-bold">
                          Apagar
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable v-close-popup @click="edit(item.id)">
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
import { useData } from 'src/stores/data';
import { useQuasar } from 'quasar';
export default {
  data() {
    return {
      store:useData(),
      $q:useQuasar(),
      allProducts: [],
      apiIsReady:false,
      columns: [
        {
          label: 'Qtd',
          name: 'qtd',
          field: 'qtd',
          show: true,
        },
        {
          label: 'Produto',
          name: 'description',
          field: 'description',
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
      search: ''
    }
  },
  async mounted(){
    await this.store.getAll("products")
    // this.allProducts = JSON.parse(JSON.stringify(this.store.products))
    console.log(this.store.products)
    this.apiIsReady = true;
  },
  computed: {
    products() {
      return this.store.products.filter(c => c.description.toLowerCase().includes(this.search.toLowerCase()) || c.code.toString().includes(this.search.toLowerCase()))
    }
  },
  methods:{
    async del(id){
    
      await this.store.del("products",id)
    },
    edit(id){
      this.$router.push("/new-product?id=" + id)
    }
  }
}
</script>
