<template>
    <div>
        <header>
            <h1>Vue Events</h1>
        </header>
        <section id="events">
        <h2>Events in Action</h2>
        <MyButton buttonText="Add 10" v-on:click="add(10)"/>
        <MyButton buttonText="Subtract 5" v-on:click="reduce(5)"/>
        <p>Result: {{ counter }}</p>
        <input type="text" v-model="name">
        <p >Your Name: {{fullName}}</p>
        </section>
    </div>
</template>
<script>
import MyButton from './MyButton.vue';
    export default {
        name: 'learn',
        components:{
            MyButton
        },
        data() {
            return {
            counter: 0,
            name: ''
            };
        },
        computed: {
            fullName(){
                
                if (this.name === '')
                    return ''
                else return this.name + ' Dawit Selamon'
            }
        },
        methods: {
          
            add(num) {
                
                this.counter = this.counter + num;
            },
            reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
            }
        }
    }

</script>
    <style>
        
    header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #4fc08d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #events {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #events h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #4fc08d;
    margin: 0 0 1rem 0;
    }
    #events p {
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid #4fc08d;
    background-color: #4fc08d;
    color: white;
    padding: 0.5rem;
    border-radius: 25px;
    }

    #events input {
    font: inherit;
    border: 1px solid #ccc;
    }

    #events input:focus {
    outline: none;
    border-color: #1b995e;
    background-color: #d7fdeb;
    }
</style>