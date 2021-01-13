<template>
    <v-app>
        <navbar @play="updatePlay"/>
        <div v-if="play">
            <v-container>
                <v-row class="pa-0">
                    <v-col class="pa-0">
                        <grid/>
                        <hand/>
                    </v-col>
                    <v-col class="pa-0">
                        <infopannel @play="updatePlay"/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div v-else>
            <index @play="updatePlay"/>
        </div>
    </v-app>
</template>

<script>
    import navbar from './components/navbar.vue';
    import grid from './components/grid.vue'
    import infopannel from "./components/infopannel.vue";
    import hand from "./components/hand.vue";
    import index from "./components/main.vue"


    export default {
        name: 'App',

        components: {
            navbar,
            grid,
            hand,
            infopannel,
            index,
        },

        data: () => ({
            play: false
            //
        }),
        methods: {
            updatePlay:function (bool) {
                this.play = bool
            }
        }
    };
</script>

<style>
    html { overflow-y: auto }
</style>