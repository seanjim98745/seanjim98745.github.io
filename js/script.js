$(function(){
    $("button").click(function(){

        $(this).siblings('.btn_style').removeClass('active');
        $(this).addClass('active');
        
        var target = $(this).attr("value");
       
        //按下按鈕取得屬性質
        // alert("!!");
        $(".portfolioItem").each(function(){
            $(this).animate({"opacity":0},200,function(){
                $(this).hide();
                

        if($(this).hasClass(target) || target == "all"){
            $(this).show();
            $(this).animate({"opacity": 1},100);
                }
            });
    });


    });
      
});


