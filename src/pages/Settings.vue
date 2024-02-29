<template>
  <q-page padding>
    <q-card class="bg-[#daa420] p-2">
      <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-1 -top-1" />
      <q-list bordered class="rounded-borders mt-6">
        <q-expansion-item expand-separator icon="mdi-palette-swatch" label="Materiais"
          caption="Defina os tipos e materiais usados nas peças" class="text-secondary uppercase font-bold">
          <q-card class="h-[250px]">
            <q-card-section class="w-full h-full bg-primary">
              <div>
                <q-input v-model="material" dense filled color="secondary" label="material" label-color="secondary"
                  input-class="text-info font-bold">
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
                      <q-btn flat round dense size="sm" icon="delete" color="red" @click="materiais.splice(index, 1)" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-scroll-area>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="mdi-medal-outline" label="Níveis"
          caption="Defina os Níveis que seus clientes podem atingir" class="text-secondary uppercase font-bold">
          <q-card class="h-[250px]">
            <q-card-section class="w-full h-full bg-primary">
              <div class="w-full grid grid-cols-[1fr_1fr_80px] gap-2">
                <q-input v-model="level.number" dense filled color="secondary" label="Nº do Nível" label-color="secondary"
                  input-class="text-info font-bold"/>
                  <q-input  v-model="level.name" dense filled color="secondary" label="Nome do Nível" label-color="secondary"
                  input-class="text-info font-bold"/>
                  <q-input v-model="level.icon" dense filled color="secondary" label="Icone do Nível" label-color="secondary"
                  input-class="text-info font-bold"/>
                  <q-input v-model="level.color" dense filled color="secondary" label="Cor do Nível" label-color="secondary"
                  input-class="text-info font-bold"/>
                  <q-btn icon="add" color="secondary" @click="addLevel" style="grid-row:1/3;grid-column:3"/>
              </div>
              <q-scroll-area class="h-[calc(100%_-_80px)] w-full">
                <q-list class="w-full h-full">
                  <q-item v-for="(item, index) in levels" :key="item.id" class="text-primary">
                    <q-item-section side>
                      <q-icon :name="item.icon" />
                    </q-item-section>
                    <q-item-section class="text-secondary">
                      {{ item.name }}
                      <q-menu  cover fit anchor="bottom middle" self="top middle">
                        <q-input v-model="item.name" color="primary" filled dense>
                          <template #append>
                            <q-btn icon="save" flat round color="secondary" @click=" saveName(item, index)" v-close-popup/>
                          </template>
                          <template #prepend>
                            <q-btn icon="close" flat round color="secondary" v-close-popup />
                          </template>
                        </q-input>
                      </q-menu>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat round dense size="sm" icon="delete" color="red" @click="levels.splice(index, 1)" />
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
export default {
  data() {
    return {
      materiais: [],
      levels: [],
      material: null,
      level: {
        name:null,
        number:null,
        color:null,
        icon:null
      },
      name:null
    }
  },
  methods: {
    addMaterial() {
      this.materiais.unshift({
        id: this.materiais.length + 1,
        name: this.material
      })
    },
    addLevel() {
      let level = {...this.level};
      level["id"] = this.levels.length + 1;
      this.levels.unshift(level)
    },
    saveName(item,index){
      // this.levels[index].name = this.name;
    }
  }
}
</script>

<style lang="sass" scoped>

</style>