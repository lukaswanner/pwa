<template>

    <div class="gamecontainer">
        <div class="myGrid">
            <div class="myRow">
                <div class="myCell myLabel"></div>
                <div v-for="(n) in size" class="myCell myLabel" :key="n">
                    {{ n }}
                </div>

            </div>
            <div v-for="(n,i) in size" class="myRow" :key="n + i">
                <div class="myCell myLabel"> {{ n }}</div>
                <div v-for="(m,index) in cells[i]" :key="m + index">
                    <div v-if="m !== ''" class="myCell myCard">
                        <div class="myCharacter"> {{m}}</div>
                        <div class="myPoint"> {{points[m]}}</div>
                    </div>
                    <div v-else-if="kind[i][index] ==='n'" class="myCell normal"
                         @click="addclick(cells,$event)"></div>
                    <div v-else-if="kind[i][index] ==='d'" class="myCell double"
                         @click="addclick(cells,$event)">x2
                    </div>
                    <div v-else-if="kind[i][index] ==='t'" class="myCell triple"
                         @click="addclick(cells,$event)">x3
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import store from '../assets/data.js'
    import setCard from '../javascripts/setCard.js'

    global.jQuery = require('jquery');

    let $ = global.jQuery;
    window.$ = $;

    function loadjson() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "http://localhost:9000/json",
                dataType: "json",
                success: function (result) {
                    console.log(result)
                    store.commit("fill", {json: result, size: result.gameField.grid.cells.length});
                    resolve(result)
                },
                error: function (result) {
                    reject(result)
                }
            })
        })
    }

    export default {
        name: "grid",

        created() {
            loadjson()
        },
        data: function () {
            return {
                store: store,
                points: store.state.points,
            }
        },
        computed: {
            cells() {
                return store.state.cells
            },
            kind() {
                return store.state.kind
            },
            size() {
                return store.state.size
            },
        },
        methods: {
            addclick: function (grid, event) {
                if (!event.currentTarget.classList.contains("active")) {
                    $(".myCell").removeClass("active")
                    event.currentTarget.classList.add("active")
                } else {
                    //w8 for response
                    loadjson().then(function getHand(response) {
                        console.log(response)
                        setCard()
                    })
                }
            }
        }
    }
</script>

<style>

    .gamecontainer {
        text-align: center;
    }

    .myGrid {
        text-align: center;
        display: inline-flex;
        background: white;
        box-shadow: 0px 0px 10px 8px rgba(100, 100, 100, .2);
        border-radius: 1em;
        grid-gap: 0;
        padding: .5em;
        margin: 0px;
    }


    .myCell {
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 2.5em;
        min-height: 2.5em;
        border-radius: .3em;
        margin: .15em;


        background: #f0f0f0;
        box-shadow: inset 3px 3px 6px 4px rgba(100, 100, 100, 0.15);

        font-weight: bold;
    }

    .myLabel {
        border: none;
        background: #4d8080;
        color: white;
        box-shadow: none;
    }

    .myCard {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 2.5em;
        min-height: 2.5em;
        border-radius: .5em;

        background-image: url("../assets/card.png");
        background-size: cover;
        /*background: #d29d7a;*/
        box-shadow: 3px 3px 5px 2px rgba(100, 100, 100, 0.15);
        font-weight: bold;
    }

    .myCharacter {
        font-size: 1.2em;
    }

    .myPoint {
        position: absolute;
        right: .2em;
        bottom: .08em;
        font-size: .7em;
    }

    .double {
        background-color: #ffe252;
    }

    .triple {
        background-color: #f85c5c;
    }

    .active {
        border: 1px solid black;
    }

</style>


