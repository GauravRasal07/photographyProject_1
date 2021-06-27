var wed = document.getElementById('wed');
var pre = document.getElementById('pre');
var post = document.getElementById('post');
var baby = document.getElementById('baby');
var mat = document.getElementById('mat');
var fash = document.getElementById('fash');
var imgBox = document.getElementById('expandImg_box');

var content = document.getElementById('gal_row');

function changeContent(folder, count) {
    content.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("column");
        newDiv.classList.add("gallery_column");
        let img = document.createElement('img');
        img.src = "assets/img/" + folder + "/" + i + ".jpeg";
        img.setAttribute('onclick', "myFunction(this);");
        newDiv.appendChild(img);
        content.appendChild(newDiv);
    };
}

pre.addEventListener('click', () => {
    changeContent("pre-wedding", 13);
});

post.addEventListener('click', () => {
    changeContent("post-wedding");
});

fash.addEventListener('click', () => {
    changeContent("fashion-shoot", 13);
});

wed.addEventListener('click', () => {
    changeContent("wedding", 12);
});

baby.addEventListener('click', () => {
    changeContent("baby-shoot",6);
});

mat.addEventListener('click', () => {
    changeContent("maternity", 6);
});

changeContent("pre-wedding", 13);

$('.gallery_nav_btn').on('click', function () {
    $(".gallery_nav_btn").removeClass('active');
    $(this).addClass('active');
})