<template class="container">
  <div class="box-container" v-if="changeview === false">
    <div id="box">
      <div class="card" id="question" @click="playSound(sounds[index])">🔊</div>
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
    <div>
      <div id="box">
        {{ this.test() }}
        <router-link to="/Challenge"
          ><button class="myButton">Go To Challenge</button></router-link
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
</template>
<script>
import number3 from "../../public/sounds/number3.mp3";
import number2 from "../../public/sounds/number2.mp3";
import number6 from "../../public/sounds/number6.mp3";
import number5 from "../../public/sounds/number5.mp3";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Number",
  data() {
    return {
      photo:
        "https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=432&height=432",
      response: [],
      data: [],
      changeview: false,

      sounds: [number3, number2, number6, number5],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/GqMHGoFPwPHrmi28WDpz54lrzjSe6Scsi8Toj-G3nz4/https/cdn3d.iconscout.com/3d/premium/thumb/seven-number-4863644-4056290.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/UOfr3p17NbEZh6u3KdxEh4MQtlstOcdHP8lO30cfPOE/https/cdn3d.iconscout.com/3d/premium/thumb/five-number-4863647-4056293.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/eX-qTZT6N-secy7zNxRddwidFPnRhvCTlnBcBUlYCH0/https/cdn3d.iconscout.com/3d/premium/thumb/comma-sign-4863650-4056296.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/GqMHGoFPwPHrmi28WDpz54lrzjSe6Scsi8Toj-G3nz4/https/cdn3d.iconscout.com/3d/premium/thumb/seven-number-4863644-4056290.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/clEANbX-G9V5Cuf4gzflcsUap43l7evK6Sae0t-xt50/https/cdn3d.iconscout.com/3d/premium/thumb/six-number-4863652-4056298.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/nAAd4aTBeDrdQk0ABw7HexXky5zyjmqDBl9Zl4TAZPA/https/cdn3d.iconscout.com/3d/premium/thumb/four-number-4863648-4056294.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/wIUkqZFwM5NPkjMsXiUnhIxMB6XYymLDIEtrzsOnSMM/https/cdn3d.iconscout.com/3d/premium/thumb/eight-number-4863641-4056287.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/clEANbX-G9V5Cuf4gzflcsUap43l7evK6Sae0t-xt50/https/cdn3d.iconscout.com/3d/premium/thumb/six-number-4863652-4056298.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/UOfr3p17NbEZh6u3KdxEh4MQtlstOcdHP8lO30cfPOE/https/cdn3d.iconscout.com/3d/premium/thumb/five-number-4863647-4056293.png?width=433&height=433",
            },
          ],
        },
        //🦍🐘🐊🦈🐓🦉🐧
      ],
    };
  },
  methods: {
    GetData() {
      console.log(this.data);
      axios.get("http://localhost:3000/api/item/admin").then((result) => {
        for (let i = 0; result.data.length; i++) {
          if (result.data[i].category === "Number") {
            this.data = this.data + result.data[i];
          }
        }
      });
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
  justify-content: space-around;
  flex-wrap: wrap;
  cursor: pointer;
}

#ImageBox {
  width: 80%;
  height: 100%;
}
#question {
  font-size: 2cm;
  cursor: pointer;
}
.answer {
  align-items: center;
  align-content: center;
  justify-content: space-around;
  display: grid;
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
