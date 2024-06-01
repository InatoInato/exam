<template>
    <main>
      <div class="container">
        <div class="form-container">
          <h1>Registration</h1>
          <input type="email" v-model="email" placeholder="Enter your email">
          <input type="password" v-model="password" placeholder="Enter your password">
          <input type="password" v-model="checkpassword" placeholder="Enter your password again">
          <input type="text" v-model="name" placeholder="Enter your name">
          <input type="text" v-model="lastname" placeholder="Enter your lastname">
          <div class="select">
            <p>Enter your gender</p>
            <select v-model="gender">
              <option disabled>Gender</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
        </div>
        <div class="form-container">
          <div class="img">
            <img :src="photoPath">
            <input type="file" @change="selectFile">
          </div>
          <input type="date" v-model="birth">
          <div class="select">
            <p>Country</p>
            <input type="text" v-model="country" @input="fetchCountry" placeholder="Enter your country">
            <ul v-if="suggestions.length">
              <li v-for="suggestion in suggestions" :key="suggestion.name" @click="selectCountry(suggestion.name)">
                {{ suggestion.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
  
  .select {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  img {
    width: 200px;
  }
  </style>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "NewRunner",
    data() {
      return {
        email: '',
        password: '',
        checkpassword: '',
        name: '',
        lastname: '',
        gender: '',
        birth: '',
        country: '',
        suggestions: [],
        photoPath: ''
      };
    },
    methods: {
      async fetchCountry() {
        if (this.country.length > 1) {
          try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${this.country}`);
            this.suggestions = res.data.map(country => ({ name: country.name.common }));
          } catch (err) {
            console.log(err);
          }
        } else {
          this.suggestions = [];
        }
      },
      selectCountry(countryName) {
        this.country = countryName;
        this.suggestions = [];
      },
      selectFile(event) {
        const file = event.target.files[0];
        this.photoPath = URL.createObjectURL(file);
      },
    }
  }
  </script>
  