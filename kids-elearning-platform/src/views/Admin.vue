<template>
  <div class="bigContainer">
    <div class="container">
      <div class="child">
        <form @click="postData" >
          <br />
          <div style="color: white">Add Question :</div>
          <input
            name="question"
            type="text"
            v-model="data.question"
            placeholder="question"
          />
          <br />
          <input
            name="category"
            type="text"
            v-model="data.category"
            placeholder="category"
          /><br />
          <input
            name="firstAnswer"
            type="text"
            v-model="data.firstAnswer"
            placeholder="first Answer"
          /><br />
          <input
            name="secondAnswer"
            type="text"
            v-model="data.secondAnswer"
            placeholder="second Answer"
          /><br />
          <input
            name="thirdAnswer"
            type="text"
            v-model="data.thirdAnswer"
            placeholder="third Answer"
          /><br />
          <input
            name="forthAnswer"
            type="text"
            v-model="data.forthAnswer"
            placeholder="forth answer"
          /><br />
          <button class="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      data: {
        question: null,
        firstAnswer: null,
        secondAnswer: null,
        thirdAnswer: null,
        forthAnswer: null,
        category: null,
      },
    };
  },
  methods: {
    postData(e) {
      e.preventDefault();
      console.warn(this.data);
      axios
        .post("http://localhost:3000/api/item/admin", this.data)
        .then((result) => {
          console.log(result.data,'dsdsd');
          
        });
    },
  },
};
</script>

<style scoped>
.bigContainer {
  background: #f2f2f2;
  height: 1150px;
  margin-top: -60px;
}

input[type="text"] {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.button {
  background-color: #f44336; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.container {
  text-align: center;
  margin-left: 300px;
  margin-right: 540px;
  margin-top: 60px;
}
.child {
  display: inline-block;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.829);
  padding: 50px;
  margin-top: 200px;
  margin-left: 200px;
  width: 900px;

}
</style>
