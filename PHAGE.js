chrome.runtime.onMessage.addListener(function (message, _sender, _sendResponse){
if (message === 'BG to PHAGE'){ 
    if (typeof init === 'undefined') {
    const init = function(){
    // const injectElement = document.createElement('div')
    // injectElement.className = 'linkFetcher'
    // injectElement.innerHTML = 'test'
    // document.body.appendChild(injectElement)
    1
    }
    init()
}else{
    init()
    document.documentElement.style.backgroundColor = 'red';
}}})