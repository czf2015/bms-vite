<template>
  <button :style="{ width: '300px' }" @click="getRoleById">getRoleById</button>
  <br />
  <button @click="createUser">createUser</button>
  <output v-bind="$attrs">{{count}}</output>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios'

export default defineComponent({
  name: "Mock",
  setup() {
    let count = 0
    const changeCount = () => {
      setTimeout(() => {
          count++
        })
    }
    const getRoleById = () => {
      axios.get("/api/getRoleById", { params: { id: 2 } }).then((res) => {
        console.log(res);
        changeCount()
      });
    };
    const createUser = () => {
      axios
        .post("/api/createUser", {
          name: "vben",
          gender: "man",
        })
        .then((res) => {
          console.log(res);
          changeCount()
        });
    };
    return { getRoleById, createUser, count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
