<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-container class="fill-height">
                <v-row>
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                </v-row>
            </v-container>

            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

<!--            <div class="d-flex align-center">-->
<!--                <v-img-->
<!--                        alt="Vuetify Logo"-->
<!--                        class="shrink mr-2"-->
<!--                        contain-->
<!--                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--                        transition="scale-transition"-->
<!--                        width="40"-->
<!--                />-->

<!--                <v-img-->
<!--                        alt="Vuetify Name"-->
<!--                        class="shrink mt-1 hidden-sm-and-down"-->
<!--                        contain-->
<!--                        min-width="100"-->
<!--                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--                        width="100"-->
<!--                />-->
<!--            </div>-->

<!--            <v-spacer></v-spacer>-->

<!--            <v-btn-->
<!--                    href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--                    target="_blank"-->
<!--                    text-->
<!--            >-->
<!--                <span class="mr-2">Latest Release</span>-->
<!--                <v-icon>mdi-open-in-new</v-icon>-->
<!--            </v-btn>-->
        </v-app-bar>

        <v-navigation-drawer v-model="drawer"
                             absolute>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <HelloWorld/>
        </v-content>

        <!--
            <v-content>
              <Cart/>
            </v-content>
        -->
        <v-content>
            <DataTableCandidates/>
            <v-row/>
            <DataTableUsers/>
        </v-content>

    </v-app>
</template>

<script>
    import DataTableCandidates from './components/DataTableCandidates';
    import DataTableUsers from './components/DataTableUsers';
    import HelloWorld from './components/HelloWorld';6

    export default {
        name: 'App',

        components: {
            DataTableCandidates,
            DataTableUsers,
            HelloWorld
        },

        data: () => (
            {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' },
                ]
            }
        ),
        created: function () {
            this.$data.drawer = false;
            // `this` указывает на экземпляр vm
            console.log('Значение a: ')
        }
    };
</script>
