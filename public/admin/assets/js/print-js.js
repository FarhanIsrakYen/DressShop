$(document).ready(function () {
    /* print report */        
    
    function print(elem) {
        var mywindow = window.open('','PRINT', 'height=600,width=800');
       
        mywindow.document.write('<html><head>');
        var style = '<style>' +
        '.reportBody table {border-spacing: 0px !important;}' +
        '.reportBody table, .reportBody table thead tr th, .reportBody table tbody tr td {border: 1px solid black !important;}' +
        '.text-center {text-align: center;}' +'.text-right {text-align: right;}'+'.text-left {text-align: left;}' + 
        '@page { size: landscape; }' +
        '</style>';
        mywindow.document.write(style);
        mywindow.document.write('</head><body>');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        
        mywindow.print();
        top.mywindow.close(elem);
        // setTimeout(" mywindow.close()", 5000);
        
        return true;
    }
    $(document).on('click','#btnPrint', function () {
     
        print('reportingDiv');
        
    });
    /* end printing report */

});