$(".agregar").on("click", (e) => {
    //Prevents page reload
    e.preventDefault();
    //Gets the text value from input field
    const itemName = $("#newText").val();

    if(itemName !== "") {
        //List element structure
        let msg = 
        `<li>
            <div class="lis">
                <p>${itemName}</p> <br>
                <button class="checar">check</button>
                <button class="del">delete</button>
            </div>
        </li>`
        //Appends item to list
        $(".Lista").append(msg)
        //Clears input field
        $("#newText").val("")
    } else {
        alert("Make sure to write an item before adding it");
    }
})

$(".Lista").on("click", "button", function(e){
    //Prevents page reload
    e.preventDefault();
    //Gets reference to button
    const btn = $(this);

    if(btn.text() === "check"){             //'check' button
        $(this).parent().toggleClass("chec")
    } else if(btn.text() === "delete") {    //'delete' button
        $(this).parent().remove()
    }

})