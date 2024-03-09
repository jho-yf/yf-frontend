<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleChecked">
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo'],
  methods: {
    // 勾选 or 取消勾选
    handleChecked() {
      this.$bus.$emit('todoChecked', this.todo.id)
    },
    // 删除
    handleDelete() {
      if (confirm('确定删除？')) {
        this.$bus.$emit('deleteTodo', this.todo.id)
      }
    }
  }
};
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #f5f5f5;
  }

  li:hover button {
    display: block;
  }
</style>
