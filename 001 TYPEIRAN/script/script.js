
$(document).ready(function(){

    $(window).scroll(function(){


        if( $(window).scrollTop() > 200 )
    
        {

            $('#header').animate({marginTop: 20 ,},1);
            $('.forborder').animate({width : 1200 ,},1);


        }
        else
        {
            $('#header').animate({marginTop: 10 ,},1);
            $('.forborder').animate({width : 1150 ,},1);
        }
    
    
    });

    //counts


    const counters = document.querySelectorAll(".cuontsjs");
    const speed = 25;

    counters.forEach((counter) => {
    const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 0.5);
    } else {
        count.innerText = target;
    }
    };
    updateCount();
    });





// Show all post

let projectsItem = document.querySelector('.projects')
function showAllPosts(){

    for(let i =0 ; i< project.length ; i++ ){

        projectsItem.innerHTML +=
        `
        <div class="boxProject">
        <img src="`+project[i].img+`" alt="">
        <h3>`+project[i].tittle+`</h3>
        <div>`+project[i].descriptionProject+`</div>
        </div>
        `
    }
    
}

showAllPosts()



//scroll mouse 

const slider = document.querySelector('.client');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


  
// Show all Content

let ContentItem = document.querySelector('.content')
function ShowContent(){

    for(let i =0 ; i< Content.length ; i++ ){

      ContentItem.innerHTML +=
        `
        <div class="boxContent ">
        <img src="`+Content[i].img+`" alt="">

        <div class=" text">
            <div class="date">`+Content[i].datee+`</div>
            <h3>`+Content[i].tittle+`</h3>
            <div class="some">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            </div>
            <div class="more">
                        <a href="#">مشاهده کامل</a>
                    </div>
        </div>
    </div>
        `
    }
    
}

ShowContent()





});