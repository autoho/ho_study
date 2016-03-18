$(function(){

	var baseUrl = "http://heesoo.dothome.co.kr/"
	$('head title').after("<base href='"+baseUrl+"' />")
	//load include
	var gnbIncludeUrl ="/html/layout/gnb.html"

	//pageLoad
	$('.header').load(gnbIncludeUrl+' .all_nav',function(){
		$('.header').append('<div class="navWrap"></div>').children('.navWrap')
		.load(gnbIncludeUrl+' .title_wrap');
	});
	$('.footer').load(gnbIncludeUrl+' .footer_wrap');
	$('.con_wrap').load(gnbIncludeUrl+' .top_btn');


	removeTitle();


	//타이틀뷰 구분
	function removeTitle(){

		var tgUrl = window.location.href;
		var masg = tgUrl.split("/");

		for(var i=0 in masg){

			if(masg[i] == "main.html" || masg[i] == "frame_works.html" || masg[i] == "frame_works.html#ov1" || masg[i] == "frame_works.html#ov2" || masg[i] == "frame_works.html#ov3"){

				//pageLoad
				$('.header').load(gnbIncludeUrl+' .all_nav').addClass('heightzero');

			}else if(masg[i] == "fnq1.html" || masg[i] == "fnq2.html" || masg[i] =="fnq3.html" || masg[i] == "fnq4.html"){
				//pageLoad
				$('.header').load(gnbIncludeUrl+' .all_nav',function(){
				$('.header').append('<div class="navWrap"></div>').children('.navWrap')
				.load(gnbIncludeUrl+' .title_wrap',function(){
					$('.next,.prev').remove();
					$('.title_wrap h2').text("FAQ")
				});
				});


			}
			else{

				//pageLoad
				$('.header').load(gnbIncludeUrl+' .all_nav',function(){
				$('.header').append('<div class="navWrap"></div>').children('.navWrap')
				.load(gnbIncludeUrl+' .title_wrap',function(){
					titler();
				});
				navCheck(masg)

				});

			}
		}
	}

	//네비게이션 타이틀설정
	function titler(){

		var $target = $('.b_manu ul li.on')
		var $untarget = $('.b_manu>li.on').find(">ul>li")

		var h2title = $target.text();

		var h2prev = $target.prev().text();
		var h2prevUrl = $target.prev().children('a').attr('href');

		var h2next = $target.next().text();
		var h2nextUrl = $target.next().children('a').attr('href');

		if(h2nextUrl == undefined){
			h2next = $untarget.first().text()
			h2nextUrl = $untarget.first().children('a').attr('href');
		}else if(h2prevUrl == undefined){
			h2prev = $untarget.last().text()
			h2prevUrl = $untarget.last().children('a').attr('href');
		}

		$('.title_wrap h2').text(h2title);
		$('.title_wrap .prev').text(h2prev).attr('href',h2prevUrl);
		$('.title_wrap .next').text(h2next).attr('href',h2nextUrl);

	}


	//네이비게이션 픽커
	function navCheck(nav){
		var titleArr = ['about_us','business','People']
		var titleSubArr = [
		                   ["history","network","ir","ci"],
		                   ["steel","product","sustain"],
		                   ["ceo","persona","life","recruit"]
		                   ]

		$.each(titleArr,function(i){

			switch(nav[4]){

				case titleArr[i] :
					$('.b_manu>li').eq(i).addClass('on')

					$.each(titleSubArr[i],function(j){

						switch(nav[5]){
							case titleSubArr[i][j] :
							$('.b_manu>li').eq(i).find('>ul>li').eq(j).addClass('on')
							break;
						}
					})

					break;
				default:
					break;

			}

		})


	}

	//gnb 메뉴
	$('.header').on({
		'mouseenter':function(){
			var idx = $(this).index()
			$('.bottom_manu_wrap').stop().slideDown(500).children('span').eq(idx).fadeIn().siblings().fadeOut()
			$('.b_manu>li').children('ul').stop().slideDown(700)
		},
	},'.b_manu>li');


	$('.header').on({
		'mouseleave':function(){
			$('.bottom_manu_wrap').stop().slideUp(400)
			$('.b_manu>li').children('ul').stop().slideUp(400)
		}
	},'.bottom_manu_wrap , .header_nav_wrap');


	$('.header').on({
		'mouseenter':function(){

			$(this).find('.icon').hide()
			$('.header_nav_wrap .len').hide()
			$('.header_nav_wrap .icon').show()
			$('.header_nav_wrap').stop().animate({
				'width':'180px'
			}).find('h1').stop().animate({
				'width':'125px',
				'height':'16px'
			})

			$('.header_nav_wrap').find('.b_manu>li').stop().hide(200);
			$('.right_manu').find('ul').css({'width':'100%'}).stop().show(300);

			$(this).stop().animate({
				'width':'820px'
			}).find('[alt=frameworks]').stop().animate({
				'width':'173px',
				'height':'22px'
			})

		},
		'mouseleave':function(){

			$(this).find('.icon').show()
			$('.header_nav_wrap .len').stop().show()
			$('.header_nav_wrap .icon').stop().hide()

			$('.header_nav_wrap').stop().animate({
				'width':'820px'
			}).find('h1').stop().animate({
				'width':'173px',
				'height':'22px'
			})

			$('.header_nav_wrap').find('.b_manu>li').stop().show(350);
			$('.right_manu').find('ul').css({'width':'100%'}).stop().hide();

			$(this).stop().animate({
				'width':'180px'
			}).find('[alt=frameworks]').stop().animate({
				'width':'125px',
				'height':'16px'
			})
		}
	},'.right_manu');





	//버튼이벤트
	$('.btnMore').click(function(){
		$('.listSump').css({'overflow':'none' , 'height':'auto'});
		$('.btnMore').remove();
		$('.life_thumb_list').css({'overflow':'none' , 'height':'auto'});
		return false;
	})

		$('.inner ul li').click(function(){
			var num = $(this).index();

			return false;
	})


	/*----더보기 클릭하면 보이기*/
	$('.btnMore').click(function(){
		$('.listSump').css({'overflow':'none' , 'height':'auto'});
		$('.btnMore').remove();
		$('.life_thumb_list').css({'overflow':'none' , 'height':'auto'});
		$('.list_wrap').css({'overflow':'none' , 'height':'auto'});

		console.log('et')

	})

	$('.btn_more').click(function(){
		$('.life_thumb_list>ul').css({'overflow':'none' , 'height':'auto'});
		$('.list_wrap>ul').css({'overflow':'none' , 'height':'auto'});
		//$('.btn_more').remove();


	})



	/*----product/processing 클릭하면 보이기*/
		$('.inner ul li').click(function(){
			var num = $(this).index();
			$(this).addClass('on').siblings().removeClass('on')
			$('[class="con'+num+'"]').css({'display':'block'}).siblings('div').css({'display':'none'});

		return false;
	})

	/*-----recruit/recru_job 클릭하면보이기*/
		$('.recr_job_con .tab li').click(function(){
			var num = $(this).index();
			$(this).addClass('on').siblings().removeClass('on')
			$('[class="jobline'+num+'"]').css({'display':'block'}).siblings('[class^=jobline]').css({'display':'none'});
		})



	/*-----business/steel/terminology t 질문보기*/
	$('ul.list_style li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	})


	/*-----------검색창나오기*/
	$('.de_select').click(function(){
		$('.de_select ul').css({'display':'block'})
	})

	$('.de_select ul').mouseleave(function(){
		$(this).css({'display':'none'})
	})

	$('.de_select ul li').click(function(){
		var litex = $(this).text();

		console.log($('.icone-1').text(litex))
	})


	/*----스크롤top버튼*/
	$(window).scroll(function(){
		var tp= $(window).scrollTop()
		if(tp<300){
			$(".top_btn").fadeOut()
		}
		else if(tp>=300){
			$(".top_btn").fadeIn()
		}

	})

	$(".top_btn").click(function(){
        $('body,html').animate({scrollTop:'0'},1000)

    });

	//화면사이즈바뀌면 top버튼 사라지기
	$(window).resize(function(){
		var wid = $(window).width()
		if(wid<=1300){
			$('.top_btn').css({'display':'none'})
		}
		else if(wid>1300){
			$('.top_btn').css({'display':'block'})
		}
	})


	//------메인모달

	var bodyH = $('body,html').height();

	function blind(){
		$('body').append('<div class="blind"><div class="close"></div>')
		.children('.blind').css({'height':bodyH}).fadeTo("500","0.8")
		$('.fullwrap').css({'position':'fixed' , 'width':'100%'})
		$('.close').fadeTo(0,1)
	}


	$('span.1-modal').click(function(){
		blind();
		var file1 = 'html/main/modal.html #modal_box1'

		$('body').append('<div class="modalfull"></div>')
		$('body').find('.modalfull').load(file1).fadeIn();

	})
	$('span.2-modal').click(function(){
		blind();
		var file2 = 'html/main/modal.html #modal_box2'

		$('body').append('<div class="modalfull"></div>')
		$('body').find('.modalfull').load(file2).fadeIn();

	})

	$('body').on('click','.close',function(){
         $('.modalfull').remove();
         $('.fullwrap').css({'position':'static'});
         $('.blind').remove()
        })



    /* 더 보기 */
    var listCnt = 0;
	var len = $(".list_style li").length;
	var lenna = Math.floor(len/10)


    $(".list_style li").hide();
    $(".list_style li[data-index='"+listCnt+"']").show();
    $('.btn_more').click(function(){
    	listCnt ++
    	$(".list_style li[data-index='"+listCnt+"']").show();

    	if(listCnt==lenna){
    		$('.btn_more').hide();
    	}
    })




    /* list가 10개 미만일떄 더 보기 버튼 안보이게*/
    var list_len = $(".list_style li").length;
    if(list_len <= 9){
        $(".btn_more").hide();
    }else{
        $(".btn_more").show();
    }


    //footer에 familysite 보이기
    $('body').on('click','.footer .footer_gnb4>a',function(){

    	if($('ul.family').is('.on') == 1 ){
    		$('ul.family').removeClass('on').hide().parent().find('.cli').css({'backgroundPositionY':'-90px'});
    	}
    	else if($('ul.family').is('.on') == 0){
    		$('ul.family').addClass('on').show().parent().find('.cli').css({'backgroundPositionY':'9px'});
    	}

    	})




})
