<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">

    <q-header elevated class="bg-secondary text-info">
      <q-toolbar>
        <q-btn dense flat round :icon="leftDrawerOpen ? 'close' : 'menu'" @click="leftDrawerOpen = !leftDrawerOpen"
          color="primary" />

        <q-toolbar-title class="flex items-center uppercase gap-2 font-bold text-[#daa420]">
          <q-avatar>
            <img src="/icons/logol.png">
          </q-avatar>
          <span class="inline-block mt-2">
            Vidara
          </span>
        </q-toolbar-title>
        <q-space />
        <q-btn dense flat round :icon="themeMode" @click="changeTheme" color="primary" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated class="bg-secondary">
      <q-list>
        <q-item class="text-primary " :class="{'bg-primary text-positive':$route.path == item.to}" clickable v-for="item in menu" :key="menu.id" :to="item.to">
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

export default {
  data() {
    return {
      leftDrawerOpen: false,
      themeMode: 'light_mode',
      menu: [
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
          label: "Receber",
          to: "/receive",
          icon: "payments"
        },
        {
          id: 6,
          label: "Pagar",
          to: "/pay",
          icon: "request_quote"
        }
      ]
    }
  },
  methods: {
    changeTheme() {
      setTimeout(() => {
        if (this.themeMode == 'light_mode') {
          document.body.style.setProperty("--q-secondary", "#fffff")
          document.body.style.setProperty("--q-accent", "#f7f7ff")
          document.body.style.setProperty("--q-primary", "#daa420")
          document.body.style.setProperty("--q-info", "#20213D")
          this.themeMode = 'dark_mode'
        } else {
          document.body.style.setProperty("--q-primary", "#daa420")
          document.body.style.setProperty("--q-secondary", "#20213D")
          document.body.style.setProperty("--q-accent", "#353654")
          document.body.style.setProperty("--q-info", "#ffffff")
          this.themeMode = 'light_mode'
        }
      }, 20)
    }
  }
}
</script>