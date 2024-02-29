<template>
  <q-page padding class="flex items-center justify-center">
    <q-card class="bg-positive p-2 w-full md:w-6/12">
      <q-form class="" @submit.prevent="register">
        <div class="flex justify-center">
          <q-img src="/icons/icon-256x256.png" width="80px" />
        </div>
        <q-input filled label="Email" v-model="email" color="primary" input-class="text-primary" label-color="primary"
          type="email" required class="my-4" />
        <q-input filled label="Senha" v-model="password" color="primary" input-class="text-primary" label-color="primary" 
          :type="type" required :rules="[
            val => val.length >= 6 || 'Sua senha precisa ter mais de 6 caracteres',
          ]">
          <template #append>
            <q-btn round flat :icon="type == 'password' ? 'visibility' : 'visibility_off'" color="primary"
              @click="type = type == 'password' ? 'text' : 'password'" />
          </template>
        </q-input>
        <q-input :rules="[
            val => val == password || 'As senhas precisam ser iguais',
          ]" class="mt-4" filled label="Repita a Senha" v-model="confirm" color="primary" input-class="text-primary"
          label-color="primary" :type="type" required>
          <template #append>
            <q-btn round flat :icon="type == 'password' ? 'visibility' : 'visibility_off'" color="primary"
              @click="type = type == 'password' ? 'text' : 'password'" />
          </template>
        </q-input>

        <q-btn size="lg" class="w-full  mt-6" color="primary" text-color="info" label="Cadastrar" type="submit" :loading="loading" />
        <p class="text-info my-4 text-center">Já tem cadastro? <q-btn flat unelevated label="Entrar" color="info" to="/" />
        </p>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import {auth} from "src/boot/firebase"
import { useQuasar } from "quasar"

export default {
  data() {
    return {
      email: null,
      password: null,
      confirm: null,
      type: 'password',
      loading:false,
      q:useQuasar()
    }
  },
  methods: {

    register() {
      this.loading = true;
      const firebase = auth.getAuth();
      auth.createUserWithEmailAndPassword(firebase, this.email, this.password)
        .then((userCredential) => {
          this.store.user = userCredential.user;
          this.$router.push("/dash")
          this.loading = false;
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          if(error.code == 'auth/email-already-in-use'){
            this.q.dialog({
              title:"Usuário já cadastrado!",
              message:"Deseja fazer Login?",
              ok:{
                color:"primary",
                label:"Sim"
              },
              cancel:{
                color:"primary",
                label:"Não",
                outline:true
              }
            }).onOk(() =>{
              this.$router.push(`/?email=${this.email}`)
            })
          }
          
          this.loading = false;
        });
    }
  }
}
</script>

<style lang="sass" scoped>

</style>