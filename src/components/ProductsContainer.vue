<template>
  <div id="products " style="margin-top: 10px;">
    <div class="container" id="productGroup">
      <div class="list-group">
        <div
          class="list-group-item list-group-item-action flex-column align-items-start"
          style="margin-top: 10px;"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Titulo</h5>
            <small>21 de noviembre</small>
          </div>
          <div class="img-fluid float-left p-3" id="imgProduct">
            <img src="@/assets/logo.png" alt />
          </div>
          <div class="container">
            <div id="descriptionProduct">
              <div>
                <p>
                  Parece que llevas más de cinco minutos solo en
                  esta llamada. La patrulla de ancho de banda me ha
                  pedido que te desconecte para
                  ahorrar ancho de banda. ¡Que no crece de los árboles!
                  </p>
                </div>
              </div>
              <div id="productComments">

                <Comment ></Comment>
              </div>

            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from './Comment.vue';

export default {
  name: 'ProductsContainer',
  props: {
    id: Number,
    tittle: String,
    description: String,
    image: String,
  },
  components: {
    Comment,
  },
};
</script>
