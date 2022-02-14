<template>
  <div v-if="changeview === false">
    <div id="box">
      <div id="question" @click="playSound(sounds[index])" class="titleContainer title">
        🔊
         </div>
      <div>
        <div
          class="answer"
          v-for="(question, index) in questions[index].suggestions"
          v-bind="key"
          :key="index"
          @click="next"
        >
          <img
            id="img"
            :src="question.suggestion"
            @click="userresponse(question.correct)"
          />
        </div>
      </div>
    </div>
  </div>
   <div v-if="changeview === true">
    <div>
      <div id="box">
        {{ this.test() }}
        <router-link to="/Fruit"><button class="myButton"  >Go To Fruit Quiz</button></router-link>
           
        <div class="parent">
       
          <div>
            <img id="img2" :src="this.photo" />
          </div>

          <div>
            <h1 id="p"></h1>
          </div>

          <div>
            <img
              id="img1"
              src="https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import red from "../../public/sounds/red.mp3";
import oranges from "../../public/sounds/oranges.mp3";
import green from "../../public/sounds/green.mp3";
import axios from "axios"
export default {
  name: "Color",
  data() {
    return {
      data:[],
      changeview: false,
      sounds: [red, oranges, green],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941816440175071262/orange-8_4507176.jpg?width=768&height=432",
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941816440422539264/download.png",
              correct: true,
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817049712320523/download_1.png",
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817255531012156/640px-A_black_image.jpg?width=576&height=432",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817613456130048/2560px-Purple.svg.png?width=648&height=432",
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941816440175071262/orange-8_4507176.jpg?width=768&height=432",
              correct: true,
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817613854580786/Solid_pink.svg.png?width=432&height=432",
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817996333154314/768px-Solid_blue.svg.png?width=432&height=432",
            },
          ],
        },
        {
          suggestions: [
            { suggestion: "https://media.discordapp.net/attachments/941079224666697738/941816440644853891/F1_green_flag.svg.png?width=576&height=432", correct: true },
            { suggestion: "https://media.discordapp.net/attachments/941079224666697738/941817996333154314/768px-Solid_blue.svg.png?width=432&height=432" },
            { suggestion: "https://media.discordapp.net/attachments/941079224666697738/941817613456130048/2560px-Purple.svg.png?width=648&height=432" },
            { suggestion: "https://media.discordapp.net/attachments/941079224666697738/941817049712320523/download_1.png" },
          ],
        },
        //🦍🐘🐊🦈🐓🦉🐧
      ],
    };
  },
  methods: {
    GetData() {
      axios.get("http://localhost:3000/api/item/admin").then((result) => {
        for (let i = 0; result.data.length; i++) {
          if (result.data[i].category === "Color") {
            this.data = this.data + result.data[i];
          }
        }
      });
    },
    
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    sound() {
      var audio = new Audio(require("../../public/sounds/Lion.mp3"));
      audio.play();
    },
    notify() {
      alert("navigation was prevented."); // to test if functions are passed
    },
     userresponse(e) {
      console.log(this.index, "length");
      console.log(this.response, "response");
      if (e) {
        this.score = this.score + 1;
        console.log(this.score, "hani lena");
      }
    },
     next() {
      this.index += 1;
      if (this.index === 3) {
        this.changeview = !this.changeview;
      }
    },
    scores: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
      test() {
      if (this.score === 0) {
        this.photo =
          "https://images-ext-2.discordapp.net/external/KKhnER3qr6BJASM64Q5R1mWDuDA3dhL2Keo8cCiaxJY/https/cdn3d.iconscout.com/3d/premium/thumb/zero-number-4863645-4056291.png?width=432&height=432";
      }
      if (this.score === 1) {
        console.log("aaaaaaaaaaaaaaa");
        this.photo =
          "https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=432&height=432";
      }
      if (this.score === 2) {
        console.log("aaaaaaaaaaaaaaa");
        this.photo =
          "https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433";
      }
    },
  },
};
</script>
<style scoped>
.myButton {
	box-shadow: 3px 4px 0px 0px #899599;
	background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
	background-color:#ededed;
	border-radius:15px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#3a8a9e;
	font-family:Arial;
	font-size:28px;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #e1e2ed;
}
.myButton:hover {
	background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
	background-color:#bab1ba;
}
.myButton:active {
	position:relative;
	top:1px;
}
#img1{
  margin-left:-600px;
  margin-top: 90px;
  width: 250px;
  height: 250px;
}
#img2{
  width: 200px;
  height: 200px;
  margin-right: -600px ;
  margin-top: -130px;
  
}

#img {
  width: 250px;
  height: 250px;
}
#question {
  font-size: 3cm;
  cursor: pointer;
}
.answer {
  display: inline;
  font-size: 5cm;
  padding-left: 0cm;
  padding-right: 5cm;
  margin-left: 4cm;
  cursor: pointer;
}
#box {
  height: 700px;
  width: 1500px;
  background-color: rgba(255, 228, 196, 0.603);
  margin-left: 200px;
  margin-top: 40px;
  border-radius: 5px;
  background: rgba(5, 5, 5, 0.61);
  box-shadow: 0 8px 32px 0 rgba(14, 2, 37, 0.705);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(15, 4, 44, 0.18);
}
.score {
  
  color: white;
  font-size: 40px;
}
#p{
  width:10px; 
  height:200px;
  background-color: white;
  transform: rotate(18deg);
  margin-left: 240px;
}
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 4fr;
grid-column-gap: 2px;
grid-row-gap: 0px;
margin-top: 300px;
}
</style>
