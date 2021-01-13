<template>
    <div>
        <div class="main">
            <section id="inhalt">
                <img id="logoPic" src='../assets/logo_short.png'>
                <div id="scrabblePic">
                    <img src='../assets/MathScrabble.jpg'>
                </div>
                <p id="description">
                    "Math Scrabble" (or "Number Scrabble") is a game based on normal Scrabble, but you make equations
                    instead of words.<br>
                    The letter tiles used in Scrabble are replaced with numbers and operators.<br>
                    You can use a standard scrabble set to play number scrabble by writing the proper numbers and
                    operators
                    on the back of the standard scrabble tiles.
                </p>

                <h3 id="playButton"><u><a @click="updatePlayValue()">PLAY &gt;&gt;</a></u></h3>

                <h2 id="rules">The Rules</h2>
                <p>
                    <section class="wrapper">
                        <ul id="rulesList">
                            <li>Except as noted, game play is similar to normal Scrabble</li>
                            <li>On each turn, players must make or add to a valid and correct equation.</li>
                            <ul type="circle">
                                <li>example: '3+3=6'</li>
                            </ul>
                            <li>Players keep <strong>9 tiles</strong> in their hand at all times, not 7 as in normal
                                Scrabble
                            </li>

                            <li>You can add to an existing equation on one side or both sides in a single turn.</li>
                            <ul type="circle">
                                <li>
                                    example: you can add to both ends of '3+3=6' in a single turn to make '63+3=66'
                                </li>
                            </ul>

                            <li>You may only use one new '=' sign per turn</li>
                            <li>Equations can have multiple equal parts.</li>
                            <ul type="circle">
                                <li>example: '2x2=1+3=4=5-1'</li>
                            </ul>
                            <li>Redundant equations are valid</li>
                            <ul type="circle">
                                <li>example: '1-1+1-1=0=0+0'</li>
                            </ul>
                            <li>The '-' may be used either as an operator or before a number indicate its sign.</li>
                            <ul type="circle">
                                <li>example: '-3=5-8'</li>
                                <li>example: '3=-5--8'</li>
                            </ul>
                            <li>You may not use leading '+' signs or leading '0' in front of a number</li>
                            <li>In normal scrabble, you can place one word alongside another if they create a valid
                                cross-word <br>
                                Here, a 2-character sequence can never be an equation so this generally is not possible.
                            </li>
                        </ul>
                    </section>
                <h2 id="score">Score</h2>
                <section class="wrapper">
                    <table class="table1" border="1">
                        <thead>
                        <tr>
                            <td>Number/Operator</td>
                            <td>Score value</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>+ (add)</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>- (subtract)</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>× (multiply)</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>/ (divide)</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>= (equals)</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>blank</td>
                            <td>0</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </div>
        <footer class="footer1">
            <p>Content and image by dan <a
                    href="https://www.instructables.com/Number-Scrabble-The-Game-aka-Math-Scrabble/">
                Number Scrabble - the Game (aka: Math Scrabble)</a></p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'homepage',

        data: () => ({}),

        methods: {
            updatePlayValue: function () {
                this.$emit('play',true)
            }
        }
    }
</script>


<style>
    .main {
        text-align: center;
        background: linear-gradient(180deg, #dff1df 20%, #d9e7ff 100%);
        padding: 2em 0;
    }

    #inhalt {
        text-align: center;
        background-color: white;
        width: 60%;
        min-width: 600px;
        margin: auto;
        box-shadow: 0 10px 10px 8px rgba(100, 100, 100, .2);
        padding: 3em;
    }

    #scrabblePic img {
        max-width: 600px;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        width: 100%;
    }

    #logoPic {
        max-width: 400px;
        min-width: 100px;
        width: 40%;
        margin-bottom: 2em;
    }

    #description {
        text-align: center;
    }

    #rules {
        text-align: center;
        padding-top: 3.2em;
        padding-bottom: 10px;
    }

    #playButton {
        padding-top: 20px;
        padding-bottom: 30px;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
    }

    #rulesList {
        text-align: left;
    }

    #score {
        text-align: center;
        padding-top: 3.2em;
        padding-bottom: 10px;
    }

    .table1 {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 1.2em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .table1 thead tr {
        background-color: mediumaquamarine;
        color: white;
        /*text-align: center;*/
        font-weight: bold;
    }

    .table1 td {
        padding: 0.8em 1em;
    }

    .footer1 {
        padding: 20px;
        height: 100px;
        background-color: LightGray;
        text-align: center;
    }
</style>