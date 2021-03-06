/**
 * Created by tan on 17-4-5.
 */

//全局配置文件

var site = "http://www.game.com/";      //网站根目录

var images = site + 'images/';          //图片服务器路径

var ip = '127.0.0.1:8282';              //ip地址+端口

var time = 900;                         //每局游戏时长 15分钟

/*
var site = "http://game5.tw1996.com/";      //网站根目录

var images = site + 'images/';          //图片服务器路径

var ip = '112.74.20.150:8282';              //ip地址+端口

var time = 900;                         //每局游戏时长 15分钟

/************************配置房间信息*******************************/
var room = new Array();

var num = 1;
for(i = 0; i < 15; i++) {
    room[i] = new Object();
    room[i].name = (i <= 8 ?  '五子棋新手' : '五子棋高手') + eval(i + 1) + '区';
    room[i].children = new Array();
    for(j = 0; j < 10; j++) {
        room[i].children[j] = new Object();
        room[i].children[j].name = num + '号房间';
        room[i].children[j].href = site + 'room.php?room_id=' + num;
        num++;
    }
}

//debug
//console.log(room);



/************************公用函数**********************************/
//获取当前格式化时间
function CurentTime()
{
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //秒

    var clock = year + "-";
    if(month < 10)
        clock += "0";
    clock += month + "-";
    if(day < 10)
        clock += "0";
    clock += day + " ";

    if(hh < 10)
        clock += "0";
    clock += hh + ":";

    if (mm < 10) clock += '0';
    clock += mm;

    if (ss < 10) clock += '0';
    clock += ss;
    return clock;
}

