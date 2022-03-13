let data = [
	{
		id: 'Noel',
		gender: 'male',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [{ id: 'Francis' }, { id: 'Tricia' }, { id: 'Steven' }],
		siblings: [],
		spouses: [{ id: 'Delia' }]
	},
	{
		id: 'Christian',
		gender: 'male',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Raul',
		gender: 'male',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Simon',
		gender: 'male',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Nanette',
		gender: 'female',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Genie',
		gender: 'female',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Bernie',
		gender: 'female',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Nikki',
		gender: 'female',
		parents: [{ id: 'Linda' }, { id: 'Romeo' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Delia',
		gender: 'female',
		parents: [],
		children: [{ id: 'Francis' }, { id: 'Tricia' }, { id: 'Steven' }],
		siblings: [],
		spouses: [{ id: 'Noel' }]
	},
	{
		id: 'Francis',
		gender: 'male',
		parents: [{ id: 'Noel' }, { id: 'Delia' }],
		children: [{ id: 'Lena' }, { id: 'Louie' }],
		siblings: [{ id: 'Tricia' }, { id: 'Steven' }],
		spouses: [{ id: 'Abbie' }]
	},
	{
		id: 'Abbie',
		gender: 'female',
		parents: [],
		children: [{ id: 'Lena' }, { id: 'Louie' }],
		siblings: [],
		spouses: [{ id: 'Francis' }]
	},
	{
		id: 'Lena',
		gender: 'female',
		parents: [{ id: 'Francis' }, { id: 'Abbie' }],
		children: [],
		siblings: [{ id: 'Louie' }],
		spouses: []
	},
	{
		id: 'Louie',
		gender: 'male',
		parents: [{ id: 'Francis' }, { id: 'Abbie' }],
		children: [],
		siblings: [{ id: 'Lena' }],
		spouses: []
	},
	{
		id: 'Tricia',
		gender: 'female',
		parents: [{ id: 'Noel' }, { id: 'Delia' }],
		children: [{ id: 'Nora' }, { id: 'Logan' }],
		siblings: [{ id: 'Francis' }, { id: 'Steven' }],
		spouses: [{ id: 'Andrew' }]
	},
	{
		id: 'Andrew',
		gender: 'male',
		parents: [],
		children: [{ id: 'Nora' }, { id: 'Logan' }],
		siblings: [],
		spouses: [{ id: 'Tricia' }]
	},
	{
		id: 'Nora',
		gender: 'female',
		parents: [{ id: 'Tricia' }, { id: 'Andrew' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Logan',
		gender: 'male',
		parents: [{ id: 'Tricia' }, { id: 'Andrew' }],
		children: [],
		siblings: [],
		spouses: []
	},
	{
		id: 'Steven',
		gender: 'male',
		parents: [{ id: 'Noel' }, { id: 'Delia' }],
		children: [],
		siblings: [{ id: 'Francis' }, { id: 'Tricia' }],
		spouses: []
	},
	{
		id: 'Linda',
		gender: 'female',
		parents: [],
		children: [
			{ id: 'Nanette' },
			{ id: 'Bernie' },
			{ id: 'Genie' },
			{ id: 'Simon' },
			{ id: 'Christian' },
			{ id: 'Raul' },
			{ id: 'Noel' },
			{ id: 'Nikki' }
		],
		siblings: [],
		spouses: [
			{
				id: 'Romeo'
			}
		]
	},
	{
		id: 'Romeo',
		gender: 'male',
		parents: [],
		children: [
			{ id: 'Nanette' },
			{ id: 'Bernie' },
			{ id: 'Genie' },
			{ id: 'Simon' },
			{ id: 'Christian' },
			{ id: 'Raul' },
			{ id: 'Noel' },
			{ id: 'Nikki' }
		],
		siblings: [],
		spouses: [
			{
				id: 'Linda'
			}
		]
	}
]

// let data = [
// 	// This is the object that represents you:

// 	{
// 		id: 'Me',
// 		gender: 'male',
// 		parents: [
// 			{
// 				id: 'Linda'
// 			},
// 			{
// 				id: 'Shelley'
// 			}
// 		],
// 		children: [],
// 		sibling: [
// 			{
// 				id: 'Jeff'
// 			},
// 			{
// 				id: 'Sarah'
// 			},
// 			{
// 				id: 'Kate'
// 			}
// 		],
// 		spouses: [],
// 		bio: "I'm you."
// 	},

// 	// The next two objects are your parents:

// 	{
// 		id: 'Linda',
// 		gender: 'female',
// 		parents: [],
// 		children: [
// 			{
// 				id: 'Me'
// 			},
// 			{
// 				id: 'Jeff'
// 			},
// 			{
// 				id: 'Sarah'
// 			},
// 			{
// 				id: 'Kate'
// 			}
// 		],
// 		siblings: [],
// 		spouses: [
// 			{
// 				id: 'Shelley'
// 			}
// 		],
// 		bio: "I'm your Linda."
// 	},
// 	{
// 		id: 'Bob',
// 		gender: 'male',
// 		parents: [
// 			{
// 				id: 'Steve'
// 			},
// 			{
// 				id: 'Kate'
// 			}
// 		],
// 		siblings: [],
// 		spouses: [],
// 		children: [],
// 		bio: "I'm your brother."
// 	},
// 	{
// 		id: 'Shelley',
// 		gender: 'female',
// 		parents: [],
// 		children: [
// 			{
// 				id: 'Me'
// 			},
// 			{
// 				id: 'Jeff'
// 			},
// 			{
// 				id: 'Sarah'
// 			},
// 			{
// 				id: 'Kate'
// 			}
// 		],
// 		siblings: [],
// 		spouses: [
// 			{
// 				id: 'Linda'
// 			}
// 		],
// 		bio: "I'm your Shelley."
// 	},

// 	// These objects are your siblings:

// 	{
// 		id: 'Jeff',
// 		gender: 'male',
// 		parents: [
// 			{
// 				id: 'Linda'
// 			},
// 			{
// 				id: 'Shelley'
// 			}
// 		],
// 		siblings: [
// 			{
// 				id: 'Me'
// 			},
// 			{
// 				id: 'Sarah'
// 			},
// 			{
// 				id: 'Kate'
// 			}
// 		],
// 		spouses: [{ id: 'Kim' }],
// 		children: [],
// 		bio: "I'm your brother."
// 	},
// 	{
// 		id: 'Sarah',
// 		gender: 'female',
// 		parents: [
// 			{
// 				id: 'Linda'
// 			},
// 			{
// 				id: 'Shelley'
// 			}
// 		],
// 		siblings: [
// 			{
// 				id: 'Jeff'
// 			},
// 			{
// 				id: 'Me'
// 			},
// 			{
// 				id: 'Kate'
// 			}
// 		],
// 		spouses: [],
// 		children: [],
// 		bio: "I'm your sister."
// 	},
// 	{
// 		id: 'Kim',
// 		gender: 'female',
// 		parents: [],
// 		siblings: [],
// 		spouses: [{ id: 'Jeff' }],
// 		children: [],
// 		bio: "I'm your brother."
// 	},
// 	{
// 		id: 'Kate',
// 		gender: 'female',
// 		parents: [
// 			{
// 				id: 'Linda'
// 			},
// 			{
// 				id: 'Shelley'
// 			}
// 		],
// 		siblings: [
// 			{
// 				id: 'Me'
// 			},
// 			{
// 				id: 'Sarah'
// 			},
// 			{
// 				id: 'Jeff'
// 			}
// 		],
// 		spouses: [{ id: 'Steve' }],
// 		children: [{ id: 'Bob' }],
// 		bio: "I'm your brother."
// 	},
// 	{
// 		id: 'Steve',
// 		gender: 'male',
// 		parents: [],
// 		siblings: [],
// 		spouses: [{ id: 'Kate' }],
// 		children: [{ id: 'Bob' }],
// 		bio: "I'm your brother."
// 	}
// ]

export default data
