<template>
  <div id="register">
    <div class="container">
    <h1 class="text-center">Formulario de registro</h1>
    <p>
      <router-link
        active-class="avtive"
        exact
        :to="{ name: 'lognIn' }"
      >
      <center>

      ¿Ya tienes una cuenta?
      </center>
      </router-link>
    </p>
    <div id="register" class="contrainer">
      <form>
        <div class="form-row">
          <div class="col">
            <label for="fisrtName">Nombre</label>
            <input type="text" class="form-control" placeholder="Nombre" v-model="firstName" />
          </div>
          <div class="col">
            <label for="lastName">Apellido</label>
            <input type="text" class="form-control" placeholder="Apellido" v-model="lastName" />
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <label for="inputPassword4">Sexo</label>
            <select id="sex" class="form-control" >
              <option selected>Choose...</option>
              <option v-for="item of sex" :key="item.id" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="email">Correo</label>
            <input type="email" class="form-control" id="email" placeholder="Correo" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="passWord">Contraseña</label>
            <input type="passWord" class="form-control" id="inputEmail4" placeholder="Contraseña" />
          </div>
          <div class="form-group col-md-6">
            <label for="rePassWord">Repetir contraseña</label>
            <input type="password" class="form-control" id="rePassWord" placeholder="Contraseña" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Direccion</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Ciudad</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Departamento</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option v-for="department of departments" :key="department.id">{{department}}</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Codigo Postal</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="btn-group justify-content-end" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary ">Cancelar</button>
          <button type="button" class="btn btn-primary ">Aceptar</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'formRegister',
  computed: {
    ...mapState(['sex', 'departments']),
  },
};
</script>
