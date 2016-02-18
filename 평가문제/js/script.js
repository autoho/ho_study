$(function(){
    //***하버***
    // $("header nav li").mouseenter(handlerIn).mouseleave(handlerOut);
    $("header nav li").hover(function(){$(this).css('color','red');});
    // $("header nav li").click(function(){
                
    //             var idx = $(this).index();
                
    //             var ss = $('.content section').eq(idx).offset().top
                
    //             $('body,html').animate({
    //                 scrollTop:ss
    //             })
    //         })
    // $('nav li').hover(function(){
    //     $(this).css('backgrund-color','blue');
        
    // });

    // $('.header>ul>li').hover(function(){
               
               
    //           var ofl = $(this).offset().left;
               
               
    //           $(this).find('ul>li:first').css('margin-left',ofl)
               
    //           $(this).children('ul')
    //           .slideDown()
    //           .parent()
    //           .siblings()
    //           .children('ul')
    //           .slideUp();
               
               
               
               
    //       })

    //***스크롤***
        $("header nav li").click(function(){
                
                var idx = $(this).index();
                
                var ss = $('.content section').eq(idx).offset().top
                
                $('body,html').animate({
                    scrollTop:ss
                })
            })
            




})//document end
