<template>
    <div v-if="todosStore.editing == false">
        <div class="cont" v-if="todosStore.todos != ''" v-for="(todo, index) in todosStore.todos">
            <p>{{ todo }}</p>
            <div class="icon-cont">
                <ion-icon name="pencil" @click="editTask(index)" class="edit-i"></ion-icon>
                <ion-icon @click="deleteTask(index)" class="delete-i" name="close-circle"></ion-icon>
            </div>
        </div>
        <p v-else>
            No active Tasks
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
        methods: {
            deleteTask(index){
                this.todosStore.deleted.push(this.todosStore.todos.splice(index, 1)[0])
                console.log(this.todosStore.deleted)
            },
            editTask(index){
                this.todosStore.editing = true;
                this.todosStore.editingId = index
                this.todosStore.currentEdited = this.todosStore.todos[index]
            },
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
    .cont{
        padding: 10px;
        background: #fafafafa;
        color: black;
        border-radius: 4px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cont p{
        justify-content: left;
    }

    .icon-cont{
        display: flex;
        padding: 0px;
        margin: 0px;
        align-items: center;
    }

    ion-icon{}

    .delete-i{
        font-size: 22px;
        cursor: pointer;
        padding-left: 5px;
    }

    .delete-i:hover{
        color: red;
    }

    .edit-i{
        font-size: 22px;
        cursor: pointer;
        padding-left: 5px;
    }

    .edit-i:hover{
        color: orange;
    }
</style>
