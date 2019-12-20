let a = 0;
let arr = [{ text: 'Lorem ipsum.', id: 0 }]

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
  // doSend("WebSocket rocks");
}
function onClose(evt){
  writeToScreen("DISCONNECTED");
}
function onMessage(evt){
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data +'</span>');
  for(let i=0; i < arr.length; i++){
    if( evt.data == arr[i].id ){
      remove(i)
      console.log(0)
    }
    if( !evt.data == arr[i].id){
      push_item();
      console.log(1)
      return false
    }
  console.log('evt.data:', evt.data, ";  arr[i].id:", arr[i].id)
  }
}
function onError(evt){
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}
function doSend(message){
  writeToScreen("SENT: " + message);
  websocket.send(message);
}
function writeToScreen(message){
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);


function send_add(){
  a++
  writeToScreen("SENT: " + a );
  websocket.send(a);
}
function send_remove(asd){
  websocket.send(asd);
}
function remove(i){
  arr.splice(i, 1);
  list()
}

function push_item(){
  let input = document.getElementById('input').value || 0;
  let item = { text: input, id: a };
  arr.push(item);
  list()
}
function test(){
  // console.log(arr)

}



// создание строки и вывод в ul
function list(){
  let ul = document.getElementById('ul');
    ul.innerHTML = '';
  for(let i=0; i < arr.length; i++ ){
    // li
    let li = document.createElement("li");
      li.append(arr[i].text + '; ' + arr[i].id);
    //  label
    let div = document.createElement('div');
      div.classList.add('item');
    // button
    let button = document.createElement('button');
      button.classList.add('btn', 'btn-danger');
      // button.setAttribute('onclick', 'doSend(' + arr[i].id + ')');
      button.setAttribute('id', arr[i].id);
      button.setAttribute('onclick', 'send_remove(this.getAttribute(\'id\'))');
      button.append('remove');
      div.append(button);
      div.append(li);
      ul.append(div);
  }

}






// добавление события при нажатие на ENTER
document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
         send_to();
    }
    return false;
}