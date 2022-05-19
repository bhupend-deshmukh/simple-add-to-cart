let count = 1;

document.addEventListener("DOMContentLoaded", function () {

    var div = document.getElementsByClassName('main-cart');
    var products = div[0].innerHTML
    document.getElementById("count").innerHTML = count;
    document.getElementById("plus").addEventListener("click", () => {
        count += 1;
        document.getElementById("count").innerHTML = count;
        showcards()
    });

    document.getElementById("minus").addEventListener("click", () => {
        count -= 1;
        document.getElementById("count").innerHTML = count;
        showcards()
    });

    function showcards() {
        div[0].innerHTML = ""
        for (var i=0; i < count; i++) {
            console.log(i);
            div[0].innerHTML += products
        }
    }
    
    showcards()
});