<template>
  <div class="cards-list">
    <div class="card 1">
      <div class="card_image"><router-link to="/Animal">
        <img  id="img"
          src="https://images-ext-1.discordapp.net/external/bVeGD1Lo5nc_Uaw2C8I8kESUnlNdJvwaXZeeRyZI3MA/https/cdn3d.iconscout.com/3d/premium/thumb/cute-crocodile-4609617-3811471.png?width=433&height=433"
        /></router-link>
      </div>
      <div class="card_title title-white"></div>
    </div>

    <div class="card 2">
      <div class="card_image"><router-link to="/Color">
        <img id="img"
          src="https://images-ext-1.discordapp.net/external/O5Sm8pGT09AVA_zQnhPxOpW_6j25BQE3JUbJqtSDeN4/https/cdn3d.iconscout.com/3d/premium/thumb/color-palette-and-brush-4022907-3328685.png?width=433&height=433"
        /></router-link >
      </div>
      <div class="card_title title-white"></div>
    </div>

    <div class="card 3">
      <div class="card_image">
       <router-link to="/Fruit">
        <img  id="img"
          src="https://images-ext-2.discordapp.net/external/kyettUG_908oFu7-C8JmOtNGIdFYs6Ics-zja1YwfFg/https/cdn3d.iconscout.com/3d/premium/thumb/fruit-basket-4621201-3852043.png?width=433&height=433"
        /></router-link>
      </div>
      <div class="card_title"></div>
    </div>

    <div class="card 4">
      <div class="card_image"><router-link to="/Number"> <img id="img"
          src="https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=433&height=433"
        /></router-link>
       
      </div>
      <div class="card_title title-black"></div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "HelloWorld",
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-list {
  margin-top:15% ; 
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#img{
 height: 250px;
 width: 250px;
}

.card {
  margin: 15px auto;
  width: 250px;
  height: 250px;
  border-radius: 20%;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}
</style>
