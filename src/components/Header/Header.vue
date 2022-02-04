<template>
  <header class="header">
    <Container
      ><nav class="header__nav">
        <ul class="button-list">
          <va-button
            to="/profile"
            color="secondary"
            :rounded="false"
            size="large"
            >Profile</va-button
          >
          <va-button to="/" color="secondary" :rounded="false" size="large"
            >Beeromizer</va-button
          >
        </ul>
        <va-button-dropdown
          class="burger"
          :rounded="false"
          icon="menu"
          size="large"
        >
          <ul>
            <li class="burger__item">
              <va-chip
                class="burger__link"
                to="/profile"
                square
                :size="`large`"
                color="secondary"
                >Profile</va-chip
              >
            </li>
            <li class="burger__item mt-3">
              <va-chip
                class="burger__link"
                to="/"
                square
                :size="`large`"
                color="secondary"
                tag="button"
                >Beeromizer</va-chip
              >
            </li>
          </ul>
        </va-button-dropdown>
      </nav>
    </Container>
  </header>
</template>
<script>
import Container from "../Container/Container.vue";
export default {
  name: "Header",
  components: {
    Container,
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  background-color: var(--va-primary);
  min-height: 50px;
}
.button-list {
  display: none;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
}
.header__nav {
  display: flex;
  justify-content: end;
}
.burger__link {
  width: 100%;
}
@media (min-width: 768px) {
  .burger {
    display: none;
  }
  .button-list {
    display: flex;
  }
}
</style>
