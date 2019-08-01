
const FontsInUseArray = [{
		name : 'Sentence + Photo',
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
					mainfont_color:[],
					subfont_color:[],

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
						                padding_bottom:0,
						                transform: 'translateY(-50%)',
												},
								font: {		
						                font_size: 88,
						                font_style: 'initial',
						                font_weight: 300,
						                line_height: '1.2',
						                text_align: 'center',
						                text_transform: 'inherit'
										}
							}
						]
	},{
		name : 'Paragraph+Angle',
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
					mainfont_color:[1],
					subfont_color:[],

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
						                padding_bottom:0,
						                transform: 'rotateZ(-10deg)',
											},
								font: {		
						                font_size: 160,
						                font_weight: 300,
						                font_style: 'inherit',
						                line_height: 1.1,
						                text_align: 'center',
						                text_transform: 'inherit'
											}
							}
						]
	},{
		name : 'Sentence+textbackground',
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
					mainfont_color:[1,2],
					subfont_color:[],

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
						                padding_bottom:0,
						                transform: 'translateY(-50%)',
												},
								font: {		
						                font_size: 84,
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
						                padding_bottom:0,
						                transform: 'translateY(-50%) scale(4.5)',
												},
								font: {		
						                font_size: 84,
						                font_style: 'inherit',
						                font_weight: 600,
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase',
						                color: '#000000',
										}
							}
						]
	},{
		name : 'Paragraph + grid',
		number_of_textbox: 1,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: {
					avoid_font_category: ['Amaranth',
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:false,
					mainfont_color:[],
					subfont_color:[],

	                background: 'url(img/grid-01.png) no-repeat center/cover',
	                color:'blue'
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 100,
						                width: 100,
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
						                left: 25,
						                top: -2.5,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'none',
											},
								font: {		
						                font_size: 200,
						                font_weight: 500,
						                font_style: 'inherit',
						                line_height: 1.1,
						                text_align: 'left',
						                text_transform: 'uppercase'
											}
							}
						]
	},{
		name : 'Paragraph + twocolumn',
		number_of_textbox: 2,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: {
					avoid_font_category: [,
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:false,
					mainfont_color:[],
					subfont_color:[],
	                background: 'url(img/paper_01.png) no-repeat center/cover',
	                color:'black'
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 100,
						                width: 50,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'initial',
						                clip_path: 'polygon(0 0, 100% 0, 100% 98%, 0 98%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.7,
						                padding_top: 2.7,
						                padding_bottom:0,
						                transform: 'none',
											},
								font: {		
						                font_size: 56,
						                font_weight: 900,
						                font_style: 'inherit',
						                line_height: 1.5,
						                text_align: 'left',
						                text_transform: 'initial'
											}
							},
							{
								whole: {		
						                height: 100,
						                width: 50,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'initial',
						                clip_path: 'polygon(0 0, 100% 0, 100% 98%, 0 98%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: 50,
						                top: 0,
						                padding: 2.7,
						                padding_top: 2.7,
						                padding_bottom:0,
						                transform: 'none',
											},
											// 12.5
								font: {		
						                font_size: 56,
						                font_weight: 300,
						                font_style: 'inherit',
						                line_height: 1.5,
						                text_align: 'left',
						                text_transform: 'initial'
											}
							}
						]
	},{
		name : 'Character',
		number_of_textbox: 2,
		content_type: 'character',
		is_primary: true,
		restrictions: {
					avoid_font_category: [,
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:true,
					mainfont_color:[1,2],
					subfont_color:[],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 'auto',
						                width: 100,
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
						                left: 0,
						                top: 50,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'translateY(-50%) rotateZ(45deg) translateX(5%)',
											},
								font: {		
						                font_size: 900,
						                font_weight: 900,
						                font_style: 'initial',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase'
											}
							},
							{	
								whole: {		
						                height: 'auto',
						                width: 100,
						                opacity: 0.2,
						                display:'block'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'initial'
											},
								location: {	
						                left: 0,
						                top: 50,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'translateY(-50%) rotateZ(45deg) translateX(-20%)',
											},
								font: {		
						                font_size: 900,
						                font_weight: 100,
						                font_style: 'initial',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase'
											}
							}
						]
	},{
		name : 'Stair Paragraph',
		number_of_textbox: 3,
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
					mainfont_color:[1,2,3],
					subfont_color:[],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 100,
						                width: 66.66,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'polygon(0 0%, 100% 0%, 100% 38%, 0 38%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: 2.5,
						                top: 0,
						                padding: 0,
						                padding_top: 1.11,
						                padding_bottom: 1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 75,
						                font_weight: 'regular',
						                font_style: 'inherit',
						                line_height: 1.05,
						                text_align: 'left',
						                text_transform: 'uppercase'
											}
							},
							{	
								whole: {		
						                height: 100,
						                width: 100,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'polygon(0 38%, 100% 38%, 100% 75.5%, 0 75.5%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: 25,
						                top: 0,
						                padding: 0,
						                padding_top: 1.11,
						                padding_bottom: 1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 75,
						                font_weight: 'regular',
						                font_style: 'inherit',
						                line_height: 1.05,
						                text_align: 'left',
						                text_transform: 'uppercase'
											}
							},
							{	
								whole: {		
						                height: 100,
						                width: 66.66,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'polygon(0 77%, 100% 77%, 100% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: 50,
						                top: 0,
						                padding: 0,
						                padding_top: 1.11,
						                padding_bottom: 1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 75,
						                font_weight: 'regular',
						                font_style: 'inherit',
						                line_height: 1.05,
						                text_align: 'left',
						                text_transform: 'uppercase'
											}
							}
						]
	},{
		name : 'ColoredSentence',
		number_of_textbox: 1,
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
					mainfont_color:[1],
					subfont_color:[],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 100,
						                width: 100,
						                opacity: 1,
						                display:'block'
											},
								optional: {	
    									justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal'
											},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.5,
						                padding_top: 2.22,
						                padding_bottom: 2.22,
						                transform: 'none',
											},
								font: {		
						                font_size: 145,
						                font_weight: 500,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'inherit',
						                text_transform: 'uppercase',
											}
							}
						]
	},{
		name : 'specialCharacter',
		number_of_textbox: 3,
		content_type: 'specialCharacter',
		is_primary: true,
		restrictions: {
					avoid_font_category: [,
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:true,
					mainfont_color:[1,2,3],
					subfont_color:[],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height:'auto',
						                width:0,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 100,
						                top: 50,
						                padding:0,
						                padding_top:0,
						                padding_bottom:0,
						                transform: 'translateY(-35%)',
											},
								font: {		
						                font_size: 450,
						                font_weight: 500,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'inherit'
											}
							},{
								whole: {		
						                height:'auto',
						                width:0,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 60,
						                top: 50,
						                padding:0,
						                padding_top:0,
						                transform: 'translateY(-50%)',
											},
								font: {		
						                font_size: 450,
						                font_weight: 500,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'inherit'
											}
							},{
								whole: {		
						                height:'auto',
						                width:0,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 20,
						                top: 50,
						                padding:0,
						                padding_top:0,
						                padding_bottom:0,
						                transform: 'translateY(-65%)',
											},
								font: {		
						                font_size: 450,
						                font_weight: 500,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'inherit'
											}
							}
						]
	},{
		name : 'Sentence + diversefontcolor',
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
					mainfont_color:[1],
					subfont_color:[2],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 'auto',
						                width: 100,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'center',
						                clip_path: 'polygon(0 33%, 0 0, 100% 0, 100% 100%, 0 100%, 0 66%, 100% 66%, 100% 33%);',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 50,
						                top: 50,
						                padding: 2.22,
						                padding_top: 2.22,
						                padding_bottom:0,
						                transform: 'translateY(-50%) translateX(-50%)',
											},
								font: {		
						                font_size: 120,
						                font_weight: 800,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase',
											}
							},{
								whole: {		
						                height: 'auto',
						                width: 100,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'center',
						                clip_path: 'polygon(0 33%, 100% 33%, 100% 66%, 0 66%);',
						                white_space: 'initial',
						                mix_blend_mode: 'luminosity',
											},
								location: {	
						                left: 50,
						                top: 50,
						                padding: 2.22,
						                padding_top: 2.22,
						                padding_bottom:0,
						                transform: 'translateY(-50%) translateX(-50%)',
											},
								font: {		
						                font_size: 120,
						                font_weight: 800,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'center',
						                text_transform: 'uppercase',
											}
							}
						]
	},{
		name : 'Paragraph + Cropped',
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
					mainfont_color:[1],
					subfont_color:[],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 'auto',
						                width: 100,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'center',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 8.33,
						                top: -5.55,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'none',
											},
								font: {		
						                font_size: 120,
						                font_weight: 700,
						                font_style: 'italic',
						                line_height: 1,
						                text_align: 'left',
						                text_transform: 'uppercase'
											}
							}
						]
	},{
		name : 'FontsInUseObject_13',
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
					mainfont_color:[1,2],
					subfont_color:[],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 100,
						                width: 47.5,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'polygon(0 33%, 0 0, 120% 0, 120% 100%, 0 120%, 0 66%, 120% 66%, 120% 33%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 0,
						                top: 1.11,
						                padding: 2.08,
						                padding_top: 1.11,
						                padding_bottom:1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 98,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.05,
						                text_align: 'right',
						                text_transform: 'uppercase',
											}
							},{
								whole: {		
						                height: 100,
						                width: 50,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'left',
						                clip_path: 'polygon(100% 0, 100% 16.5%, 0 16.5%, 0 33%, 100% 33%, 100% 82.5%, 0 82.5%, 0 0)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 45.84,
						                top: 0,
						                padding: 2.08,
						                padding_top: 1.11,
						                padding_bottom: 1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 98,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.05,
						                text_align: 'left',
						                text_transform: 'uppercase',
											}
							}
						]
	},{
		name : 'FontsInUseObject_14',
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
					mainfont_color:[1],
					subfont_color:[2],
	                background: '',
	                color:''
	            		},
		textbox_style: [
							{
								whole: {		
						                height: 100,
						                width: 100,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
										justify_content: 'left',
						                clip_path: 'polygon(0 0, 41.6% 0, 41.6% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 4.16,
						                padding_top: 2.22,
						                padding_bottom: 2.22,
						                transform: 'none',
											},
								font: {		
						                font_size: 174,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.15,
						                text_align: 'left',
						                text_transform: 'initial',
											}
							},{
								whole: {		
						                height: 95.56,
						                width: 91.68,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
										justify_content: 'left',
						                clip_path: 'polygon(41.6% 0, 100% 0, 100% 100%, 41.6% 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
											},
								location: {	
						                left: 4.16,
						                top: 2.22,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'none',
											},
								font: {		
						                font_size: 174,
						                font_weight: 300,
						                font_style: 'italic',
						                line_height: 1.15,
						                text_align: 'left',
						                text_transform: 'initial',
											}
							}
						]
	},{
		name : 'center+background',
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
					mainfont_color:[],
					subfont_color:[],

	                background: 'url(img/ocean_01.jpg) no-repeat center/cover',
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
						                padding_bottom:0,
						                transform: 'translateY(-50%)',
												},
								font: {		
						                font_size: 88,
						                font_style: 'initial',
						                font_weight: 300,
						                line_height: '1.2',
						                text_align: 'center',
						                text_transform: 'inherit'
										}
							}
						]
	},{
		name : 'Sentence + skew',
		number_of_textbox: 2,
		content_type: 'sentence',
		is_primary: true,
		restrictions: 	{
					avoid_font_category: [,
		        	],
					force_font_category: [
		        	]
				},
		color: 	{
					generate_color:true,
					mainfont_color:[1,2],
					subfont_color:[],

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height: 100,
						                width: 100,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'left',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: -66,
						                top: 0,
						                padding: 2.5,
						                padding_top: 0.55,
						                padding_bottom:0,
						                transform: 'skewY(25deg)',
												},
								font: {		
						                font_size: 87,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.1,
						                text_align: 'right',
						                text_transform: 'uppercase',
										}
							},{
								whole: {		
						                height: 'auto',
						                width: 100,
						                opacity: 1,
						                display: 'flex',
											},
								optional: {	
						                justify_content: 'left',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 33.33,
						                top: 0,
						                padding: 2.5,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'skewY(-25deg)',
												},
								font: {		
						                font_size: 160,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.1,
						                text_align: 'left',
						                text_transform: 'uppercase',
										}
							}
						]
	},{
		name : 'paragraph + sm + skew',
		number_of_textbox: 3,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: 	{
					avoid_font_category: [,
		        	],
					force_font_category: [
		        	]
				},
		color: 	{
					generate_color:true,
					mainfont_color:[1,2,3],
					subfont_color:[],

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height: 100,
						                width: 200,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'polygon(100% 0, 100% 50%, 0 50%, 0 0%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform:'rotate(-6deg) translateX(-25%) translateY(-7.5%)',
												},
								font: {		
						                font_size: 143,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.1,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							},{
								whole: {		
						                height: 100,
						                width: 200,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 0,
						                padding_top: 0,
						                padding_bottom:0,
						                transform: 'rotate(-6deg) translateY(50%) translateX(-75%) translateY(-7.5%)',
												},
								font: {		
						                font_size: 143,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.1,
						                text_align: 'right',
						                text_transform: 'inherit',
										}
							},{
								whole: {		
						                height: 100,
						                width: 50,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.5,
						                padding_top: 3.33,
						                padding_bottom:3.33,
						                transform: 'rotate(-6deg) translateY(50%) translateX(100%)',
												},
								font: {		
						                font_size: 32.5,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.3,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							}
						]
	},{
		name : 'stripe',
		number_of_textbox: 1,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: 	{
					avoid_font_category: [,
		        	],
					force_font_category: [
		        	]
				},
		color: 	{
					generate_color:true,
					mainfont_color:[1,2,3],
					subfont_color:[],

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height: 100,
						                width: 100,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: "initial",
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 8.33,
						                padding_top: 1.111,
						                padding_bottom: 1.111,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'center',
						                text_transform: 'inherit',
										}
							}
						]
	}
]