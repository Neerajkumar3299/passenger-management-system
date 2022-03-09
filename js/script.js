var pnr=document.getElementById("pnr")
var trackTrain=document.getElementById("track-train")
var homeContentBtn=document.getElementById("home-content-btn")
var robbery=document.getElementById("robbery")
var pnrStatusCancel=document.getElementById("pnr-status-cancel")
var pnrStatusForm=document.getElementById("pnr-status")
var trackTrainStatus=document.getElementById("track1")
var robbery=document.getElementById("robbery")
setInterval(()=>{
    if(homeContentBtn.textContent==pnr.textContent){
        homeContentBtn.textContent=trackTrain.textContent
        homeContentBtn.href=trackTrain.href

    }
    else if(homeContentBtn.textContent==trackTrain.textContent){
        homeContentBtn.textContent=robbery.textContent
        homeContentBtn.href=robbery.href
    }
    else{
        homeContentBtn.textContent=pnr.textContent
        homeContentBtn.href=pnr.href
    }
},2000)

//  toggle PNR form
pnr.addEventListener("click",()=>{
    pnrStatusForm.style.display='block'
})
pnrStatusCancel.addEventListener("click",()=>{
    pnrStatusForm.style.display='none'
})
trackTrain.addEventListener("click",()=>{
    trackTrainStatus.style.display="block"
})
document.getElementById("track-train-status").addEventListener("click",()=>{
    trackTrainStatus.style.display="none"
})

// Robbery page toggling
robbery.addEventListener("click",()=>{
    document.getElementById("online-complaint").style.display="block"
})
document.getElementById("robbery-cancel").addEventListener("click",()=>{
    document.getElementById("online-complaint").style.display="none"
})


// login page toggling
document.getElementById("login-btn").addEventListener("click",()=>{
    document.getElementById("login").style.display='block'
})
document.getElementById("login-cancel").addEventListener("click",()=>{
    document.getElementById("login").style.display="none"
})