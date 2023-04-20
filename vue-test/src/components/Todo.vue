<template>
    <div v-if="todosStore.todos != ''" v-for="(todo, index) in todosStore.todos">
        <p>{{ todo }}</p>
        <ion-icon @click="deleteTask(index)" class="delete-i" name="close-circle"></ion-icon>
    </div>
    <p v-else>
        No active Tasks
    </p>
</template>

<script>
    import { useTodosStore } from '../stores/todos'
    
    export default {
        setup(){
            const todosStore = useTodosStore()

            return { todosStore }
        },
        methods: {
            deleteTask(index){
                this.todosStore.deleted.push(this.todosStore.todos.splice(index, 1)[0])
                console.log(this.todosStore.deleted)
            }
        },
    }
</script>

<style scoped>
    div{
        padding: 10px;
        background: #fafafafa;
        color: black;
        border-radius: 4px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div p{
        justify-content: left;
    }

    .delete-i{
        font-size: 22px;
        cursor: pointer;
        transition: 0.2s ease !important;
        padding-left: 10px;
    }

    .delete-i:hover{
        color: red;
    }
</style>
