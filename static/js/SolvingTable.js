 function SolveSudoku(n) {

    console.log(n);

     //workPart1(n);

    if (n == 82)
    {
         win = true;
         calculating_mess.innerText = "";
        //debugger
        alert("win");

        return 1;
    }


    // check if there is a const value
      var ob = document.getElementById('i3' + n);
    if (ob.readOnly)
    {
        //debugger
      //  alert("cell:" +n+"value:"+ ob.value);


         SolveSudoku(n + 1);
           if (win)
            return true;
             return false;
    }



    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    shuffle(array);  // shuffling array


    for (var i =0; i < 9; i++) {
         var to_assign = array[0];

      //  alert("insert cell:" + n + " value" + to_assign);
        document.getElementById('i3' + n).value = to_assign;

       //'i3' + n.innerText = to_assign;
       // $("#i3" + n).load(to_assign);
       // $("#i3" + n).val(to_assign);



        //$("i3" + n).val(to_assign);

          var chek_tab_bol = checkTable();

        //if the inserted value is good
        if (chek_tab_bol)
        {
           // alert("cell:" + n + "\n" + "value:"+to_assign );
            if (SolveSudoku(n+1))
                return true;
         }


          //  alert("remove cell:" + n + " value" + to_assign);
         document.getElementById('i3' + n).value = '';

            //'i3' + n.innerText = '';
         // $("#i3" + n).val("");
           // $("#i3"+n).load("");




        array.shift();
    }


  //  debugger
    return false;

}


// shuffling the array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.setAttribute("style", "position:absolute;top:40%;left:20%;background-color:white;");
    el.innerHTML = msg;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
}


async function workPart1(n) {
  // Do one part of the process here
  // Then let the browser update, and make it start part 2 after that:

      for (i = 1; i < 1003332300; i++) {}

        ans= await document.getElementById('i3' + n).value ;
        document.getElementById('i3' + n).value=await ans ;

        //await  setTimeout(async function(){ alert("Hello"); }, 3000);


         workPart2();
}


function workPart2() {
for (i = 1; i < 1003332300; i++) {}

}