<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg mp-bg-nav">
      <div class="container">
        <a class="navbar-brand mp-logo">yuk</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" class="collapse navbar-collapse mp-navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'home' }">
                home<span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'products' }">
                products
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'delivery' }">
                delivery
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'about'}">
                about us
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
  .mp-bg-nav {
    background: #d4f3ef;
  }

  .mp-logo {
    color: white;
    text-shadow: 0 1px 3px rgba(21, 206, 193, 0.96);
    font-size: 30px;
    margin-right: 80px;
  }

  .mp-logo:hover {
    color: white;
  }

  .mp-nav,
  .mp-nav:after,
  .mp-nav:hover:after{
    transition: all .5s;
  }

  .mp-nav{
    color: #36C2CF;
    text-decoration: none;
    position: relative;
  }

  .mp-nav:after{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    content: '';
    background: white;
    height: 1px;
  }

  .mp-nav:hover:after {
    width: 100%;
  }

  .mp-nav:hover {
    transition: all .5s;
    color: #41cdc5;
  }
</style>
