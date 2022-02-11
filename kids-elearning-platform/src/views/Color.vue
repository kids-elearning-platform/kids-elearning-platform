<template>
  <div>
    <div id="box">
      <div @click="playSound(sounds[index])" class="titleContainer title">
        <img
          id="question"
          src="https://images-ext-2.discordapp.net/external/PoZU3jOHMn73f-gr_mB5-zefsxjS5DTS7JyKqRw0zQI/https/cdn3d.iconscout.com/3d/premium/thumb/microphone-3711800-3105274.png?width=433&height=433"
        />
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
import red from "../../public/sounds/red.mp3";
import oranges from "../../public/sounds/oranges.mp3";
import green from "../../public/sounds/green.mp3";

export default {
  name: "Color",
  data() {
    return {
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
  border-radius: 50%;
  width: 250px;
  height: 250px;
}
#question {
  height: 150px;
  width: 150px;
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
