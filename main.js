function saveToLocalStorage(event) {
  event.preventDefault();

  const name=event.target.username.value;
  const email=event.target.emailId.value;
  

  //localStorage.setItem("name",name);
  //localStorage.setItem("email",email);

  const obj = {
    name : name,
    email : email,
  }

  localStorage.setItem('userDetails',"obj");
  console.log(obj);

  let obj_serialized = JSON.stringify(obj);
  localStorage.setItem("obj",obj_serialized);

  let obj_deserialized = JSON.parse(localStorage.getItem("obj"));
  console.log(obj_deserialized);
}