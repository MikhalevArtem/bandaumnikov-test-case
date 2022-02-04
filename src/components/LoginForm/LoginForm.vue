<template>
  <va-progress-circle v-if="getUserIsLoading" class="circle" indeterminate />
  <main v-else class="login">
    <va-card
      class="login-card py-3 px-3"
      color="primary"
      gradient
      tag="section"
    >
      <va-card-actions align="stretch" vertical
        ><va-button color="secondary" gradient @click="fetchUser"
          >Login</va-button
        ></va-card-actions
      >
    </va-card>
  </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginForm",
  methods: {
    ...mapActions(["fetchUser"]),
  },
  computed: {
    ...mapGetters(["getUserIsLoading"]),
  },
};
</script>
<style scoped>
.login-card {
  width: 400px;
  max-width: 100%;
  margin: 2em auto;
}
.circle {
  margin: auto;
}
</style>
