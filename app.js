const form = document.getElementById("myForm");
const successBox = document.getElementById("successBox");
const formContainer = document.getElementById("formContainer");
const button = document.getElementById("submitBtn");
 
form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    
    if(name === "" || dob === "" || age === "" || state === "" || country === ""){
        shakeAnimation();
        return;
    }


    button.innerHTML = "Submitting...";
    button.style.transform = "scale(0.9)";

    setTimeout(() => {
        button.innerHTML = "Submitted ✅";
        button.style.background = "green";
        button.style.transform = "scale(1)";
    }, 1000);


    setTimeout(() => {
        form.style.opacity = "0";
        form.style.transform = "translateX(-100px)";
    }, 1200);

    
    setTimeout(() => {
        form.style.display = "none";

        successBox.style.display = "block";

        successBox.animate(
            [
                { transform: "scale(0)", opacity: 0 },
                { transform: "scale(1.2)", opacity: 1 },
                { transform: "scale(1)", opacity: 1 }
            ],
            {
                duration: 800,
                easing: "ease"
            }
        );

    }, 1800);
});



function shakeAnimation(){

    formContainer.animate(
        [
            { transform: "translateX(0px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(0px)" }
        ],
        {
            duration: 400
        }
    );
}