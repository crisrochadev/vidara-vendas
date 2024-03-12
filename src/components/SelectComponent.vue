<template>
  <q-select use-input clearable :options="opts" @filter="filter" dense filled :label="label" v-model="val"
    color="primary" input-class="text-primary" label-color="primary" :option-label="valueName" :loading="loading" class="uppercase font-bold"/>
</template>

<script>
export default {
  name: "SelectComponent",
  props: ["options", "label", 'model', 'default', 'value-name'],
  emits: ['update:model', 'update:options'],
  data(){
    return{
      loading:false
    }
  },
  computed: {
    val:{
      get(){
        return this.model
      },
      set(newvalue){
        this.$emit('update:model', newvalue)
      }
    },
    opts:{
      get(){
        return this.options
      },
      set(newvalue){
        this.$emit('update:options',newvalue)
      }
    }
  },
  methods: {
    filter(val, update) {
      this.loading = true
      if (val === '') {
        update(() => {
          this.opt = this.default
        })
        this.loading = false;
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.opts = this.default.filter(v => v[this.valueName].toLowerCase().indexOf(needle) > -1)
        this.loading = false;
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>