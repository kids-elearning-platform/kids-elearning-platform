<template>
  <div v-if="changeview === false">
    <div id="box">
      <div
        id="question"
        @click="playSound(sounds[index])"
        class="titleContainer title"
      >
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
        <router-link to="/Color"><button class="myButton"  >Go To Color Quiz</button></router-link>
           
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
  <!-- </div>  -->
  
</template>
<script>
import lion from "../../public/sounds/Lion.mp3";
import duck from "../../public/sounds/Duck.mp3";
import elephant from "../../public/sounds/elephant.mp3";
import butterfly from "../../public/sounds/butterfly.mp3";
import owl from "../../public/sounds/Owl.mp3";
import axios from "axios";
export default {
  name: "Animal",
  data() {
    return {
      data:[],
      photo:
        "https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=432&height=432",
      response: [],
      changeview: false,
      sounds: [lion, duck, butterfly, owl, elephant],
      score: 0,
      index: 0,

      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/xsGM5GDhcA4hVpe2eAlk4lhveviNslVhAh4QuRjgaSU/https/cdn3d.iconscout.com/3d/premium/thumb/cat-4065933-3364159%400.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/jwYsaKzPHQoa2TgI2llGqJDe-qOg6rJyQ28IAy3JLcs/https/cdn3d.iconscout.com/3d/premium/thumb/lion-4824495-4025212.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/9uMN9AoAMc3X3cl_Y3NM87RtVBj5OBXKjxqnOkDgCEI/https/cdn3d.iconscout.com/3d/premium/thumb/dog-4609634-3811488.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/M4TUmIn0TxFxZ1FU1t5URCjxgi_RJSIxD8kulleiOxY/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-4609622-3811476.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/WFNNdtg65qqYVjUwZUuk0hWFklsnaXCApnqPkmv2mTQ/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-3690191-3081431.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/JUPOOJcH_Z-OzD2Vctve3EkqGo_zbB0FOgcGJolc2Qo/https/cdn3d.iconscout.com/3d/premium/thumb/duck-3339546-2797138.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/-giFAaxUjtXrS--WpYDf_ljVUD5ZbWd6klLT1_Q1qD0/https/cdni.iconscout.com/illustration/premium/thumb/baby-elephant-playing-with-ball-4278543-3550500.png?width=387&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/vvFGxvf8Fg5ez7qAV0K2mldxP2mQhTk_PnDqRCmAG0Y/https/cdn3d.iconscout.com/3d/premium/thumb/bee-4551745-3774537.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/1FTvVvSqhQ02LGjku9nXfSTy1GgEOT8OoMnCcBf48bM/https/cdn3d.iconscout.com/3d/premium/thumb/butterfly-4609618-3811472.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/WFNNdtg65qqYVjUwZUuk0hWFklsnaXCApnqPkmv2mTQ/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-3690191-3081431.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/RvjzU7I2-zeCuI8stzAh12XpIjefwuyX7qeworY7krw/https/cdn3d.iconscout.com/3d/premium/thumb/fox-4609630-3811484.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/wGnUvMvoHh18TGnVtrJ5pIFOt2XHeWTSTZluBicm3fo/https/cdn3d.iconscout.com/3d/premium/thumb/bird-4769077-3972350.png?width=433&height=433",
            },
          ],
        },
        //🦍🐘🐊🦈🐓🦉🐧
      ],
    };
  },
  methods: {
     postData(e) {
      e.preventDefault();
      console.log(this.data);
      axios
        .post("http://localhost:3000/api/item/admin", this.data)
        .then((result) => {
          console.log("after",this.data);
          console.log("res from server",result);
        })
        .catch((error) => {console.log(error);})
    },
    GetData() {
      axios.get("http://localhost:3000/api/item/admin").then((result) => {
        for (let i = 0; result.data.length; i++) {
          if (result.data[i].category === "Animal") {
            this.data = this.data + result.data[i];
          }
        }
      });
    },
    test() {
      if (this.score === 0) {
        this.photo ="https://images-ext-2.discordapp.net/external/KKhnER3qr6BJASM64Q5R1mWDuDA3dhL2Keo8cCiaxJY/https/cdn3d.iconscout.com/3d/premium/thumb/zero-number-4863645-4056291.png?width=432&height=432";
      }
      if (this.score === 1) {
        console.log("aaaaaaaaaaaaaaa");
        this.photo ="https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=432&height=432";
      }
      if (this.score === 2) {
        console.log("aaaaaaaaaaaaaaa");
        this.photo ="https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433";
      }
    },
    userresponse(e) {
      console.log(this.index, "length");
      console.log(this.response, "response");
      if (e) {
        this.score = this.score + 1;
        console.log(this.score, "hani lena");
      }
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
#img1 {
  margin-left: -600px;
  margin-top: 90px;
  width: 250px;
  height: 250px;
}
#img2 {
  width: 200px;
  height: 200px;
  margin-right: -600px;
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
#p {
  width: 10px;
  height: 200px;
  background-color: white;
  transform: rotate(18deg);
  margin-left: 240px;
}
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 300px;
}
</style>
