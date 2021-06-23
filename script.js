 function isPalindrome() {
     let reversed = "";

     let str = document.getElementById("cadena").value;
     let i = str.length;
     let x = i;


     for (x >= 0; x--;) {
         reversed = reversed + str.charAt(x);
     }
     if (str == reversed) {
         alert("Es Palindormo");
     } else {
         alert("No es Palindromo");
     }
 }

