let count = 0;

function update(){
    document.getElementById("count").innerText = count;
}

function increment(){
    count++;
    update();
}

function decrement(){
    count--;
    update();
}

function oddIncrement(){
    if(count % 2 !== 0){
        count++;
        update();
    }else{
        alert("Number is not Odd");
    }
}

function evenIncrement(){
    if(count % 2 === 0){
        count++;
        update();
    }else{
        alert("Number is not Even");
    }
}