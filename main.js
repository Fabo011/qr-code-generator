var btn = document.querySelector('.btn');
var code = document.querySelector('.code');
var toast = document.querySelector('#toast');
var text = document.getElementById('text')

btn.addEventListener("click", generate);

function generate() {
    var data = $('#textvalue').val();
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    code.src = url;
    text.innerHTML = "Right click on QR-Code and copy or share it where ever you want.";
    toastDiv();
}

function toastDiv() {
    toast.className = "show";
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 2000);
}