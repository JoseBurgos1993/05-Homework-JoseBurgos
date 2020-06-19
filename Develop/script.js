// Javascript File
// By Jose Burgos

$("document").ready(function(){
    // Initializes an array for our saved text
    var savedText = ["","","","","","","","","","",""]; // 24 items

    // Puts today's date near the top of the screen
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    // Returns the correct time to display on the left side \\
    function getTime(i){
        // AM. Adds 8 to 'i' because 'i' starts at 0, but our time starts at 8am
        if(i < 4) { return (i+8) + ":00 AM"; }
        // PM
        else{
            // By this point, 'i' will be 5, so we substract 4 to continue with 1pm and onwards
            if(i != 4){ return (i-4) + ":00 PM"; }
            // Noon
            else{ return "12:00 PM"; }
        }
    }

    // Returns class that will paint the text area the correct color based on time
    function colorBlock(i){
        const hour = moment().get("hour");
        if(i < hour){
            return "past";
        } else if(i == hour){
            return "present";
        } else{
            return "future";
        }
    }

    // Creates Text Area \\
    function createTextArea(i){
        const textArea = $("<textarea>");
        textArea.addClass("form-control " + colorBlock(i+8));
        textArea.attr("rows", "3");
        textArea.val(savedText[i]);
        return textArea;
    }

    // Creates Save Button \\
    function createButton(){
        // Creates new button and applies the appropriate classes
        const newButton = $("<button>");
        newButton.addClass("btn btn-primary saveBtn");

        // This creates the lock icon that appears on the button
        const lock = $("<i>");
        lock.addClass("fa fa-lock");
        newButton.append(lock);

        return newButton;
    }


    // Read from local storage \\
    function readData(){
        for(let i = 0; i < 11; i++){
            // Items are saved as 'savedText8','savedText9', etc.
            // Hence why we add 8 to 'i' when reading from memory. The reason I don't just start my
            // loop at 8 is because we would then have to subtract 8 when accessing the savedText array.
            let temp = localStorage.getItem("savedText" + (i+8));
            if(temp !== null){
                savedText[i] = temp;
            }
        }
    }

    // Create Blocks \\
    function createBlocks(){
        // Finds our container
        const container = $(".container");

        for(let i = 0; i < 11; i++){
            // Create a new row
            const newRow = $("<div>");
            newRow.addClass("row");

            // Create the 3 divs for the row
            const div1 = $("<div>");
            const div2 = $("<div>");
            const div3 = $("<div>");

            // Apply the appropriate classes to each div
            div1.addClass("col-md-2 time-block hour");
            div2.addClass("col-md-8");
            div3.addClass("col-md-2");

            // Calls functions that will add content to each div
            div1.text(getTime(i));
            div2.append(createTextArea(i));
            div3.append(createButton());

            // Appends the divs onto the row, then appends the row onto the container
            newRow.append(div1);
            newRow.append(div2);
            newRow.append(div3);
            container.append(newRow);
        }
    }
    // Functions to call when starting the page \\
    readData();
    createBlocks();

    // Save Button Event Listener \\
    $(".saveBtn").on("click", function(){
        let index = 8;
        $(".row").each(function(){
            let block = $(this).find("textarea");
            localStorage.setItem("savedText" + index, block.val());
            index++;
        });
    });
});
