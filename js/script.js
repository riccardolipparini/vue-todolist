var toDo = new Vue(
    {
        el: `#container`,
        data:{
            newTask=[{
                text: "",
                done: false
            }],
            tasks:[
                {
                    text: `fare la spesa`,
                    done: true
                },
                {
                    text: `fare il bucato`,
                    done: false
                },
                {
                    text: `allenamento`,
                    done: false
                },
                {
                    text: `andare in posta`,
                    done: false
                },
                {
                    text: `sbattere la testa contro il muro`,
                    done: true
                },
                {
                    text: `contemplare il vuoto`,
                    done: true
                }
            ]
        },
        methods: {
            removeItem: function(index){
                this.tasks.splice(index,1)
            },
            aggiungiTask: function(){
                this.tasks.push(this.newTask);
                this.newTask = "";
            }
        }


})