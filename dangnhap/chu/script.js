const sliderContainer = document.querySelector(".slider-container1");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;


let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));



let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#voituoi');
let img1a = document.querySelector('#voituoi1');
let img1b = document.querySelector('#voituoi2');
let img1c = document.querySelector('#voituoi3');
let img1d = document.querySelector('#voituoi4');
let img1e = document.querySelector('#voituoi5');
let img1f = document.querySelector('#voituoi6');
let btn2 = document.querySelector('#btn2');
let imgloa = document.querySelector('#loa');


btn1.addEventListener('click', ()=>{

    imgloa.src = 'image/loa.gif';
    firebase.database().ref("thietbi5").set({loa: 1})
    setTimeout (()=>{
        imgloa.src = 'image/loa_tat.png'
        firebase.database().ref("thietbi1").set({voituoi: 1})
        firebase.database().ref("thietbi5").set({loa: 0})
        var dbRef2 = firebase.database().ref().child('Do am');

        if(voituoi){
        
        img1.src = 'image/voinuoc.gif';
        img1a.src = 'image/voinuoc.gif';
        img1b.src = 'image/voinuoc.gif';
        img1c.src = 'image/voinuoc.gif';
        img1d.src = 'image/voinuoc.gif';
        img1e.src = 'image/voinuoc.gif';
        img1f.src = 'image/voinuoc.gif';
        dbRef2.transaction((currentValue) => {
            if (currentValue !== null) {
            // Giam giá trị hiện tại lên 1 đơn vị
            currentValue =  currentValue +1;
            const updatedValue = snapshot.val();
            console.log('Updated value:', updatedValue);
            }});  
    }


    }, 10000);

})
btn2.addEventListener('click', ()=>{
    img1.src = 'image/voinuoc_tat.png';
    img1a.src = 'image/voinuoc_tat.png';
    img1b.src = 'image/voinuoc_tat.png';
    img1c.src = 'image/voinuoc_tat.png';
    img1d.src = 'image/voinuoc_tat.png';
    img1e.src = 'image/voinuoc_tat.png';
    img1f.src = 'image/voinuoc_tat.png';
    firebase.database().ref("thietbi1").set({voituoi: 0})
})



let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#bonphan');
let img2a = document.querySelector('#bonphan1');
let img2b = document.querySelector('#bonphan2');
let img2c = document.querySelector('#bonphan3');
let img2d = document.querySelector('#bonphan4');
let img2e = document.querySelector('#bonphan5');
let img2f = document.querySelector('#bonphan6');
let btn4 = document.querySelector('#btn4');

btn3.addEventListener('click', ()=>{
    img2.src = 'image/bonphan.gif';
    img2a.src = 'image/bonphan.gif';
    img2b.src = 'image/bonphan.gif';
    img2c.src = 'image/bonphan.gif';
    img2d.src = 'image/bonphan.gif';
    img2e.src = 'image/bonphan.gif';
    img2f.src = 'image/bonphan.gif'; 
    firebase.database().ref("thietbi2").set({bonphan:1})
})

btn4.addEventListener('click', ()=>{
    img2.src = 'image/bonphan_tat.png';
    img2a.src = 'image/bonphan_tat.png';
    img2b.src = 'image/bonphan_tat.png';
    img2c.src = 'image/bonphan_tat.png';
    img2d.src = 'image/bonphan_tat.png';
    img2e.src = 'image/bonphan_tat.png';
    img2f.src = 'image/bonphan_tat.png';
    firebase.database().ref("thietbi2").set({bonphan:0})
})


let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#camera');
let img3a = document.querySelector('#camera1');
let img3b = document.querySelector('#camera2');
let img3c = document.querySelector('#camera3');
let img3d = document.querySelector('#camera4');
let img3e = document.querySelector('#camera5');
let img3f = document.querySelector('#camera6');
let isOn = true;

btn5.addEventListener('click', ()=>{
    
    firebase.database().ref("thietbi3/camera").once('value').then((snapshot) => {
        const currentStatus = snapshot.val();
        const newStatus = currentStatus === 0 ? 1 : 0;
        firebase.database().ref("thietbi3").update({ camera: newStatus });

        isOn = !isOn;
        btn5.textContent = isOn ? "On" : "Off";
        img3.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';
        img3a.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';
        img3b.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';
        img3c.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';
        img3d.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';
        img3e.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';
        img3f.src = newStatus  === 1 ? 'image/camera_mo.png' : 'image/camera_tat.png';

    })

    
})




let slider = document.querySelector('#slider');
let sliderValue = document.querySelector('#slider-value');
let sliderImage = document.querySelector('#slider-image');
let sliderImage1 = document.querySelector('#slider-image1');
let sliderImage2 = document.querySelector('#slider-image2');
let sliderImage3 = document.querySelector('#slider-image3');
let sliderImage4 = document.querySelector('#slider-image4');
let sliderImage5 = document.querySelector('#slider-image5'); // Tham chiếu đến thẻ img
let sliderImage6 = document.querySelector('#slider-image6');

slider.addEventListener('input', () => {
    // Lấy giá trị hiện tại của slider
    let value = parseInt(slider.value);
    
    // Cập nhật giá trị hiển thị
    sliderValue.textContent = value;

    // Thay đổi hình ảnh dựa trên giá trị slider
    if (value === 0) {
        sliderImage.src = 'image/led_0.png';
        sliderImage1.src = 'image/led_0.png';
        sliderImage2.src = 'image/led_0.png';
        sliderImage3.src = 'image/led_0.png';
        sliderImage4.src = 'image/led_0.png';
        sliderImage5.src = 'image/led_0.png';
        sliderImage6.src = 'image/led_0.png';
         // Đặt hình ảnh tương ứng với giá trị 0
    } else if (value === 1) {
        sliderImage.src = 'image/led_1.png';
        sliderImage1.src = 'image/led_1.png';
        sliderImage2.src = 'image/led_1.png'; // Đặt hình ảnh tương ứng với giá trị 1
        sliderImage3.src = 'image/led_1.png';
        sliderImage4.src = 'image/led_1.png';
        sliderImage5.src = 'image/led_1.png';
        sliderImage6.src = 'image/led_1.png';
    } else if (value === 2) {
        sliderImage.src = 'image/led_2.png';
        sliderImage1.src = 'image/led_2.png';
        sliderImage2.src = 'image/led_2.png'; // Đặt hình ảnh tương ứng với giá trị 2
        sliderImage3.src = 'image/led_2.png';
        sliderImage4.src = 'image/led_2.png';
        sliderImage5.src = 'image/led_2.png';
        sliderImage6.src = 'image/led_2.png';
    } else {
        sliderImage.src = 'image/led_3.png';
        sliderImage1.src = 'image/led_3.png';
        sliderImage2.src = 'image/led_3.png';
        sliderImage3.src = 'image/led_3.png'; // Đặt hình ảnh tương ứng với giá trị 3
        sliderImage4.src = 'image/led_3.png';
        sliderImage5.src = 'image/led_3.png';
        sliderImage6.src = 'image/led_3.png';
    }

    // Gửi giá trị slider vào Firebase
    firebase.database().ref("thietbi4/led").set(value);
});

slider.addEventListener('input', () => {
    // Lấy giá trị hiện tại của slider
    let value = parseInt(slider.value);
    
    // Cập nhật giá trị hiển thị
    sliderValue.textContent = value;

    // Gửi giá trị slider vào Firebase
    firebase.database().ref("thietbi4/led").set(value);
});


var doAmRef = firebase.database().ref('sensor').child("Do am");
doAmRef.on('value', function(snapshot) {
var doAm = snapshot.val();



function decreaseTemperature() {

    if(doAm<50) {
        doAm++;  
        doAmRef.set(doAm);
        dbRef.on('value', snap => doAm.innerText = snap.val());

        if(doAm<50) {
            setTimeout(decreaseTemperature(doAm), 500);
        }
    }

}

if(doAm<50) {

    firebase.database().ref("thietbi1").set({ voituoi: 1 });
      
    img1.src = 'image/voinuoc.gif';
    img1a.src = 'image/voinuoc.gif';
    img1b.src = 'image/voinuoc.gif';
    img1c.src = 'image/voinuoc.gif';
    img1d.src = 'image/voinuoc.gif';
    img1e.src = 'image/voinuoc.gif';
    img1f.src = 'image/voinuoc.gif';
    //decreaseTemperature();
    setTimeout(decreaseTemperature, 500);

}
else if(doAm >= 50 ) {
    img1.src = 'image/voinuoc_tat.png';
    img1a.src = 'image/voinuoc_tat.png';
    img1b.src = 'image/voinuoc_tat.png';
    img1c.src = 'image/voinuoc_tat.png';
    img1d.src = 'image/voinuoc_tat.png';
    img1e.src = 'image/voinuoc_tat.png';
    img1f.src = 'image/voinuoc_tat.png';
    firebase.database().ref("thietbi1").set({ voituoi: 0 });   
} 
});





    