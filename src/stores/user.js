import { defineStore } from 'pinia';

export const useUserStore = defineStore('userstore', {
  state: () => ({
    user: 0,
  }),

});
