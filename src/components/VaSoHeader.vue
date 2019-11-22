<template>
  <!-- HEADER -->
  <div class="vaSoHeader">
    <header>
      <!-- Nav-Bar -->
      <!-- Just an image -->
      <nav class="navbar navbar-light bg-light m-100">

        <ul class="nav">
          <li class="nav-item">
            <router-link class="navbar-link p-2"
              active-class="active"
              :to="{ name: 'home'}"
            >
              <i class="fas fa-home"></i>
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-link p-2"
              active-class="active"
              exact :to="{ name: 'products'}"
            >
              Productos
            </router-link>
          </li>
        </ul>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link class="navbar-link p-2"
              active-class="active"
              exact :to="{ name: 'register'}"
            >
              <i class="fa fa-user-plus"></i>
              Registrarse
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-link p-2"
              active-class="active"
              exact :to="{ name: 'lognIn'}"
            >
              <i class="fa fa-user-o"></i>
              Iniciar Sesion
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /NavBar -->
    </header>
  </div>
  <!-- /HEADER -->
</template>

<script>
export default {
  name: 'VaSoHeade',
  props: {
    email: String,
    myAccount: String,
    address: String,
  },
};
</script>
