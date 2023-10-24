class grandfather{
    constructor(lastName){
        this.lastName = lastName
    }
}
    class father extends grandfather{
        constructor(lastName, job = 'teacher'){
            super(lastName)//chama a função contrutor da super classe no caso classe avo
            this.job = job
        }
    }
        class son extends father{
            constructor(){
                super('Silva')
            }
        }

        const son = new son
        console.log(son)

    
