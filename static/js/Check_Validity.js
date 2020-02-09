
// function checkin validity of input
function checkTable() {

    for (var x = 1; x < 82; x = x + 9) {
        if (!CheckRow(x))
            return false;
    }

    for (var x = 1; x < 10; x++) {
        if (!CheckCol(x))
            return false;
    }

    for (var x = 1; x < 60; x = x + 27) {
      
        if (!CheckBox(x) || !CheckBox(x + 3) || !CheckBox(x + 6))
            return false;
    }

        return true;
}


function CheckBox(num)
{
    var box = [];
    for (var i = num; i < num + 21; i = i + 6) {

        //debugger
        var counter = 3;
        while (counter--)
        {
            var tocheck = document.getElementById('i3' + i++).value;
            if (!isNaN(tocheck) && tocheck != '')
                box.push(tocheck);
        }
           
      
    }
        return CheckForDuplication(box);
       
}


// check whole column for not good input
function CheckCol(num) {

    var col = [];
    var bol_dup = true;
    for (var x = num; x < 82; x = x + 9) {
        var tocheck = document.getElementById('i3' + x).value;
        //var val1 = tocheck.getAttribute(value);

        if (!isNaN(tocheck) && tocheck != '')
            col.push(tocheck);
    } 
    return CheckForDuplication(col);   
    // alert(row.toString());
}


// check whole row for not good input
function CheckRow(num) {
    var row = [];

    for (var x = num; x < num + 9; x++) {
        var tocheck = document.getElementById('i3' + x).value;
        //var val1 = tocheck.getAttribute(value);

        if (!isNaN(tocheck) && tocheck != '')
            row.push(tocheck);
    }
    
    return  CheckForDuplication(row);
     
}


//  check array for duplication
function CheckForDuplication(array) {

    if (array.length < 2)
        return true;
    array.sort();

    for (var i = 1; i < array.length; i++) {
        if (array[i] == array[i - 1]) {         
            return false;          
        }
    }    
       return true;  
}