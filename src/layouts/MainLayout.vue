<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">

    <q-header elevated class="bg-positive text-info">
      <q-toolbar>
        <q-btn v-if="$route.meta.protected" flat round :icon="leftDrawerOpen ? 'close' : 'menu'"
          @click="leftDrawerOpen = !leftDrawerOpen" color="primary" />
        <q-btn v-else-if="$route.path !== '/'" flat round icon="mdi-arrow-left" @click="$router.back()"
          color="primary" />

        <q-toolbar-title class="flex flex-nowrap items-center uppercase gap-2 font-bold text-[#daa420]">
          <q-avatar size="25px">
            <img src="/icons/logol.png">
          </q-avatar>
          <span class="inline-block mt-2 text-[15px]">
            {{ $route.meta.title }}
          </span>
        </q-toolbar-title>
        <q-space />
        <q-btn dense flat round :icon="themeMode"
          @click="themeMode = themeMode == 'light_mode' ? 'dark_mode' : 'light_mode'" color="primary" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="desktop" elevated class="bg-positive">
      <q-list>
        <q-item v-close-popup class="text-primary " :class="{ 'bg-primary text-positive': $route.path == item.to }"
          clickable v-for="item in menu" :key="menu.id" :to="item.to ? item.to : '/'" @click="logout(item)">
          <q-item-section side>
            <q-icon :name="item.icon" :color="$route.path == item.to ? 'positive' : 'primary'" />
          </q-item-section>
          <q-item-section class="uppercase font-bold">
            {{ item.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-accent">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { useStorage } from '@vueuse/core';
import { auth } from 'src/boot/firebase';
export default {
  data() {
    return {
      leftDrawerOpen: false,
      themeMode: useStorage('theme_mode'),
      menu: [
        {
          id: 10,
          label: "Painel",
          to: "/dash",
          icon: "mdi-view-dashboard"
        },
        {
          id: 1,
          label: "Vender",
          to: "/sell",
          icon: "storefront"
        },
        {
          id: 2,
          label: "Clientes",
          to: "/clients",
          icon: "group"
        },
        {
          id: 3,
          label: "Produtos",
          to: "/products",
          icon: "inventory_2"
        },
        {
          id: 4,
          label: "Vendas",
          to: "/sells",
          icon: "price_check"
        },
        {
          id: 5,
          label: "À Receber",
          to: "/receive",
          icon: "payments"
        },
        {
          id: 6,
          label: "À Pagar",
          to: "/pay",
          icon: "request_quote"
        },
        {
          id: 7,
          label: "Configurações",
          to: "/settings",
          icon: "mdi-cogs"
        },
        {
          id: 8,
          label: "Sair",
          action: 'logout',
          icon: "mdi-logout"
        }
      ]
    }
  },
  mounted(){
    this.changeTheme(this.themeMode)
  },
  methods: {
    logout(item) {
      if (item.action) {
        const firebase = auth.getAuth();
        auth.signOut(firebase)
      }
    },
    changeTheme(newvalue) {
      if (newvalue == 'light_mode') {
        document.body.style.setProperty("--q-secondary", "#20213D")
        document.body.style.setProperty("--q-accent", "#f7f7ff")
        document.body.style.setProperty("--q-primary", "#daa420")
        document.body.style.setProperty("--q-info", "#20213D")
        document.body.style.setProperty("--q-positive", "#e8e8fc")
      } else {
        document.body.style.setProperty("--q-primary", "#daa420")
        document.body.style.setProperty("--q-secondary", "#20213D")
        document.body.style.setProperty("--q-accent", "#353654")
        document.body.style.setProperty("--q-info", "#ffffff")
        document.body.style.setProperty("--q-positive", "#20213D")
      }
    }
  },
  watch: {
    themeMode(newvalue) {
      this.changeTheme(newvalue)
    }
  }
}
</script>