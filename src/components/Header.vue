<template>
    <header>
        <h1>{{title}}</h1>
        <Button @toggle-add-task="toggleAddTask" text="Add Text" color="green"/>
    </header>
</template>

<script>

import Button from './Button'

export default ({
    name: 'Header',
    props: {
        title: String,
        toggleAddTask: Function
    },
    components:{
        Button,
    },
})
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>