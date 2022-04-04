var rIndex,
    table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value,
        aadharNo = document.getElementById("aadharNo").value,
        city = document.getElementById("city").value,
        date = document.getElementById("city").value,
        result = document.getElementById("result").value,
        tot = document.getElementById("tot").value;
    labname = document.getElementById("labname").value;




    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    } else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    } else if (age === "") {
        alert("Age Connot Be Empty");
        isEmpty = true;
    } else if (aadharNo === "") {
        alert("aadhar number cannot be Empty");
        isEmpty = true;
    } else if (city === "") {
        alert("city is not defined");
        isEmpty = true;
    } else if (date === "") {
        alert("date of birth is not defined");
        isEmpty = true;
    } else if (result === "") {
        alert("result is not checked");
        isEmpty = true;
    } else if (tot === "") {
        alert("time is not entered");
        isEmpty = true;
    } else if (labname === "") {
        alert("Please enter the lab name");
        isEmpty = true;
    }


    return isEmpty;
}

// add Row
function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            cell8 = newRow.insertCell(7),
            cell9 = newRow.insertCell(8),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            age = document.getElementById("age").value,
            aadharNo = document.getElementById("aadharNo").value;
        city = document.getElementById("city").value;
        date = document.getElementById("date").value;
        result = document.getElementById("result").value;
        tot = document.getElementById("tot").value;
        labname = document.getElementById("labname").value;





        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        cell4.innerHTML = aadharNo;
        cell5.innerHTML = city;
        cell6.innerHTML = date;
        cell7.innerHTML = result;
        cell8.innerHTML = tot;
        cell9.innerHTML = labname;

        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("aadharNo").value = this.cells[3].innerHTML;
            document.getElementById("city").value = this.cells[4].innerHTML;
            document.getElementById("date").value = this.cells[5].innerHTML;
            document.getElementById("result").value = this.cells[6].innerHTML;
            document.getElementById("tot").value = this.cells[7].innerHTML;
            document.getElementById("labname").value = this.cells[8].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;
    aadharNo = document.getElementById('aadharNo').value;
    city = document.getElementById("city").value;
    date = document.getElementById("date").value;
    result = document.getElementById("result").value;
    tot = document.getElementById("tot").value;
    labname = document.getElementById("labname").value;

    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
        table.rows[rIndex].cells[2].innerHTML = age;
        table.rows[rIndex].cells[3].innerHTML = aadharNo;
        table.rows[rIndex].cells[4].innerHTML = city;
        table.rows[rIndex].cells[5].innerHTML = date;
        table.rows[rIndex].cells[6].innerHTML = result;
        table.rows[rIndex].cells[7].innerHTML = tot;
        table.rows[rIndex].cells[8].innerHTML = labname;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("aadharNo").value = "";
    document.getElementById("city").value = "";
    document.getElementById("date").value = "";
    document.getElementById("result").value = "";
    document.getElementById("tot").value = "";
    document.getElementById("labname").value = "";
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("find");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function show() {
    var x = document.getElementById("table");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}