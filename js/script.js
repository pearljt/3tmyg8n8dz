
$( document ).ready(function() {

	var wrapper_width = window.innerWidth*0.25

	// setting
	// import fonts
	var fontdata

		const FontArray = []
		const noLatin = []
		const noRegular =[]
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

	function import_font(fontvalue, k, selectedobject){
		var apiUrl = [];
		apiUrl.push('https://fonts.googleapis.com/css?family=');
		apiUrl.push(fontdata.items[Number(fontvalue)].family.replace(/ /g, '+'));

		apiUrl.push(':');
		var font_varients_array = []
		for (var i = 0; i < FontsInUseArray[selectedobject].number_of_textbox; i++) {
			// weight
				console.log(fontdata.items[Number(fontvalue)].variants)
				console.log(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight.toString())

			if(fontdata.items[Number(fontvalue)].variants.includes(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight.toString())){
				console.log('matches')
				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic'){
					font_varients_array.push(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight+'i');
				}else{
					font_varients_array.push(FontsInUseArray[selectedobject].textbox_style[i].font.font_weight);
				}

			}else{

				if(FontsInUseArray[selectedobject].textbox_style[i].font.font_style === 'italic'){
					font_varients_array.push(fontdata.items[Number(fontvalue)].variants[0]+'i');
				}else{
					font_varients_array.push(fontdata.items[Number(fontvalue)].variants[0]);
				}

			}
		}
		var font_varients_array_dup = [];
		$.each(font_varients_array, function(i, el){
		    if($.inArray(el, font_varients_array_dup) === -1) font_varients_array_dup.push(el);
		});


		apiUrl.push(font_varients_array_dup.join())
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
		console.log(contentlist.length)
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
			Avoid.classList.add('Avoid')
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
							\
			                left: '+FontsInUseArray[selectedobject].textbox_style[i].location.left+'%;\
			                top: '+FontsInUseArray[selectedobject].textbox_style[i].location.top+'%;\
			                padding: '+FontsInUseArray[selectedobject].textbox_style[i].location.padding+'%;\
			                padding-top: '+FontsInUseArray[selectedobject].textbox_style[i].location.padding_top+'%;\
			                transform: '+FontsInUseArray[selectedobject].textbox_style[i].location.transform+';\
							\
			                font-size: '+(FontsInUseArray[selectedobject].textbox_style[i].font.font_size/840)*wrapper_width+'px;\
			                font-style: '+FontsInUseArray[selectedobject].textbox_style[i].font.font_style+';\
			                font-weight: '+FontsInUseArray[selectedobject].textbox_style[i].font.font_weight+';\
			                line-height: '+FontsInUseArray[selectedobject].textbox_style[i].font.line_height+'em;\
			                text-align:  '+FontsInUseArray[selectedobject].textbox_style[i].font.text_align+';\
			                text-transform:  '+FontsInUseArray[selectedobject].textbox_style[i].font.text_transform+';\
	    				}'
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
				style.innerHTML += 
					'.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper{\
						background : '+ColorArray[i].background_color+'\
					}.wrapper_title:nth-child('+colorarray_length+'n-'+i+')>.wrapper>div{\
						color : '+ColorArray[i].fontcolor+'\
					}'
			}
		}
		document.getElementsByTagName('head')[0].appendChild(style);
	}
	// function create_color(selectedcolor){
	// 	var style = document.createElement('style');
	// 	style.type = 'text/css';
	// 		style.innerHTML += 
 //    				'.wrapper>.textbox{\
	// 	                background: '+ColorArray[selectedcolor].background_color+';\
	// 	                color: '+ColorArray[selectedcolor].fontcolor+';\
 //    				}\
 //    				.wrapper>.textbox:nth-last-child(2){\
	// 	                background: transparent;\
	// 	                color: '+ColorArray[selectedcolor].subfontcolor+';\
 //    				}\
 //    				'
	// 	document.getElementsByTagName('head')[0].appendChild(style);
	// }
});

