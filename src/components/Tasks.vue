<template>
    <div :key="task.id" v-for="task in tasks">
        <Task :deleteTask="deleteTask" :task="task"/>
    </div>
</template>

<script>

import Task from './Task.vue'
    export default{
        name: 'Tasks',
        props:{
            tasks: Array,
            deleteTask:Function
        },
        components:{
            Task
        },
        emits:['delete-task']
    }
</script>
