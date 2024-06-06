<template>
  <main>
    <div class="container">
      <form class="form-container" @submit.prevent="register">
        <h1>Registration</h1>
        <div class="input-group">
          <input type="email" v-model="email" placeholder="Enter your email" required>
        </div>
        <div class="input-group">
          <input type="password" v-model="password" placeholder="Enter your password" required>
        </div>
        <div class="input-group">
          <input type="text" v-model="name" placeholder="Enter your name" required>
        </div>
        <div class="input-group">
          <input type="text" v-model="lastname" placeholder="Enter your lastname" required>
        </div>
        <div class="input-group">
          <p>Enter your gender</p>
          <select v-model="gender" required>
            <option disabled value="">Gender</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
        <div class="input-group">
          <div class="img">
            <img :src="photoPath" v-if="photoPath">
            <input type="file" @change="selectFile" required>
          </div>
        </div>
        <div class="input-group">
          <input type="date" v-model="birth" required>
        </div>
        <div class="input-group">
          <p>Country</p>
          <input type="text" v-model="country" @input="fetchCountry" placeholder="Enter your country" required>
          <ul v-if="suggestions.length">
            <li v-for="suggestion in suggestions" :key="suggestion.name" @click="selectCountry(suggestion.name)">
              {{ suggestion.name }}
            </li>
          </ul>
        </div>
        <button type="submit">Register</button>
      </form>
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
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group p {
  margin: 0;
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.img img {
  width: 200px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

select{
  height: 50px;
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
    selectFile(event) {
      const file = event.target.files[0];
      this.photoPath = URL.createObjectURL(file);
    },
    async register() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        lastname: this.lastname,
        gender: this.gender,
        birth: this.birth,
        country: this.country,
        photoPath: this.photoPath
      };
      try {
        const res = await axios.post('http://localhost:3000/api/runner/newrunner', formData);
        console.log(res.data);
        alert('Registration successful!');
      } catch (error) {
        console.error(error);
        alert('Registration failed. Please try again.');
      }
      this.email = ''
      this.password = ''
      this.name = ''
      this.lastname = ''
      this.gender = ''
      this.birth = ''
      this.country = ''
      this.photoPath = ''
    }
  }
};
</script>
