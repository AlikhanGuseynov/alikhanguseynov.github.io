var wsUri = "wss://echo.websocket.org/";
var output;
function init(){
  output = document.getElementById("output");
  testWebSocket();
}
function testWebSocket(){
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}
function onOpen(evt){
  writeToScreen("CONNECTED");
  doSend("WebSocket rocks");
}
function onClose(evt){
  writeToScreen("DISCONNECTED");
}
function onMessage(evt){
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data +'</span>');
  // проверка на наличие в массиве
  for(let i=0; i<arr.length; i++){
    if (evt.data == arr[i].index) {
      arr.splice(i, 1)
    }
  };
  list()
}
function onError(evt){
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}
function doSend(message){
  writeToScreen("SENT: " + message);
  websocket.send(message);
  list();
}
function writeToScreen(message){
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);

// добавление события при нажатие на ENTER
document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
         send_to();
    }
    return false;
}

  let arr =[];
  let a = 0;

// добавление элемента в массив
function send_to(){
  let input = document.getElementById('input').value || 0;
  let item = {text: input, index: a++}
  document.getElementById('input').value = '';
  arr.push(item);
  list()
}

// создание строки и вывод в ul
function list(){
  let ul = document.getElementById('ul');
    ul.innerHTML = '';
  for(let i=0; i<arr.length; i++ ){
    // li
    let li = document.createElement("li");
      li.append(arr[i].text + '; ' + arr[i].index);
    //  label
    let label = document.createElement('label');
      label.setAttribute('id', arr[i].index);
    // button
    let button = document.createElement('button');
      button.classList.add('btn', 'btn-danger');
      button.setAttribute('onclick', 'doSend(' + arr[i].index + ')');
      button.append('remove');
      label.append(button);
      label.append(li);
      ul.append(label);
  }
}


// function test(){
//   console.log(arr)
// }