<script>
export default{
    name: "NavBar",
    methods: {
        back(){
            this.$route.go(-1)
        }
    }
}
</script>

<template>
    <div class="navbar">
        <header>
            <div class="links">
                <router-link @click="back">Back</router-link>
                <router-link to="/">Home</router-link>
            </div>
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