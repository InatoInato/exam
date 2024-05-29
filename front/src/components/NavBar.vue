<script>
export default{
    name: "NavBar",
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<template>
    <div class="navbar">
        <header>
            <router-link to="/">Home</router-link>
            <h3>Marathon skills 2024</h3>
        </header>
    </div>
</template>

<style>
.navbar header{
    display: flex;
    justify-content: space-between;
    padding: 30px;
}
</style>