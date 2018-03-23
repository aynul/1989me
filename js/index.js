function previewFile(){
       var preview = document.querySelector('#img-preview'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
           $(".link").show()
           onChange()
       }

       if (file) {
           reader.readAsDataURL(file);
        //reads the data as a URL
       } else {
           preview.src = "";
       }
}

function downloadFile(data) {
  var aTag = document.createElement('a');
  aTag.download = '1989me';
  aTag.href = data;
  aTag.target = '_blank';
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
  delete aTag;
}

function onChange(){
  html2canvas(document.querySelector("#export")) //, {async: false})
  .then(function(canvas) {
    var d = canvas.toDataURL("image/png");
    $('#output').html("<img id='download' height='476px' width='476px' alt='export' src='"+d+"' alt='from canvas'/>");
  })
  .catch(function(err) {
    console.error(err);
  });
}

// async function onChange(){
//   try {
//     const canvas = await html2canvas(document.querySelector("#export"))
//     var d = canvas.toDataURL("image/png");
//     $('#output').html("<img id='download' height='476px' width='476px' alt='export' src='"+d+"' alt='from canvas'/>");
//   } catch (err) {
//     console.log('error', err);
//   }
// }

function PrintDiv(){
  // var download_link = document.querySelector('#btn-export');
  var d = document.querySelector("#download")
  // var img = canvas.toDataURL("image/png");
  downloadFile(d.src)
}
