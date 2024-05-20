<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleChecked">
      <span v-show="!isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        v-show="isEdit"
        :value="todo.title" 
        @blur="handleBlur"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete">删除</button>
    <button 
      class="btn btn-edit" 
      @click="handleEdit($event)" 
      v-show="!isEdit"
    >编辑</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo'],
  data() {
    return {
      isEdit: false
    };
  },
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
    },
    // 编辑
    handleEdit() {
      this.isEdit = true

      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(e) {
      this.isEdit = false
      if (!e.target.value.trim()) {
        return alert('标题不能为空')
      }
      this.$bus.$emit('updateTodo', this.todo.id, e.target.value)
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
