 //select sidenavbar
var sidenavbar = document.querySelector(".side-navbar")

function shownavbar()
{
    sidenavbar.style.left = "0"
}
function closenavbar()
{
    sidenavbar.style.left = "-60%"
}


// select Subscribe-plan
var Subscribe_plan = document.querySelector(".Subscribe-plan")

function enroll()
{
    Subscribe_plan.style.display = "block"
}
function closesubplan()
{
    Subscribe_plan.style.display = "none"
}