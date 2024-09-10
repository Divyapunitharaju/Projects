let backgroundBox=document.querySelector('.background-box')
let popupBox=document.querySelector('.popup-box')
let button=document.getElementById('PlusButton')

button.addEventListener('click',function(){
    backgroundBox.style.display='block'
    popupBox.style.display='block'
})



//container-box  addBtn  title author description
let grid=document.querySelector('.grid')
let containerBox=document.querySelector('.container-box')
let addBtn=document.getElementById('addBtn')
let title=document.getElementById('title')
let author=document.getElementById('author')
let description=document.getElementById('description')

addBtn.addEventListener('click',function(event){
    event.preventDefault();
   let div= document.createElement('div')
   div.setAttribute("class","container-box")
   div.innerHTML=`<h1>${title.value}</h1>
        <h2>${author.value}</h2>
        <textarea>${description.value}</textarea>
        <div><button>Delete</button></div>`
        grid.append(div)
        backgroundBox.style.display='none'
        popupBox.style.display='none'

})