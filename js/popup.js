// Pop Up JS Loads content via Ajax

	$('.signUpNow').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/registration.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
				
			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Thank You Pop Up (Pops  Up After Registering) 
	$('.thankYou').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/thankyou.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;

			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Complete Profile Popup 
	$('.thankYou').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/thankyou.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Update Info Popup 
	$('.updateInfo').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/updateInfo.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
				

			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Thank You Pop Up (Pops  Up After Registering) 
        $('.completeProfile').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/completeProfile.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });



        //Uploaded Receipt Popup 
		$('.uploadedReceipt').on('click', function(event){

			event.preventDefault();

			$('.overlay').hide();
		
			$.ajax('popUpContent/upload.html', {
				success: function (response) {
					$('.popBox').html(response).fadeIn();
					$('.overlay').fadeIn();
					return response;
				},
				error : function(request, errorType, errorMessage){
					alert('There was a problem loading the content. Please try again later.'); 
					//+ errorType + ' Message: ' + errorMessage
					return;

				},
				timeout : 20000 ,
			});
		
		console.log('ajax btn clicked');
		});


		//Enter Address Popup 
		$('.enterAddress').on('click', function(event){

			event.preventDefault();

			$('.overlay').hide();
		
			$.ajax('popUpContent/address.html', {
				success: function (response) {
					$('.popBox').html(response).fadeIn();
					$('.overlay').fadeIn();
					return response;
				},
				error : function(request, errorType, errorMessage){
					alert('There was a problem loading the content. Please try again later.'); 
					//+ errorType + ' Message: ' + errorMessage
					return;

				},
				timeout : 20000 ,
			});
		
		console.log('ajax btn clicked');
		});


/*------------- More Info Popups --------------*/


        //$2 Coupon Event Handler
        $('.coupon').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/couponInfo.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });
		
		
		
	//Facebook Cover Photo
        $('.facebookPhoto').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/facebookPhotoInfo.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });
		
	
	//pediaCare Thermometer Cover Photo
        $('.Thermometer').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/pediaCareThermometer.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

//PediaBear
        $('.PediaBear').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/PediaBear.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });


//learningTablet
        $('.learningTablet').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/learningTablet.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });



	//Even Column Heights 
	//check and update height on resize
    $(window).on('resize', heightCheck); 

    function heightCheck() {

    var col = $('.col');

      if ($('.spacer').is(':visible')) {

            var height = $('.getHeight').height();
            col.css('height', height);

      } else {

            col.css('height', 'auto');

      } 
      console.log('heightCheck()');
         
    }

    //close button code can be found at the bottom of the external page
	
