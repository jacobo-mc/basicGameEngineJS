class soundFile{
  constructor(src,looping){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute('loop',looping);
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    play(){
      this.sound.play();
    }
    stop(){
      this.sound.pause();
    }
}
