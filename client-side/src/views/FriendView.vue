<template>
    <div>
        <header>
            <h1>FriendList</h1>
        </header>
        <section id="app">
            <ul v-for="(Friend, index) in friends" :key="index">
                <FriendList :friend = "Friend"/>
            </ul>
        </section>
    </div> 
</template>
<script>
// console.log('Selamu Dawit Selemon')
import FriendList from '@/components/FriendList.vue';
export default {
    name: 'FriendView',
    components:{
        FriendList
    },
    data(){
        return{
            friends:[
                {
                    name: 'Selamu Dawit',
                    phone: '0904823272',
                    email: 'selamudev@gmail.com'
                },
                {
                    name: 'Deginet Dawit',
                    phone: '0926575255',
                    email: 'degudev@gmail.com'
                }
            ]
        }
    },
    methods:{
        ct(){
            console.log('1234556')
        }
    }
}
</script>
<style >  
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
