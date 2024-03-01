<template>
  <q-page padding class="flex items-center justify-center">
    <q-card class="bg-positive p-2 w-full md:w-6/12">
      <q-form @submit.prevent="login">
        <div class="flex justify-center">
          <q-img src="/icons/icon-256x256.png" width="80px" />
        </div>
        <q-input clearable filled label="Email" v-model="email" color="primary" input-class="text-primary" label-color="primary"
          type="email" required class="my-4" />
        <q-input clearable filled label="Senha" v-model="password" color="primary" input-class="text-primary" label-color="primary"
          :type="type" required>
          <template #append>
            <q-btn round flat :icon="type == 'password' ? 'visibility' : 'visibility_off'" color="primary"
              @click="type = type == 'password' ? 'text' : 'password'" />
          </template>
        </q-input>
        <p class="text-primary">Esqueceu a senha? <q-btn flat unelevated label="recuperar" :to="`/send-reset?email=${email}`" color="primary" /></p>

        <q-btn size="lg" class="w-full  mt-6" color="primary" text-color="info" label="Entrar" type="submit" :loading="loading"/>
        <p class="text-info my-4 text-center">Não tem cadastro? <q-btn flat unelevated label="Cadastrar" color="info"
            to="/register" /></p>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import {auth} from "src/boot/firebase"
import { useUserStore } from "src/stores/user";
export default {
  data() {
    return {
      email: null,
      password: null,
      type: 'password',
      loading:false,
      q:useQuasar(),
      store:useUserStore()
    }
  },
  methods: {
    login() {
      this.loading = true;
      const firebase = auth.getAuth();
      auth.signInWithEmailAndPassword(firebase, this.email, this.password)
        .then((userCredential) => {
          this.store.user = userCredential.user;
          this.$router.push("/dash")
          this.loading = false;
        })
        .catch((error) => {
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