let click = document.getElementById("demo")
click.addEventListener("click", onclick)
function onclick() {
    alert("Xin chao");
    let data=confirm("Dung hay sai")
    console.log(data)
    alert(data)
    let data2=prompt("Nhap cai gi do")
    console.log(data2)
    document.getElementById("demo").innerHTML="123"
    document.write("Xoa het di")
}

let select=document.getElementById("demo")
select.addEventListener("mouseover", mouseover)
select.addEventListener("mouseout", mouseout)

function mouseover() {
    document.getElementById("demo").style.color="red"
}
function mouseout() {
    document.getElementById("demo").style.color="black"
}