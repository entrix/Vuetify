<template>
    <v-data-table
            :headers="headers"
            :items="candidates"
            :items-per-page="5"
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
                        text: 'Candidates',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    {text: 'First Name', value: 'firstName'},
                    {text: 'Second Name', value: 'secondName'},
                    {text: 'Surname', value: 'surName'},
                    {text: 'Email Address', value: 'emailAddr'},
                    {text: 'Account Type', value: 'accountType.name'},
                ],
                candidates: []
            }
        },
        mounted: function () {
            this.getAllCandidates();
        },

        methods: {
            getAllCandidates: function () {
                Vue.axios
                    .get('http://localhost:8000/user/getCandidates')
                    .then(response => {
                        console.log(response.data);
                        this.candidates = response.data;
                    });
            }


        }
    }
</script>
