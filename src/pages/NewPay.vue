<template>
  <q-page padding>
    <q-card class="bg-[#daa420] p-2">
      <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-1 -top-1" />
      <q-form class="mt-8">
        <div class="w-full grid md:grid-cols-4 gap-2 mt-2 ">
          <q-input dense filled label="Mês de Referência" v-model="pay.month" color="secondary"
            input-class="text-secondary" label-color="secondary" style="grid-column:1/3"/>
          <q-input dense filled label="Total" disabled v-model="pay.total" input-class="text-secondary"
            label-color="secondary" style="grid-column:3/5"/>
          <q-toggle v-model="pay.parcial" color="secondary" style="grid-column:1"
            class="uppercase text-secondary font-bold" label="Pagar Parcial?" />
          <transition>
            <q-input v-show="pay.parcial" dense filled label="Valor a pagar" v-model="pay.pay" color="secondary" input-class="text-secondary"
              label-color="secondary" />
          </transition>
          <transition>
            <q-input v-show="pay.parcial" dense filled label="Restante" v-model="pay.remaining" color="secondary" input-class="text-secondary"
              label-color="secondary" />
          </transition>
          <transition>
            <q-input v-show="pay.parcial" dense filled label="Pagar Restante em:" v-model="pay.duedate" color="secondary"
              input-class="text-secondary" label-color="secondary" />
          </transition>
          <q-input dense disabled filled label="Comissão" v-model="pay.commission" color="secondary"
            input-class="text-secondary" label-color="secondary" style="grid-column:1/5"/>
        </div>


        <div class="flex justify-end items-center gap-2 mt-2">
          <q-btn color="secondary" outline text-color="secondary" label="Cancelar" @click="$router.back()" />
          <q-btn color="secondary" text-color="info" label="Pagar" type="submit" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      pay: {
        month: null,
        total: null,
        pay: null,
        remaining: null,
        parcial: false,
        commission: null,
        duedate: null
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>