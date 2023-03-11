let text=document.getElementById('textVal');
let btn=document.getElementById('btn');
let progress= document.getElementById('inProgress')
let hold=document.getElementById('hold');
let review=document.getElementById('review');
let Approved=document.getElementById('Approved');
let drag=null;
let tasks=document.querySelectorAll('.tasksSection');
btn.addEventListener('click',function(){
if(text.value !=''){
    progress.innerHTML+=`
    <p class="item" draggable="true" >${text.value}</p>
    `
    text.value='';
    dragItem();
}
    })
    
function dragItem(){
let items=document.querySelectorAll('.item');
items.forEach(item=>{
item.addEventListener('dragstart',function(){
drag=item;
item.style.opacity='0.3'
 })
 item.addEventListener('dragend',function(){
drag=null;
item.style.opacity='1'
            })

            tasks.forEach(task=>{
                task.addEventListener('dragover',function(e){
                    e.preventDefault()
                    this.style.background='#090';
                    this.style.color='#fff';
                })

                task.addEventListener('dragleave',function(){
                    this.style.background='#fff';
                    this.style.color='#000';
                })
                task.addEventListener('drop',function(){
                    this.append(drag);
                    this.style.background='#fff';
                    this.style.color='#000';
            })

        })

    })
}
