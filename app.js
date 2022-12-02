// Global Variables //
let feelings = document.getElementById("feelings");
let zip = document.getElementById("zip");
const MYapp = document.querySelector('.app');
const icons = document.getElementById('entryHolder');
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";   // The URL to retrieve weather information from his API (country : US)
const apiKey = ",&appid=7eb366cdc2c2e43068df148622345020&units=metric";  //personal apikey
const server = "http://127.0.0.1:3532";   //my local server
let d = new Date();  //Create a new date instance dynamically with JS
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//.....................................................................................
// Check the inputs 
const CHinput = (zipV, feelV) => {
  if (!zipV === '') {
    settrue(zip);
    return true;
} else {
    setfalse(zip,'Please enter Zip code');
  
}
if (!feelV === '') {
  settrue(feelings);
    return true;
} else {
  setfalse(feelings, 'Please enter your feelings for today');
}

}
//if the inputs are true
function settrue(INput) {
  let label = INput.parentElement;
  label.className = 'true';
}
//if the inputs are false
function setfalse(INput, Msg) {
  let label = INput.parentElement;
  let mistake = label.getElementById('error');
  formlabel.className = ' false';
  mistake.innerText = Msg;
}
//.................................................................................
// function appened when you click on the button(generate)
 //add eventListener when you click on the button (generate)
function ACTION ()  { 
  let feels = document.getElementById("feelings").value;  //get zip from the inputs
  let zips = document.getElementById("zip").value;   //get Feelings from the inputs
   // getData return promise
  if (CHinput(zips,feels)) {

    GetData(baseURL, zips, apiKey).then(
      function (dataUsing){
      DataP('/new', { 
         date: newDate,
         temp: dataUsing.main.temp, 
         content
         })
    })
    .then(function (newData) {
      // call UI 
      UI()
    })
    
  }else{
    setfalse();
}
  }

  MYapp.reset();
   
//..........................................................................

   const GetData = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL + zip + apiKey);
    try {
      // userData equals to the result of fetch function
      const dataUsing = await res.json();
      return dataUsing;
    } catch (error) {
      console.log("error", error);
    }
  }
  const DataP = async (url = '', data = {}) => {  
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        temp: data.temp,
        date: data.date,
        content: data.content
      })
    })
    try {
      const newData = await req.json();
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };
  
  //.................................................................................
  const UI = async () => {
    const request = await fetch('/all');
    try {
      const allData = await request.json()
      // show icons on the page
      icons.forEach(icon => icon.style.opacity = '1');
      // update new entry values
      document.getElementById('date').innerHTML = allData.date;
      document.getElementById('temp').innerHTML = allData.temp;
      document.getElementById('content').innerHTML = allData.content;
    }
    catch (error) {
      console.log("error", error);
    }
  };  

    
//..........................................................................

class turtle {
  constructor (name1) {
    this._name = name1;
    this.quantity
  }

  function turtle_name () {
    return this._name;
    
  }
  miyagi = new turtle("miyagi");
  console.log(miyagi.turtle_name);
}