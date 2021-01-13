<template>
    <div class="wrapper">
    <div class="myHand">
        <div class="myCard inHand" @click="addclick(hand,$event)" v-for="(card,i) in hand" :key="card + i">
            <div class="myCharacter">{{card}}</div>
            <div class="myPoint">{{points[card]}}</div>
        </div>
    </div>
    </div>
</template>

<script>
    import store from "../assets/data";

    global.jQuery = require('jquery');

    let $ = global.jQuery;
    window.$ = $;

    export default {
        name: "grid",

        data: function () {
            return {
                store: store,
                points: store.state.points
            }
        },
        computed: {
            size() {
                return store.state.handSize
            },
            selectedPlayer() {
                return store.state.selectedPlayer
            },
            hand() {
                if (this.selectedPlayer === "A") {
                    return store.state.handA
                } else {
                    return store.state.handB
                }
            }
        },
        methods: {
            addclick: function (hand, event) {
                if (!event.currentTarget.classList.contains("active")) {
                    $(".myCard").removeClass("active")
                    event.currentTarget.classList.add("active")
                }
            }
        }
    }

</script>

<style>

    .wrapper{
        text-align: center;
    }
    .myHand {
        display: inline-flex;
        margin: 1em;
        border-radius: .8em;
        background: #e9dac0;
        box-shadow: 3px 3px 5px 2px rgba(100, 100, 100, 0.15);
    }


    .myCard {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 2.5em;
        min-height: 2.5em;
        border-radius: .5em;
        margin: .2em;

        max-height: 2em;
        max-width: 2em;

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


</style>