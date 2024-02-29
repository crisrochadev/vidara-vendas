<template>
  <q-page padding class="flex items-center justify-center">
    <q-card class="bg-positive p-2 w-full md:w-6/12">
      <q-form @submit.prevent="send">
        <div class="flex justify-center">
          <q-img src="/icons/icon-256x256.png" width="80px" />
        </div>
        <h2 class="text-info text-center leading-6 mt-4">Enviaremos um link de confirmação para seu email cadastrado.</h2>
        <q-input filled label="Email" v-model="email" color="primary" input-class="text-primary" label-color="primary"
          type="email" required class="my-4" />
        <q-btn size="lg" class="w-full  mt-6" color="primary" text-color="info" label="Enviar" type="submit" :loading="loading"/>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import {auth} from "src/boot/firebase"
export default {
  data() {
    return {
      email: null,
      password: null,
      type: 'password',
      loading:false,
      q:useQuasar()
    }
  },
  mounted(){
    if(this.$route.query && this.$route.query.email){
      this.email = this.$route.query.email
    }
  },
  methods: {
    send() {
      this.loading = true;
      const firebase = auth.getAuth();
      auth.sendPasswordResetEmail(firebase, this.email)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential;
          console.log(user)
         
          this.loading = false;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
          if(error.code == 'auth/invalid-credential'){
            this.q.dialog({
              title:"Credenciais inválidas!",
              message:"Email e/ou senha inválidos.",
              ok:{
                color:"primary",
                label:"Ok"
              }
            })
          }
          this.loading = false;
        });
    },
  }
}
</script>

<style lang="sass" scoped>

</style>