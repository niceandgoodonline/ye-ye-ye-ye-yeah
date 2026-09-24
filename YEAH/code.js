var audio=new Audio()
var r=[
  './ogg/1.ogg',
  './ogg/2.ogg',
  './ogg/3.ogg',
  './ogg/4.ogg',
]
function YEAH(){
  play_audio('./ogg/1.ogg')
}
function random(){
  play_audio(r[Math.floor(Math.random()*r.length)])
}
function play_audio(filename){
  audio.pause()
  audio.src=filename
  audio.load()
  audio.play()
}