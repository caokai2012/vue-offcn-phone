var deviceWidth = document.documentElement.clientWidth;//获取html宽度（设备宽度）
// 720可以根据实际设计稿的宽度进行修改
if(deviceWidth>640){
    deviceWidth = 640;
}
var fs = (deviceWidth*100)/640;
document.documentElement.style.fontSize = fs + 'px';

