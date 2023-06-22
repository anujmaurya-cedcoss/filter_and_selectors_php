import {data} from "../data.js";
let products = data();

// the main display method, that takes array as parameter and returns a string
function display(table) {
    let res = "";
    table.forEach(x => {
        res += '<tr>'
        res += `<td> ${x.id} </td>`;
        res += `<td> ${x.name} </td>`;
        res += `<td> ${x.brand} </td>`;
        res += `<td> ${x.os} </td>`;
        res += `<td> <button class = "hideButton" id = ${x.id}> x </button> </td>`;
        res += '</tr>';
    });
    return res;
}
// making two temporary tables to store the filtered data 
let os_table = structuredClone(products);
let brand_table = structuredClone(products);
// jQuery starts here
$(document).ready(function () {
    function displayTable() {
        let res = display(products);
        $('#mainTable-id').html(res);
    }
    displayTable(products);
    
    $("#filter-by-os").click(function() {
        let curr_os = $(this).find(':selected').val();
        if(curr_os != "") {
            os_table = [];
            products.forEach(x => {
                if(x.os == curr_os) {
                    os_table.push(structuredClone(x));
                }
            });
        }
        // this method will check both the filters and then call for display method
        callForPrint();
    });

    $("#filter-by-brand").click(function() {
        let curr_brand = $(this).find(':selected').val();
        if(curr_brand != "") {
            brand_table = [];
            products.forEach(x => {
                if(x.brand == curr_brand) {
                    brand_table.push(structuredClone(x));
                }
            });
        }
        callForPrint();
    });
    // this method will print the values common in os table and brand table
    function callForPrint() {
        let newTable = [];
        os_table.forEach(x => {
            let found = brand_table.find(item => item.id == x.id);
            if(found) {
                newTable.push(structuredClone(x));
            }
        });
        let res = display(newTable);
        $('#mainTable-id').html(res);
    }
    // method to hide on clicking 'x'
    $(document).on("click", ".hideButton",function() {
        $(this).parent().parent().hide();
    });
});
