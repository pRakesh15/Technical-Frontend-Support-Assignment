// console.log("Jay SHreeRam")

const cards = document.querySelectorAll(".card");
const radioButtons = document.querySelectorAll('input[type="radio"]');

cards.forEach((card) => {
  card.addEventListener("click", () => {
    //when click any of the product then it will 1st remove expand class from all the card
    // so  i use forEach.
    cards.forEach((c) =>{
        c.classList.remove("expanded");
        c.closest(".product-row").classList.remove("expanded");
    } )
 //here when i click one of any product it will add the expand class.
    card.classList.add("expanded");
    //in this it will modify the nearest parent i want to acchive when i change the 
    //card to expand there is also the howl product card will also change the border and 
    //the product will also change the background color  
    card.closest(".product-row").classList.add("expanded");
    const radioButton = document.querySelector(`input[value="${card.id}"]`);
    radioButton.checked = true;
  });
});
//same will do in radio btn bcz we also acchive the same functions by click the radio button also.
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    cards.forEach((card) => {
        card.classList.remove("expanded");
        card.closest(".product-row").classList.remove("expanded");
      });
  
    const selectedCard = document.getElementById(radio.value);
    selectedCard.classList.add("expanded");
    selectedCard.closest(".product-row").classList.add("expanded");
  });
});






