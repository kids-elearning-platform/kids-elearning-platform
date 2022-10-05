<template class="container">
  <div>
    <div class="box-container" v-if="changeview === false">
      <div id="box">
        <div class="card" id="question" @click="playSound(sounds[index])">
          🔊
        </div>
        <div id="image-container">
          <div
            class="answer"
            v-for="(question, index) in questions[index].suggestions"
            v-bind="key"
            :key="index"
            @click="next"
          >
            <img
              class="card"
              id="ImageBox"
              :src="question.suggestion"
              @click="userresponse(question.correct)"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="changeview === true">
      <div class="box-container">
        <div id="box">
          {{ this.test() }}
          <router-link to="/fruit"
            ><button class="myButton">Go To fruit Quiz</button></router-link
          >

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
  </div>
</template>
<script>
import red from "../../public/sounds/red.mp3";
import oranges from "../../public/sounds/oranges.mp3";
import green from "../../public/sounds/green.mp3";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Color",
  data() {
    return {
      data: [],
      changeview: false,
      sounds: [red, oranges, green],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://t4.ftcdn.net/jpg/03/29/19/15/360_F_329191596_tRQiV7LZjTZtuPM09QyOS09HV1D9VimE.jpg",
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
                "https://colourlex.com/wp-content/uploads/2021/02/vine-black-painted-swatch-300x300.jpg.webp",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Solid_purple.svg/1200px-Solid_purple.svg.png",
            },
            {
              suggestion:
                "https://yarwoodleather.com/wp-content/uploads/2016/12/Yarwood-Leather-Style-Bright-Orange-01-scaled.jpg",
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
            {
              suggestion:
                "https://upload.wikimedia.org/wikipedia/commons/2/23/Light_green.PNG?20071229170838",
              correct: true,
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817996333154314/768px-Solid_blue.svg.png?width=432&height=432",
            },
            {
              suggestion:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Solid_purple.svg/1200px-Solid_purple.svg.png",
            },
            {
              suggestion:
                "https://media.discordapp.net/attachments/941079224666697738/941817049712320523/download_1.png",
            },
          ],
        },
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
        Swal.fire({
          icon: "success",
          title: "Good Job...",
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          timer: 1000,
        });
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
.box-container {
  margin-top: 2%;
  margin-left: 20%;
}
.myButton {
  box-shadow: 3px 4px 0px 0px #899599;
  background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
  background-color: #ededed;
  border-radius: 15px;
  border: 1px solid #d6bcd6;
  display: inline-block;
  cursor: pointer;
  color: #3a8a9e;
  font-family: Arial;
  font-size: 28px;
  padding: 7px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #e1e2ed;
}
.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}
.myButton:hover {
  background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
  background-color: #bab1ba;
}
.myButton:active {
  position: relative;
  top: 1px;
}
#img1 {
  width: 250px;
  height: 250px;
}
#img2 {
  margin-left: 70%;
  width: 200px;
  height: 200px;
}
#image-container {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
}

#ImageBox {
  width: 100%;
  height: 100%;
}
#question {
  font-size: 2cm;
  cursor: pointer;
}
.answer {
  height: 45%;
  width: 45%;
  align-items: center;
  align-content: center;
  padding: 3%;
  cursor: pointer;
}
#box {
  z-index: 0;
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: rgba(5, 5, 5, 0.61);
  box-shadow: 0 8px 32px 0 rgba(14, 2, 37, 0.705);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(15, 4, 44, 0.18);
  border-radius: 5%;
}

.card {
  border-radius: 20%;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}
.score {
  align-content: center;
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
  display: flex;
  flex-direction: row;
}
</style>
