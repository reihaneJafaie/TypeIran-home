$(document).ready(function(){

    let s1p1 = $('#s1p1').fadeOut();
    let s1p2 = $('#s1p2').fadeOut();
    let s1p3 = $('#s1p3').fadeOut();
    let s1p4 = $('#s1p4').fadeOut();
    let s1p5 = $('#s1p5').fadeOut();
    let s1p6 = $('#s1p6').fadeOut();
    let s1t1 = $('#tittlestep1').fadeOut();
    let s1t2 = $('#tittlestep2').fadeOut(); 
    let btn2 = $('#btn2').fadeOut();

    let s3t1 = $('.tittleStep3').fadeOut();
    let step3Right = $('.step3Right').fadeOut();
    let step3left = $('.step3left').fadeOut();
    let imgStep3r = $('#imgStep3r').fadeOut();
    let imgStep3l = $('#imgStep3l').fadeOut();
    let master = $('#master').fadeOut();
    let whoMaster = $('#whoMaster').fadeOut();
    let worker = $('#worker').fadeOut();
    let whoWorker = $('#whoWorker').fadeOut();
    let btn3 = $('#btn3').fadeOut();

    let imgStep41 = $('#imgStep41').fadeOut();
    let imgStep42 = $('#imgStep42').fadeOut();
    let t1 = $('.t1').fadeOut();
    let t2 = $('.t2').fadeOut();
    let t3 = $('.t3').fadeOut();
    let t4 = $('.t4').fadeOut();
    let btn4 = $('#btn4').fadeOut();

    let iran = $('#iran').fadeOut();
    let user1 = $('#user1').fadeOut();
    let user2 = $('#user2').fadeOut();
    let user3 = $('#user3').fadeOut();
    let user4 = $('#user4').fadeOut();
    let user5 = $('#user5').fadeOut();
    let user6 = $('#user6').fadeOut();
    let user7 = $('#user7').fadeOut();
    let t1s5 = $('.t1s5').fadeOut();
    let ds5 = $('.ds5').fadeOut();
    let btn5 = $('#btn5').fadeOut();

    let btn6 = $('#btn6').fadeOut();
    let listep6 = $('.listep6').fadeOut();
    let imgliststep6 = $('#imgliststep6').fadeOut();

    

//step1 step2
$('#btn1').click(function(){
    document.documentElement.scrollTop=620;
    scrollStep2()
});

window.onscroll = function() { scrollStep2()};

function scrollStep2(){

    if($(window).scrollTop() >=412 ){

        s1p1.fadeIn();
        s1p2.fadeIn();
        s1p3.fadeIn();
        s1p4.fadeIn();
        s1p5.fadeIn();
        s1p6.fadeIn();
        s1t1.fadeIn();
        s1t2.fadeIn();
        btn2.fadeIn();
    }

}


//step2  STEP 3
$('#btn2').click(function(){
    document.documentElement.scrollTop=1200;
    scrollStep3()
});

function scrollStep3(){


    if($(window).scrollTop() >=1100 ){

        s3t1.fadeIn();
        step3Right.fadeIn();
        step3left.fadeIn();
        imgStep3r.fadeIn();
        imgStep3l.fadeIn();
        master.fadeIn();
        whoMaster.fadeIn();
        worker.fadeIn();
        whoWorker.fadeIn();
        btn3.fadeIn();
    }

}



//STEP 3 step 4
$('#btn3').click(function(){
    document.documentElement.scrollTop=1750;
    scrollStep4()
});

function scrollStep4(){


    if($(window).scrollTop() >=1650 ){

        imgStep41.fadeIn();
        imgStep42.fadeIn();
       t1.fadeIn();
        t2.fadeIn();
        t3.fadeIn();
        t4.fadeIn();
       btn4.delay(3000).fadeIn();
    }

}


//STEP 4 step 5
$('#btn4').click(function(){
    document.documentElement.scrollTop=2350;
    scrollStep5()
});

function scrollStep5(){


    if($(window).scrollTop() >=2250 ){
        
        iran.fadeIn();
        user1.fadeIn();
        user2.fadeIn();
        user3.fadeIn();
        user4.fadeIn();
        user5.fadeIn();
        user6.fadeIn();
        user7.fadeIn();
        t1s5.fadeIn();
        ds5.fadeIn();
        btn5.fadeIn();

    }

}
    //STEP 4 step 5
$('#btn4').click(function(){
    document.documentElement.scrollTop=2350;
    scrollStep5()
});

function scrollStep5(){


    if($(window).scrollTop() >=2250 ){
        
        iran.fadeIn();
        user1.fadeIn();
        user2.fadeIn();
        user3.fadeIn();
        user4.fadeIn();
        user5.fadeIn();
        user6.fadeIn();
        user7.fadeIn();
        t1s5.fadeIn();
        ds5.fadeIn();
        btn5.fadeIn();

    }

}


//STEP 5 step 6
$('#btn5').click(function(){
    document.documentElement.scrollTop=2950;
    scrollStep6()
});

function scrollStep6(){


    if($(window).scrollTop() >=2950 ){
        
        btn6.fadeIn();
        listep6.fadeIn();
        imgliststep6.fadeIn();

    }

}


});
 



/*











        

*/