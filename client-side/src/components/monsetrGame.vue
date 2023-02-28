<template>
    <div>
        <header class="monster-header">
            <h1 class="monster-h1">Monster Slayer</h1>
        </header>
        <div id="game">
            <section id="monster" class="game-container">
                <h2>Monster Health</h2>
                <div class="healthbar">
                <div class="healthbar__value" :style="monsterBar"></div>
                </div>
            </section>
            <section id="player" class="game-container">
                <h2>Your Health</h2>
                <div class="healthbar">
                <div class="healthbar__value" :style="playerBar"></div>
                </div>
            </section>
            <section class="game-container" v-if="winner">
                <h2 >Game over</h2>
                <h2 v-if="winner=='monster'">You lost</h2>
                <h2 v-else-if="winner=='player'">You won</h2>
                <h2 v-else>Draw</h2>
                <MyButton buttonText="RSTART THE GAME" @click="restartGame"/>
            </section>
            <section id="controls" v-else class="game-container">
                <MyButton buttonText="ATTACK" @click="attackMonster"/>
                <MyButton buttonText="SPECIAL ATTACK" :disabled="canSpecialAttack" @click="attackMonsterSpecial"/>
                <MyButton buttonText="HEAL" @click="healPlayer"/>
                <MyButton buttonText="SURRENDER" @click="surrunder"/>
            </section>
            <section id="log" class="game-container">
                <h2>Battle Log</h2>
                <ul v-for = "(log) in battlogs" :key="log">
                    <li>{{log}}</li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
//   window.location.assign('login');      
// console.log(window.location.port)
import MyButton from './MyButton.vue';
    function getRandomValue(max,min){
        return Math.floor(Math.random()*(max - min )) + min;
    }
    export default {
        name: 'monsterGame',
        components:{
            MyButton
        },
        data () {
            return{
                playerHealth: 100,
                monsterHealth: 100,
                round: 0,
                winner: null,
                battlogs: []
            }
        },
        computed:{
            monsterBar(){
                if(this.monsterHealth < 0)
                    return { width: '0%'}
               return  { width: this.monsterHealth + '%'}
            },
            playerBar(){
                if(this.playerHealth < 0)
                    return { width: '0%'}
               return  { width: this.playerHealth + '%'}
            },
            canSpecialAttack(){
                return this.round % 3 != 0;
            }
        },
        watch: {
            playerHealth(value){
                if(this.monsterHealth <= 0 && value <= 0)
                    this.winner = 'draw'
                else if(value <= 0)
                    this.winner = 'monster'
            },
            monsterHealth(value){
                if(this.playerHealth <= 0 && value <= 0)
                    this.winner = 'draw'
                else if(value <= 0)
                    this.winner = 'player'
            }
        },
        methods: {
            attackMonster(){
                this.round++;
                const attackValue = getRandomValue(12,5);
                this.monsterHealth-=attackValue;
                this.battlogs.push(`The monster attacked ${attackValue}`)
                this.attackPlayer();

            },
            attackPlayer(){
                const attackValue = getRandomValue(15,8);
                this.playerHealth-= attackValue;
                this.battlogs.push(`The player attacked ${attackValue}`)
            },
            attackMonsterSpecial(){
                this.round++;
                const attackValue = getRandomValue(25,10);
                this.monsterHealth-=attackValue;
                this.battlogs.push(`The monster attacked ${attackValue}`)
                this.attackPlayer();
                // history.back()
            },
            healPlayer(){
                this.round++;
                const healValue = getRandomValue(20,8);
                if(this.playerHealth + healValue >100){
                    this.battlogs.push(`The player heals ${100 - healValue}`)
                    this.playerHealth = 100;
                }
                else{
                    this.playerHealth+= healValue;
                    this.battlogs.push(`The player heals ${healValue}`)
                }
                this.attackPlayer();
            },
            surrunder(){
                this.playerHealth = 0;
            }, 
            restartGame(){
                this.playerHealth = 100,
                this.monsterHealth =  100,
                this.round = 0,
                this.winner =  null,
                this.battlogs =  []
            }

        }
    }
</script>
<style>

  .healthbar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fde5e5;
  }
  
  .healthbar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
  }
  
  .game-container {
    /* background-color: red; */
    width: 90%;
    max-width: 40rem;
    text-align: center;
    padding: 0.5rem;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    
    /* margin: auto; */
  }
  
  #monster h2,
  #player h2 {
    margin: 0.25rem;
  }
  
  #controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  #log ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  #log li {
    margin: 0.5rem 0;
  }
  
  .log--player {
    color: #7700ff;
  }
  
  .log--monster {
    color: #da8d00;
  }
  
  .log--damage {
    color: red;
  }
  
  .log--heal {
    color: green;
  }
 
</style>