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
        <b-card-text></b-card-text>
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
                        timestamp: moment(doc.data().timestamp).format('LT')
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
    color: rgb(79, 79, 107); 
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
}

ul {
    padding: 0;
    
}


 </style>