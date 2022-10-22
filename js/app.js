function changeText(){
    var userName = document.getElementById('name').value;
    document.getElementById('result').innerHTML = 'Welcome ' + userName;
}

function selectOddEven() {
    var oddEven = document.getElementById('oddeven').value;
    if (oddEven % 2 !== 0){
        document.getElementById('select_number').innerText = 'Your number is Odd';
    }else {
        document.getElementById('select_number').innerText = 'Your number is Even';
    }
}

function changeInputText(){
    var num = document.getElementById('number').value;
    document.getElementById('grade').innerText = 'You have got ';
    if (num >= 80 && num <= 100) {
        document.getElementById('grade').innerText = 'You have got A+';
    }else if (num >= 70 && num <= 79) {
        document.getElementById('grade').innerText = 'You have got A';
    }else if (num >= 60 && num <= 69) {
        document.getElementById('grade').innerText = 'You have got A-';
    }else if (num >= 50 && num <= 59) {
        document.getElementById('grade').innerText = 'You have got B';
    }else if (num >= 40 && num <= 49) {
        document.getElementById('grade').innerText = 'You have got C';
    }else if (num >= 33 && num <= 39) {
        document.getElementById('grade').innerText = 'You have got D';
    }else if (num >= 0 && num <= 32) {
        document.getElementById('grade').innerText = 'You have got F';
    }else {
        alert('YOU CANNOT GET THIS MARK')
    }
        
}

/*function sum (num1, num2) {
    document.write(num1 + num2 + '<br></br>')
}

sum(12, 13)
sum(13, 14)
sum(14, 15)
sum(15, 16)*/

/*for (var i = 1; i <= 100; i++) {
    document.write(i + '<br>');
}*/
for (var i = 100; i >= 1; --i) {
    document.write(i + '<br>');
}

