$(document).ready(function () { });

/**
 * This function is user for Ajax Select Box Load.
 *
 * @Param 1: Set / Implement Feild ID (Ex:company_id) @type String
 * @Param 2: Feild Value @type String
 * @Param 3: Table Name (Encoded base_encode64) @type String
 * @Param 4: Condition column name (Table column name for where condition) @type String
 * @Param 5: Select column feilds  @type String should be comma separated & must first feild is primary key
 * @Param 6: Url
 * @param 7: use for edit value
 * @return html string
 *
 */

function fnAjaxSelectBox(FeildID = null, FeildVal = null, TableName = null, WhereColumn = null, SelectColumn = null, URL = null, SelectedVal = null, isActive = null, fixedRowName = null, fixedRowValue = null) {

    // console.log(isActive);
    if (FeildID != null && FeildVal != null && TableName != null && WhereColumn != null && SelectColumn != null) {

        $.ajax({
            method: "GET",
            url: URL,
            dataType: "text",
            data: { FeildVal: FeildVal, TableName: TableName, WhereColumn: WhereColumn, SelectColumn: SelectColumn, SelectedVal: SelectedVal, isActive: isActive, fixedRowName: fixedRowName, fixedRowValue:fixedRowValue },
            success: function (data) {
                if (data) {
                    $('#' + FeildID)
                        .empty()
                        .html(data);
                    // .trigger('change');
                    // .selectpicker('refresh');
                }
            }
        });
    }
}


function fnAjaxSelectBoxObj(FeildID = null, FeildVal = null, TableName = null, WhereColumn = null, SelectColumn = null, URL = null, SelectedVal = null) {
    // console.log('data');


    // console.log(SelectedVal);
    if (FeildID != null && FeildVal != null && TableName != null && WhereColumn != null && SelectColumn != null) {
        // console.log('data');
        $.ajax({
            method: "GET",
            url: URL,
            dataType: "json",
            data: {FeildVal: FeildVal, TableName: TableName, WhereColumn: WhereColumn, SelectColumn: SelectColumn, SelectedVal: SelectedVal},
            success: function (data) {
                $('#' + FeildID).empty();

                var selectArr = atob(SelectColumn);
                selectArr = selectArr.split(",");

                var idC  = selectArr[0];

                var nameC = selectArr[1];

                $('#' + FeildID).append("<option value=''>Select One</option>");
                $.each(data, function (index, value){
                    var SelectText ='';
                    if (SelectedVal != null) {

                        if (SelectedVal == value[idC]) {
                            SelectText = "selected='selected'";

                        }
                    }

                    $('#' + FeildID).append("<option value='"+value[idC]+"' "+SelectText+" >"+value[nameC]+"</option>");
                });
            }
        });
    }
}


function fnAjaxSelectBoxForTargetBranch(FeildID = null, FeildVal = null, TableName = null, WhereColumn = null, SelectColumn = null, URL = null, SelectedVal = null) {

    // console.log(SelectedVal);
    if (FeildID != null && FeildVal != null && TableName != null && WhereColumn != null && SelectColumn != null) {

        $.ajax({
            method: "GET",
            url: URL,
            dataType: "text",
            data: { FeildVal: FeildVal, TableName: TableName, WhereColumn: WhereColumn, SelectColumn: SelectColumn, SelectedVal: SelectedVal },
            success: function (data) {
                if (data) {
                    // console.log(data);
                    $('#' + FeildID)
                        .empty()
                        .html(data);
                    // .trigger('change');
                    //                    .selectpicker('refresh');
                }
            }
        });
    }
}

function fnAjaxSelectBoxCode(FeildID = null, FeildVal = null, TableName = null, WhereColumn = null, SelectColumn = null, URL = null, SelectedVal = null) {

    // console.log(SelectedVal);
    if (FeildID != null && FeildVal != null && TableName != null && WhereColumn != null && SelectColumn != null) {

        $.ajax({
            method: "GET",
            url: URL,
            dataType: "text",
            data: { FeildVal: FeildVal, TableName: TableName, WhereColumn: WhereColumn, SelectColumn: SelectColumn, SelectedVal: SelectedVal },
            success: function (data) {
                if (data) {
                    // console.log(data);
                    $('#' + FeildID)
                        .empty()
                        .html(data);
                    // .trigger('change');
                    //                    .selectpicker('refresh');
                }
            }
        });
    }
}

function fnDeleteCheck(urlto = null, URL = null, key, columnname = null, condition2 = null, table1 = null, table2 = null, table3 = null) {
    if (key != null) {

        $.ajax({
            method: "GET",
            url: URL,
            dataType: "text",
            data: { key: key, columnname: columnname, condition2: condition2, table1: table1, table2: table2, table3: table3 },
            success: function (data) {
                if (data == 0) {
                    var link = urlto + "/" + key;
                    swal({
                        title: "Are you sure to delete data?",
                        text: "Once Delete, this will be permanently delete!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {

                                // if(urlto == "reload_datatable"){
                                //     $('.clsDataTable').DataTable().ajax.reload();
                                // }
                                // else{
                                //     window.location.href = link;
                                // }

                                window.location.href = link;
                                
                                // $('.clsDataTable').DataTable().ajax.reload();
                                swal(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        });

                } else {
                    swal({
                        icon: 'error',
                        title: "Sorry !",
                        text: "You need to delete child Data First!",

                    });

                }
            }
        });
    }
}

function fnAjaxDeleteReloadTable(urlto, RowID, tableClass = "clsDataTable") {
    
    swal({
        title: "Are you sure to delete data?",
        text: "Once Delete, this will be permanently delete!",
        icon: "warning",
        buttons: true,
        dangerMode: true,

    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                method: "GET",
                url: urlto,
                dataType: "json",
                data: {
                    RowID: RowID,
                },
                success: function (data) {
                    if (data) {
                        let message = false;

                        if(data.status == "error"){
                            message = data.message;
                        }

                        if(message === false){
                            if (data.status === 'success') {
                                $('.' + tableClass).DataTable().ajax.reload();
                                toastr.success(data.message);
                            }
                        }
                        else{
                            swal({
                                icon: 'warning',
                                title: 'Error',
                                text: message,
                            });
                        }
                    }
                }
            });
        }
    });
}

//check Duplicate value on database in real time
/**
 * fnCheckDuplicate this is unique check function
 * @param {string (require)} tableName DB Table name with base encode 64 which you want to check
 * @param {string (require)} columnName DB Table collumn name with && separate which you want to check
 * @param {string (require)} columnValue collumn value with && separate which you want to check
 * @param {string (require)} url  route name
 * @param {string (require)} fieldID  HTML Field ID
 * @param {string} idtxt field id where you want to show message
 * @param {string} errtxt Message body
 * @param {string} editableID this param use for update portion, provide primary key
 */
function fnCheckDuplicate(tableName, columnName, columnValue, url, fieldID, idtxt = null, errtxt = null, editableID = null) {
    var aFlag = true;
    var message = '';

    if (tableName === null || tableName === '' || tableName === undefined) {
        aFlag = false;
        message = "Table name can not be empty";
    }

    if (columnName === null || columnName === '' || columnName === undefined) {
        aFlag = false;
        message = "Collumn name can not be empty";
    }


    if (url === null || url === '' || url === undefined) {
        aFlag = false;
        message = "URL can not be empty";
    }

    if (aFlag === true) {
        $.ajax({
            type: "get",
            url: url,
            data: { tableName: tableName, columnName: columnName, columnValue: columnValue, editableID: editableID },
            dataType: "json",
            success: function (data) {
                if(data.exists > 0){
                    $('#' + idtxt).html('<i class="fa fa-times" aria-hidden="true"></i> "'+$('#'+ fieldID).val()+'" is duplicate ' + errtxt);
                    $('#'+ fieldID).val('');
                    setTimeout(function(){ $('#'+ fieldID).trigger('change'); }, 500);
                    
                }
                else if(data.exists === -1){
                    $('#' + idtxt).html('<i class="fa fa-times" aria-hidden="true"></i> Condition mismatch.');
                    $('#'+ fieldID).val('');
                    setTimeout(function(){ $('#'+ fieldID).trigger('change'); }, 500);
                }
                else{
                    $('#' + idtxt).html('');
                }
            },
        });
    }
    else {
        $('#'+ fieldID).val('');
        console.log(message);
    }


}

