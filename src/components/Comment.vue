<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        este es un comentario
        este es un comentario
        este es un comentario
        este es un comentario</p>
    </div>
    <div class="card-footer">
      <router-link
        class="comment-author"
        :to="{ name: 'profile', params: { username: comment.author.username } }"
      >
        Hector Banilat
      </router-link>
      <span class="date-posted">21 de noviembre</span>
      <span v-if="isCurrentUser" class="mod-options">
        <i class="ion-trash-a" @click="destroy(slug, comment.id)"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { COMMENT_DESTROY } from '@/store/actions.type';

export default {
  name: 'Comment',
  props: {
    slug: { type: String, required: true },
    comment: { type: Object, required: true },
  },
  computed: {
    isCurrentUser() {
      if (this.currentUser.username && this.comment.author.username) {
        return this.comment.author.username === this.currentUser.username;
      }
      return false;
    },
    ...mapGetters(['currentUser']),
  },
  methods: {
    destroy(slug, commentId) {
      this.$store.dispatch(COMMENT_DESTROY, { slug, commentId });
    },
  },
};
</script>
