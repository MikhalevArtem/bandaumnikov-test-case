<template>
  <va-progress-circle v-if="getUserIsLoading" class="circle" indeterminate />
  <main v-else>
    <div class="layout gutter--md">
      <div class="row justify--end">
        <div class="flex xs12 md6 lg4">
          <va-card class="avatar item py-3 px-3" color="primary">
            <va-image
              contain
              class="avatar__img"
              :src="getUserData?.avatar ?? ''"
            />
            <va-card-content
              ><h6 class="display-6">
                {{ getUserData?.username }}
              </h6></va-card-content
            >
          </va-card>
        </div>
        <div class="flex xs12 md6 lg4">
          <va-card class="item py-1 px-1" color="primary"
            ><va-card-content class="data-fields">
              <div class="data-fields__field mb-4">
                <div class="title">First name:</div>
                <p>{{ getUserData?.first_name }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Last name:</div>
                <p>{{ getUserData?.last_name }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Email:</div>
                <p>{{ getUserData?.email }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Gender:</div>
                <p>{{ getUserData?.gender }}</p>
              </div>
              <div class="data-fields__field">
                <div class="title">Birthday:</div>
                <p>
                  {{
                    getUserData?.date_of_birth.split("-").reverse().join("-")
                  }}
                </p>
              </div>
            </va-card-content></va-card
          >
        </div>
        <div class="flex xs12 md6 lg4">
          <va-card class="item py-1 px-1" color="primary"
            ><va-card-title class="title">Contacts</va-card-title>
            <va-card-content class="data-fields">
              <div class="data-fields__field mb-4">
                <div class="title">Phone:</div>
                <p>{{ getUserData?.phone_number }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Social insurance number:</div>
                <p>{{ getUserData?.social_insurance_number }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">employment:</div>
                <p>{{ getUserData?.employment.title }}</p>
              </div>
              <div class="data-fields__field">
                <div class="title">key skill:</div>
                <p>{{ getUserData?.employment.key_skill }}</p>
              </div>
            </va-card-content></va-card
          >
        </div>
        <div class="flex xs12 md6 lg4">
          <va-card class="item py-1 px-1" color="primary"
            ><va-card-title class="title">Address</va-card-title
            ><va-card-content class="data-fields">
              <div class="data-fields__field mb-4">
                <div class="title">Country:</div>
                <p>{{ getUserData?.address.country }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">State:</div>
                <p>{{ getUserData?.address.state }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">City:</div>
                <p>{{ getUserData?.address.city }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Street:</div>
                <p>{{ getUserData?.address.street_name }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Street address:</div>
                <p>{{ getUserData?.address.street_address }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Zip code:</div>
                <p>{{ getUserData?.address.zip_code }}</p>
              </div>
              <div class="data-fields__field">
                <div class="title">Geolocation:</div>
                <p>{{ getGeoIsLoading ? "Loading..." : getPlace }}</p>
              </div>
            </va-card-content></va-card
          >
        </div>
        <div class="flex xs12 md6 lg4">
          <va-card class="item py-1 px-1" color="primary"
            ><va-card-title class="title">Payment details</va-card-title
            ><va-card-content class="data-fields">
              <div class="data-fields__field mb-4">
                <div class="title">Plan:</div>
                <p>{{ getUserData?.subscription.plan }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Payment method:</div>
                <p>{{ getUserData?.subscription.payment_method }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Term:</div>
                <p>{{ getUserData?.subscription.term }}</p>
              </div>
              <div class="data-fields__field mb-4">
                <div class="title">Credit Card:</div>
                <p>{{ getUserData?.credit_card.cc_number }}</p>
              </div>
              <div class="data-fields__field">
                <div class="title">Status:</div>
                <p>{{ getUserData?.subscription.status }}</p>
              </div>
            </va-card-content>
            <va-card-actions align="stretch" vertical>
              <va-button color="secondary" @click="logout">Logout</va-button>
            </va-card-actions>
            <va-card-actions align="stretch" vertical>
              <va-button color="secondary" @click="clearLocalStorage"
                >Clear rating</va-button
              >
            </va-card-actions>
          </va-card>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Profile",
  methods: {
    ...mapActions(["logout"]),
    clearLocalStorage() {
      localStorage.clear();
      this.$vaToast.init({
        message: "rating cleared",
        color: "secondary",
        position: "bottom-right",
      });
    },
  },
  computed: {
    ...mapGetters([
      "getUserIsLoading",
      "getUserData",
      "getPlace",
      "getGeoIsLoading",
    ]),
  },
};
</script>
<style scoped>
.item {
  color: black;
  height: 100%;
}
.avatar {
  text-align: center;
}
.avatar__img {
  height: 200px;
}
.data-fields__field {
  display: flex;
  gap: 1em;
}
.title {
  font-size: 1em;
}
</style>
