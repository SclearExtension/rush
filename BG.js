// //replying to the first message given
// chrome.runtime.onMessage.addListener(function (message, _sender, sendResponse) {
// console.log(message)})

// // (async () => {
// //   const response = await chrome.tabs.sendMessage(tab.id, "test");
// // })();
// // chrome.runtime.onMessage.addListener((message) => {
// //   if (message === "Run, background boy!"){
// //       chrome.tabs.sendMessage(tab.id);
// //   }
// // });



// // /*chrome.tabs.onCreated.addListener((tab)=> {
    

// //   })*/

// // openInNewTab = (firstTab) => {
// //   const {id, url} = firstTab;
// //   chrome.tabs.create({ url }, function(tab){
// //     return tab
// //   });
// // }

// // chrome.tabs.onCreated.addListener((tab)=> {
// //   // wait for contenscript to load
// //   chrome.runtime.onMessage.addListener((isLoaded, sender, sendResponse) => {
// //     if (isLoaded){
// //       (async () => {
// //         const response = await chrome.tabs.sendMessage(tab.id, 'test');
// //         console.log(response);
// //       })();
// //     }
// //   });
// // })
  
// // chrome.action.onClicked.addListener(tab => { 
// //   openInNewTab(tab)
// // });  
// Background script or event handler


// Specify the active tab where the content script will be injected
// chrome.runtime.onMessage.addListener(function (message, _sender, sendResponse) {
//     if (message === 'FG to BG') {
//     if(changeInfo.status == "complete"){
//           chrome.scripting.executeScript({
//           target: { tabId: tabs[0].id },
//           injection: ScriptInjection
//         })
//         sendResponse("1")
//     }
// }})
initializer = false
chrome.runtime.onMessage.addListener(function (message, _sender, _sendResponse) {
    if (message==='FG to BG') {
        initializer = true
    }
})
try{
tabs = chrome.tabs.query({lastFocusedWindow: true});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, _tab) => {
    if (initializer === true){
    if (changeInfo.status == 'complete')
        chrome.scripting.ScriptInjection({
            files: ['PHAGE.js'],
            target: tabs[0]
        });
        chrome.runtime.sendMessage('BG to PHAGE')
    }})
    
}catch(e){
    console.log(e)
}
