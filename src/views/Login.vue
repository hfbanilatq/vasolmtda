<template>
  <div class="login">
    <div class="container">
      <h1 class="text-center">Iniciar Sesion</h1>
      <p>
        <router-link active-class="avtive" exact :to="{ name: 'lognIn' }">
          <center>¿No tienes una cuenta?</center>
        </router-link>
      </p>
      <div class="container" id="loginForm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo</label>
            <input
              type="email"
              class="form-control"
              id="loginEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >Nunca compartas tu correo con otras personas.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="passwordLogin"
              placeholder="Password"
            />
          </div>
          <center>
          <button type="submit" class="btn btn-primary ">Ingresar</button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
