$(document).ready(function(){
    $('[data-name="file"]').on('change',function(){
        
        // replace the .text below with getStrRes("no_files_attached_please_attach_an_image_file")

        if($ ('[data-name="file"]')[0].files.length === 0){
            $('[data-name="prompt"]').text("No files attached please attach an image file")
            $('.deposit-attachment-box').removeClass('attached');
            $('.deposit-attachment-box').find('.btn, h3, [data-name="file"]').show();
        }
        else{
            $('[data-name="prompt"]').text($('[data-name="file"]').val().replace(/^.*\\/, ""));
            $('.deposit-attachment-box').addClass('attached');
            $('.deposit-attachment-box').find('.btn:not([data-name="btnremove"]), h3, [data-name="file"]').hide();
            $('.deposit-attachment-box').find('[data-name="btnremove"]').show().on('click',function(){
                $('[data-name="prompt"]').parent().find('.btn:first-child').remove();
                $('[data-name="prompt"]').text("No files attached please attach an image file")
                $('.deposit-attachment-box').find('.btn:not([data-name="btnremove"]), h3, [data-name="file"]').show();
                $('.deposit-attachment-box').removeClass('attached');
                $('.deposit-attachment-box').find('[data-name="btnremove"]').hide();
            });
            $('.deposit-attachment-box').find('[data-name="prompt"]').parent().prepend('<button class="btn"><i class="fas fa-paperclip"></i></button>');
        }
    })
});