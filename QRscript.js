//calling variables

const wrapperBox = document.querySelector(".wrapper") ,
qrInput = wrapperBox.querySelector(".form input"),
qrResult = wrapperBox.querySelector(".qr-code img") ,
//qrInputValue = qrInput.value ,
mainBTN = wrapperBox.querySelector(".actionBTN") ;

//settings for generate QR code 

mainBTN.addEventListener("click", () => {
    let qrInputValue = qrInput.value ;
     if(!qrInputValue) return ; //return from here if input is empty
     mainBTN.innerText = "Generating QR Code..."
     //set qr info by goqr.me/api/ to generate
     qrResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x170&data=${qrInputValue}` ; 
     console.log(qrInputValue) ;

     //for display final Result
     qrResult.addEventListener("load", () => {
        mainBTN.innerText = "Generate QR Code" ;
        wrapperBox.classList.add("active") ;
     });
    
}) ;

//remove result and everything else to look like before 

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapperBox.classList.remove("active") ;
    } 
}) ;



//it's not that too hard but i need to re-practice more than before cause i almost forgot everythings 
//it's time to do another projects :)