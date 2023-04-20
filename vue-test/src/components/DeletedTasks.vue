<template>
    <div>
        <div v-if="todosStore.deleted != ''" class="deleted" v-for="deleted in this.todosStore.deleted">
            {{ deleted }}
        </div>
        <p v-else>
            No deleted tasks
        </p>
    </div>
</template>

<script>
    import { useTodosStore } from '../stores/todos'

    export default {
        setup(){
            const todosStore = useTodosStore()

            return { todosStore }
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
</style>
