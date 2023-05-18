// //define button
// const Button = document.getElementById("run");

// //upon clicking it, send a message to BG.js
// Button.addEventListener("click", function() {
//   chrome.runtime.sendMessage({action: "getLinks"}, function(response) {
//     console.log(response);
// })})
const button = document.getElementById('run')
button.onclick = function(){chrome.runtime.sendMessage('FG to BG');}


//  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { //on this tab, do this
//     document.documentElement.style.backgroundColor = 'red'; //for testing
//     chrome.scripting.executeScript({ //get all the links
//       target: { tabId: tabs[0].id },
//       function: () => {
//         const links = document.getElementsByTagName("a")
//         chrome.runtime.sendMessage(links);
//       }
//     });
//   });
