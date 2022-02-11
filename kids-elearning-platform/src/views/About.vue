<template>
  <div>
    <div class="about-section">
      <h1>About Us Page</h1>
      <p>
        A website created by RBK student to help kids Learn and build logic
        while playing and interacting with fun games and fun challenges
      </p>
      <p></p>
    </div>

    <h2 style="text-align: center; color: black">Our Team</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/181823556_4088235697864305_6218531912136017614_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=e-fl0dJaaosAX9c7vQy&tn=g0buDoWKu8puIS-_&_nc_ht=scontent.ftun4-1.fna&oh=00_AT8l_Tc8nMeNvooTgMXBvSzfzzcttF0upa4MfWqiVW7Olg&oe=622B9302"
            style="width: 100%"
          />
          <div class="container">
            <h2 style="color: white">Hamid Kacem</h2>
            <p style="color: white" class="title">CEO & Founder / Developer</p>
            <p style="color: white">
              Hamid is a fullStack JS developer who loves dogs.
            </p>
            <p style="color: white">HamidKacem@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/30530418_10155311183632611_3938026952169881600_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=eTF3kGFxVhgAX_mDP1E&_nc_ht=scontent.ftun4-1.fna&oh=00_AT_vcWZW11XX_D6oW1vyUIYoFg5j981zcu0e8gEs7cGazQ&oe=622A0067"
            style="width: 100%"
          />
          <div class="container">
            <h2 style="color: white">Riadh Saad</h2>
            <p style="color: white" class="title">Developer</p>
            <p style="color: white">
              Riadh , full stack JS developer who loves traveling and new
              adventures
            </p>
            <p style="color: white">riadhSaad@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/70431780_852963281765645_2989535015995441152_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2CTeM0Npoq4AX8PiwC9&_nc_ht=scontent.ftun4-1.fna&oh=00_AT_j5FHWdhshkI5AtorW5fvGB5Xkb_cb78VZR452q3gEVA&oe=622CE31A"
            style="width: 100%"
          />
          <div class="container">
            <h2 style="color: white">Rayan Khemiri</h2>
            <p style="color: white" class="title">Developer / Designer</p>
            <p style="color: white">
              Rayan, Full Stack developer who's good with UI designing and logic
            </p>
            <p style="color: white">rayanKhemiri@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img
            src="https://scontent.ftun4-1.fna.fbcdn.net/v/t39.30808-6/269936408_4214377748668016_944787138621328352_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1Yak_8WIsDUAX81JHwl&tn=g0buDoWKu8puIS-_&_nc_ht=scontent.ftun4-1.fna&oh=00_AT8ywtgvMq5_P8MD2Bx7GMNsAqXASN2tFlxoAQRguqB0fg&oe=620B34B5 "
            style="width: 100%"
          />
          <div class="container">
            ___
            <h2 style="color: white">Mohamed Amine Ben Salah</h2>
            <p style="color: white" class="title">Developer</p>
            <p style="color: white">
              Mohamed amine is a passionate full stack developer
            </p>
            <p style="color: white">mohamedAmine@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border-radius: 15%
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: black;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
