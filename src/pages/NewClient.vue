<template>
  <q-page padding>
    <q-card class="bg-[#daa420] p-2">
      <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-1 -top-1" />
      <q-form class="mt-8">
        <div class="w-full grid md:grid-cols-[200px_1fr] gap-2 mt-2 ">
          <q-input dense filled label="Nome" v-model="client.name" color="secondary" input-class="text-secondary"
            label-color="secondary" style="grid-column:1/3">
            <template #before>
              <q-icon :name="client.levelIcon" :color="client.levelColor" />
            </template>
          </q-input>
          <q-input readonly dense filled label="Código" v-model="client.code" color="secondary"
            input-class="text-secondary" label-color="secondary" />
          <q-input dense filled label="Aniversário" v-model="client.dateBirth" color="secondary"
            input-class="text-secondary" label-color="secondary" />
        </div>
        <h2 class="uppercase font-bold text-secondary">Contato</h2>
        <div class="w-full grid  gap-2">
          <q-input dense filled label="Telefone" v-model="client.phone" color="secondary" input-class="text-secondary"
            label-color="secondary" />
          <q-input dense filled label="Endereço" v-model="client.address" type="textarea" color="secondary"
            input-class="text-secondary" label-color="secondary" />

        </div>
        <div class="flex justify-end items-center gap-2 mt-2">
          <q-btn color="secondary" outline text-color="secondary" label="Cancelar" @click="$router.back()" />
          <q-btn color="secondary" text-color="info" label="Salvar" type="submit" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      client: {
        code: null,
        name: null,
        cpf: null,
        dateBirth: null,
        level: 1,
        levelIcon: 'mdi-heart',
        levelColor: 'red',
        phone: null,
        address: null,
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>