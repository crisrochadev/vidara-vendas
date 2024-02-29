<template>
  <q-page padding>
    <q-card class="bg-[#daa420] p-2">
      <q-form>
        <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-3 -top-3"/>

        <h2 class="uppercase font-bold text-secondary">Produto</h2>
        <div class="w-full grid md:grid-cols-3 gap-2">
          <q-input dense filled label="Código" v-model="sell.code" color="secondary" input-class="text-secondary"
            label-color="secondary" />
          <q-input dense filled label="Produto" v-model="sell.product" color="secondary" input-class="text-secondary"
            label-color="secondary" />
          <q-input dense filled label="Valor" prefix="R$" v-model="sell.price" color="secondary"
            input-class="text-secondary" label-color="secondary" />
        </div>
        <h2 class="uppercase font-bold text-secondary">Cliente</h2>
        <div class="w-full grid md:grid-cols-[200px_1fr] gap-2 items-center">

          <q-input dense filled label="Código" v-model="sell.code" color="secondary" input-class="text-secondary"
            label-color="secondary">
            <template #before>
              <q-icon :name="sell.clientIcon" size="sm" :color="sell.clientColor" />
            </template>
          </q-input>
          <q-input dense filled label="Nome" v-model="sell.client" color="secondary" input-class="text-secondary"
            label-color="secondary" />
        </div>
        <h2 class="uppercase font-bold text-secondary">Pagamento</h2>
        <div class="w-full grid md:grid-cols-3 gap-2">
          <q-input dense filled label="Forma de Pagamento" v-model="sell.formPayment" color="secondary"
            input-class="text-secondary" label-color="secondary" />
          <q-input dense filled label="Parcelas" v-model="sell.installments" color="secondary"
            input-class="text-secondary" label-color="secondary" />
          <q-input dense filled label="Vencimento" v-model="sell.duedate" color="secondary" input-class="text-secondary"
            label-color="secondary" />
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
      sell: {
        code: null,
        product: null,
        client: null,
        price: null,
        formPayment: null,
        installments: null,
        clientCode: null,
        clientIcon: 'mdi-diamond-stone',
        clientColor: 'red',
        duedate: null
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>