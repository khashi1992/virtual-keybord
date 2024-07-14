const screen=document.querySelector('.screen');
const wrap=document.querySelector('.wrap');
const div=document.querySelectorAll('.box');
const reset=document.querySelector('.box1');
reset.addEventListener('click',(e)=>{
  screen.textContent=" ";
})
div.forEach((index,value)=>{
  //  console.log(index,value);
    index.addEventListener('click',(e)=>{    
             screen.innerHTML+=index.textContent;    
      //  console.log(index.nodeName);
      // console.log(index.nodeType);
      }); 
});
screen.addEventListener('keydown',(e)=>{
  let keyboard=e.key;
  if(keyboard=='Backspace'){
    screen.textContent=" ";
  }
  div.forEach((index)=>{
    if(keyboard===index.textContent){
      index.classList.add('back');
    }
  })
});
screen.addEventListener('keyup',(e)=>{
    div.forEach((index,value)=>{
      index.classList.remove('back');
    })
});