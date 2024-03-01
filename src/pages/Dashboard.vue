<template>
  <q-page padding class="flex flex-col gap-4">
    <q-card class="bg-positive">
      <q-card-section header class="w-full flex justify-between items-center">
        <h2 class="uppercase leading-3 font-extrabold text-primary">Total de vendas do mês</h2>
        <q-btn-dropdown class="w-[120px]" color="info" :label="month" text-color="primary" dense flat>
          <q-scroll-area class="h-[300px] w-[120px]">
            <q-list class="w-[120px] p-0">
            <q-item v-for="m in months" :key="m" clickable @click="month = m" class="w-[120px]" :class="[month == m ? 'bg-primary text-secondary' : 'text-primary']">
              <q-item-section class="uppercase font-medium" >
                {{ m }}
              </q-item-section>
            </q-item>
          </q-list>
          </q-scroll-area>
        </q-btn-dropdown>
      </q-card-section>
      <q-card-section class="w-full flex justify-between items-center">
        <p>
          <span class="text-info block font-light">Vendas</span>
          <span class="text-info font-extrabold text-lg">R$2536,20</span>
        </p>
        <p>
          <span class="text-info block font-light">Lucro</span>
          <span class="text-info font-extrabold text-lg">R$2536,20</span>
        </p>
      </q-card-section>
    </q-card>
    <q-card class="bg-positive">
      <q-card-section header class="w-full flex justify-between items-center">
        <h2 class="uppercase leading-3 font-extrabold text-primary">Total de vendas</h2>
      </q-card-section>
      <q-card-section class="w-full flex justify-between items-center">
        <p>
          <span class="text-info block font-light">Vendas</span>
          <span class="text-info font-extrabold text-lg">R$2536,20</span>
        </p>
        <p>
          <span class="text-info block font-light">Lucro</span>
          <span class="text-info font-extrabold text-lg">R$2536,20</span>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import moment,{dateConfig} from "src/boot/date"
  export default {
    data(){
      return {
        months:dateConfig.months,
        month:moment().format("MMMM")
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>