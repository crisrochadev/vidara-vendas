<template>
  <q-page padding>
    <q-card class="bg-[#daa420] p-2">
      <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-1 -top-1" />
      <q-form class="mt-8">
        <div class="w-full grid md:grid-cols-3 gap-2 mt-2 ">
          <q-input dense filled label="Produto" v-model="product.description" type="textarea" color="secondary"
            input-class="text-secondary" label-color="secondary" style="grid-column:1/4" />
          <q-input dense filled label="Código" v-model="product.code" color="secondary" input-class="text-secondary"
            label-color="secondary" />
          <q-input dense filled label="Preço" v-model="product.price" color="secondary" input-class="text-secondary"
            label-color="secondary" />
          <q-input dense filled label="Preço de Venda" v-model="product.salePrice" color="secondary"
            input-class="text-secondary" label-color="secondary" />

          <q-input dense filled label="Material" v-model="product.material" color="secondary" input-class="text-secondary"
            label-color="secondary" style="grid-column:1/4"/>

        </div>
        <div class="flex justify-end items-center gap-2 mt-2">
          <q-btn color="secondary" outline text-color="secondary" label="Cancelar" @click="$router.back()" />
          <q-btn color="secondary" text-color="info" label="Salvar" type="submit" />
        </div>
      </q-form>
    </q-card> </q-page>
</template>

<script>
export default {
  data() {
    return {
      product: {
        code: null,
        description: null,
        price: null,
        salePrice: null,
        material: 'prata',
        portOrder: false,
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>