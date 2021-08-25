
let backgroundPort = chrome.runtime.connect({
  name: "popup_page",
});

let submitButton = document.getElementById("submit");
let printButton = document.getElementById("print");
var keyword;

submitButton.addEventListener("click", async () => {
  keyword = document.getElementById('input_text').value;
  console.log(keyword);
    backgroundPort.postMessage({
    type: "search",
    msg: keyword,
  });
});

printButton.addEventListener('click',async()=>{
  backgroundPort.postMessage({
    type:"print",
  })
})


