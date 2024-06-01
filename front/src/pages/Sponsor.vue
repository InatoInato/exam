<script>
export default{
    name: "Sponsor",
    data(){
        return{
            name: '',
            runner: '',
            card: '',
            cardnumber: '',
            num1: '',
            num2: '',
            CVC: ''
        }
    }
}
</script>

<template>
<main>
    <div class="form-container">
        <h1>Runner's sponsor</h1>
        <div class="form">
            <input type="text" v-model="name" placeholder="Enter your name">
            <input type="text" v-model="runner" placeholder="Enter runner's name">
            <input type="text" v-model="card" placeholder="Owner's name">
            <input type="text" v-model="cardnumber" placeholder="1234 1234 1234 1234">
            <div class="expiry">
                <input type="text" class="num" v-model="num1" placeholder="01">
                <input type="text" class="num" v-model="num2" placeholder="2024">
            </div>
            <input type="text" v-model="CVC" placeholder="123">
        </div>
        <div class="donate">
            <h2></h2>
            <input type="text" placeholder=">=1$">
        </div>
    </div>
</main>
</template>

<style>
  .form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.expiry {
  display: flex;
  gap: 10px;
}

.num{
    width: 100px;
    margin: 0 30px;
}
</style>