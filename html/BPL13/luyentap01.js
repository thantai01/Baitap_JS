
function array1_create () {
    let x1 = 0;
    let array1 = [];
    let l1 = document.getElementById("input1").value;


    for(let i=0; i< l1;i++) {
        array1[x1]= Math.ceil(Math.random()*(10-1)+1)* x1;
        console.log("Element " + array1[i] + "Added at Index" + x1)
        x1++;
    }
    document.getElementById("output1").innerHTML = "[" + array1 +"]";

    let count1 = 0;
    let comp_nums = document.getElementById("input1_2").value;
    for(let i =0; i< l1; i++) {
        if(array1[i]<=comp_nums) {
            count1 = count1 +1;
        }
    }
    document.getElementById("result1").value = count1;
}

function array2_create () {
    let x2 = 0;
    let array2 = [];
    let l2 = document.getElementById("input3").value;

    for(let i=0; i< l2;i++) {
        array2[x2]= Math.ceil(Math.random()*(10-1)+1)* x2;
        console.log("Element " + array2[i] + "Added at Index" + x2)
        x2++;
    }
    document.getElementById("output2").innerHTML = "[" + array2 +"]";

    let min = array2[0];
    for(let i=1;i<array2.length;i++) {
        if(array2[i]<min) {
            min = array2[i];
        }
    }
    console.log(min);
    document.getElementById("output2_1").value = min;
    document.getElementById("result2_1").innerHTML = array2.indexOf(min);

    let max = array2[array2.length-1];
    for(let i=array2.length-2;i>=0;i--) {
        if(array2[i]>max) {
            max = array2[i];
        }
    }
    document.getElementById("output2_2").value = max;
    document.getElementById("result2_2").innerHTML = array2.indexOf(max);
}

function array3_create () {
    let x3=0;
    let array3 =[];
    let l3= document.getElementById("input4").value;
    let avg = 0;

    for(let i=0;i<l3;i++) {
        array3[x3] = Math.ceil(Math.random()*(100-1)+1)*x3;
        console.log("Element " + array3[i] + " Added to Index: " + x3);
        x3++;
        avg = avg + (i/x3+1);
    }
    document.getElementById("output3").innerHTML = "[" + array3 +"]";
    document.getElementById("result3_1").innerHTML = Math.round(avg);
    let max = array3[0];
    for(let i=1; i<array3.length ;i++) {
        if(array3[i]>max) {
            max = array3[i];
        }
    }
    console.log(max);
    document.getElementById("result3").innerHTML = max



}

function array4_create () {
    let x4 = 0;
    let array4 = [];
    let l4 = document.getElementById("input5").value;

    for (let i = 0; i < l4; i++) {
        array4[x4] = Math.ceil(Math.random() * (100 - 1) + 1) * x4;
        console.log("Element " + array4[i] + " Added to Index: " + x4);
        x4++;
    }
    document.getElementById("output4").innerHTML = array4;

}
function reverse4() {
    let display = document.getElementById('output4').innerHTML.split(',');
    console.log(display);
    console.log(display.reverse())
    document.getElementById('output4_1').innerHTML = display ;
}


    let arr5 = [];
    let x5 = 0;

    function add_arr5(){

        arr5[x5] = document.getElementById("input6").value;
        console.log("Element " + arr5[x5] + " added to Index "+ x5);
        x5++;
        document.getElementById("input6").innerHTML ="";

        let show = "";
        for( let i = 0; i< arr5.length;i++ ) {
            show = show + arr5[i] + "," ;
        }
        document.getElementById("result5").innerHTML = show ;

    let count = 0;
    for(let i=0; i<arr5.length; i++) {
            if(arr5[i]<0) {
                count = count + 1;
            }
        }
        document.getElementById("result5_1").innerHTML = count
    }



