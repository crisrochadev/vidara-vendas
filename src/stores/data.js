import { defineStore } from 'pinia';
import { db, authUser, database } from "src/boot/firebase"
import moment from "src/boot/date"
import { useQuasar } from 'quasar';

export const useData = defineStore('data', {
  state: () => ({
    materiais: [],
    levels: [],
    userId: null,
    $q: useQuasar(),
    products:[]
  }),
  actions: {
    async getUserId() {
      const res = await authUser();
      if (res) {
        this.userId = res.uid
      }
    },
    async getAll(data_name) {
      await this.getUserId();
      if (this.userId) {
        const starCountRef = db.ref(database, `${data_name}/` + this.userId);
        await new Promise(resolve => {
          db.onValue(starCountRef, (snapshot) => {
            let val = snapshot.val()
            if (val && typeof val == 'object' && Object.keys(val).length > 0) {
              let valArray = [];
              Object.entries(val).forEach(([key, value]) => {
                valArray.push({
                  id: key,
                  ...value
                })
              });
              this[data_name] = valArray.reverse();
              resolve()
            } else {
              this[data_name] = []
              resolve()
            }
          });
        })

      } else {
        this[data_name] = []
      }
    },
    async getBy(data_name, by) {
      await this.getUserId();
      if (this.userId) {
        const starCountRef = db.ref(database, `${data_name}/` + this.userId + "/" + by);
        return await new Promise(resolve => {
          db.onValue(starCountRef, (snapshot) => {
            let val = snapshot.val()
            if (val) {
              resolve({
                success:true,
                data:val
              })
            } else {
              console.log(val)
              resolve({
                success:false,
                data:null
              })
            }
          });
        })

      } else {
        return {
          success:false,
          data:null
        }
      }
    },
    async add(data_name, dataDefault) {
      const user = await authUser();

      if (user) {
        const userId = user.uid;
        let data = {
          createdAt: moment().format("DD/MM/YYYY HH:mm:ss"),
          ...dataDefault
        };

        const newKey = db.push(db.child(db.ref(database), data_name)).key;
        const updates = {};
        updates[`/${data_name}/` + userId + "/" + newKey] = data;
        return await db.update(db.ref(database), updates).then(async res => {
          // await this.getAll(data_name)
          return {
            success: true,
            data: res
          }
        }).catch(error => {
          return {
            success: false,
            data: error
          }
        })
      } else {
        return {
          success: false,
          data: "Usuário não autenticado"
        }
      }

    },
    async del(data_name, id) {
      this.$q.dialog({
        title: "Deletar",
        message: "Essa ação não pode ser desfeita, deseja continuar?",
        ok: {
          color: 'red',
          label: 'deletar',
          icon: 'delete'
        },
        cancel: {
          label: 'cancelar',
          icon: 'close',
          color: 'red',
          outline: true
        }
      }).onOk(async () => {
        await this.getUserId();

        if (this.userId) {
          let deletes = {}
          deletes[`/${data_name}/` + this.userId + "/" + id] = null;
          return await db.update(db.ref(database), deletes).then(async res => {
            return {
              success: true,
              data: res
            }
          }).catch(error => {
            return {
              success: false,
              data: error
            }
          })
        } else {
          return {
            success: false,
            data: "Usuário não autenticado"
          }
        }
      })
    },
    async update(data_name,id, data) {
      await this.getUserId();

      if (this.userId) {
        let updates = {}
        updates[`/${data_name}/` + this.userId + "/" + id] = data;
        return await db.update(db.ref(database), updates).then(async res => {
          return {
            success: true,
            data: res
          }
        }).catch(error => {
          return {
            success: false,
            data: error
          }
        })
      } else {
        return {
          success: false,
          data: "Usuário não autenticado"
        }
      }
    }
  }
});
