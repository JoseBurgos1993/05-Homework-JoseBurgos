// Javascript File
// By Jose Burgos

$("document").ready(function(){

    var savedText = ["","","","","","","","","","",""]; // 24 items

    $("#currentDay").text(moment().format("MMMM Do YYYY"));





    // Read and write from local storage \\
    function readData(){
        for(let i = 0; i < 11; i++){
            let temp = localStorage.getItem("savedText" + (i+8));
            if(temp !== null){
                savedText[i] = temp;
            }
        }
    }

    // Colors and writes to blocks
    function setupBlocks(){
        const hour = moment().get('hour');
        let index = 8;
        $(".row").each(function(){
            let block = $(this).find("textarea");

            if(index < hour){
                block.addClass("past");
            } else if(index == hour){
                block.addClass("present");
            } else{
                block.addClass("future");
            }

            block.val(savedText[index-8]); // Writes save data into the text area
            index++;
        });
    }


    // Save Button Event Listener \\
    $(".saveBtn").on("click", function(){
        let index = 8;
        $(".row").each(function(){
            let block = $(this).find("textarea");
            localStorage.setItem("savedText" + index, block.val());
            index++;
        });
    });

    readData();
    setupBlocks();

    /*
    function createBlocks(){
        // Creates all 24 blocks
        const container = $(".container");
        for(let i = 0; i < 24; i++){
            const newRow = $("<div>");
            newRow.addClass("row");
            createColumns(newRow, i);
            container.append(newRow);
        }
        container.append($("<br>"));
    }

    function createColumns(newRow, index){
        // Creates the 3 columns for the blocks

        const col1 = $("<div>");
        col1.addClass("col-md-2");
        col1.text(convertTime(index));
        col1.css("text-align", "right");
        const col2 = $("<div>");
        col2.addClass("col-md-8");
        const input = $("<input>");
        input.css("width", "100%");
        input.css("height", "100%");
        input.css("background-color", colorBlocks(index));
        input.css("outline-color", "black");
        input.attr("id", "form"+index);
        input.rows = "3";
        input.val(savedText[index]);
        console.log(input.value);
        col2.css("background-color", colorBlocks(index));
        col2.css("padding", "2px");
        col2.append(input);

        const col3 = $("<div>");
        col3.addClass("col-md-2");
        const newButton = $("<button>");
        //newButton.type = "button";
        newButton.addClass("btn btn-primary");
        newButton.html("<i class='fa fa-lock'></i>");
        newButton.css("width",'100%');
        newButton.css("height",'100%');
        newButton.attr("data-letter", index);
        //newButton.text(newButton.attr("data-letter"));
        col3.append(newButton);

        newRow.append(col1);
        newRow.append(col2);
        newRow.append(col3);

    }

    // Reads data from local storage to write into blocks \\
    function readData(){
        console.log(savedText);
        for(let i = 0; i < 24; i++){
            let temp = localStorage.getItem("savedText" + i);
            if(temp === null){
                savedText[i] = " ";
            } else{
                savedText[i] = temp;
            }
        }
        console.log(savedText);
    }

    // Colors the blocks \\
    function colorBlocks(index){
        //const hour = parseInt(moment().get('hour'));
        const hour = moment().get('hour');
        console.log(hour);
        if(index < hour){
            return "lightgray"; // PAST
        } else if(index == hour){
            return "lightcoral"; // PRESENT
        } else{
            return "greenyellow"; // FUTURE
        }
    }

    function convertTime(index){
        // Convert index value 0-23 into an AM/PM format to output onto the webpage
        if(index == 0){
            return "12:00 AM";
        } else if(index > 0 && index <12){
            return index + ":00 AM";
        } else if(index == 12){
            return "12:00 PM"
        } else if(index > 12){
            return (index - 12) + ":00 PM"
        }
    }
    readData();
    createBlocks();
    colorBlocks();

    // Save Button \\
    $("button").on("click", function(){
        // Activates when save button is pressed. Saves the text in the textfield to local storage. Use array?
        // Use something like $(this).index to the 0-23 value.
        console.log("You pressed index " + $(this).attr("data-letter"));
        //const row = $(".container").children()[parseInt($(this).attr("data-letter"))];
        //console.log($(".container"));

        const index = $(this).attr("data-letter");
        const form = $("#form"+index);
        const text = form.val();//"Hello good sir";
        savedText[index] = text;
        localStorage.setItem("savedText" + index, savedText[index]);

    });
    */
});
