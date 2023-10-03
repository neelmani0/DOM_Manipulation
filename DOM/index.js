let mainSection = document.getElementById("data-list-wrapper");
let loadDataButton = document.getElementById("load-data");
let url = "https://reqres.in/api/users"
loadDataButton.addEventListener("click", () => {
  mainSection.innerHtml=null;
  fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
   // console.log(data)
    
    let cardList = document.createElement("div");
        cardList.classList.add("card-list");
        mainSection.append(cardList);
    
       data.data.forEach((i)=>{

       let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", i.id);
       // console.log(i.id)
     
      let imgCard = document.createElement("div");
          imgCard.classList.add("card-image");
      
      
      let img =document.createElement("img");
          img.setAttribute("src",i.avatar);
          img.setAttribute("atl", "food");
          
        
      let cardBody=document.createElement("div");
          cardBody.classList.add("card-body");
         
      
         
      let cardTitle = document.createElement("h3");
          cardTitle.classList.add("card-item");
          cardTitle.classList.add("card-title");
          cardTitle.innerText=`${i.first_name} ${i.last_name}`;
      
      
      let cardDec = document.createElement("div");
          cardDec.classList.add("card-item");
          cardDec.classList.add("card-description");
          cardDec.innerText=i.email;
     
      let cardEdit = document.createElement("a");
          cardEdit.setAttribute("href","#");
          cardEdit.setAttribute("data-id",i.id);
          cardEdit.setAttribute("data-name", `${i.first_name} ${i.last_name}`);
          cardEdit.classList.add("card-item");
          cardEdit.classList.add("card-link");
          cardEdit.innerText= "Edit";  



         cardBody.append(cardEdit);
         cardBody.append(cardDec)
         cardBody.append(cardTitle);
         card.append(cardBody);
         imgCard.append(img);  
         card.append(imgCard); 
         cardList.append(card);
      
      //console.log(cardList)
    });
   
  });
  
 
});

