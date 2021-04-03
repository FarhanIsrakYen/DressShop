// document.write('');

// $( function() {
// $( "#datepicker" ).datepicker();
// } );

/** Back to top */
$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

        if (($(this).scrollTop() + $(window).height()) != $(document).height()) {
            $('#back-to-down').fadeIn();
        } else {
            $('#back-to-down').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $('#back-to-down').click(function () {

        $('html, body').animate({
            scrollTop: $($(this)).offset().top
        }, 400, 'linear');
        // $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });

        return false;
    });

    // $(function() {
    //     $('a[href*=#]').on('click', function(e) {
    //       e.preventDefault();
    //       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    //     });
    //   });
});

$(document).ready(function () {

    // Select Option: Plugin Name select2
    $('.clsSelect2').select2();

    // // Autocomple off in Date Field
    $('.datepicker, .datepicker-custom, .datepicker-branchOpen, .dateMonthPicker, .monthYearPicker').attr('autocomplete', 'off');

    // Input check for numeric value
    $(document).on("keyup", '.onlyNumber', function (e) {
        // no space allowed in namber
        if (e.keyCode == 0 || e.keyCode == 32) {
            alert("Please, enter the number value only");
            $(this).val($.trim($(this).val()));
            $(this).focus();
        } else if (e.which != 8 && e.which != 9 && (e.which < 48 || e.which > 57) && e.which < 96) {
            e.preventDefault();
            alert("Please, enter the number value only");
            $(this).val("");
            $(this).focus();
        }
    });


    // ## Custom star icon for required feild
    $('.RequiredStar').append('&nbsp; <span class="red-800">*</span>');

    $('.datepicker').datepicker({
        // format: 'dd-mm-yyyy',
        dateFormat: 'dd-mm-yy',
        orientation: 'bottom',
        autoclose: true,
        todayHighlight: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+10',
        //        startDate: '-3d'
    }).keydown(false);

    $('.datepicker-custom').datepicker({
        // format: 'dd-mm-yyyy',
        dateFormat: 'dd-mm-yy',
        orientation: 'bottom',
        autoclose: true,
        todayHighlight: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+10',
    }).keydown(false);

    $('.datepicker-branchOpen').datepicker({
        // format: 'dd-mm-yyyy',
        dateFormat: 'dd-mm-yy',
        orientation: 'bottom',
        autoclose: true,
        todayHighlight: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+10',
    }).keydown(false);

    $('.dateMonthPicker').datepicker({
        // format: 'dd-mm',
        dateFormat: 'dd-mm',
        orientation: 'bottom',
        autoclose: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+10',
    }).keydown(false);

    $('.monthYearPicker').datepicker({
        // format: 'mm-yyyy',
        dateFormat: 'mm-yy',
        startView: "months",
        minViewMode: "months",
        orientation: 'bottom',
        autoclose: true,
        todayHighlight: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+10',
    }).keydown(false);

    $('.datepickerNotRange').datepicker({
        // format: 'dd-mm-yyyy',
        dateFormat: 'dd-mm-yy',
        // orientation: 'bottom',
        autoclose: true,
        todayHighlight: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:+10',
        // startDate: '-3d'
    }).keydown(false);

    // disable mousewheel on a input number field when in focus
    // (to prevent Cromium browsers change the value when scrolling)
    $('form').on('focus', 'input[type=number]', function (e) {
        $(this).on('wheel.disableScroll', function (e) {
            e.preventDefault();
        });
    });

    $('form').on('blur', 'input[type=number]', function (e) {
        $(this).off('wheel.disableScroll');
    });

});

// <span class="red-800">*</span>

// function fnFyscalDateSeleteOption(id)
// {
//     console.log(id);
//     var startVal = $('#'+id).children("option:selected").val();

//     if (startVal === '01-01') {
//         $('#endFiscalYear').find('option[value="31-12"]').attr('selected', true);
//         $('#endFiscalYear').trigger('change');
//         $('#endFiscalYearI').val("31-12");
//     }
//     else {
//         $('#endFiscalYear').find('option[value="31-12"]').attr('selected', false);
//         $('#endFiscalYear').trigger('change');
//     }

//     if (startVal === '01-07') {
//         $('#endFiscalYear').find('option[value="30-06"]').attr('selected', true);
//         $('#endFiscalYear').trigger('change');
//         $('#endFiscalYearI').val("30-06");
//     }
//     else{
//         $('#endFiscalYear').find('option[value="30-06"]').attr('selected', false);
//         $('#endFiscalYear').trigger('change');

//     }
// }


$('.clockpicker').clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done',
    autoclose: true,
    twelvehour: true
}).keydown(false);

function goBack() {
    window.history.go(-1);
}


//if the letter is not Number,don't type anything
$(document).on('keypress', '.textAmount', function () {
    var text = $(this);
    text.val(text.val().replace(/[^0-9\.]/g, ''));
    if ((event.which != 46 || text.val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }

    if (this.value.indexOf(".") != -1) {
        this.value = this.value.slice(0, (this.value.indexOf(".")) + 5);
    }
});

//if the letter is not Decimal,don't type anything
$(document).on('keypress', '.textNumber', function () {
    var text = $(this);
    text.val(text.val().replace(/[^0-9\.]/g, ''));
    if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});

// function for dynamic role wise operations
function jsRoleWisePermission(set_status = null, action_name = null, action_link = null) {


    var actionHTML = '';

    if (set_status != null && action_name != null && action_link != null) {

        var set_status_arr = set_status.split(',');
        var action_name_arr = action_name.split(',');
        var action_link_arr = action_link.split(',');

     
        var position = 0;


        if ($.inArray("3", set_status_arr) != -1) { // View
            position = $.inArray("3", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnView">';
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }
            
            actionHTML += '<i class="icon wb-eye mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("2", set_status_arr) != -1) { // Edit
            position = $.inArray("2", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnEdit">'; 
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            actionHTML += '<i class="icon wb-edit mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("4", set_status_arr) != -1) { // Publish
            position = $.inArray("4", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnPublish">';
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }


           
            actionHTML += '<i class="icon fa-square-o mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("5", set_status_arr) != -1) { // Unpublish
            position = $.inArray("5", set_status_arr);


            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnUnpublish">';
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            
            actionHTML += '<i class="icon fa-check-square-o mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("6", set_status_arr) != -1) { // delete
            position = $.inArray("6", set_status_arr);

            var temp = "fnDelete('" + action_link_arr[position] + "');";

            
            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="javascript:void(0);" onclick="' + temp + '" title="' + action_name_arr[position] + '">';
                // class="btnDelete"
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }
           
            actionHTML += '<i class="icon wb-trash mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("7", set_status_arr) != -1) { // Approve
            position = $.inArray("7", set_status_arr);
            
            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnApprove">';
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            actionHTML += '<i class="icon fa fa-check-square mr-2 blue-grey-'+opacity+'" style="font-size: 18px;"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("9", set_status_arr) != -1) { // Change Password
            position = $.inArray("9", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnChangePassword">';
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            
            actionHTML += '<i class="icon fa fa-exchange mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("10", set_status_arr) != -1) { // Permission
            position = $.inArray("10", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnPermission">';
            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            actionHTML += '<i class="icon fa fa-qrcode mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("11", set_status_arr) != -1) { // print
            position = $.inArray("11", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="javascript:void(0)" onClick="window.print()" title="' + action_name_arr[position] + '" class="btnPrint">';

            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            actionHTML += '<i class="icon fa fa-print mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("12", set_status_arr) != -1) { // print pdf
            position = $.inArray("12", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="javascript:void(0)" onClick="window.print()" title="' + action_name_arr[position] + '" class="btnPrintPDF">';

            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }
            actionHTML += '<i class="icon fa fa-file-pdf-o mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("13", set_status_arr) != -1) { // Force Delete
            position = $.inArray("13", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnForceDelete">';

            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }

            actionHTML += '<i class="icon wb-scissor mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }

        if ($.inArray("14", set_status_arr) != -1) { // Permission Folder
            position = $.inArray("14", set_status_arr);

            var messageFlag = action_link_arr[position].includes("(message)=");
            var message = action_link_arr[position].replace("(message)=", "");
            var opacity = 600 ;
            if(messageFlag == false){
                actionHTML += '<a href="' + action_link_arr[position] + '" title="' + action_name_arr[position] + '" class="btnPermissionFolder">';

            }else{
                opacity = 400 ;
                actionHTML += '<a href="javascript:void(0)"  onclick="fnPermissionDeniedFor(\'' + message + '\');">'; 
            }
            
            actionHTML += '<i class="icon icon wb-folder mr-2 blue-grey-'+opacity+'"></i>';
            actionHTML += '</a>';
        }
    }

    return actionHTML;
}

function fnPermissionDeniedFor(text = null){
    swal({
        icon: 'warning',
        title: 'Access Denied',
        text: text,
    });

}


function fnPermissionDeniedFor(text = null){
    swal({
        icon: 'warning',
        title: 'Access Denied',
        text: text,
    });

}


$('#start_date').datepicker({
    dateFormat: 'dd-mm-yy',
    orientation: 'bottom',
    autoclose: true,
    todayHighlight: true,
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    onClose: function (selectedDate) {
        $("#end_date").datepicker("option", "minDate", selectedDate);
    }
});

$("#end_date").datepicker({
    dateFormat: 'dd-mm-yy',
    orientation: 'bottom',
    autoclose: true,
    todayHighlight: true,
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    onClose: function (selectedDate) {
        $("#start_date").datepicker("option", "maxDate", selectedDate);
    }
});


$(".clsQuantity").keydown(function (event) {
    if (event.key === '.') {
        event.preventDefault();
    }
    // console.log('cs js ');
});


$(".clsNotMinus").keydown(function (event) {
    if (event.key === '-') {
        event.preventDefault();
    }
    // console.log('cs js ');
});

// $(".clsQuantity").input(function (event) {
//     event.target.value = event.target.value.replace(/[^0-9]*/g,'');
// });

// Function for Excel Export
/**
 * Function for Excel Export
 * @param div class names for which print to excel, 
 * multiple name can be given by comma separate (HeadingDiv,ExportDiv)
 * 1st name should be heading div class name
 * @param filename given
 */
function fnDownloadExcel(targetDiv, filename) {

    $("table th").css("border", "1px solid #000");
    $("table td").css("border", "1px solid #000");

    var ExportContent = targetDiv.split(",");
    var ExportArray = [];

    for (var row = 0; row < ExportContent.length; row++) {
        ExportArray.push($('.' + ExportContent[row]).html());
    }

    let file = new Blob(ExportArray, {
        type: "application/vnd.ms-excel"
    });
    var link = document.createElement('a');

    link.href = window.URL.createObjectURL(file);
    link.download = filename + '.xls';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    $("table th").css("border", "1px solid #e4eaec");
    $("table td").css("border", "1px solid #e4eaec");
}

function getDownloadPDF() {
    window.print();
}

//////////////////// mfn

function toDate(dateStr) {
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}


////////////////////////// loader //////////////////

var loadFlag = false;

$(document).ajaxStart(function () {
    loadFlag = true;
    setTimeout(fnLoading(loadFlag), 500);
});

$(document).ajaxComplete(function () {
    loadFlag = false;
    fnLoading(loadFlag);
});

function fnLoading(loadFlag) {

    if (loadFlag === true) {
        $(".loader").show();
        $(".forLoader").addClass("loader-show");
    } else {
        $(".loader").hide();
        $(".forLoader").removeClass("loader-show");
    }
}


// sweetalert
$(document).on("click", ".btnDelete", function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    swal({
            title: "Are you sure to delete record?",
            text: "Once Delete, this will be permanently delete!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                window.location.href = link;
                swal(
                    'Deleted!',
                    'Record has been deleted.',
                    'success'
                )
            }
            // else{
            //   swal("Safe Data!");
            // }
        });
});

$(document).on("click", ".btnPublish", function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    var titleX = $(this).attr("title");

    swal({
            title: "Are you sure to " + titleX + " ?",
            text: "Once " + titleX + ", your record will be activated!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                window.location.href = link;
                swal(
                    titleX,
                    'Your record has been ' + titleX + '.',
                    'success'
                )
            }
        });
});

$(document).on("click", ".btnUnpublish", function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    var titleX = $(this).attr("title");

    swal({
            title: "Are you sure to " + titleX + " ?",
            text: "Once " + titleX + ", your record will be diactivated!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                window.location.href = link;
                swal(
                    titleX,
                    'Your record has been ' + titleX + '.',
                    'success'
                )
            }
            // else{
            //   swal("Status Publish!");
            // }
        });
});

//////////////// ONLY NUMBER CHECK INPUT WITHOUT DECIMALE POINT
$(document).on("keyup", '.onlyNumber', function (e) {
    // console.log(e.keyCode);
    // no space allowed in namber
    if (e.keyCode == 0 || e.keyCode == 32) {
        alert("Please, enter the number value only");
        $(this).val($.trim($(this).val()));
        $(this).focus();
    } else if (e.which != 8 && e.which != 9 && (e.which < 48 || e.which > 57) && e.which < 96) {
        e.preventDefault();
        alert("Please, enter the number value only");
        $(this).val("");
        $(this).focus();
    }
});

$(document).on("click", ".btnApprove", function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    swal({
            title: "Are you sure to approve this record?",
            text: "Once approve, this will be permanently approve!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                window.location.href = link;
                swal(
                    'Approved!',
                    'Your record has been Approved.',
                    'success'
                )
            }
        });
});

// This is for active menu
$(document).ready(function () {

    $('.site-menu li:not(:last-child)').css('border-bottom','1px solid #eee');
    $('li.site-menu-item.active').parents('li.site-menu-item.has-sub').addClass('active');

    var activeMenuName = $('li.site-menu-item.active.pageTitle').attr('menu_name');
    var activePageTitle = $('li.site-menu-item.active.pageTitle').attr('page_title');

    if (activePageTitle != null) {
        $('#tabTitle').html(activePageTitle);
        $('#pageName').html(activePageTitle);
    } else if (activeMenuName != null) {
        $('#tabTitle').html(activePageTitle);
        $('#brActiveMenu').html(activeMenuName);
        // console.log(activeMenuName)
    }
    $(function () {

        $(".CustomClass").children('.site-menu-sub').children('.site-menu-item .has-sub').on('mouseenter mouseleave', function (e) {

            var length = $(this).children('ul').children('li').children('ul').children('li').length;

            var index = $(this).parents('.CustomClass').index();

            // if (index >= 4)
            if (index >= 6) {
                if (length >= 1) {
                    $(this).children('ul').css('left', '-101%');
                    $(this).children('ul').children('li').children('ul').css('left', '-100%');
                }
            }

            // $(this).children('ul:last').css('left', '-101%');
            // $(this).children('ul:last').children('li').children('ul').css('left', '-100%');
        });

    });
});

/**
 * 
 * @param {string} field_id -> field id
 * @param {string} accept_file_type  -> file type approve, value accept 'image' or 'other'
 * @param {string} accept_file_size  -> file size in mb
 */
function validate_fileupload(field_id, accept_file_size = 1, accept_file_type = 'other') {

    var myFile = $('#' + field_id).prop('files');
    var filetype = myFile[0].type;
    var filesize = myFile[0].size / (1024 * 1024); // in mb

    var errorFileSize = false;
    var errorFileType = false;

    if (Number(filesize) > Number(accept_file_size)) {
        errorFileSize = true;
    }

    if (accept_file_type == 'image') {

        if (filetype == 'image/jpeg' ||
            filetype == 'image/png' ||
            filetype == 'image/bmp' ||
            filetype == 'image/gif' ||
            filetype == 'image/webp') {

            errorFileType = false;
        } else {
            errorFileType = true;
        }
    } else {
        if (filetype == 'image/jpeg' ||
            filetype == 'image/png' ||
            filetype == 'image/bmp' ||
            filetype == 'image/gif' ||
            filetype == 'image/webp' ||
            filetype == 'application/pdf' ||
            filetype == 'application/msword' ||
            filetype == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
            filetype == 'application/vnd.ms-excel' ||
            filetype == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            filetype == 'text/csv' ||
            filetype == 'application/vnd.ms-powerpoint' ||
            filetype == 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {

            errorFileType = false;
        } else {
            errorFileType = true;
        }
    }

    if (errorFileSize === true) {
        $('#' + field_id).val('');
        swal({
            icon: 'error',
            title: 'Error',
            text: 'File size must be equal or less than ' + accept_file_size + ' mb !!',
        });
    } else if (errorFileType === true) {
        $('#' + field_id).val('');
        swal({
            icon: 'error',
            title: 'Error',
            text: 'File format do not accept !!',
        });
    }
}

/** Input feild's default text empty on focus */
$("input[type=number], input[type=text]").focus(function () {
    if ($(this).val() == 0) {
        $(this).val('');
    }
});

$("input[type=number], input[type=text]").blur(function () {

    if($(this).attr('type') == 'number'){
        if ($(this).val() == '') {
            $(this).val(0);
        }
    }
    else{
        if ($(this).val() == '') {
            $(this).val('');
        }
    }
});

// $("input[type=number]").focusout(function () {
//     if ($(this).val() == '') {
//         $(this).val(0);
//     }
// });
