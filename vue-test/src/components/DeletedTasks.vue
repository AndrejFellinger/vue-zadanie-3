<template>
    <div v-if="todosStore.deleted != ''" class="deleted" v-for="(deleted, index) in this.todosStore.deleted">
        <p>{{ deleted }}</p>
        <ion-icon @click="recoverTask(index)" class="recover-i" name="refresh-circle"></ion-icon>
    </div>
    <p v-else>
        No deleted tasks
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
            recoverTask(index){
                this.todosStore.todos.push(this.todosStore.deleted.splice(index, 1)[0])
            }
        },
    }
</script>

<style scoped>
    .deleted{
        background: rgba(255, 0, 0, 0.1);
        color: rgb(233, 162, 162);
        margin-bottom: 5px;
        padding: 10px;
        font-size: 16px;
        border-radius: 3px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .recover-i{
        font-size: 22px;
        cursor: pointer;
        padding-left: 5px;
    }

    .recover-i:hover{
        color: orange;
    }
</style>
