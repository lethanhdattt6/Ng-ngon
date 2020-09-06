let op = " ";
let Input = (a) => {
    op += a;
    operation.innerHTML = op;
}

let Result=() =>{
    result.innerHTML = eval(op)
}
let Delete=() =>{
    op = " ";
    operation.innerHTML = op;
    result.innerHTML = "LỰA CHỌN NÀY KHÔNG HỢP LỆ : Lựa chọn này không đúng do nó có hại cho sức khỏe. Hãy bấm vào lựa chọn 2...";
}
let Delete1=() =>{
    op = " ";
    operation.innerHTML = op;
    result.innerHTML = "Ok ngủ sớm đi rồi mai dậy học!! Ngủ ngon mơ đẹp các kiểu vào nha mày!! Bye Bye...";
}
const target = document.querySelector("#clock");
function getTime(){
    const time =new Date();
    target.innerHTML = time.toLocaleTimeString();
    return setTimeout(getTime, 1000);
}
getTime();



