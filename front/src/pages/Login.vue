<script>
import axios from 'axios';

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            role: ''
        };
    },
    methods: {
        async login() {
            if (!this.email || !this.password || !this.role) {
                alert("Fill all fields");
                return;
            }
            try {
                const response = await axios.post('http://localhost:3000/api/users/register', {
                    email: this.email,
                    password: this.password,
                    role: this.role
                });
                alert(response.data.message);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.error);
                } else {
                    alert('An error occurred. Please try again.');
                }
            }
            this.email = ''
            this.password = ''
            this.role = ''
        }
    }
}
</script>

<template>
<main>
    <div class="logs">
        <h1>Login</h1>
        <p></p>
        <input type="email" v-model="email" placeholder="Enter your email">
        <input type="password" v-model="password" placeholder="Enter your password">
        <div class="button">
            <select v-model="role" class="but">
                <option selected disabled value="">Войти как</option>
                <option value="runner">Бегун</option>
                <option value="coordinator">Координатор</option>
                <option value="administrator">Администратор</option>
            </select>
            <button type="submit" class="but" @click="login">Register</button>
        </div>
    </div>
</main>
</template>

<style>
.but {
    margin: 10px 30px;
    width: 100px;
}
</style>
