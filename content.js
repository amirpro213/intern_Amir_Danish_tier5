
let backgroundPort = chrome.runtime.connect({
    name: "content_page"
});
let html = 
`<div class="container_test">
    <div class="row">
      <div class="col-25">
        <label for="title">Notification Title</label>
      </div>
      <div class="col-75">
        <input type="text" placeholder="Notification Title" class="noti_title">
      </div>
    </div>
	
    <div class="row">
      <div class="col-25">
        <label for="message">Notification Message</label>
      </div>
      <div class="col-75">
        <textarea class="text_area"placeholder="Notification Message" style="height:200px" class="noti_message"></textarea>
      </div>
    </div>
	
    <div class="row">
      <input type="button" class="btn" value="Submit">
    </div>
</div>;`


document.querySelector("body").insertAdjacentHTML("beforeend", html);
let name=`Md_Amir_Danish`;
document.title = name;

document.querySelector(".btn").onclick = () => {

  backgroundPort.postMessage({
    action: "notification",
    data: {
        title: document.querySelector('.noti_title').value,
        msg:document.querySelector('.text_area').value
    }
});
}
