<template>
  <div class="todo-footer" v-if="total">
    <label>
      <input type="checkbox" v-model="isCheckedAll" />
    </label>
    <span>
      <span>已完成{{totalDone}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>

  export default {
    name: 'MyFooter',
    props: ['todoList'],
    computed: {
      total() {
        return this.todoList.length
      },
      totalDone() {
        // return this.todoList.filter(todo => todo.done).length
        return this.todoList.reduce((total, todo) =>  todo.done ? total + 1 : total, 0);
      },
      isCheckedAll: {
        get() {
          return this.total === this.totalDone && this.total > 0
        },
        set(value) {
          this.$emit('checkAllTodo', value)
        }
      }
    },
    methods: {
      clearDone() {
        if (confirm('确定清除所有已完成任务？')) {
          this.$emit('clearAllDoneTodo')
        }
      }
    }
  };
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
