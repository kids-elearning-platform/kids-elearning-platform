<template>
  <div>
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
          @click="next(index)"
        >
          <img id="img" :src="question.suggestion" />
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
export default {
  name: "Number",
  data() {
    return {
      data:[],
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
      if (this.index < 2) {
        this.index++;
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
</style>
