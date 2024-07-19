const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach((button)=>{
  console.log(button);

body.addEventListener('click',(e)=>{
console.log(e);
console.log(e.target);
// if(e.target.id === 'grey'){
//   body.style.backgroundColor = e.target.id;
// }if(e.target.id === 'white'){
//   body.style.backgroundColor = e.target.id;
// }if(e.target.id === 'blue'){
//   body.style.backgroundColor = e.target.id;
// }if(e.target.id === 'yellow'){
//   body.style.backgroundColor = e.target.id;
// }

if(e.target.id === 'grey'){
  BgColor= e.target.id;
}else if(e.target.id === 'white'){
  BgColor=e.target.id
}else if(e.target.id === 'blue'){
  BgColor=e.target.id
}else if(e.target.id === 'yellow'){
  BgColor=e.target.id
}else {
  BgColor='orange'
}

switch(BgColor){
  case e.target.id :
  body.style.backgroundColor = e.target.id;
  break;
  case e.target.id :
  body.style.backgroundColor = e.target.id;
  break;
  case e.target.id :
  body.style.backgroundColor = e.target.id;
  break;
  case e.target.id :
  body.style.backgroundColor = e.target.id;
  break;

  default :
  body.style.backgroundColor = 'orange';
  break;

}


  });
});

