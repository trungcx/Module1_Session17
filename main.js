//Ex 2 - Bài 9:  Kiểm tra ký tự,  trả về số lần xuất hiện
function class_ex2_no9_checkChar_fnt(){
    let inputOriginal = document.getElementById("class_ex2_no9_inputOriginal").value;
    let char = document.getElementById("class_ex2_no9_char").value;
    let inputArray = inputOriginal.split("");
    let result = document.getElementById("class_ex2_no9_result");
    result.innerHTML = (inputArray.filter(charElement => charElement == char)).length;
    // let temp = (inputArray.filter(charElement => charElement == char));
    // console.log(temp.length);
}
//Ex 2 - Bài 3: Viết hàm tính giai thừa 
function class_ex2_no3_factorial_fnt(number){
    if(number == 0){
        return 1;
    }
    return number*class_ex2_no3_factorial_fnt(number-1);
}
function class_ex2_no3_factorial_call_fnt(){
    let class_ex2_no3_number = parseInt(document.getElementById("class_ex2_no3_input").value);
    document.getElementById("class_ex2_no3_result").innerHTML = `${class_ex2_no3_number}! = `+ class_ex2_no3_factorial_fnt(class_ex2_no3_number);
}