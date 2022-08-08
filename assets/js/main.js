const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$('.intro').onmousemove  = (e) => {
    $('.intro-img-body').style.transform = `translate(${e.x/80}px,${e.y/60}px)`
}

// handle scroll to move this shit arrow 
window.onscroll = function (e) {  
    let distanceFromTop = $('.value').getBoundingClientRect().top;
    let heightElement = $('.value').clientHeight;

    let thisArea = distanceFromTop+heightElement

    if(distanceFromTop<(window.screen.height/2) && thisArea >0){
        const thisShitPercent = 100-(distanceFromTop/(window.screen.height/2))*100;

        if(window.screen.width<739){
            $('.value-item-icon--1').style.transform = `rotate(7deg) translate(-220%,${80+thisShitPercent*0.15}%)`
            $('.value-item-icon--2').style.transform = `translateY(${thisShitPercent*0.4}%)`
            $('.value-item-icon--3').style.transform = `rotate(-7deg) translate(220%,${80+thisShitPercent*0.15}%)`
        }
        else{
            $('.value-item-icon--1').style.transform = `rotate(60deg) translate(-240%,${190+thisShitPercent*0.8}%)`
            $('.value-item-icon--2').style.transform = `translateY(${thisShitPercent*0.6}%)`
            $('.value-item-icon--3').style.transform = `rotate(-60deg) translate(240%,${190+thisShitPercent*0.8}%)`
        }
    }
} 


$('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
}

// HANDLE SHOW MODAL VIDEOS
let currentVideoID = 0;

const videoContent = [
    {
        title: "Bước 1: TẢI APP BINANSTEP TRÊN ANDROID",
        urlVideo:"https://www.youtube.com/embed/r9WhqcKtcHM"
    },
    {
        title: "Bước 2:  TẢI APP BINANSTEP TRÊN IOS",
        urlVideo:"https://www.youtube.com/embed/qcgbmdDJY4Y"
    },
    {
        title: "Bước 3:  ĐĂNG KÝ TÀI KHOẢN & TẠO MÃ CODE",
        urlVideo:"https://www.youtube.com/embed/ksz_Xde1aDQ"
    },
    {
        title: "Bước 4:  TẢI + SỬ DỤNG VÍ METAMASK",
        urlVideo:"https://www.youtube.com/embed/uRb49tzYJn8"
    },
    {
        title: "Bước 5: TẢI + SỬ DỤNG VÍ TRUST",
        urlVideo:"https://www.youtube.com/embed/ctpjkImWde0"
    },
    {
        title: "Bước 6: SỬ DỤNG DAPP + MUA BÁN TOKEN",
        urlVideo:"https://www.youtube.com/embed/BcKA7-luniY"
    },
    {
        title: "Bước 7: ĐĂNG NHẬP + THAY ĐỔI MẬT KHẨU",
        urlVideo:"https://www.youtube.com/embed/2oq9nCZ6Bzc"
    },
    {
        title: "Bước 8: THAY ĐỔI USERNAME  +ĐỒNG BỘ VÍ",
        urlVideo:"https://www.youtube.com/embed/sdiWMtJN_2o"
    },
    {
        title: "Bước 9: MUA GIÀY TRÊN APP BINANSTEP",
        urlVideo:"https://www.youtube.com/embed/8d5wjR8uMqg"
    }
    ,{
        title: "Bước 10: LẤY GIÀY + CÁCH SỬ DỤNG",
        urlVideo:"https://www.youtube.com/embed/PKZK74oRHn4"
    }
    ,
    {
        title: "Bước 11: RÚT TOKEN PAY VỀ VÍ",
        urlVideo:"https://www.youtube.com/embed/cKNyaROOiU0"
    }
    ,
    {
        title: "Bước 12.GIAO DIỆN TRÊN APP BINANSTEP",
        urlVideo:"https://www.youtube.com/embed/Nc5EisNX1Ew"
    }
]

const playVideoWithID = (id) => {
    currentVideoID = id
    renderContentVideo(id)
}

const renderContentVideo = (id) => {
    currentVideoID = parseInt(id)
    
    let videoData = videoContent[currentVideoID];

    const controlHTML = videoContent.map((item,index) => {
        let temp =""
        if(index==currentVideoID){
            temp = "active"
        }
        return (
            `
                <div class="video-content-item ${temp}" onclick="renderContentVideo(${index})">
                    ${index+1}
                </div>
            `
        )
    }).join("")

    $('#exampleModalVideo .modal-content').innerHTML = (
        `
            <div class="modal-control">
                <div class="modal-control-item" onclick="prevVideo()">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="modal-control-item" onclick="nextVideo()">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="modal-header centering">
                <h5 class="modal-title" id="exampleModalVideoLabel">
                    ${videoData.title}
                </h5>
            </div>
            <div class="modal-body centering">
                <div class="video-content">
                    <iframe width="100%" src="${videoData.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-content-list d-flex">
                    ${controlHTML}
                </div>
            </div>
            <div class="modal-footer centering">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Đóng
                </button>
            </div> 
        `
    )
}

const nextVideo = () => {
    if(currentVideoID<videoContent.length-1){
        renderContentVideo(currentVideoID+1)
        
    }else{
        renderContentVideo(0)
    }

    console.log("currentVideoID",currentVideoID)
}

const prevVideo = () => {
    if(currentVideoID>0){
        renderContentVideo(currentVideoID-1)
    }else{
        renderContentVideo(videoContent.length-1)
    }

    console.log("currentVideoID",currentVideoID)
}

$$('.video-icon').forEach((item) => {
    item.onclick = () => {
        playVideoWithID(item.getAttribute("data-video"))
    }
});


