$(document).ready(function(){
    $('[data-name="file"]').on('change',function(){
        
        // replace the .text below with getStrRes("no_files_attached_please_attach_an_image_file")

        if($ ('[data-name="file"]')[0].files.length === 0){
            $('[data-name="prompt"]').text("No files attached please attach an image file")
            $('.deposit-attachment-box').find('.btn').removeClass('attached');
        }
        else{
            $('[data-name="prompt"]').text($('[data-name="file"]').val().replace(/^.*\\/, ""));
            $('.deposit-attachment-box').find('.btn').addClass('attached');
        }
    })
});