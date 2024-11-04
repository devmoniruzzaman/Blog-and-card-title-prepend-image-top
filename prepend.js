jQuery(".industries-product-items .product-item").each(function () {
            var modhead = jQuery(this).find('.dsm_card_title')
            var modimg = jQuery(this).find('.dsm_card_image_wrapper ');
                 jQuery(modhead).prependTo(modimg);
           });
