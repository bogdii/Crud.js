
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["keywords"] = document.getElementById("keywords").value;
    formData["big_amount"] = document.getElementById("big_amount").value;
    formData["campaign"] = document.getElementById("campaign").value;
    formData["status"] = document.querySelector('[name="status"]:checked').value || 'OFF';
    formData["town"] = 
    document.getElementById("town").value;
    formData["radius"] = 
    document.getElementById("radius").value;
  console.log(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.keywords;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.big_amount;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.campaign;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.status;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.town;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.radius;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("keywords").value = "";
    document.getElementById("big_amount").value = "";
    document.getElementById("campaign").value = "";
    document.querySelector("[name='status']:checked").checked = false;
    document.getElementById("town").value = "";
    document.getElementById("radius").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("keywords").value = selectedRow.cells[1].innerHTML;
    document.getElementById("big_amount").value = selectedRow.cells[2].innerHTML;
    document.getElementById("campaign").value = selectedRow.cells[3].innerHTML;
    document.getElementsByName("status").value = selectedRow.cells[4].innerHTML;
    document.getElementById("town").value = selectedRow.cells[5].innerHTML;
    document.getElementById("radius").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.keywords;
    selectedRow.cells[2].innerHTML = formData.big_amount;
    selectedRow.cells[3].innerHTML = formData.campaign;
    selectedRow.cells[4].innerHTML = formData.status;
    selectedRow.cells[5].innerHTML = formData.town;
    selectedRow.cells[6].innerHTML = formData.radius;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
