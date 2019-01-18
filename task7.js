
function playMusic(){
    var player = document.getElementById('player');
    if(player.paused){
        player.play();
        alert("播放背景音乐");
    }
    else{
        player.pause();
        alert("停止播放背景音乐");
    }

}
