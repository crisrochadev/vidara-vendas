<template>
  <q-page padding class="w-full h-full relative grid" style="grid-template-rows:55px 1fr">

    <div class="w-full flex justify-between items-center p-2">

      <q-input filled color="primary" label-color="primary" label="Pesquisar" class="w-[calc(100%_-_40px)]" v-model="search" dense>
        <template #append>
          <q-btn round flat icon="search" color="primary" />
        </template>
      </q-input>
      <q-btn icon="add" color="primary" dense to="/new-client"/>
    </div>

    <div class="w-full h-full">
      <q-scroll-area class="w-full h-full">
        <q-list class="text-info font-bold">
          <q-item v-for="item in clients" :key="item.id">
            <q-item-section side class="text-primary font-extrabold">
              <q-icon name="favorite" color="primary" v-if="item.level == 1" />
              <q-icon name="img:/imgs-icons/bronze.svg" color="primary" v-if="item.level == 2" />
              <q-icon name="img:/imgs-icons/silver.svg" color="primary" v-if="item.level == 3" />
              <q-icon name="img:/imgs-icons/gold.svg" color="primary" v-if="item.level == 4" />
              <q-icon name="diamond" color="primary" v-if="item.level == 5" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption class="w-full">
                <p class="w-full flex justify-between items-center">
                  <span class="text-grey-7">
                    {{ item.code }}
                  </span>
                </p>
              </q-item-label>
              <q-item-label>
                {{ item.name }}
              </q-item-label>

            </q-item-section>
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn color="info" icon="more_vert" flat dense>
                  <q-menu>
                    <q-list style="min-width: 50px" class="bg-secondary">
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
      usersClients: [
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 4
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 2
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 3
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 4
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 1
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 1
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 1
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 4
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        },
        {
          code: '12344',
          name: 'Nome do Cliente',
          level: 5
        }
      ],
      columns: [
        {
          label: 'level',
          name: 'level',
          field: 'level',
          show: true,
        },
        {
          label: 'Produto',
          name: 'client',
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
      search:''
    }
  },
  computed:{
    clients(){
      return this.usersClients.filter(c => c.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>
