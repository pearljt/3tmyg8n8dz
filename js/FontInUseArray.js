
const FontsInUseArray = [{
		name : 'FontsInUseObject_2',
		number_of_textbox: 1,
		content_type: 'sentence',
		is_primary: true,
		restrictions: 	{
					avoid_font_category: [,
		        	],
					force_font_category: [
		        	]
				},
		color: 	{
					generate_color:false,
	                background: 'url(img/stone_01.png) no-repeat center/cover',
	                color:'#dce9ff'
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height: 'auto',
						                width: 75,
						                opacity: 0.8,
						                display:'block'
											},
								optional: {	
    									justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
												},
								location: {	
						                left: 12.5,
						                top: 50,
						                padding: 0,
						                padding_top: 0,
						                transform: 'translateY(-50%)',
												},
								font: {		
						                font_size: 66,
						                font_style: 'initial',
						                font_weight: 300,
						                line_height: '1.2',
						                text_align: 'center',
						                text_transform: 'inherit'
										}
							}
						]
	},{
		name : 'FontsInUseObject_3',
		number_of_textbox: 1,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: {
					avoid_font_category: [,
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:true,
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 127.7,
						                width: 200,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: -50,
						                top: -11.11,
						                padding: 0,
						                padding_top: 0,
						                transform: 'rotateZ(-10deg)',
											},
								font: {		
						                font_size: 120,
						                font_weight: 300,
						                font_style: 'inherit',
						                line_height: 1.1,
						                text_align: 'center',
						                text_transform: 'inherit'
											}
							}
						]
	},{
		name : 'FontsInUseObject_4',
		number_of_textbox: 2,
		content_type: 'sentence',
		is_primary: true,
		restrictions: {
					avoid_font_category: [,
		        	],
					force_font_category: [
		        	]
				},
		color: {
					generate_color:true,
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 'auto',
						                width: 0,
						                opacity: 0.9,
						                display:'flex'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 50,
						                top: 50,
						                padding: 0,
						                padding_top: 0,
						                transform: 'translateY(-50%)',
												},
								font: {		
						                font_size: 64,
						                font_style: 'inherit',
						                font_weight: 600,
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase',
						                color: '#000000',
										}
							},{
								whole: {		
						                height: 'auto',
						                width: 50,
						                opacity: 0.075,
						                display:'block'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 33.33,
						                top: 50,
						                padding: 0,
						                padding_top: 0,
						                transform: 'translateY(-50%) scale(4.5)',
												},
								font: {		
						                font_size: 64,
						                font_style: 'inherit',
						                font_weight: 600,
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase',
						                color: '#000000',
										}
							}
						]
	}
]