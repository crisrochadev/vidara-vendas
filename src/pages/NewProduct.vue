<template>
  <q-page padding>
    <q-card class="bg-positive p-2">
      <q-btn flat round icon="close" @click="$router.back()" class="absolute -right-1 -top-1" />
      <q-form class="mt-8" @submit.prevent="add">
        <div class="w-full flex flex-wrap gap-2 mt-2 ">
          <q-input dense filled label="Produto" v-model="product.description" type="textarea" color="primary"
            input-class="text-info font-bold h-14" label-color="primary"
            :class="[isMobile ? 'w-full h-[4.4rem]' : 'w-[calc(90%_-_.3rem)] h-14']" :rules="[
        val => val && val.length > 0 || 'O produto precisa de uma descrição'
      ]" />
          <div 
            class="flex justify-center relative  bg-accent rounded-md "
            :class="[isMobile ? 'w-full h-32' : 'h-[4.4rem] w-[calc(10%_-_.3rem)]']"
            >

            <input @change="uploadImage" ref="input_upload" id="image_product" type="file"
              class="w-full h-full hidden" />
            <div
              class="w-full h-full flex flex-wrap justify-center gap-2 items-center absolute felx-col transition-all delay-100 bg-[rgba(0,0,0,.25)]"
              :class="[product.image.src ? 'opacity-0 hover:opacity-100' : '']">
              <q-btn v-if="product.image.src" flat round dense color="primary" size="sm" icon="close" class="absolute top-1 right-1 z-40"
                @click="product.image.src = null" />
              <q-btn dense size="xs" @click="$refs.input_upload.click()"
                :label="product.image.src ? 'Trocar Imagem' : 'Adicionar Imagem'"
                class="p-2 bg-primary text-info m-1 rounded shadow-md hover:bg-[#9b7a34] cursor-pointer active:hover:bg-[#9b7a34]"
                tabindex="2" for="image_product"></q-btn>
            </div>

            <img v-if="product.image.src" :src="product.image.src" class="w-full h-full object-contain" />
          </div>
          <q-input :class="[isMobile ? 'w-[calc(50%_-_.3rem)]' : 'w-[calc(25%_-_.4rem)]']" dense filled label="Código" v-model="product.code" color="primary" input-class="text-info font-bold"
            label-color="primary" />
            <SelectComponent :class="[isMobile ? 'w-[calc(50%_-_.3rem)]' : 'w-[calc(25%_-_.4rem)]']" v-model:options="materiais" v-model:model="product.material"
            value-name="name" label="Material" :default="materiaisDefault" />
          <q-input :class="[isMobile ? 'w-[calc(50%_-_.3rem)]' : 'w-[calc(25%_-_.4rem)]']" prefix="R$" mask="#,##" reverse-fill-mask inputmode="numeric" dense filled label="Preço"
            v-model="product.price" color="primary" input-class="text-info font-bold" label-color="primary" />
          <q-input :class="[isMobile ? 'w-[calc(50%_-_.3rem)]' : 'w-[calc(25%_-_.4rem)]']" prefix="R$" mask="#,##" reverse-fill-mask inputmode="numeric" dense filled required
            label="Preço de Venda" v-model="product.salePrice" color="primary" input-class="text-info font-bold"
            label-color="primary" :rules="[
        val => val && val.length > 0 || 'O produto precisa de um preço'
      ]" />

          

        </div>
        <div class="flex justify-end items-center gap-2 mt-2">
          <q-btn color="primary" outline text-color="primary" label="Cancelar" @click="$router.back()" />
          <q-btn color="primary" text-color="info" label="Salvar" type="submit" />
        </div>
      </q-form>
    </q-card> </q-page>
</template>

<script>
import { useData } from 'src/stores/data';
import SelectComponent from 'src/components/SelectComponent.vue'
import { useQuasar } from 'quasar';
import { storage } from 'src/boot/firebase';
export default {
  components: { SelectComponent },
  data() {
    const store = useData()
    return {
      materiaisDefault: [],
      store,
      $q: useQuasar(),
      product: {
        code: null,
        description: null,
        price: null,
        salePrice: null,
        material: null,
        portOrder: false,
        image: {
          name: null,
          src: null
        }
      }
    }
  },
  async mounted() {
    await this.store.getAll('materiais')
    this.materiaisDefault = JSON.parse(JSON.stringify(this.store.materiais))
    if (this.$route.query && this.$route.query.id) {
      const res = await this.store.getBy("products", this.$route.query.id)
      if (res.success) {
        this.product = res.data
        console.log(res.data)
        const starsRef = storage.stRef(storage.st, res.data.image.name);
        storage.getDownloadURL(starsRef)
          .then((url) => {
            console.log(url)
            this.product.image.src = url;
          })
          .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/object-not-found':
                // File doesn't exist
                break;
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
          });
      }
    }
  },
  computed: {
    isMobile(){
      return this.$q.screen.xs || this.$q.screen.sm 
    },
    materiais: {
      get() {
        return this.store.materiais;
      },
      set(newvalue) {
        this.store.materiais = newvalue
      }
    }
  },
  methods: {
    blobToBase64(blob) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    },
    async uploadImage(e) {
      let file = e.target.files[0]
      this.product.image = {
        name: file.name,
        src: await this.blobToBase64(file)
      }

    },
    async add() {
      this.$q.loading.show()
      let url = null
      if (this.product.image.src) {
        url = await new Promise(async resolve => {
          const storageRef = storage.stRef(storage.st, this.product.image.name);
          await storage.uploadBytes(storageRef, this.product.image.src);
          const url = await storage.getDownloadURL(storageRef);
          resolve(url)
        })
      }
      this.product.price = Number(this.product.price.replace(',', '.'))
      this.product.salePrice = Number(this.product.salePrice.replace(',', '.'))

      const product = {
        code: this.product.code,
        description: this.product.description,
        price: this.product.price,
        salePrice: this.product.salePrice,
        material: this.product.material,
        portOrder: this.product.portOrder,
        image: {
          name: this.product.image.name ? this.product.image.name : '',
          src: url ? url : ''
        }
      }

      console.log(product)
      const res = await this.store.add('products', product);
      if (res.success) {
        this.$q.notify({
          position: "top",
          message: "Produto salvo com sucesso!",
          color: 'green'
        });
        this.product = {
          code: null,
          description: null,
          price: null,
          salePrice: null,
          material: null,
          portOrder: false,
          image: {
            name: null,
            src: null
          }
        }
        this.$router.push("/products")
      } else {
        this.$q.notify({
          position: "top",
          message: "Houve um erro inesperado, não foi possivel salvar",
          color: 'red'
        });
      }
      this.$q.loading.hide()
    },
    filter(val, update) {
      if (val === '') {
        update(() => {
          this.materiais = this.materiaisDefault
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.materiais = this.materiaisDefault.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>