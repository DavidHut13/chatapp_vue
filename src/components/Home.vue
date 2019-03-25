<template>
    <div class="text-center cardsize">
        <b-card class="welcomeCard" bg-variant="dark"  text-variant="white" title="Welcome">
            <b-card-text>
            </b-card-text>
            <b-form @submit.prevent="enterChat">
                <b-form-group
                    id="exampleInputGroup1"
                    label="Enter Username:"
                    label-for="exampleInput1"
                    description="Get Connected with people."  
                >
                    <b-form-input
                        id="exampleInput1"
                        type="text"
                        placeholder="User Name"
                        class="text-center"
                        v-model="name"
                    />
                </b-form-group>
                <p v-if="feedback" class="red">{{feedback}}</p>
                <b-button type='submit' variant="primary">Enter Chat</b-button>
            </b-form>
            
        </b-card>
    </div>
</template>



<script>
export default {
    data() {
        return {
            name: null,
            feedback:null
        }
    },
methods: {
    enterChat(){
        if(this.name){
            this.$router.push({name:'Chat', params: {name: this.name }})
        } else {
        this.feedback = "You must be a member before joining";
        }
    }
}
}



</script>


<style scoped>
.welcomeCard{
    margin-top: 25%;
}

.card-title {
    font-size: 39px !important;
    
}

.btn-primary {
    background-color: #1feb28 !important;
    border-color:  #1feb28 !important;
}

.btn-primary:hover {
    background-color: white!important;
    color: #1feb28 !important;
    border-color:  #1feb28 !important;
}


.card-body {
-webkit-box-shadow: 7px 11px 63px -9px rgba(27,161,250,1);
-moz-box-shadow: 7px 11px 63px -9px rgba(27,161,250,1);
box-shadow: 7px 11px 63px -9px rgba(27,161,250,1);

}

.cardsize {
    max-width: 600px;
    
}

.container-fluid{
    margin-right: 0 !important;
}

.red {
    color: red;
}
</style>