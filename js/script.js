function triangleTracker() {
  var a = parseInt(document.getElementById('side1').value);
  var b = parseInt(document.getElementById('side2').value);
  var c = parseInt(document.getElementById('side3').value);
  var side =[a,b,c];
  var triangle;
  //control flow that checks if a triangle is isoscles, equilateral, scalene or not a triangle.
  if (isNaN(side[0]) || isNaN(side[1]) || isNaN(side[2])) {
    triangle = "Please enter all three sides of the triangle. Only numerical values are accepted.";
  } else if (side[0] === 0 || side[1] === 0 || side[2] === 0) {
    triangle = "O(zero) is not a valid entry. Please try again."
  } else {
    if (side[0] + side[1] > side[2] && side[0] + side[2] > side[1] && side[1] + side[2] > side[0]) {
      if (side[0] === side[1] && side[1] === side[2] && side[2] === side[0]) {
        triangle = "The triangle is equilateral. All the sides are equal.";
      } else if (side[0] === side[1] || side[1] === side[2] || side[2] === side[0]) {
        triangle = "The triangle is isosceles. Only two out of the three sides are equal.";
      } else {
        triangle = "The triangle is scalene. None of its sides are equal to one another. ";
      }
    } else {
      triangle = "The measurements you have entered will not form a triangle. This is because the sum of two of its sides are equal to or less than the third side. ";
    }
  }

  document.getElementById("answer").innerHTML = triangle;
}
//triangleTracker();
