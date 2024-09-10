
   
   let searchInput=document.getElementById('searchInput')
   let products=document.querySelector('.products')
   let product=products.querySelectorAll('.product1')
   


searchInput.addEventListener('keyup',function (event){
   
    textContent=event.target.value.toUpperCase()

  for(let i=0;i<product.length;i++)
  {

   let productName=product[i].querySelector('p').textContent
   if(productName.toUpperCase().indexOf(textContent)<0)
       {
        product[i].style.display='none'
       }
       else{
        product[i].style.display='block'
       }
  }
  

})

