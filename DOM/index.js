let mainSection = document.getElementById("data-list-wrapper");
let loadDataButton = document.getElementById("load-data");
let url = "https://reqres.in/api/users"


// normal approch
// loadDataButton.addEventListener("click", () => {
//   mainSection.innerHtml=null;
//   fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//    // console.log(data)
    
//     let cardList = document.createElement("div");
//         cardList.classList.add("card-list");
//         mainSection.append(cardList);
    
//        data.data.forEach((i)=>{

//        let card = document.createElement("div");
//         card.classList.add("card");
//         card.setAttribute("data-id", i.id);
//        // console.log(i.id)
     
//       let imgCard = document.createElement("div");
//           imgCard.classList.add("card-image");
      
      
//       let img =document.createElement("img");
//           img.setAttribute("src",i.avatar);
//           img.setAttribute("atl", "food");
          
        
//       let cardBody=document.createElement("div");
//           cardBody.classList.add("card-body");
         
      
         
//       let cardTitle = document.createElement("h3");
//           cardTitle.classList.add("card-item");
//           cardTitle.classList.add("card-title");
//           cardTitle.innerText=`${i.first_name} ${i.last_name}`;
      
      
//       let cardDec = document.createElement("div");
//           cardDec.classList.add("card-item");
//           cardDec.classList.add("card-description");
//           cardDec.innerText=i.email;
     
//       let cardEdit = document.createElement("a");
//           cardEdit.setAttribute("href","#");
//           cardEdit.setAttribute("data-id",i.id);
//           cardEdit.setAttribute("data-name", `${i.first_name} ${i.last_name}`);
//           cardEdit.classList.add("card-item");
//           cardEdit.classList.add("card-link");
//           cardEdit.innerText= "Edit";  



//          cardBody.append(cardEdit);
//          cardBody.append(cardDec)
//          cardBody.append(cardTitle);
//          card.append(cardBody);
//          imgCard.append(img);  
//          card.append(imgCard); 
//          cardList.append(card);
      
//       //console.log(cardList)
//     });
   
//   });
  
 
// });


// after refactor

loadDataButton.addEventListener("click", () => {
    fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        mainSection.innerHTML = null;
      let cardList=getcardList(data);
      mainSection.append(cardList);
      });
  });
  
  function getcardList(data){
      const cardList = document.createElement("div");
        cardList.classList.add("card-list");
        
  
        data.data.forEach((i) => {
       let card=getCard(i.id,`${i.first_name} ${i.last_name}`,i.email,i.avatar);
  
          cardList.append(card);
          
          
        });
    return cardList
  }
  
  function getCard(userId, fullName, email, imageUrl){
          const card = document.createElement("div");
          card.classList.add("card");
          card.setAttribute("data-id", userId);
  
          const cardImage = document.createElement("div");
          cardImage.classList.add("card-image");
  
          const img = document.createElement("img");
          img.src = imageUrl;
          img.setAttribute("alt", "food");
  
          cardImage.append(img);
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const cardTitle = document.createElement("div");
          cardTitle.classList.add("card-item");
          cardTitle.classList.add("card-title");
          cardTitle.innerText = fullName;
  
          const cardDescription = document.createElement("div");
          cardDescription.classList.add("card-item");
          cardDescription.classList.add("card-description");
          cardDescription.innerText = email;
  
          const cardEdit = document.createElement("a");
          cardEdit.setAttribute("href", "#");
          cardEdit.setAttribute("data-id", userId);
          cardEdit.setAttribute(
            "data-name",
            fullName
          );
          cardEdit.setAttribute("class", "card-item card-link");
          cardEdit.innerText = "EDIT";
  
          card.append(cardImage);
          card.append(cardBody);
          card.append(cardTitle);
          card.append(cardDescription);
          card.append(cardEdit);
    
    return card;
  }
