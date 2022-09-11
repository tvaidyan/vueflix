<template>
  <v-app>
    <header class="app-header">
      <figure class="header-image-container">
        <router-link to="/home">
          <img class="header-image" :src="require('@/assets/vueflix-logo.png')" />
        </router-link>
      </figure>
    </header>
    <v-main>
      <router-view/>
    </v-main>
    <footer class="app-footer">
      <span class="footer-text">
        &copy; Thomson Vaidyan {{ currentYear }}
      </span>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    currentYear: new Date().getFullYear()
  }),
}
</script>

<style>
  .app-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 1em;
  }

  .header-image{
    max-height: 60px;
  }

  .header-image-container
  {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    max-width: 20em;
    padding: 1em;
  }

  .app-header
  {
    background-color: #66A3BA;
    display: flex;
    flex-direction: column;
  }
</style>
