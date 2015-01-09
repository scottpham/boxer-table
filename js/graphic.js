//Change only the below two variables. Add dataTable options to the DataTable call 

//enter google sheets key here
var key = "1V72QqKVyioZSr7dBKrptenkF81Luhs26NZ8ta1cKZTM";

//"data" refers to the column name with no spaces and no capitals
//"title" is the column name as it appears in the published piece
//
var columns = [ 
    { "data": "name", "title": "Company" },
    { "data": "campaign1", "title": "2008-2010" },
    { "data": "campaign2", "title": "2012-2014" }];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="table compact" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        //
        $("#mySelection").DataTable({
            "data": data, //var where data is
            "columns": columns, //call up column object
            "order":[[0, "asc"]], //order on 3rd column
			"paging": false,
			"searching": false,
			"info": false	
            });
        }
});
//end of writeTable



