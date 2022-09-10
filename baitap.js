// Bài 1
function minInteger() {
    var X = 0;
    var N = 0;
    while (X < 10000) {
        N++;
        X = X + N;
    }
    document.getElementById('ketqua').style.display = 'block';
    document.getElementById('ketqua').innerHTML = "Kết quả Số nguyên dương nhỏ nhất: " + N;
}

//Bài 2
function sum() {
    var S = 0;
    var X = document.getElementById('so_X').value * 1;
    var N = document.getElementById('so_N').value * 1;
    if(X<0||N<0){
        alert("Đăng Nhập lại dữ liệu");
        return;
    }
    if (N === 0) {
        S = 1;
    }
    else {
        for (i = 1; i <= N; i++) {
            S = S + Math.pow(X, i);
        }
    }
    document.getElementById('ketquabai2').style.display = 'block';
    document.getElementById('ketquabai2').innerHTML = "Tổng số của S với n = " + N + " là " + S;
}

// Bài 3
function result(){
    var S=1;
    var N=document.getElementById('so_N').value*1;
    if (N<0){
        alert("Nhập lại dữ liệu");
        return;
    }
    if (N===0){
        S=1
    }
    else {
        for(i=1;i<=N;i++){
            S=S*i
        }
    }
    document.getElementById('GiaiThua').style.display = 'block';
    document.getElementById('GiaiThua').innerHTML = "Giai thừa của n = " + N + " là " + S;
}

// Bài 4
function themdiv(){
    var content="";
    for (i=1;i<=10;i++){
        if(i%2===0){
            content+="<div class='bg-danger'>Div số chẵn</div>"
        }
        else{
            content+="<div class='bg-primary'>Div số lẻ</div>"
        }
    }
    document.getElementById('DIV').innerHTML=content;
}