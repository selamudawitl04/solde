<template>   
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="controllShowDetail">{{showDetail? 'Hide': 'Show'}} Details</button>
        <ul v-if="showDetail">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>  
</template>
<script>
export default{
    props: {
        friend: {
            name: '',
            email: '',
            phone: ''
        }    
    },
    data(){
        return {
            showDetail: true
        }
    },
    methods:{
        controllShowDetail(){
            this.showDetail = !this.showDetail
        }
    }
}
</script>



