<template>
<div>
  <div v-for="todoItem in todoList"
    :key="todoItem.id">
    <div>
      {{ todoItem.title }}
    </div>
    <div>
      {{ todoItem.contents }}
    </div>
    <div>
      <button @click="removeTodo(todoItem.id)">Remove</button>
    </div>
  </div>
  <hr>
  <div>
    <fieldset>
      <label for="title">Title</label>
      <input v-model="title" id="title" type="text">
      <br>
      <label for="contents">Contents</label>
      <input @keydown.enter="setTodo({ title, contents })" v-model="contents" id="contents" type="text">
      <br>
      <p>
        {{ error }}
      </p>
    </fieldset>
    <button @click="setTodo({ title, contents })" type="button">Set</button>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Main',

  data() {
    return {
      title: '',
      contents: '',
      error: null
    }
  },

  computed: {
    ...mapGetters([ 'todoList' ])
  },

  methods: {
    /**
     * @param {Todo.Item} todoItem
     */
    setTodo({ title, contents }) {
      this.error = null

      this.$store.dispatch('set', { title, contents })
        .then(() => {
          this.title = ''
          this.contents = ''
        })
        .catch(err => {
          this.error = err.message
        })
    },

    /**
     * @param {string} id
     */
    removeTodo(id) {
      this.$store.dispatch('remove', id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
