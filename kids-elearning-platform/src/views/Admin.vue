<template>
  <div class="bigContainer">
    <div class="container">
      <div class="child">
<table >
              <div style="color: white">Add Question :</div>
  <tr>
    <th>
      <form @click="postData" >
          <br />
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
            v-model="data.firstAnswer.url"
            placeholder="first Answer"
          /><br />
          <input
            name="secondAnswer"
            type="text"
            v-model="data.secondAnswer.url"
            placeholder="second Answer"
          /><br />
          <input
            name="thirdAnswer"
            type="text"
            v-model="data.thirdAnswer.url"
            placeholder="third Answer"
          /><br />
          <input
            name="forthAnswer"
            type="text"
            v-model="data.forthAnswer.url"
            placeholder="forth answer"
          /><br />
          <button class="button" type="submit">Submit</button>
        </form>
    </th>
    <th >
      <div class='thh'>
         <input @click='check()'  class="check" type="radio" id="one" value="0" v-model="data.picked">
   <br>
        <input @click='check()' class="check" type="radio" id="two" value="1" v-model="data.picked">
   <br>
  <input @click='check()' class="check" type="radio" id="trois" value="2" v-model="data.picked">
   <br>
    <input @click='check()' class="check" type="radio" id="quatre" value="3" v-model="data.picked">
   <br>
   </div>
      
      </th>  
  </tr>
 
</table>

        
       
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
        firstAnswer: {url:'',correct:false},
        secondAnswer: {url:'',correct:false},
        thirdAnswer: {url:'',correct:false},
        forthAnswer: {url:'',correct:false},
        category: null,
        picked:'',
      },
    };
  },
  methods: {
    check(){

    },
    postData(e) {
      e.preventDefault();
      console.log(this.data);
      axios
        .post("http://localhost:3000/api/item/admin", this.data)
        .then((result) => {
          result.send(this.data)
        })
        .catch((error) => {
          console.log(error,'error');
        });
    }
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
  margin-top: 0px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.thh{
  margin-top: 30px;
}

.check{
 margin-left: 30px;
 margin-top:40px;

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
  background-color: black;
  padding: 40px;
   margin-top: 80px;
}
</style>