<template>
  <va-progress-circle v-if="getBeerIsLoading" class="circle" indeterminate />
  <main v-else>
    <va-card class="py-3 px-3" square color="primary" gradient tag="section">
      <div class="row">
        <div class="flex xs12 mb-3">
          <div class="item">
            <h6 class="display-6">{{ getBeerData?.name }}</h6>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Brand</div>
            <p>{{ getBeerData?.brand }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Style</div>
            <p>{{ getBeerData?.style }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Hop</div>
            <p>{{ getBeerData?.hop }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Yeast</div>
            <p>{{ getBeerData?.yeast }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Malts</div>
            <p>{{ getBeerData?.malts }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Ibu</div>
            <p>{{ getBeerData?.ibu }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">Alcohol</div>
            <p>{{ getBeerData?.alcohol }}</p>
          </div>
        </div>
        <div class="flex xs12 md6 mb-3">
          <div class="item">
            <div class="title">blg</div>
            <p>{{ getBeerData?.blg }}</p>
          </div>
        </div>
      </div>
      <va-card-actions align="center" vertical>
        <va-rating
          v-model="value"
          hover
          size="48px"
          color="secondary"
          clearable
        />
        <va-button class="mb-4" color="secondary" gradient @click="starred"
          >vote</va-button
        >
        <va-button color="secondary" gradient @click="newBeer"
          >new beer!</va-button
        >
      </va-card-actions>
    </va-card>
  </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BeerCard",
  data() {
    return {
      value: 0,
      stars: {},
    };
  },
  methods: {
    ...mapActions(["fetchBeer"]),
    newBeer() {
      this.fetchBeer();
      this.value = 0;
    },
    starred() {
      this.stars = {
        ...this.stars,
        [this.getUserData.id]: {
          ...this.stars[this.getUserData.id],
          [this.getBeerData.id]: this.value,
        },
      };
      localStorage.setItem("stars", JSON.stringify(this.stars, null, 2));
      this.$vaToast.init({
        message: "rating saved",
        color: "secondary",
        position: "bottom-right",
      });
    },
  },
  computed: {
    ...mapGetters(["getBeerData", "getBeerIsLoading", "getUserData"]),
    userId() {
      return this.getUserData?.id;
    },
    beerId() {
      return this.getBeerData?.id;
    },
  },
  watch: {
    stars(newStars) {
      this.value = newStars?.[this.userId]?.[this.beerId];
    },
  },
  mounted() {
    this.fetchBeer();
    if (localStorage.getItem("stars")) {
      this.stars = JSON.parse(localStorage.getItem("stars"));
    }
  },
};
</script>
<style scoped>
.item {
  color: black;
  display: flex;
  gap: 1em;
}
.title {
  font-size: 1em;
}

.circle {
  margin: auto;
}
</style>
