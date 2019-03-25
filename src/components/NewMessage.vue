<template>
<div class="new-message">
    <b-form @submit.prevent="addMessage">
        <label>New Message</label>
              <b-input class="mb-2 mr-sm-2 mb-sm-0"
            id="inlineFormInputName2"
            v-model="newMessage"
            />
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </b-form>
</div>
</template>

<script>
import db from '../firebase/init.js'

export default{
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage() {
            if(this.newMessage){
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                   console.log(err)
                })
                this.newMessage = null
                this.feedback = null
            } else {
                this.feedback = "You must enter a message in order to send one"
            }
            
        }
    }
}
</script>




<style scoped>
input {
  display: block;
  background: none;
  padding: 0.175rem 0.175rem 0.0875rem;
  font-size: 1.4rem;
  border-width: 0;
  border-color: transparent;
  line-height: 1.9;
  width: 100%;
  transition: all 0.28s ease;
  border-radius: 2px;
  box-shadow: none;
  border: 0;
  outline: 0;
  border-bottom: 2px solid rgb(144, 144, 148);
}

input:focus,
textarea:focus,
select:focus {
  outline: 0;
  box-shadow: none;
  border-color: black;
}

</style>