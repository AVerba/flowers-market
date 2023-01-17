const collapsButtons = document.querySelectorAll(".ac-item__header");


collapsButtons.forEach((collapsBtn)=>{

  collapsBtn.addEventListener('click',(event)=>{
    const Btn=collapsBtn.querySelector(".ac-item__icon");
    console.log(Btn)
    event.currentTarget.parentElement.querySelector(".ac-item__description").classList.toggle("descrip-active");
    event.currentTarget.parentElement.classList.toggle("_accord-active");
  });
});
