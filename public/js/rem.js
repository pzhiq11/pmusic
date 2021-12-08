
function remSize(){
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    var totalCss = document.getElementById("app");
    

    if(deviceWidth >=750 && deviceWidth <=1000){
        deviceWidth = 750
        totalCss.style.marginLeft=0+'px';
        document.documentElement.style.fontSize = (deviceWidth/7.5)+'px';
    }
    if(deviceWidth>=1000){
        deviceWidth = 1080
        totalCss.style.marginLeft=550+'px';
        document.documentElement.style.fontSize = (deviceWidth/15)+'px';
    }
    if(deviceWidth<=320){
        deviceWidth = 320
        document.documentElement.style.fontSize = (deviceWidth/7.5)+'px';
    }
    if(deviceWidth>=320 && deviceWidth <=750 ){
        totalCss.style.marginLeft=0+'px';
        document.documentElement.style.fontSize = (deviceWidth/7.5)+'px';
    }
    
    document.querySelector('body').style.fontSize = 0.3 +'rem'
    //设计稿是750px
    // 设置一半的宽度
    // 1rem == 100px的设计稿宽度 表达一半的设计稿宽度就是3.75rem
}
remSize()
window.onresize = function(){
    remSize()
}