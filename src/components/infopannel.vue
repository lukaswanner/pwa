<template>
    <div class="control">
        <div class="info">
            <v-container>
                <v-row>
                    <v-col>
                        <div v-if="currPlayer === 'A'">
                            <div class="card score currPlayer">
                                Player A: <br/><span class="playerpoint">{{playerPointsA}}</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="card score">
                                Player A: <br/><span class="playerpoint">{{playerPointsA}}</span>
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <div v-if="currPlayer === 'B'">
                            <div class="card score currPlayer">
                                Player B: <br/><span class="playerpoint">{{playerPointsB}}</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="card score">
                                Player B: <br/><span class="playerpoint">{{playerPointsB}}</span>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <p id="ncards">cards in stack: {{ncards}}</p>

            <div id="current_player"> You are player: {{selectedPlayer}}</div>

            <v-container>
                <v-row>
                    <v-col>
                        <v-btn elevation="2" outlined rounded class="button" @click="newgame()">new game</v-btn>
                        <br/>
                        <v-btn elevation="2" outlined rounded class="button" @click="switchcards(selectedPlayer)">switch
                            cards
                        </v-btn>
                        <br/>
                        <v-btn elevation="2" outlined rounded class="button" @click="submit()">submit</v-btn>
                        <br/>
                        <v-col class="pa-0">
                            <v-btn elevation="2" outlined rounded class="button playerButton">undo</v-btn>
                            <v-btn elevation="2" outlined rounded class="button playerButton">redo</v-btn>
                        </v-col>
                        <v-btn elevation="2" outlined rounded class="playerButton" @click="selectPlayer('A')">Player A
                        </v-btn>
                        <v-btn elevation="2" outlined rounded class="playerButton" @click="selectPlayer('B')">Player B
                        </v-btn>
                        <v-col class="pa-0">
                            <v-btn elevation="2" outlined rounded class="button playerButton" @click="resize('3')">3x3
                            </v-btn>
                            <v-btn elevation="2" outlined rounded class="button playerButton" @click="resize('9')">9x9
                            </v-btn>
                            <v-btn elevation="2" outlined rounded class="button playerButton" @click="resize('15')">
                                15x15
                            </v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>

</template>

<script>

    import store from '../assets/data.js'
    import $ from 'jquery'

    function loadjson() {
        $.ajax({
            method: "GET",
            url: "http://localhost:9000/json",
            dataType: "json",
            success: function (result) {
                console.log(result)
                store.commit("fill", {json: result, size: result.gameField.grid.cells.length});
            },
        })
    }

    export default {
        name: 'buttonArea',

        data: () => ({
            store: store
        }),
        computed: {
            playerPointsA() {
                return store.state.playerPointsA
            },
            playerPointsB() {
                return store.state.playerPointsB
            },
            currPlayer() {
                return store.state.currentPlayer
            },
            ncards() {
                return store.state.ncards
            },
            selectedPlayer() {
                return store.state.selectedPlayer
            }
        },
        methods: {
            submit: function () {
                console.log("submit")
                $.ajax({
                    method: "GET",
                    url: "http://localhost:9000/scrabble/submit",
                    success: function () {
                        loadjson()
                    }
                })
            },
            newgame: function () {
                console.log("new game")
                $.ajax({
                    method: "GET",
                    url: "http://localhost:9000/scrabble/new",

                    success: function () {
                        loadjson()
                    }
                });
            },
            switchcards: function (player) {
                console.log("switching cards")
                let url
                if (player === "A") {
                    url = "http://localhost:9000/scrabble/switch/A"
                } else {
                    url = "http://localhost:9000/scrabble/switch/B"
                }
                $.ajax({
                    method: "GET",
                    url: url,

                    success: function () {
                        loadjson()
                    }
                });
            },
            resize: function (size) {
                let url = "http://localhost:9000/scrabble/resize/" + size
                console.log("resize")
                $.ajax({
                    method: "GET",
                    url: url,
                    success: function () {
                        loadjson()
                    }
                })
            },
            selectPlayer: function (player) {
                store.commit("setPlayer", player);
            }

        },
    }
</script>

<style>


    .control {
        text-align: center;
        margin: 3em;
        padding: 1em;
        width: 80%;
        background-color: white;
        box-shadow: 0px 0px 10px 8px rgba(100, 100, 100, .2);
        border-radius: 1em;
    }

    .info {
        font-size: 1.5em;
        border-radius: 1em;
        background-color: green;
    }

    .score {
        text-align: center;
        padding-bottom: 10px;
    }

    .currPlayer {
        color: red;
    }

    .playerpoint {
        font-size: 3em;
        font-weight: bold;
        width: 100%;
    }

    .button {
        margin-top: 0.3em;
        background-color: orange;
        width: 50%;
    }

    .playerButton {
        margin-top: 1em;
        margin-left: 0.3em;
        background-color: orange;
        width: 31%;
    }
</style>