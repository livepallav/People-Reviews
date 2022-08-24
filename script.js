//array of objects
const review = [
    {
        id:1,
        name:"susan smith",
        job:"web developer",
        img:"j1.jpg",
        text:"rem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea a quae accusantium commodi facere harum pariatur cumque voluptatum hic maiores voluptate aliquid, culpa earum, quo quod iusto minus dn"
    },
    {
        id:2,
        name:"scbdwsikb smith",
        job:"webewmceik ",
        img:"j2.jpg",
        text:" aliquam voluptatum iste odit, soluta dolores, placeat beatae numquamLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam voluptate temporibus, explicabo voluptates sapiente omnis eaque! Fugiat sequi illo mollitia!"
    },
    {
        id:3,
        name:"ncwieuh sneu",
        job:"mjieown",
        img:"j3.jpg",
        text:" sit, amet consectetur adipisicing elit. Possimus ullam nesciunt provident labore ratione doloremque tempora eaque consectetur magni expedita, asperiores, iste fugiat perferendis quis Lorem ipsum dolor  cupiditate inventore omnis veritatis soluta."
    },
    {
        id:4,
        name:"reopivn ownf" ,
        job:"lweif",
        img:"j4.jpg",
        text:" Repellendus eveniet tempore quis ratione! Corporis sed blanditiis aliquid in quod architecto asperiores,Lorem ipsum dolor sit amet consectetur adipisicing elit. eligendi maxime veritatis. Tempora quas illo debitis magni aliquid."
    }
];

const img = document.getElementById('personimg');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById("info");

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const random = document.querySelector('.randombutton');

let currentitem = 0;

//load initial item 
//what will happen as soon as my website loads
window.addEventListener('DOMContentLoaded', function(){
   showperson(currentitem);
});

//show person based on item
function showperson(person){
    const item = review[person];
    img.src = item.img;
    // we can do like this also. we dont write line 52 and directly write img.src=review[currentitem].img (line 53)
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
//show next 
 right.addEventListener('click', function(){
    currentitem++;
    if(currentitem>review.length-1){
    currentitem =0;
    }
    showperson(currentitem);
 });

 //show previous
 left.addEventListener('click', function(){
    currentitem--;
    if(currentitem<0){
    currentitem = review.length -1;
    }
    showperson(currentitem);
 });