import Home from '../components/Home.vue'
import Chat from '../components/Chat.vue'



export const routes =
     [
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Home/Chat',
            name: 'Chat',
            component: Chat,
            props: true,
            beforeEnter: (to,from, next) => {
                if(to.params.name)
                {
                    next()
                } else {
                    next({ name: 'Home'})
                }
            }
        }
    ];
    
