<script setup>
  import { useCookies } from "vue3-cookies";
import getGoogleUrl from "./utils/getGoogleUrl";

const { cookies } = useCookies();
console.log(cookies.get('token'));

const from = "/";
</script>

<template>
  <a :href="getGoogleUrl(from)">Google Login</a>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
