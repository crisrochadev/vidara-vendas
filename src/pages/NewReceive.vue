<template>
  <q-page padding>
    <q-card class="bg-[#daa420] p-2">
      <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-1 -top-1" />
      <q-form class="mt-8">
        <div class="w-full grid md:grid-cols-4 gap-2 mt-2 ">
          <q-input dense filled label="Cliente" v-model="receive.client" color="secondary"
            input-class="text-secondary" label-color="secondary" style="grid-column:1/3"/>
          <q-input dense filled label="Total" disabled v-model="receive.total" input-class="text-secondary"
            label-color="secondary" style="grid-column:3/5"/>
          <q-toggle v-model="receive.parcial" color="secondary" style="grid-column:1"
            class="uppercase text-secondary font-bold" label="Receber Parcial?" />
          <transition>
            <q-input v-show="receive.parcial" dense filled label="Valor a receber" v-model="receive.receive" color="secondary" input-class="text-secondary"
              label-color="secondary" />
          </transition>
          <transition>
            <q-input v-show="receive.parcial" dense filled label="Restante" v-model="receive.remaining" color="secondary" input-class="text-secondary"
              label-color="secondary" />
          </transition>
          <transition>
            <q-input v-show="receive.parcial" dense filled label="Receber Restante em:" v-model="receive.duedate" color="secondary"
              input-class="text-secondary" label-color="secondary" />
          </transition>
        </div>


        <div class="flex justify-end items-center gap-2 mt-2">
          <q-btn color="secondary" outline text-color="secondary" label="Cancelar" @click="$router.back()" />
          <q-btn color="secondary" text-color="info" label="Receber" type="submit" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      receive: {
        client: null,
        total: null,
        receive: null,
        remaining: null,
        parcial: false,
        duedate: null
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>