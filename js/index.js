function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
      var download = document.querySelector('a')
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
           download.href = reader.result;  
       }

       if (file) {
           reader.readAsDataURL(file);
        //reads the data as a URL
       } else {
           preview.src = "";
           download.href = "";
       }
  }

  previewFile();

function PrintDiv(div)
{
    html2canvas((div), {
        onrendered: function(canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "MaSimulation.png");
      }
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}