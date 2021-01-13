<template>
    <v-card color="grey lighten-4" flat height="4em" tile>
        <v-toolbar color="blue">
            <a>
                <v-img max-width="18em" max-height="4em" src="../assets/logo_long.png" @click="updatePlay"/>
            </a>
            <v-spacer></v-spacer>

            <v-btn
                    icon
                    color="white"
                    large
                    href="https://github.com/lukaswanner/vuetifiy"
            >
                <v-icon>mdi-github</v-icon>
            </v-btn>

            <v-btn
                    icon
                    color="white"
                    large
                    href="https://github.com/lukaswanner"
            >
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn
                    icon
                    color="white"
                    large
                    href="https://github.com/lukaswanner/vuetifiy/issues"
            >
                <v-icon>mdi-bug</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: 'navbar',

        data: () => ({}),
        methods: {
            updatePlay: function () {
                this.$emit('play', false)
            }
        }
    }
</script>