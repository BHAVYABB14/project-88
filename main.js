canvas=document.getElementById("myCanvas");
ctx=canvas.getcontext("2d");

rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;

rover_y=10;

function add(){
    background_img_tag = new Image();

    background_img_tag.onload = uploadbackground;

    background_img_tag.src = background_image;

    rover_img_tag = new Image();

    rover_img_tag.onload = uploadrover;

    rover_img_tag.src = rover_image;


}
function uploadbackground(){

    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);



}

function uploadrover(){

    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keycode;
    console.log(keypressed);
    if (keypressed == '38'){
        up();
        console.log("up");
    

    }
if (keypressed == '40'){
down();
console.log("down");


}
if (keypressed == '37'){
    Left();
    console.log("left");


}
if (keypressed == '39'){
right();
console.log("right");

}



}
funtion up(){
    if(rover_y>=0){
rover_y=rover_y-10;
console.log("when_up_arrow_is_pressed,x="+rover_x+"and_y="+rover_y);
uploadbackground();
uploadrover();


    }

}        
          
      


