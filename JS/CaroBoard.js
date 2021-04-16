let board= []; //Cap nhat td + cap nhat board
let i = "";
let j = "";

let max = 5;
let turn = "";

for(i=0;i<max;i++) {
    board.push([]);
    for(j=0;j<max;j++) {
        board[i].push("&nbsp;&nbsp;");
    }
}
document.write("<table border='1' style='border-collapse: collapse'>");
for(i=0;i<board.length;i++) {
    document.write("<tr>");
    for(j=0;j<board.length;j++) {
        document.write("<td " +
            "style='width: 30px' height='30px' " +
            "id='"+ i + j +"'" +
            "onclick='click_cell("+i+","+j+")'>");
        document.write(board[i][j]);
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>")

function click_cell ( i ,j ) {
    document.getElementById("" + i + j).innerHTML = turn; // doi giao dien
    board[i][j] = turn; //cap nhat du lieu trong mang

    if(turn ==="X") {
        turn = "O"
    } else {
        turn = "X"
    }
}