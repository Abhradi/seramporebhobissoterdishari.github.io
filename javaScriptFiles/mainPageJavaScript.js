let number = 0;

function changeBg() {
  const images = [
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage1.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage2.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage3.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage4.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage5.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage6.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage7.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage8.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage9.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage10.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage11.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage12.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage13.jpg")',
    'linear-gradient(to top,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("DishariPhotos/BackgroundImages/backgroundImage14.jpg")'
  ]
  const selection = document.querySelector('.header');
  let n = Math.floor(Math.random() * images.length);
  if (number != n) {
    number = n;
  }
  else {
    number = Math.floor(Math.random() * images.length);
  }
  // console.log(number);
  let random = images[number];
  selection.style.backgroundImage = random;
  // selection.innerHTML = '<h1> hello</h1>'
};
setInterval(changeBg, 2000);
// setTimeout(changeBg,2000);

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
let hideBackground = document.querySelector('.hideBackground');
let sideHeading = document.querySelector('.sideHeading');
let sideList = document.querySelectorAll('.sideList li');
sideHeading.addEventListener('click',()=>{
  sideHeading.classList.toggle('headingBtn');
  document.querySelector('.hideBackground').classList.toggle('hideBackground1');
  document.querySelector('.sidebar').classList.toggle('sidebar1');
  sideList.forEach(e => {
    e.classList.toggle('listDisplay');
    console.log(e);
  });
})










let crossEvent = document.querySelector('.crossEvent');
let imageEvents = document.querySelector('.eventClass div');
let eventClass = document.querySelector('.eventClass');
let allEventImages = document.querySelectorAll('.event');
let n = 1;
allEventImages.forEach(e => {
  e.classList.add(`event${n}`)
  n++;
});
function eventBackground(e) {
  eventClass.classList.add('hideBackgroundEvent');
  crossEvent.classList.add('eventCross');
  imageEvents.classList.add('imageEvents');
  eventBox(e)

}
crossEvent.addEventListener('click', () => {
  eventClass.classList.remove('hideBackgroundEvent');
  crossEvent.classList.remove('eventCross');
  imageEvents.classList.remove('imageEvents');
  imageEvents.innerHTML = '';

})

function eventBox(e) {
  switch (e) {
    case 1:

      break;
    case 2:
      imageEvents.innerHTML = '<img src="DishariPhotos/2022/environement/1.jpg"> <img src="DishariPhotos/2022/environement/4.jpg"><img src="DishariPhotos/2022/environement/5.jpg"> <img src="DishariPhotos/2022/environement/6.jpg"><img src="DishariPhotos/2022/environement/2.jpg"><img src="DishariPhotos/2022/environement/3.jpg">'

      break;
    case 3:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/rabindranath/1.jpg">  <img src="DishariPhotos/2022/rabindranath/7.jpg"><img src="DishariPhotos/2022/rabindranath/5.jpg"> <img src="DishariPhotos/2022/rabindranath/4.jpg"><img src="DishariPhotos/2022/rabindranath/6.jpg"><img src="DishariPhotos/2022/rabindranath/2.jpg"><img src="DishariPhotos/2022/rabindranath/3.jpg">`

      break;
    case 4:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/distribution/1.jpg" alt=""><img src="DishariPhotos/2022/distribution/4.jpg" alt=""><img src="DishariPhotos/2022/distribution/5.jpg" alt=""><img src="DishariPhotos/2022/distribution/6.jpg" alt=""><img src="DishariPhotos/2022/distribution/7.jpg" alt=""><img src="DishariPhotos/2022/distribution/2.jpg" alt=""><img src="DishariPhotos/2022/distribution/3.jpg" alt="">`
      break;
    case 5:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/dol/1.jpg" alt=""><img src="DishariPhotos/2022/dol/2.jpg" alt=""><img src="DishariPhotos/2022/dol/3.jpg" alt=""><img src="DishariPhotos/2022/dol/4.jpg" alt=""><img src="DishariPhotos/2022/dol/5.jpg" alt=""><img src="DishariPhotos/2022/dol/6.jpg" alt="">`

      break;
    case 6:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/21/4.jpg" alt=""><img src="DishariPhotos/2022/21/1.jpg" alt=""><img src="DishariPhotos/2022/21/2.jpg" alt=""><img src="DishariPhotos/2022/21/3.jpg" alt=""><img src="DishariPhotos/2022/21/5.jpg" alt=""><img src="DishariPhotos/2022/21/6.jpg" alt="">`
      break;
    case 7:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/other/1.jpg" alt=""><img src="DishariPhotos/2022/other/2.jpg" alt=""><img src="DishariPhotos/2022/other/3.jpg" alt=""><img src="DishariPhotos/2022/other/4.jpg" alt=""><img src="DishariPhotos/2022/other/5.jpg" alt=""><img src="DishariPhotos/2022/other/6.jpg" alt="">`
      break;
    case 8:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/jan/1.jpg" alt=""><img src="DishariPhotos/2022/jan/3.jpg" alt=""><img src="DishariPhotos/2022/jan/2.jpg" alt=""><img src="DishariPhotos/2022/jan/4.jpg" alt="">`
      break;
    case 9:
      imageEvents.innerHTML = `<img src="DishariPhotos/2022/dakhineswar/1.jpg" alt=""><img src="DishariPhotos/2022/dakhineswar/2.jpg" alt=""><img src="DishariPhotos/2022/dakhineswar/3.jpg" alt=""><img src="DishariPhotos/2022/dakhineswar/4.jpg" alt=""><img src="DishariPhotos/2022/dakhineswar/5.jpg" alt=""><img src="DishariPhotos/2022/dakhineswar/6.jpg" alt="">`
      break;
    case 10:
      imageEvents.innerHTML = `<img src="DishariPhotos/2021/blooddontaion/1.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/2.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/3.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/4.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/5.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/6.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/7.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/8.jpg" alt=""><img src="DishariPhotos/2021/blooddontaion/9.jpg" alt="">`
      break;
    case 11:
      imageEvents.innerHTML = `<img src="DishariPhotos/2021/august/6.jpg" alt=""><img src="DishariPhotos/2021/august/1.jpg" alt=""><img src="DishariPhotos/2021/august/2.jpg" alt=""><img src="DishariPhotos/2021/august/3.jpg" alt=""><img src="DishariPhotos/2021/august/4.jpg" alt=""><img src="DishariPhotos/2021/august/5.jpg" alt=""><img src="DishariPhotos/2021/august/7.jpg" alt="">`
      break;
    case 12:
      imageEvents.innerHTML = `<img src="DishariPhotos/2021/2021corona/1.jpg" alt=""><img src="DishariPhotos/2021/2021corona/2.jpg" alt=""><img src="DishariPhotos/2021/2021corona/3.jpg" alt=""><img src="DishariPhotos/2021/2021corona/4.jpg" alt=""><img src="DishariPhotos/2021/2021corona/5.jpg" alt=""><img src="DishariPhotos/2021/2021corona/6.jpg" alt=""><img src="DishariPhotos/2021/2021corona/7.jpg" alt=""><img src="DishariPhotos/2021/2021corona/8.jpg" alt=""><img src="DishariPhotos/2021/2021corona/9.jpg" alt="">`
      break;
    case 13:
      imageEvents.innerHTML = `<img src="DishariPhotos/2021/2021dol/1.jpg" alt=""><img src="DishariPhotos/2021/2021dol/2.jpg" alt=""><img src="DishariPhotos/2021/2021dol/3.jpg" alt=""><img src="../DishariPhotos/2021/2021dol/4.jpg" alt=""><img src="DishariPhotos/2021/2021dol/5.jpg" alt=""><img src="DishariPhotos/2021/2021dol/6.jpg" alt="">`
      break;
      case 14:
      imageEvents.innerHTML = `<img src="DishariPhotos/2021/2021dis/7.jpg" alt=""><img src="DishariPhotos/2021/2021dis/1.jpg" alt=""><img src="DishariPhotos/2021/2021dis/2.jpg" alt=""><img src="DishariPhotos/2021/2021dis/3.jpg" alt=""><img src="DishariPhotos/2021/2021dis/4.jpg" alt=""><img src="DishariPhotos/2021/2021dis/5.jpg" alt=""><img src="DishariPhotos/2021/2021dis/6.jpg" alt="">`
      break;
      case 15:
      imageEvents.innerHTML = `<img src="DishariPhotos/2020/2020blooddonation/1.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/2.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/3.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/4.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/5.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/6.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/7.jpg" alt=""><img src="DishariPhotos/2020/2020blooddonation/8.jpg" alt="">`
      break;
      case 16:
        imageEvents.innerHTML = `<img src="DishariPhotos/2020/2020beforeblooddonation/1.jpg" alt=""><img src="DishariPhotos/2020/2020beforeblooddonation/2.jpg" alt=""><img src="DishariPhotos/2020/2020beforeblooddonation/3.jpg" alt=""><img src="DishariPhotos/2020/2020beforeblooddonation/4.jpg" alt=""><img src="DishariPhotos/2020/2020beforeblooddonation/5.jpg" alt="">`
        break;
        case 17:
        imageEvents.innerHTML = `<img src="DishariPhotos/2019/2019dis/1.jpg" alt=""><img src="DishariPhotos/2019/2019dis/2.jpg" alt=""><img src="DishariPhotos/2019/2019dis/3.jpg" alt=""><img src="DishariPhotos/2019/2019dis/4.jpg" alt=""><img src="DishariPhotos/2019/2019dis/5.jpg" alt="">`
        break;
        case 18:
        imageEvents.innerHTML = `<img src="DishariPhotos/2019/distribution/4.jpg" alt=""><img src="DishariPhotos/2019/distribution/1.jpg" alt=""><img src="DishariPhotos/2019/distribution/2.jpg" alt=""><img src="DishariPhotos/2019/distribution/3.jpg" alt=""><img src="DishariPhotos/2019/distribution/5.jpg" alt=""><img src="DishariPhotos/2019/distribution/6.jpg" alt=""><img src="DishariPhotos/2019/distribution/7.jpg" alt=""><img src="DishariPhotos/2019/distribution/8.jpg" alt="">`
        break;
        case 19:
        imageEvents.innerHTML = `<img src="DishariPhotos/2019/harisova/1.jpg" alt=""><img src="DishariPhotos/2019/harisova/2.jpg" alt=""><img src="DishariPhotos/2019/harisova/3.jpg" alt=""><img src="DishariPhotos/2019/harisova/4.jpg" alt=""><img src="DishariPhotos/2019/harisova/5.jpg" alt="">`
        break;
    default:
      break;
  }

}