$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
            nav: true,
        }
    }
})


const cards = document.querySelectorAll('.item');

function handleCardClick(event) {
  const clickedCard = event.currentTarget;
  const video = clickedCard.querySelector('video');
  
  if (video.paused) {
    video.play();
    clickedCard.classList.add('active');
  } else {
    video.pause();
    clickedCard.classList.remove('active');
  }
}

cards.forEach(card => {
  card.addEventListener('click', handleCardClick);
});

