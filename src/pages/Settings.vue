<template>
  <q-page padding>
    <q-card class="bg-[#daa420]">
      <q-list bordered class="rounded-borders mt-6">
        <q-expansion-item expand-separator icon="mdi-palette-swatch" label="Materiais"
          caption="Defina os tipos e materiais usados nas peças" class="text-secondary uppercase font-bold">
          <q-card class="h-[250px]">
            <q-card-section class="w-full h-full bg-primary">
              <div>
                <q-input v-model="material" dense filled color="secondary" label="material" label-color="secondary"
                  input-class="text-info font-bold" @keyup.enter="addMaterial">
                  <template #after>
                    <q-btn icon="add" color="secondary" @click="addMaterial" />
                  </template>
                </q-input>
              </div>
              <q-scroll-area class="h-[calc(100%_-_30px)] w-full">
                <q-list class="w-full h-full">
                  <q-item v-for="(item, index) in materiais" :key="item.id" class="text-secondary">
                    <q-item-section>
                      {{ item.name }}
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat round dense size="sm" icon="delete" color="red" @click="del('materiais', item)" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-scroll-area>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="mdi-medal-outline" label="Níveis"
          caption="Defina os Níveis que seus clientes podem atingir" class="text-secondary uppercase font-bold">
          <q-card class="md:h-[250px] h-[500px]">
            <q-card-section class="w-full h-full bg-primary">
              <div class="w-full grid md:grid-cols-[1fr_100px_60px_100px] gap-2">
                <q-input v-model="level.name" dense filled color="secondary" label="Nome do Nível" label-color="secondary"
                  input-class="text-info font-bold" />

                <q-btn :icon="level.icon" label="icone" class="full-width" size="sm" outline
                  :style="{ color: level.color }">
                  <q-menu>
                    <q-input dense filled color="primary" v-model="filter" label="Filter" outlined clearable class="q-ma-md">
                    </q-input>
                    <q-icon-picker v-model="level.icon" :icons="icons" :filter="filter"
                      v-model:model-pagination="pagination" style="height: 220px"></q-icon-picker>
                  </q-menu>
                </q-btn>
                <q-btn dense outline :style="{ color: level.color }" label="Cor">
                  <q-menu>
                    <q-color v-model="level.color" no-header no-footer default-view="palette" class="my-picker" />
                  </q-menu>
                </q-btn>
                <q-btn icon="add" color="secondary" @click="addLevel"
                  :style="$q.screen.xs || $q.screen.sm ? 'background:red' : 'grid-row:1/3;grid-column:3'" />
              </div>
              <q-scroll-area class="h-[calc(100%_-_80px)] w-full">
                <q-list class="w-full h-full">
                  <q-item v-for="(item, index) in levels" :key="item.id" class="text-primary">
                    <q-item-section side>
                      <q-icon :name="item.icon" :style="{ color: item.color }" />
                    </q-item-section>
                    <q-item-section class="text-secondary">
                      {{ item.name }}
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat round dense size="sm" icon="delete" color="red" @click="del('levels', item)" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-scroll-area>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { useData } from 'src/stores/data';
import { QIconPicker } from '@quasar/quasar-ui-qiconpicker'
import icons from 'src/assets/icons.json'


export default {
  components: { QIconPicker },
  data() {
    return {
      icons: icons.icons,
      material: null,
      level: {
        name: null,
        color: '#20213D',
        icon: 'mdi-heart'
      },
      version: QIconPicker.version,
      name: null,
      $q: useQuasar(),
      data: [],
      store: useData(),
      filter: '',
      pagination: {
        itemsPerPage: 60,
        page: 0
      }
    }
  },
  computed: {
    materiais() {
      return this.store.materiais
    },
    levels() {
      console.log(this.store.levels)
      return this.store.levels
    }
  },
  async mounted() {
    await this.store.getAll("materiais")
    await this.store.getAll("levels")
  },
  methods: {
    async addMaterial() {
      if (this.material && this.material !== '') {
        const res = await this.store.add('materiais', {
          name: this.material
        })
        if (!res.success) {
          this.$q.notify({
            color: 'red',
            message: 'Ocorreu um erro ao atualizar os dados',
            position: 'top'
          });

        } else {
          this.material = null
        }
      } else {
        this.$q.notify({
          color: 'red',
          message: 'Você precisa preencher o campo material!',
          position: 'top'
        })
      }
    },
    async addLevel() {
      let level = { ...this.level };
      if (this.level.name && this.level.name !== '') {
        const res = await this.store.add('levels', level)
        if (!res.success) {
          this.$q.notify({
            color: 'red',
            message: 'Ocorreu um erro ao atualizar os dados',
            position: 'top'
          });

        } else {
          this.level = {
            name: null,
            color: '#20213D',
            icon: 'mdi-heart'
          }
        }
      } else {
        this.$q.notify({
          color: 'red',
          message: 'Você precisa preencher o campo nome do nível',
          position: 'top'
        })
      }

    },
    async del(store_name, item) {
      console.log(store_name)
      const res = await this.store.del(store_name, item.id);
    },
    async update(store_name,item){
      const id = item.id;
      delete item['id']
      const res = await this.store.update(store_name,id, item);
    },
    saveName(item, index) {
      // this.levels[index].name = this.name;
    }
  }
}
</script>

<style src="@quasar/quasar-ui-qiconpicker/dist/index.css"></style>