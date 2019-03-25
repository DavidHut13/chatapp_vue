<template>
<div>
    <b-card-group deck class=" textChat">
     <b-card align="center">
         <ul slot="header" >
             <li class="text-left chatlist"  v-for="message in messages" :key="message.id">
               <p class="Sender">{{ message.name}}: </p>
               <p class="text-left message"> {{ message.content }}</p>  
               <p class="time">{{ message.timestamp }}</p>
             </li>
         </ul>
        <b-form>
            <app-new-message :name="name"></app-new-message>
        </b-form>
      </b-card>
    </b-card-group>
</div>
</template>


<script>
import NewMessage from '../components/NewMessage'
import db from '../firebase/init.js'
import moment from 'moment'
export default {
    name: 'Chat',
    props: ['name'],
    data() {
        return {
            messages: []
        }
    },
    components: {
        appNewMessage : NewMessage
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}

</script>
 
 <style scoped>
 


p.Sender {
    font-size: 20px;
    font-weight: bold;
    display: inline-block !important;
    color:rgb(68, 82, 72); 
    margin-bottom:0;
}

p.time {
    font-size:14px;
    display: block;
    margin-bottom:5;
    color: rgb(194, 189, 189);
}

p.message {
    margin: 0 !important;
    padding: 0 !important;
    display: inline-block !important;
    color:rgb(107, 110, 110); 
    margin-bottom:0;
}

.chatlist {
        
    list-style-type:none;
}

.textChat {
    margin-top: 8%;  
    color:rgb(107, 110, 110);
}

.text-left.chatlist {
    background-color: rgb(176, 245, 198);
    margin: 10px;
    border-radius: 20px;
    padding:6px;
    padding-bottom: 0px;
}

.text-center{
    border-style: none;

}

ul {
    padding: 0;
    
}

.card-body{
   padding: 10px;
   padding-top:5px;
   border: 1px solid rgba(105,224,143,1);
   border-radius: 15px;
   -webkit-box-shadow: 10px 10px 23px -10px rgba(105,224,143,1);
   -moz-box-shadow: 10px 10px 23px -10px rgba(105,224,143,1);
   box-shadow: 10px 10px 23px -10px rgba(105,224,143,1); 
   
}
.card-header{
    background-color: rgb(255, 255, 255) !important;
    border: none;
    
}


 </style>