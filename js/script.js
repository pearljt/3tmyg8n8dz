
$( document ).ready(function() {

	var wrapper_width = window.innerWidth*0.25
	var wrapper_height = (wrapper_width/4)*3


	// setting
	// import fonts
	var fontdata
	var noLatin = []

		const FontArray = []
		$.ajax({
		    url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDpJHSumtll0K3WLx_QGbikom7kxKgAxw4",
		    type: "GET",
		    dataType: 'json',
		    cache: true,
		    success: function (data, status, error) {
		      getlist(data, status, error)
		    },
		    error: function (data, status, error) {
		      console.log('error', data, status, error);
		    }
		});
		function getlist(data, status, error){
		    fontdata = data
		    for (var i = 0; i < data.items.length ; i++) {
		    	FontArray.push(i)
		    }
			fontarray()
		}
		function fontarray(){
			for (var i = 0; i < fontdata.items.length ; i++) {
				var Font = document.createElement("div");
				var checkbox = document.createElement("input");
					checkbox.type="checkbox" 
					checkbox.value = i
					checkbox.classList.add('fontlist')
				Font.appendChild(checkbox);  
				Font.innerHTML += fontdata.items[i].family
				document.getElementById("fontlist_wrapper").appendChild(Font); 
			}
		}

	// import objects
		objectarray()
		function objectarray(){
			for (var i =  0; i < FontsInUseArray.length; i++) {
				var FontsInUseObject = document.createElement("div");
				var checkbox = document.createElement("input");
					checkbox.type="checkbox" 
					checkbox.value = i
	    			checkbox.classList.add('objectlist')
				FontsInUseObject.appendChild(checkbox);  
				FontsInUseObject.innerHTML += FontsInUseArray[i].name 
				document.getElementById("objectlist_wrapper").appendChild(FontsInUseObject); 
			}
			$('#objectlist_wrapper input[type="checkbox"]').on('change', function() {
			   $('#objectlist_wrapper input[type="checkbox"]').not(this).prop('checked', false);
				var k = $(this).val()
				var contenttype = FontsInUseArray[k].content_type
				$(' #contentlist_wrapper > div').hide()
				$('.'+contenttype).show()
			});
		}


		var all_selected = false
			$('#selectall').click(function(){
				if(all_selected){
			   		$('#fontlist_wrapper input[type="checkbox"]').prop('checked', false);
			   		$('#selectall').html('Select All')
					all_selected = false
				}else{
			   		$('#fontlist_wrapper input[type="checkbox"]').prop('checked', true);
			   		$('#selectall').html('Deselect All')
					all_selected = true
				}
			});


	// import strings
		string_array()
		function string_array(){
				var sentence = document.createElement("div");
	    		sentence.classList.add('sentence')
				sentence.innerHTML += 'Sentence'
				document.getElementById("contentlist_wrapper").appendChild(sentence);
			for (var i = ContentTypeArray.sentence.length - 1; i >= 0; i--) {
				var sentence = document.createElement("div");
	    			sentence.classList.add('sentence')
				var checkbox = document.createElement("input");
					checkbox.type="checkbox" 
					checkbox.value = ContentTypeArray.sentence[i]
	    			checkbox.classList.add('contentlist')
				sentence.appendChild(checkbox);  
				sentence.innerHTML += ContentTypeArray.sentence[i]
				document.getElementById("contentlist_wrapper").appendChild(sentence); 
			}
				var character = document.createElement("div");
	    		character.classList.add('character')
				character.innerHTML += 'Character'
				document.getElementById("contentlist_wrapper").appendChild(character);
			for (var i = ContentTypeArray.character.length - 1; i >= 0; i--) {
				var character = document.createElement("div");
	    			character.classList.add('character')
				var checkbox = document.createElement("input");
					checkbox.type="checkbox" 
					checkbox.value = ContentTypeArray.character[i]
	    			checkbox.classList.add('contentlist')
				character.appendChild(checkbox);  
				character.innerHTML += ContentTypeArray.character[i]
				document.getElementById("contentlist_wrapper").appendChild(character); 
			}
				var specialCharacter = document.createElement("div");
	    		specialCharacter.classList.add('specialCharacter')
				specialCharacter.innerHTML += 'specialCharacter'
				document.getElementById("contentlist_wrapper").appendChild(specialCharacter);
			for (var i = ContentTypeArray.specialCharacter.length - 1; i >= 0; i--) {
				var specialCharacter = document.createElement("div");
	    			specialCharacter.classList.add('specialCharacter')
				var checkbox = document.createElement("input");
					checkbox.type="checkbox" 
					checkbox.value = ContentTypeArray.specialCharacter[i]
	    			checkbox.classList.add('contentlist')
				specialCharacter.appendChild(checkbox);  
				specialCharacter.innerHTML += ContentTypeArray.specialCharacter[i]
				document.getElementById("contentlist_wrapper").appendChild(specialCharacter); 
			}
				var paragraph = document.createElement("div");
	    		paragraph.classList.add('paragraph')
				paragraph.innerHTML += 'Paragraph'
				document.getElementById("contentlist_wrapper").appendChild(paragraph);
			for (var i = ContentTypeArray.paragraph.length - 1; i >= 0; i--) {
				var paragraph = document.createElement("div");
	    			paragraph.classList.add('paragraph')
				var checkbox = document.createElement("input");
					checkbox.type="checkbox" 
					checkbox.value = ContentTypeArray.paragraph[i]
	    			checkbox.classList.add('contentlist')
				paragraph.appendChild(checkbox);  
				paragraph.innerHTML += ContentTypeArray.paragraph[i]
				document.getElementById("contentlist_wrapper").appendChild(paragraph); 
			}
			$('#contentlist_wrapper input[type="checkbox"]').on('change', function() {
			   $('#contentlist_wrapper input[type="checkbox"]').not(this).prop('checked', false);
			});
		}


	//default style
		default_style()
		function default_style(){
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = 
				'.title{\
	                width:'+wrapper_width+'px;\
	            }\
				.wrapper, .wrapper_title{\
	                width:'+wrapper_width+'px;\
	                height:'+wrapper_width*3/4+'px;\
	                overflow: hidden;\
	            }\
	            .wrapper, .wrapper *{\
	                position: absolute;\
	                padding: 0;\
	                margin: 0;\
	                left: 0;\
	                top: 0;\
	                box-sizing: border-box;\
	                background-size: contain;\
	                background-repeat: no-repeat;\
	            }'
			document.getElementsByTagName('head')[0].appendChild(style);
		}


// generating
	$('#generate').click(function(){
		initiate()

		var selectedobject
		var objectlist = document.getElementsByClassName('objectlist')
		for (var i = objectlist.length - 1; i >= 0; i--) {
			if(objectlist[i].checked){
				selectedobject = objectlist[i].value
				create_style(selectedobject)
 				generate_color(selectedobject)
			}
		}


		var fontlist = document.getElementsByClassName('fontlist')
		var checkedfont_length = 0
		for (var i = 0; i <  fontlist.length; i++) {
			if(fontlist[i].checked){
				checkedfont_length++
				import_font(fontlist[i].value, checkedfont_length, selectedobject)
				build_image(selectedobject, checkedfont_length, fontlist[i].value)
			}
		}
	})



function initiate(){

	var generated_fonts = document.getElementsByTagName('link');
	for (var i=0, max = generated_fonts.length; i < max; i++) {
	    generated_fonts[0].parentNode.removeChild(generated_fonts[0]);
	}

	var generated_styles = document.getElementsByTagName('style');
	for (var i=2, max = generated_styles.length; i < max; i++) {
	    generated_styles[2].parentNode.removeChild(generated_styles[2]);
	}

	var generated_wrappers = document.getElementById("whole");
	while (generated_wrappers.firstChild) {
	    generated_wrappers.removeChild(generated_wrappers.firstChild);
	}

}

// var closest = counts.reduce(function(prev, curr) {
//   return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
// });



	function import_font(fontvalue, k, selectedobject){
		var apiUrl = [];
		apiUrl.push('https://fonts.googleapis.com/css?family=');
		apiUrl.push(fontdata.items[Number(fontvalue)].family.replace(/ /g, '+'));

		var font_varients_array = []
		for (var i = 0; i < FontsInUseArray[selectedobject].number_of_textbox; i++) {


			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==300){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("300i")){
							font_varients_array.push('300i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("400i")){
							font_varients_array.push('400i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("200i")){
							font_varients_array.push('200i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("300")||fontdata.items[Number(fontvalue)].variants.includes("regular")){
							font_varients_array.push('300');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("400")){
							font_varients_array.push('400');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("200")){
							font_varients_array.push('200');
					}
				}
			}

			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==400){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("400i")){
							font_varients_array.push('400i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("500i")){
							font_varients_array.push('500i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("300i")){
							font_varients_array.push('300i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("400")){
							font_varients_array.push('400');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("500")){
							font_varients_array.push('500');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("300")||fontdata.items[Number(fontvalue)].variants.includes("regular")){
							font_varients_array.push('300');
					}
				}
			}


			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==500){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("500i")){
							font_varients_array.push('500i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("600i")){
							font_varients_array.push('600i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("400i")){
							font_varients_array.push('400i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("500")){
							font_varients_array.push('500');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("600")){
							font_varients_array.push('600');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("400")){
							font_varients_array.push('400');
					}
				}
			}


			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==600){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("600i")){
							font_varients_array.push('600i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("700i")){
							font_varients_array.push('700i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("500i")){
							font_varients_array.push('500i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("600")){
							font_varients_array.push('600');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("700")){
							font_varients_array.push('700');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("500")){
							font_varients_array.push('500');
					}
				}
			}


			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==700){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("700i")){
							font_varients_array.push('700i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("800i")){
							font_varients_array.push('800i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("600i")){
							font_varients_array.push('600i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("700")){
							font_varients_array.push('700');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("800")){
							font_varients_array.push('800');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("600")){
							font_varients_array.push('600');
					}
				}
			}


			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==800){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("800i")){
							font_varients_array.push('800i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("900i")){
							font_varients_array.push('900i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("700i")){
							font_varients_array.push('700i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("800")){
							font_varients_array.push('800');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("900")){
							font_varients_array.push('900');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("700")){
							font_varients_array.push('700');
					}
				}
			}


			if(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight==900){
				font_varients_array.push(':');
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic' ){
					if(fontdata.items[Number(fontvalue)].variants.includes("900i")){
							font_varients_array.push('900i');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("800i")){
							font_varients_array.push('800i');
					}
				}else{
					if(fontdata.items[Number(fontvalue)].variants.includes("900")){
							font_varients_array.push('900');
					}else if(fontdata.items[Number(fontvalue)].variants.includes("800")){
							font_varients_array.push('800');
					}
				}
			}





		}
		var font_varients_array_dup = [];
		$.each(font_varients_array, function(i, el){
		    if($.inArray(el, font_varients_array_dup) === -1) font_varients_array_dup.push(el);
		});
		apiUrl.push(font_varients_array_dup.join().replace(":,", ":"))
		// 		if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic'){
		// 			font_varients_array.push(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight+'i');
		// 		}else{
		// 			font_varients_array.push(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight);
		// 		}

		// 	}else{

		// 		if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic'){
		// 			if(fontdata.items[Number(fontvalue)].variants.includes('400i')){
		// 			font_varients_array.push('400i');
		// 			}else{
		// 				Math.floor(str)
		// 			}
		// 		}else{
		// 			font_varients_array.push('400');
		// 		}

		// 	}
		// }









								                // font_style: 'inherit',
						                // line_height: 1.5,
						                // text_align: 'left',
						                // text_transform: 'initial'
		// if(noRegular.some(item => item == fontvalue)){
		// 	}else{
		// 		apiUrl.push(':');
		// 		apiUrl.push('regular');
		// }

		if(noLatin.some(item => item == fontvalue)){
			}else{
				apiUrl.push('&subset=');
				apiUrl.push('latin');
		}

		apiUrl.push('&display=swap');

		var url = apiUrl.join('');
	    var fontlink = document.createElement('link'); 
	    fontlink.href = url;
	    fontlink.rel = "stylesheet"; 
	    head = document.head || document.getElementsByTagName('head')[0],
	    head.appendChild(fontlink);

		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML ='.wrapper_'+k+' div{font-family:'+fontdata.items[Number(fontvalue)].family+'}'
		document.getElementsByTagName('head')[0].appendChild(style);
	}



	function build_image(selectedobject, k, font){
		var wrapper_title = document.createElement("div");
		wrapper_title.classList.add('wrapper_title')
		var wrapper = document.createElement("div");
		wrapper.classList.add('wrapper')
		wrapper.classList.add('wrapper_'+k)

		var selectedcontent
		var contentlist = document.getElementsByClassName('contentlist')
			for (var i = contentlist.length - 1; i >= 0; i--) {
				if(contentlist[i].checked){
					var selectedcontent = contentlist[i].value
				}
			}
		var title = document.createElement("div");
		title.classList.add('title')
		title.innerHTML = fontdata.items[font].family
		wrapper_title.appendChild(title)

		if(FontsInUseArray[selectedobject].restrictions.avoid_font_category.includes(fontdata.items[font].family)){
			var Avoid = document.createElement("div");
			Avoid.classList.add('avoid')
			Avoid.innerHTML = 'Avoid This Font'
		wrapper_title.appendChild(Avoid)
		}
		for (var i = 0; i < FontsInUseArray[selectedobject].number_of_textbox; i++) {
			var textbox = document.createElement("div");
			textbox.classList.add('textbox')
			textbox.classList.add('textbox_'+i)
			textbox.innerHTML = selectedcontent




			wrapper.appendChild(textbox);
		}
		wrapper_title.appendChild(wrapper); 
		document.getElementById("whole").appendChild(wrapper_title); 
	}


	function create_style(selectedobject){


		var style = document.createElement('style');

		style.type = 'text/css';
		if(!FontsInUseArray[selectedobject].color.generate_color){
			style.innerHTML += 
    		'.wrapper {\
    			background: '+FontsInUseArray[selectedobject].color.background+'!important;\
    		}.textbox {\
    			color: '+FontsInUseArray[selectedobject].color.color+'!important;\
    		}'
    	}
    		for (var i = FontsInUseArray[selectedobject].number_of_textbox-1; i >= 0; i--) {
					style.innerHTML += 
	    				'.textbox_'+i+'{\
			                width: '+FontsInUseArray[selectedobject].textbox_style[i].whole.width+'%;\
			                opacity: '+FontsInUseArray[selectedobject].textbox_style[i].whole.opacity+';\
			                display:'+FontsInUseArray[selectedobject].textbox_style[i].whole.display+';\
							\
			                justify-content: '+FontsInUseArray[selectedobject].textbox_style[i].optional.justify_content+';\
			                clip-path: '+FontsInUseArray[selectedobject].textbox_style[i].optional.clip_path+';\
			                white-space: '+FontsInUseArray[selectedobject].textbox_style[i].optional.white_space+';\
			                mix-blend-mode: '+FontsInUseArray[selectedobject].textbox_style[i].optional.mix_blend_mode+';\
			                border-left: '+FontsInUseArray[selectedobject].textbox_style[i].optional.border_left+';\
							\
			                left: '+FontsInUseArray[selectedobject].textbox_style[i].location.left+'%;\
			                top: '+FontsInUseArray[selectedobject].textbox_style[i].location.top+'%;\
			                padding: '+FontsInUseArray[selectedobject].textbox_style[i].location.padding+'%;\
			                padding-top: '+FontsInUseArray[selectedobject].textbox_style[i].location.padding_top+'%;\
			                padding-bottom: '+FontsInUseArray[selectedobject].textbox_style[i].location.padding_bottom+'%;\
			                transform: '+FontsInUseArray[selectedobject].textbox_style[i].location.transform+';\
							\
			                font-size: '+(FontsInUseArray[selectedobject].textbox_style[i].font.font_size/630)*wrapper_height+'px;\
			                font-style: '+FontsInUseArray[selectedobject].textbox_style[i].font.font_style+';\
			                font-weight: '+FontsInUseArray[selectedobject].textbox_style[i].font.font_weight+';\
			                line-height: '+FontsInUseArray[selectedobject].textbox_style[i].font.line_height+'em;\
			                text-align:  '+FontsInUseArray[selectedobject].textbox_style[i].font.text_align+';\
			                text-transform:  '+FontsInUseArray[selectedobject].textbox_style[i].font.text_transform+';\
	    				}'
	    				// console.log(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_size === "")
		    					if(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_size === ""){}else{
	    							style.innerHTML += 
		    						'.textbox_'+i+'::first-line{\
					                font-size: '+(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_size/630)*wrapper_height+'px;}'
		    					}
		    					if(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_style === ""){}else{
	    							style.innerHTML += 
		    						'.textbox_'+i+'::first-line{\
					                font-style: '+FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_style+'}'
		    					}
		    					if(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_weight === ""){}else{
	    							style.innerHTML += 
		    						'.textbox_'+i+'::first-line{\
					                font-weight: '+FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.font_weight+'}'
		    					}
		    					if(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.line_height === ""){}else{
	    							style.innerHTML += 
		    						'.textbox_'+i+'::first-line{\
					                line-height: '+FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.line_height+'em}'
		    					}
		    					if(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.text_align === ""){}else{
	    							style.innerHTML += 
		    						'.textbox_'+i+'::first-line{\
					                text-align:  '+FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.text_align+'}'
		    					}
		    					if(FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.text_transform === ""){}else{
	    							style.innerHTML += 
		    						'.textbox_'+i+'::first-line{\
					                text-transform:  '+FontsInUseArray[selectedobject].textbox_style[i].optional.first_line.text_transform+'}'
		    					}
	    				if(isNaN(FontsInUseArray[selectedobject].textbox_style[i].whole.height)){
							style.innerHTML += 
			    				'.textbox_'+i+'{\
					                height: '+FontsInUseArray[selectedobject].textbox_style[i].whole.height+'\
			    				}'
	    				}else{
							style.innerHTML += 
			    				'.textbox_'+i+'{\
					                height: '+FontsInUseArray[selectedobject].textbox_style[i].whole.height+'%\
			    				}'
	    				}
    		}
        
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	function generate_color(selectedobject){
		var style = document.createElement('style');
		style.type = 'text/css';
		var colorarray_length = ColorArray.length
		for (var i = colorarray_length-1; i >= 0; i--) {
			if(FontsInUseArray[selectedobject].color.generate_color){

				if(FontsInUseArray[selectedobject].color.different_background_color_for_each_textbox){
					style.innerHTML += '.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper>.textbox:nth-child(2n){ background : '+ColorArray[i].main_background_color+'}\
										.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper>.textbox:nth-child(2n-1){ background : '+ColorArray[i].sub_background_color+'}'
				}else{
					style.innerHTML += '.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper{ background : '+ColorArray[i].main_background_color+'}'
				}

				if(FontsInUseArray[selectedobject].color.different_font_color_for_each_textbox){
					style.innerHTML += '.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper>.textbox:nth-child(2n){ color : '+ColorArray[i].main_font_color+'}\
										.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper>.textbox:nth-child(2n-1){ color : '+ColorArray[i].sub_font_color+'}'
				}else{
					style.innerHTML += '.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper>*{ color : '+ColorArray[i].main_font_color+'}'
				}
			}
		}
		document.getElementsByTagName('head')[0].appendChild(style);
	}
});

