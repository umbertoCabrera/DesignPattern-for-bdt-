// setuup Subject
class Subjetct {
    // notifica a los observadores ergo: usuarios
    constructor(){
        this.observer = [];
    }
    subscribe(observer){
        this.observer.push(observer);

    }
unsubscriber(observer){
    this.observers = this.observers.filter(obs => obs !== observer);

}
    notify(data){ 
        this.observer.forEach(e => {
            e.refres(data);
        });
    }
}

class ItemSubject extends Subject {
    constructor(){
        super();
        this.data = [];
    }


add(item){
    this.data.push(item)
    // data modificada del array
    this.notify(this.data);

}

}

// creando el observador
// trabajando con el DOM 
class HTMLElementobserver { 

    constructor(element){
        this.element= element;
     }
     refresh(data){
        this.element.innerHTML = data.reduce((acc, e) => {
            return acc + `<p>${e} 
            </p>`
        }, "") 
     }


}


const item = new ItemSubject();
const div1bserver = new HTMLElementobserver(div1);
const div2bserver = new HTMLElementobserver(div2);

// informacion del array
const observer1 = new Observer((data) => {
        div3.innerHTML = data.length; 
})


item.subscribe(div1bserver);
item.subscribe(div2bserver);
item.subscribe(observer1);
function add(){
    const name = txtName.value; 
    // invocando subject
    item.add(name);
}


// relacionamos la data a los elementos del DOM