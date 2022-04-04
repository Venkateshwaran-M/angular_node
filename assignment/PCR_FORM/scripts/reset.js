export function reset() {
    var table, tr, i;
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
    }
}