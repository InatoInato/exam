<script>
import axios from 'axios';
import { ref } from 'vue';
export default{
    name: "Runner",

    setup(){
        const email = ref('')
        const password = ref('')
        const role = ref('')

        const login = async () => {
            try{
                const response = await axios.post('/api/users/login',{
                    email: email.value,
                    password: password.value
            })
            alert(response.data.message)
            } catch(error){
                if(error.response){
                    alert(response.data.error)
                }
                else{
                    alert('An error occured')
                }
            }
        }
        return{
            email, password, role, login
        }
    }
}

</script>

<template>
    <a href="/newrunner">Я участвовал ранее</a>
    <a href="/oldrunner">Я новый участник</a>
</template>

<style>

</style>