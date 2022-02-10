<template>
  <div class="cards-list">
    <div class="card 1">
      <div class="card_image"><router-link to="/Animal">
        <img  id="img"
          src="https://cdn.hundred.org/uploads/innovation/cover_image/4183/wide_Life_Skills_Logo.png"
        /></router-link>
      </div>
      <div class="card_title title-white"></div>
    </div>

    <div class="card 2">
      <div class="card_image"><router-link to="/Color">
        <img id="img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABX1BMVEX////8yQoYjs8MurTxVkr/6wAootupyN38zAT3lyzvUEzvV0v900X90gDyVUnd6fK30eIAic3/4AMLvLLH2+kYjNAAhsz+3G7l7fIAv7kjmdXk8vkASWj5T0IAtrDa7Pez2O3u+fz+0Cf5TkEVnMj/8AAAUWUATWf31dK5dm7H7uwNtLkNt7Zgq9sfldMRntqay+eIxOV3t+H+0jcAQ2qQwOYTocUSpsIQr7wWmMq72u9Dotez2OyazOgxmND/99v+44791lj+33//8sb//fH//fP/7rmSnzxkgUq/vijd0xdyikfq3A4bWVwZVV+GlURNc1KvrzHpwBIzY1yKjUG2pS5BaVjGriTgym/qzV2elzvWtiF8hUdlek7714fDmJ/2azTzijP1eTqwo6aYr7Lv5OKDt75rwsnbVEjTY1fBZlupfXOPhn1jnZVHqqSJkImah4CFztdeoZp3lo/Ccmp6mJEBAAAHQUlEQVR4nO2diVcaRxjAYTZRWuIkG9iNKwyIiJZyRAkqR4PWJDZ3W9toE5umd7yCNvr/v84su+yyBxCwnTfL93svL7Ob0Tffb7650OyGQgAAAAAAAAAAAAAAAAAAAIAwZFabzVXejeBLGslIUcsZ3u3gydTdqak5JJd4t4Mj6bkpShnJCd4t4UfjLnNAEyHNuyX8mAcHoa/AAeRBCBwwwIHNwQSvjeAAHDDAAThggAObgwk+PM9PgYMVyANwEAIHjPt3jc+RwAE4YA54N4Qjq+AAHITAAQMcgANGxwFCiHdDOFJBehqgMu+GcKQiIx1wMOFjAfIAHFDWDAct3g3hSFrVFagrvBvCk1VVoQqavJvBl0az3JroLGDMTt/i3QTugANwwAAH4IABDsABAxyAAwY4CIUy09Pxm0MR4J/HxaeH5Sbvpv533Lw1HNPTAc6EIbkV5EQYkvh0nHcTuAMOwAEDHIADhqgONre+vjEu2w8630tMBw/vhMORmU8mEnZwY5N9NyEdPFwIz1wfhdtOCeGdkJgOHi2EIyMp8JKwKaaD7XD49ogOrs84HdwT0sEj2vJRFXgkwgMRHez4O8jlcj73/R3cEdHBlr+Dbx4/8ZCQe/rs2XOj7BoLdDAI6ICui97LQu5xdbnqIeH5cjL5wii7FIQXRHXgPSm+XFpKfutykHtSXVqqPs15p4HADsIzt918l1yqfu++/TS5vLykl9wGhHbgxe7bH370uv9qb2/f94sC5iAcibi2w31u67xmH6oGycEI/LQSVAcHnb8irw4GVn2dmJ0V7nPlwQ4ib6p7LP1n3lST/qPAYIF3PKMwlIPlvf3dg5+Tyy8m1UE48jZJ90X0z9LuwLpBdUAz4SVz8HawAjEdbA/hgC6HB/v7uwMHgqgOtoZxMDw3eMczCg+u1sEW73hGYuFKHWzyDmckdq5SwR3e0YzIFe6WFx7xDmZUrkzCvYe8QxmdnXuRKyD8C+84xuLdr799Ni6/Z7/gHcZYvCOfj4/wDq4NBe5XnBAHfRHcwR/gIPRnlgURteLpKUaHK2b/4h3GWPxNfOP2V+Ms4lneYYzF+6htihsRfPgl7zDG4v0RdqV31KeIfSrgY8EdnLDIepY7bBV77uIj4qqgF8mp4A4+EHytmwlRq5uj1oWRBXnthFh3sVWFtAV3kDq8pkdEY8JR3Onwbs/bi6QtSVFs3sZ5YpZJXhLcAe1cGoze3/jk0n+CxEeapJ2ZiYAPtfYxwayED1MpwR1Iqagx9jFJnRHfTTE50yRa10gOckqNfMxHCcH5lCS4g39S2lm2sz6Sc61N/JYFjFOSJGnnRoUou5I0qd1OMTWiO6CBZZkDckmDOvIbDPhSY1EbiUAu9CsT8R1I2sUhIeSEdeyp3/GBXOjRahfMF8n3KAiCA5bTH9qdfrY7iNrLRrjaGc7iE0kKnAMLzWdlICdmz2vFjykt0A6kD1nPOTHblvoguIP7jnC0Q69EMGZEXwdiP4l81ZEH2gWxb5CNIumbBlJR7Ld0rBX9EgFbpyPnOuCkILiDmtPBhXt5xJ1kifk5qAnuYN0ZWXefZKXBmZ4GxXVnzhjEFgV30HL1btuRCKQzIcbW1UVbXVuxKPhbe9bUgm1c6x2tnWZ7FBwZ02YZKVbdWL1mWqByRHdgdW5svTM5aHli7RO7CmoKUqy6NUVZLMToZSy2oajC/W5mD2uy1bnFboyX5nDA2XzKHPQKshKBXSlKfaNW26grSHgHaK6b3goydZwTgjEm5Kh7QCxSBVYiFBT9mYIKhT1aUGwHKzJSWsWYPhJo15orpdY+Pz6+PG1LpgKa8XrQRoUWsiO+A6SgjUKxVleQfcBrDNsyUDceKsoWBH1cBMtBN6dpQfKhYEZdrhVqrV4FwXDQRdnw3gyygWJWURwGguYAlX02xK64A+xAcZ4f7DNiQB3MOxwg996Z0c+A8A4aqiMer0SwzQbeDsTeK6edDrwSodBfgehvtEs4x4LX0lDvrwAh4f4fUy9ld0SOjwkGjQTxn0RecgfYOxqsNcGVMub9Cu8gxsS5OKKeHbNdQbnhkTMMtcE7iDFxTwh2CbFi3VSgzvdMoLL1deK/mKBpxdU0O1op12KMgn0qoHVL3cDldElVApIG9h2C2ui+eoRaWFysl21HA33Qp81/l0v0oqnKjCA8kd7sXKUVatgGhuNo1NkHNc2+13eGiZVKZU3svYFBpiwb6R0KueeG3kEfV7tpECwSLVWmcxwb1hXf9W+tU9dImkB0fi/zpWZFDyvu2jqbQ8GIOjNHdSGxzweD8NkCoO7bSDIVQ1dw8dgy6Wkg/vo3PBnvwSD+NuhT8JwVJ+zdRAnPRODdqv8Zj0SgR4XJwj0jyJP3iqoVl4SAr4VeNB0nhUlaF00Sk7wmmMStaVGR53m3hhNx47NDRW0G+2jQj0xFVlUVlSZxKrDIpNOTmwIAAAAAAAAAAAAAAAAAAAAAIDb/ApQ3CX9GX2dxAAAAAElFTkSuQmCC"
        /></router-link >
      </div>
      <div class="card_title title-white"></div>
    </div>

    <div class="card 3">
      <div class="card_image">
       <router-link to="/Fruit">
        <img  id="img"
          src="https://i.pinimg.com/564x/0b/2c/fc/0b2cfcd1c59cac6225cd934394e8c4c3.jpg"
        /></router-link>
      </div>
      <div class="card_title"></div>
    </div>

    <div class="card 4">
      <div class="card_image"><router-link to="/Number"> <img id="img"
          src="https://cdn3.vectorstock.com/i/1000x1000/43/27/funny-colorful-numbers-set-on-white-background-vector-14794327.jpg"
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
