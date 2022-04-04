export function myFunction() {
    var input, i, table, tr;
    input = document.getElementById("find").value;
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    if (tr.length === 1) {
        document.getElementById("msg").innerHTML = "there is no record found";
    } else {
        for (i = 1; i < tr.length; i++) {
            if (table.rows[i].cells[10].innerHTML === input) {
                var newRow1 = table1.insertRow(table1.length),
                    cell1 = newRow1.insertCell(0),
                    cell2 = newRow1.insertCell(1),
                    cell3 = newRow1.insertCell(2),
                    cell4 = newRow1.insertCell(3),
                    cell5 = newRow1.insertCell(4),
                    cell6 = newRow1.insertCell(5),
                    cell7 = newRow1.insertCell(6),
                    cell8 = newRow1.insertCell(7),
                    cell9 = newRow1.insertCell(8),
                    cell10 = newRow1.insertCell(9),
                    cell11 = newRow1.insertCell(10);
                cell1.innerHTML = table.rows[i].cells[0].innerHTML;
                cell2.innerHTML = table.rows[i].cells[1].innerHTML;
                cell3.innerHTML = table.rows[i].cells[2].innerHTML;
                cell4.innerHTML = table.rows[i].cells[3].innerHTML;
                cell5.innerHTML = table.rows[i].cells[4].innerHTML;
                cell6.innerHTML = table.rows[i].cells[5].innerHTML;
                cell7.innerHTML = table.rows[i].cells[6].innerHTML;
                cell8.innerHTML = table.rows[i].cells[7].innerHTML;
                cell9.innerHTML = table.rows[i].cells[8].innerHTML;
                cell10.innerHTML = table.rows[i].cells[9].innerHTML;
                cell11.innerHTML = table.rows[i].cells[10].innerHTML;
            }
        }
    }
}