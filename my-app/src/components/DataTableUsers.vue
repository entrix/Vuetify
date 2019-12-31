<template>
    <v-data-table
            :headers="headers"
            :items="users"
            :items-per-page="5"
            item-key="id"
            group-by="clientType"
            class="elevation-1"
    ></v-data-table>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'DataTable',

        data() {

            return {
                headers: [
                    {
                        text: 'Users',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    {text: 'First Name', value: 'firstName'},
                    {text: 'Second Name', value: 'secondName'},
                    {text: 'Surname', value: 'surName'},
                    {text: 'Email Address', value: 'emailAddr'},
                    {text: 'Account Type', value: 'accountType.name'},
                    {text: 'Client Type', value: 'clientType'}
                ],
                users: []
            }
        },
        mounted: function () {
            this.getAllUsers();
        },

        methods: {
            getAllUsers: function () {
                Vue.axios
                    .get('http://localhost:8000/user/getAllUsers')
                    .then(response => {
                        console.log(response.data);
                        this.users = response.data;
                    });
            }


        }
    }
</script>
