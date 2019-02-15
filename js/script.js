function triangleTracker(){
  var a = parseInt(document.getElementById('side1').value);
  var b = parseInt(document.getElementById('side2').value);
  var c = parseInt(document.getElementById('side3').value);
  var triangle;
  //control flow that checks if a triangle is isoscles, equilateral, scalene or not a triangle.
  if(a+b >c && b+c >a && c+a>b){
    if(a===b && b===c && c===a ){
      triangle = "The triangle is equilateral. All the sides are equal.";
    }else if(a===b || b===c ||c===a){
      triangle ="The triangle is isoscles. Only two out of the three sides are equal.";
    }else{
      triangle = "The triangle is scalene. None of its sides are equal to one another. ";
    }
  }else{
    triangle = "The measurement you have put will not form a triangle. This is because the sum of two of its sides are equal to or less than the third side. ";
  }
  document.getElementById("answer").innerHTML = triangle;
}
//triangleTracker();
