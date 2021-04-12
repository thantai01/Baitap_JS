function answer1() {
    let b = document.getElementById("input1").value;
    let b_s = ( b ** 2);
    document.getElementById("output1").value = b_s;
}
function answer2() {
    let a_a = document.getElementById("input2").value;
    let b_b = document.getElementById("input3").value;

    let c = document.getElementById("slb1");
    let c_str = c.options[c.selectedIndex].value;


    if (c_str === "3") {
        let s_tri = (1 / 2) * a_a * b_b;
        document.getElementById("output2").value = s_tri;
    } else {
        let s_tgl = a_a * b_b;
        document.getElementById("output2").value = s_tgl;
    }
}
function answer3() {
    let a3 = document.getElementById("input4").value;
    let b3 = document.getElementById("input5").value;
    let c3 = document.getElementById("input6").value;
    let delta = (b3 ** 2) - (4* a3 * c3);
    let x1 = "";
    let x2 = "";
    let x = "";

    if (a3 == 0) {
        document.getElementById("out1").value = "Không phải ptrình bậc 2"
    } else if (a3 !== 0) {
        if (delta > 0) {
            x1 = (-b3 + Math.sqrt(delta))/(2*a3);
            x2 = (-b3 - Math.sqrt(delta))/(2*a3);

            document.getElementById("out1").value = "2 nghiệm";
            document.getElementById("output3").value = x1;
            document.getElementById("output4").value = x2;
        } else if (delta === 0) {
            x = -b3 / 2 * a3;

            document.getElementById("out1").value = "1 nghiệm";
            document.getElementById("output3").value = x;
        } else {
            document.getElementById("out1").value = "Vô nghiệm";
            document.getElementById("output3").value = "none";
            document.getElementById("output4").value = "none";
        }
    }
}
function answer4() {
    let a4 = document.getElementById("input7").value;
    let b4 = document.getElementById("input8").value;
    if (a4 == 0) {
        if (b4 == 0) {
            document.getElementById("check2").value = "x";
        }else {
            document.getElementById("check3").value = "x";
        }
    }else {
        let x4 = - b4 / a4;
        document.getElementById("output5").value = x4;
        document.getElementById("check1").value = "x";
    }
}

function answer5() {
    let a5 = document.getElementById("input9").value;
    let a5_i= Number.isInteger("a5");
    alert(a5_i);


}
function answer6() {
    let a6 = document.getElementById("input10").value;
    let b6 = document.getElementById("input11").value;
    let c6 = document.getElementById("input12").value;

    if (a6 > 0 ) {
        if (b6 > 0) {
            if (c6 > 0) {
                document.getElementById("checkbox1").checked = true;
            }
        }
    }else if (a6 + b6 > c6) {
        document.getElementById("checkbox1").checked = true;
    }else if (b6 + c6 > a6) {
        document.getElementById("checkbox1").checked = true;
    }else if (a6 + c6 > b6) {
        document.getElementById("checkbox1").checked = true;
    }else {
        document.getElementById("checkbox2").checked = true;
    }
}

