<template>
  <v-app>
    <header class="app-header">
      <figure class="header-image-container">
        <router-link to="/home">
          <img class="header-image" :src="require('@/assets/vueflix-logo.png')" />
        </router-link>
      </figure>

      <nav class="main-navigation">
        <ul class="navigation-list">
          <li class="list-link">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="list-link">
            <router-link to="/home">Link 2</router-link>
          </li>
          <li class="list-link">
            <router-link to="/home">Link 3</router-link>
          </li>
        </ul>
      </nav>

      <aside class="header-greeting">
        <section class="greeting-content">
          <figure v-if="isLoggedIn">
            <div>I'm signed in</div>
          </figure>
          <figure v-else>
            <div>I'm not logged in, show sign-in</div>
          </figure>
        </section>
      </aside>
    </header>
    <v-main>
      <router-view />
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

<style lang="scss">
.app-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1em;
}

.header-image {
  max-height: 60px;
}

.header-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  max-width: 20em;
  padding: 1em;
}

.app-header {
  background-color: #66A3BA;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 75em) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: auto;
  }
}

.main-navigation {
  display: flex;
  justify-content: center;

  .navigation-list {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .list-link {
      align-items: center;
      display: flex;
      padding: 1em;

      a {
        color: #fff;

        &.router-link-active {
          font-weight: bold;
          font-size: 1.1em;
        }
      }
    }
  }
}

.header-greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 1em;

  @media only screen and (min-width: 75em){
    justify-content: flex-end;
   }

  .greeting-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 75em){
      align-items: flex-end;
    }
  }
}
</style>
