<template>
  <div class="todos-box">
    <div class="todos-wait">
      <h4 class="todos-wait-title">所有代办</h4>
    </div>
    <div class="todos-task">
      <div class="todos-task-list">
        <ul>
          <li
            v-for="(item,index) in store.todos"
            :key="item.id"
            @click="updateTaskStatus(index)"
          >
            <span :class="{'underline': item.type === 1}">{{item.label}}</span>
            <button class="todos-task-button" v-if="item.type === 1" @click.stop="deleteTask(index)">删除</button>
          </li>
        </ul>
      </div>
      <div class="todos-task-input">
        <input type="text" placeholder="添加任务" @keyup.enter="inputHandler" v-model="inputValue">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { todoList } from '../store/index'
const store = todoList()
const inputValue = ref('')
const inputHandler = (e) => {
  if(e.target.value === '') return  
  store.addTodo(e.target.value)
  inputValue.value = ''
}
const updateTaskStatus = (index) => {
  store.updateTaskStatus(index)
}
const deleteTask = (index) => {
  store.deleteTask(index)
} 
</script>

<style scoped>
.todos-box {
  background: white;
  width: 500px;
  height: 400px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
}
.todos-wait{
  width: 150px;
  height: 100%;
  background: #ddd;
}
.todos-wait-title {
  font-size: 14px;
  font-weight: 400;
  margin-left:10px;
  margin-top:10px;
}
.todos-task {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.todos-task-list {
  flex: 1;
  overflow-y: scroll;
}
.todos-task-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
  
}
.todos-task-list ul li{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px -3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
}
.todos-task-button {
  width: 50px;
  height: 20px;
  border-radius: 10px;
  border: none;
}
.todos-task-input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
}
.todos-task-input input {
  border: none;
  background: #eee;
  border-radius: 5px;
  width: 320px;
  height: 30px;
  padding-left: 10px;
}
.underline {
  text-decoration: line-through;
  color: #bbb;
}
</style>
