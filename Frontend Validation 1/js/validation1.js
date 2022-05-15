function myValidation(){

  let input = document.getElementById("newTask").value;

  if (true){
    document.getElementById("errorText").style.display = "block";
  }

  //create a li element

  const emptyList = document.createElement('li');

  //create the textnode
  const textNode = document.createTextNode(input);

  //append the textnode to li
  emptyList.appendChild(textNode);

  //append li to the list
  document.getElementById("taskList").appendChild(emptyList);

}


