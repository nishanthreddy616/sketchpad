const canvas = document.getElementById('canvas');
const clear = document.getElementById('clear')
const ctx = canvas.getContext('2d');
    
let painting = false;




canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



function startPosition(e){
    painting =true;
    draw(e)
}

function endPosition(){
    painting = false;
    ctx.beginPath();
}

canvas.addEventListener("mousedown",startPosition);
canvas.addEventListener("mouseup",endPosition);
canvas.addEventListener("mousemove",draw);

function draw(e){
    if(!painting) return;
    ctx.lineWidth =10;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}





clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
})