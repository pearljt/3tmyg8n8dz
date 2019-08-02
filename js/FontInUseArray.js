
const FontsInUseArray = [{
		name : '1. Sentence + Photo',
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

					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                font_size: 74,
						                font_style: 'initial',
						                font_weight: 300,
						                line_height: '1.2',
						                text_align: 'center',
						                text_transform: 'inherit'
										}
							}
						]
	},{
		name : '2. Paragraph + Angle',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '3. Sentence + Diverse layout',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '4. Paragraph + grid',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '5. Paragraph + Diverse layout',
		number_of_textbox: 2,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: {
					avoid_font_category: [	'Asset',
											'BioRhyme Expanded',
											'Bungee Shade',
											'Chango',
											'Diplomata',
											'Frijole',
											'Holtwood One SC',
											'Nosifer',
											'Notable',
											'Rubik Mono One',
											'Seymour One',
											'Shojumaru',
											'Stalinist One',
											'Syncopate',
											'Vast Shadow'
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:false,
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '6. Character + Zoom in',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                mix_blend_mode: 'initial',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '7. Paragraph + Diverse layout',
		number_of_textbox: 3,
		content_type: 'paragraph',
		is_primary: true,
		restrictions: {
					avoid_font_category: [
											// 'Arbutus',
											'Aref Ruqaa',
											'Asset',
											'Bad Script',
											'Baloo Tammudu',
											'Beth Ellen',
											'BioRhyme Expanded',
											'Calligraffitti',
											'Chango',
											'Cherry Cream Soda',
											'Cutive',
											'Diplomata',
											'Diplomata SC',
											'Dr Sugiyama',
											'Eagle Lake',
											'Englebert',
											'Geostar',
											'Geostar Fill',
											'Give You Glory',
											'Goblin One',
											'Gravitas One',
											'Great Vibes',
											'Henny Penny',
											'Herr Von Muellerhoff',
											'Holtwood One SC',
											'Homemade Apple',
											'Inknut Antiqua',
											'Josefin Slab',
											'Kumar One Outline',
											'La Belle Aurore',
											'Lacquer',
											'Lakki Reddy',
											'Liu Jian Mao Cao',
											'Meddon',
											'Michroma',
											'Monsieur La Doulaise',
											'Mr Bedfort',
											'Nosifer',
											'Notable',
											'Parisienne',
											'Princess Sofia',
											'Rammetto One',
											'Rock Salt',
											'Rubik Mono One',
											'Sacramento',
											'Sail',
											'Sarina',
											'Seymour One',
											'Shojumaru',
											'Sonsie One',
											'Stalemate',
											'Stalinist One',
											'Stint Ultra Expanded',
											'Sumana',
											'Syncopate',
											'Ultra',
											'Vast Shadow'
			        ],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:true,
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                clip_path: 'polygon(0 38%, 100% 38%, 100% 73.5%, 0 73.5%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                clip_path: 'polygon(0 73.5%, 100% 73.5%, 100% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '8. Sentence + Diverse layout',
		number_of_textbox: 1,
		content_type: 'sentence',
		is_primary: true,
		restrictions: {
					avoid_font_category: [
					'Dr Sugiyama', 'Goblin One', 'Mr Bedfort', 'Rouge Script', 'Ruge Boogie', 'Sofia', 'Aguafina Script', 'Bigelow Rules', 'Calligraffitti', 'Cedarville Cursive', 'Chango', 'Chathura', 'Cinzel Decorative', 'Crafty Girls', 'Dawning of a New Day', 'Diplomata SC', 'Engagement', 'Fontdiner Swanky', 'Geostar Fill', 'Hallelujah', 'Grand Hotel', 'Gravitas One', 'Great Vibes', 'Henny Penny', 'Herr Von Muellerhoff', 'Homemade Apple', 'Krona One', 'Lakki Reddy', 'Leckerli One', 'Meie Script', 'Michroma', 'Miniver', 'Miss Fajardose', 'Monsieur La Doulaise', 'Bedfort', 'Mr De Haviland', 'Mrs Saint Delafield', 'Mrs Sheppards', 'Oleo Script Swash Caps', 'Parisienne', 'Petit Formal Script', 'Princess Sofia', 'Rubik Mono One', 'Sacramento', 'Sarina', 'Stalinist One', 'Stint Ultra Expanded', 'Sue Ellen Francisco', 'Trade Winds', 'Uncial Antiqua', 'Vast Shadow', 'Vollkorn SC', 'Warnes', 'Yesteryear', 'Adamina', 'Alfa Slab One', 'Allura', 'Arbutus', 'Asset', 'Astloch', 'Audiowide', 'Bad Script', 'Baloo Tammudu', 'Berkshire Swash', 'Beth Ellen', 'Bevan', 'Bilbo Swash Caps', 'BioRhyme', 'BioRhyme Expanded', 'Bonbon', 'Bungee Shade', 'Cantata One', 'Cherry Cream Soda', 'Cherry Swash', 'Chonburi', 'Cinzel Decorative', 'Comfortaa', 'Condiment', 'Corben', 'Cutive', 'Della Respira', 'Diplomata', 'Diplomata SC', 'Donegal One', 'Dr Sugiyama', 'Eagle Lake', 'Faster One', 'Felipa', 'Fontdiner Swanky', 'Frijole', 'Gabriela', 'Galada', 'Geostar', 'Geostar Fill', 'Goblin One', 'Grand Hotel', 'Gravitas One', 'Great Vibes', 'Griffy', 'Headland One', 'Herr Von Muellerhoff', 'Holtwood One SC', 'Homemade Apple', 'Inknut Antiqua', 'Krona One', 'Kumar One', 'Kumar One Outline', 'La Belle Aurore', 'Lakki Reddy', 'Ledger', 'Loved by the King', 'Macondo Swash Caps', 'Major Mono Display', 'Meddon', 'Meie Script', 'Metamorphous', 'Michroma', 'Milonga', 'Miss Fajardose', 'Monoton', 'Monsieur La Doulaise', 'Montez', 'Mr Bedfort', 'Mr Dafoe', 'Mrs Saint Delafield', 'Mr De Haviland', 'Mrs Sheppards', 'New Rocker', 'Norican', 'Nosifer', 'Notable', 'Oleo Script Swash Caps', 'Orbitron', 'Pacifico', 'Parisienne', 'Pattaya', 'Peralta', 'Pinyon Script', 'Plaster', 'Poller One', 'Prata', 'Princess Sofia', 'Prosto One', 'Quando', 'Rammetto One', 'Revalia', 'Rochester', 'Rock Salt', 'Rouge Script', 'Rubik Mono One', 'Ruthie', 'Sacramento', 'Sail', 'Sarina', 'Satisfy', 'Sawarabi Mincho', 'Sevillana', 'Seymour One', 'Shojumaru', 'Sigmar One', 'Sofia', 'Sonsie One', 'Spirax', 'Srisakdi', 'Stalemate', 'Stalinist One', 'Stint Ultra Expanded', 'Stoke', 'Sue Ellen Francisco', 'Syncopate', 'Ultra', 'Uncial Antiqua', 'UnifrakturMaguntia', 'Vast Shadow'
					],
					force_font_category: [
			        ]
				},
		color: {
					generate_color:true,
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                font_size: 116,
						                font_weight: 500,
						                font_style: 'inherit',
						                line_height: 1,
						                text_align: 'inherit',
						                text_transform: 'uppercase',
											}
							}
						]
	},{
		name : '9. SpecialCharacter',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
											},
								location: {	
						                left: 62.5,
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
											},
								location: {	
						                left: 20,
						                top: 50,
						                padding:0,
						                padding_top:0,
						                padding_bottom:0,
						                transform: 'translateY(-67.5%)',
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
		name : '10. Sentence + Diverse color',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:true,

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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '11. Paragraph + Diverse color',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '12. Sentence + Diverse color',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                clip_path: 'polygon(0 28.5%, 0 0, 120% 0, 120% 100%, 0 120%, 0 69%, 120% 69%, 120% 28.5%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
											},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.08,
						                padding_top: 1.11,
						                padding_bottom:1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 82,
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
						                clip_path: 'polygon(100% 0, 100% 14.5%, 0 14.5%, 0 28.5%, 100% 28.5%, 100% 69%, 0 69%, 0 0)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
											},
								location: {	
						                left: 50,
						                top: 0,
						                padding: 2.08,
						                padding_top: 1.11,
						                padding_bottom: 1.11,
						                transform: 'none',
											},
								font: {		
						                font_size: 82,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.05,
						                text_align: 'left',
						                text_transform: 'uppercase',
											}
							}
						]
	},
	// {
	// 	name : '13. FontsInUseObject_14',
	// 	number_of_textbox: 2,
	// 	content_type: 'sentence',
	// 	is_primary: true,
	// 	restrictions: {
	// 				avoid_font_category: [,
	// 		        ],
	// 				force_font_category: [
	// 		        ]
	// 			},
	// 	color: {
	// 				generate_color:true,
					
	// 				different_background_color_for_each_textbox:false, 
	// 				different_font_color_for_each_textbox:true,

	//                 background: '',
	//                 color:''
	//             		},
	// 	textbox_style: [
	// 						{
	// 							whole: {		
	// 					                height: 100,
	// 					                width: 100,
	// 					                opacity: 1,
	// 					                display: 'flex',
	// 										},
	// 							optional: {	
	// 									justify_content: 'left',
	// 					                clip_path: 'polygon(0 0, 41.6% 0, 41.6% 100%, 0 100%)',
	// 					                white_space: 'initial',
	// 					                mix_blend_mode: 'normal',
	// 					                border_left: 'none',
	// 					                first_line:{
	// 						                font_size: '',
	// 						                font_weight: '',
	// 						                font_style: '',
	// 						                line_height: '',
	// 						                text_align: '',
	// 						                text_transform: '',
	// 										},
	// 										},
	// 							location: {	
	// 					                left: 0,
	// 					                top: 0,
	// 					                padding: 4.16,
	// 					                padding_top: 2.22,
	// 					                padding_bottom: 2.22,
	// 					                transform: 'none',
	// 										},
	// 							font: {		
	// 					                font_size: 174,
	// 					                font_weight: 700,
	// 					                font_style: 'initial',
	// 					                line_height: 1.15,
	// 					                text_align: 'left',
	// 					                text_transform: 'initial',
	// 										}
	// 						},{
	// 							whole: {		
	// 					                height: 95.56,
	// 					                width: 91.68,
	// 					                opacity: 1,
	// 					                display: 'flex',
	// 										},
	// 							optional: {	
	// 									justify_content: 'left',
	// 					                clip_path: 'polygon(41.6% 0, 100% 0, 100% 100%, 41.6% 100%)',
	// 					                white_space: 'initial',
	// 					                mix_blend_mode: 'normal',
	// 					                border_left: 'none',
	// 					                first_line:{
	// 						                font_size: '',
	// 						                font_weight: '',
	// 						                font_style: '',
	// 						                line_height: '',
	// 						                text_align: '',
	// 						                text_transform: '',
	// 										},
	// 										},
	// 							location: {	
	// 					                left: 4.16,
	// 					                top: 2.22,
	// 					                padding: 0,
	// 					                padding_top: 0,
	// 					                padding_bottom:0,
	// 					                transform: 'none',
	// 										},
	// 							font: {		
	// 					                font_size: 174,
	// 					                font_weight: 300,
	// 					                font_style: 'italic',
	// 					                line_height: 1.15,
	// 					                text_align: 'left',
	// 					                text_transform: 'initial',
	// 										}
	// 						}
	// 					]
	// },
	{
		name : '14. Sentence + Photo',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                font_size: 74,
						                font_style: 'initial',
						                font_weight: 300,
						                line_height: '1.2',
						                text_align: 'center',
						                text_transform: 'inherit'
										}
							}
						]
	},
	{
		name : '15. Sentence + Angle',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '16. Paragraph + Angle',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
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
		name : '17. Paragraph + Diverse layout',
		number_of_textbox: 2,
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

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
						                clip_path: 'polygon(0 0, 100% 0, 100% 60%, 0 60%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '102',
							                font_weight: '',
							                font_style: '',
							                line_height: 1.2,
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 8.33,
						                padding_top: 2.22,
						                padding_bottom: 2.22,
						                transform:'none',
												},
								font: {		
						                font_size: 68,
						                font_weight: 800,
						                font_style: 'initial',
						                line_height: 1.6,
						                text_align: 'center',
						                text_transform: 'inherit',
										}
							},{
								whole: {		
						                height: 100,
						                width: 100,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: "initial",
						                clip_path: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '102',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 8.33,
						                padding_top: 0,
						                padding_bottom: 2.22,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 300,
						                font_style: 'italic',
						                line_height: 1.2,
						                text_align: 'center',
						                text_transform: 'inherit',
										}
							}
						]
	},{
		name : '18. Paragraph + Diverse layout',
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height:78,
						                width: 100,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'polygon(0 0, 100% 0, 100% 52%, 0 52%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											}
										},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.1,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							}
							,{
								whole: {		
						                height:78,
						                width: 100,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'polygon(0 52%, 100% 52%, 100% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											}
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.1,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'right',
						                text_transform: 'inherit',
										}
							}
							,{
								whole: {		
						                height: 20,
						                width: 100,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'polygon(0 0%, 100% 0%, 100% 95%, 0 95%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											}
										},
								location: {	
						                left: 0,
						                top: 80,
						                padding: 2.1,
						                padding_top: 0,
						                padding_bottom: 1.111,
						                transform:'none'
												},
								font: {		
						                font_size: 51,
						                font_weight: 300,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							}
						]
	},{
		name : '19. Sentence + Diverse layout',
		number_of_textbox: 6,
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
					
					different_background_color_for_each_textbox:false, 
					different_font_color_for_each_textbox:false,

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
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
						                border_left: '2px solid gray',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 41.6,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 900,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
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
						                clip_path: 'polygon(0 0, 16.6% 0, 16.6% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: '2px solid gray',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 33.3,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 800,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
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
						                clip_path: 'polygon(0 0, 16.6% 0, 16.6% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: '2px solid gray',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 25,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 700,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
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
						                clip_path: 'polygon(0 0, 16.6% 0, 16.6% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: '2px solid gray',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 16.6,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 500,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
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
						                clip_path: 'polygon(0 0, 16.6% 0, 16.6% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: '2px solid gray',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 8.3,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 400,
						                font_style: 'initial',
						                line_height: 1.2,
						                text_align: 'left',
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
						                clip_path: 'polygon(0 0, 16.6% 0, 16.6% 100%, 0 100%)',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 102,
						                font_weight: 300,
						                font_style: 'italic',
						                line_height: 1.2,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							}
						]
	},{
		name : '20. Paragraph + Diverse color',
		number_of_textbox: 2,
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
					
					different_background_color_for_each_textbox:true, 
					different_font_color_for_each_textbox:false,

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height: 100,
						                width: 75,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 0,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 80,
						                font_weight: 'regular',
						                font_style: 'initial',
						                line_height: 1.1,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							},{
								whole: {		
						                height: 100,
						                width: 75,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 75,
						                top: 0,
						                padding: 2.5,
						                padding_top: 1.111,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 80,
						                font_weight: 'regular',
						                font_style: 'initial',
						                line_height: 1.1,
						                text_align: 'left',
						                text_transform: 'inherit',
										}
							}
						]
	},{
		name : '21. Sentence + Zoom in',
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
					
					different_background_color_for_each_textbox:true, 
					different_font_color_for_each_textbox:false,

	                background: '',
	                color:''
	            		},
		textbox_style: 	[
							{
								whole: {		
						                height: 200,
						                width: 200,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: -166.7,
						                top: 0,
						                padding: 2,
						                padding_top: 24,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 215,
						                font_weight: 400,
						                font_style: 'initial',
						                line_height: 1,
						                text_align: 'right',
						                text_transform: 'uppercase',
										}
							},{
								whole: {		
						                height: 200,
						                width: 200,
						                opacity: 1,
						                display: 'block',
											},
								optional: {	
						                justify_content: 'initial',
						                clip_path: 'none',
						                white_space: 'initial',
						                mix_blend_mode: 'normal',
						                border_left: 'none',
						                first_line:{
							                font_size: '',
							                font_weight: '',
							                font_style: '',
							                line_height: '',
							                text_align: '',
							                text_transform: '',
											},
												},
								location: {	
						                left: 33.3,
						                top: 0,
						                padding: 4.15,
						                padding_top: 0,
						                padding_bottom: 0,
						                transform:'none',
												},
								font: {		
						                font_size: 323,
						                font_weight: 800,
						                font_style: 'initial',
						                line_height: 1,
						                text_align: 'left',
						                text_transform: 'uppercase',
										}
							}
						]
	}
]