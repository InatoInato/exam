<script>
import axios from 'axios';

export default {
  name: "Sponsor",
  data() {
    return {
      name: '',
      runner: '',
      card: '',
      cardNumber: '',
      num1: '',
      num2: '',
      CVC: '',
      donation: ''
    };
  },
  methods: {
    formatCardNumber(event){
      let cardNumber = event.target.value.replace(/\D/g, '').substring(0, 16);
      cardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || '';
      this.cardNumber = cardNumber;
    },
    async register() {
      if (!this.name || !this.runner || !this.card || !this.cardNumber || !this.num1 || !this.num2 || !this.CVC || !this.donation) {
        alert("Please fill all the fields.");
        console.log("Fill all the fields");
        return;
      }

      const formData = {
        name: this.name,
        runner: this.runner,
        card: this.card,
        cardNumber: this.cardNumber,
        num1: this.num1,
        num2: this.num2,
        CVC: this.CVC,
        donation: this.donation
      };

      try {
        const res = await axios.post('http://localhost:3000/api/sponsor/register', formData);
        console.log(res.data);
        alert('Registration successful!');
        this.name = '';
        this.runner = '';
        this.card = '';
        this.cardNumber = '';
        this.num1 = '';
        this.num2 = '';
        this.CVC = '';
        this.donation = '';
      } catch (error) {
        console.error(error);
        alert('Registration failed. Please try again.');
      }
    }
  }
}
</script>

<template>
<main>
    <div class="form-container">
        <h1>Runner's sponsor</h1>
        <form class="form" @submit.prevent="register">
            <input type="text" v-model="name" placeholder="Your name" required>
            <input type="text" v-model="runner" placeholder="Runner's name" required>
            <input type="text" v-model="card" placeholder="Owner's name" required>
            <input type="text" v-model="cardNumber" @input="formatCardNumber" placeholder="Card number" required>
            <div class="expiry">
                <input type="text" class="num" v-model="num1" placeholder="Mounth" required>
                <input type="text" class="num" v-model="num2" placeholder="Year" required>
            </div>
            <input type="text" v-model="CVC" placeholder="CVC" required>
            <div class="donate">
                <h2>Donate:</h2>
                <input type="text" v-model="donation" placeholder="Donation sum" required>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</main>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.expiry {
  display: flex;
  gap: 10px;
}

.num {
  width: 100px;
  margin: 0 30px;
}
</style>
