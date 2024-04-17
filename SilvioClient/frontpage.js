document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('profile')
    video.addEventListener('timeupdate', function(){
    if(this.currentTime >= 22) {
        this.currentTime = 0;
        this.mute();
        this.play();
    }
    });


    video.addEventListener('click', function(e){
        e.preventDefault();
        return false;
    });

    video.oncontextmenu = function(){
        return false;
    }; 
    
  
});

