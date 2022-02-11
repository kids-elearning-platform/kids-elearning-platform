<template>

    <div class="fullPage" >
        
        <div id="admin">
            <div>
            <div id="users">
                users
                <label id="input" for="people"></label>
                <select id="people" name="people">
                    <option value="users" >--</option>
                    <option value="users" >hamid</option>
                    <option value="users" >khalil</option>
                    <option value="users" >firas</option>
                    <option value="users" >najm</option>
                </select>

            </div>
            
            </div>
    
        </div>
        

</div>
</template>


<script >

    // import axios from "axios";
    // import VueAxios from "vue-axios";
 export default {
     name : 'Admin',
     data () {
         return {
             infos : {
              
             }
         }
     },
     methods : {
     
     }
 }
</script>


<style scoped >
 #admin{
     background-color: antiquewhite;
     margin-top: 0px;
     margin-right: 0px;
     height: 807px;
     width: 1920px;
 }
 #users{
     margin-left: 00px;
     padding-top: 300px;
 }
#input{
    width: 300px;
}
</style>