function combineNames()
{
        firstName = document.getElementById("firstName").value;
        middleName = document.getElementById("middleName").value;
        lastName = document.getElementById("lastName").value;
        document.getElementById("result").innerHTML = firstName + " " + middleName  + " " + lastName;
}
