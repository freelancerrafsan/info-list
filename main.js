let Username = document.getElementById("Username");
let date = document.getElementById("date");
let id_nambar = document.getElementById("id_nambar");
let subBtn = document.getElementById("subBtn");
let data_info = document.getElementById("data-info");




subBtn.addEventListener('click', function(){

  if(Username.value == "" && date == "" && id_nambar.value == ""){
    window.alert("Plass enter Sum Data")
  }else{

    let newRow = document.createElement("tr");

    // console.log(newName);

    let newName = document.createElement("th");
    // console.log(newName);
    newName.innerHTML = Username.value;
    console.log(newName);
    newRow.appendChild(newName);



    let newData = document.createElement("th");
    // console.log(newName);
    newData.innerHTML = date.value;
    // console.log(newData);
    newRow.appendChild(newData);



    let newId_nambar = document.createElement("th");
    // console.log(newName);
    newId_nambar.innerHTML = id_nambar.value;
    console.log(newId_nambar);
    newRow.appendChild(newId_nambar);



    data_info.appendChild(newRow);

  




  }

})





