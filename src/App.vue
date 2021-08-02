<template>
<<<<<<< HEAD
<div class="container">
  <Header title="Task Tracker" />
  <Tasks @delete-task="deleteTask" :tasks="tasks"/>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
=======
//   <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
//   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
//   <Begin/>
// </template>

// <script>
// // import HelloWorld from './components/HelloWorld.vue'
// //import Abc from "./components/Abc.vue";
// import Begin from "./components/Begin.vue";
// >>>>>>> a00c16a24de37c7cb9836079703b2b5d69da2f58

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    Header,
    Tasks
  }, 
  data(){
    return{
      tasks:[]
    }
  },
  methods:{
    deleteTask(id){
      if(confirm('Do you want to delete this task!')){

        this.tasks = this.tasks.filter((task) =>task.id !==id)
      }
    }
  },

  created(){
    this.tasks =[
      {
        id:1,
        text:'Staff Meeting',
        day: 'March 1st at 2:30pm',
        reminder: true
      },
      {
        id:2,
        text:'Client Meeting',
        day: 'March 1st at 5:30pm',
        reminder: false
      },
      {
        id:3,
        text:'Boss Meeting',
        day: 'March 1st at 8:30pm',
        reminder: true
      }
    ]
=======
    // HelloWorld,
    //Abc
    Begin
>>>>>>> a00c16a24de37c7cb9836079703b2b5d69da2f58
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
