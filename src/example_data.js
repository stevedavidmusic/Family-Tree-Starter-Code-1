let data = [

    // This is the object that represents you:

    {
        id: "Me",
        gender: "male",
        parents: [
            {
                id: "Nancy",
            },
            {
                id: "Shelley",
            }
        ],
        children: [],
        sibling: [
            {
                id: "Jeff",
            },
            {
                id: "Sarah",
            },
            {
                id: "Kate",
            }
        ],
        spouses: [],
        bio: "I'm you."
    },

    // The next two objects are your parents:

    {
        id: "Nancy",
        gender: "female",
        parents: [],
        children: [
            {
                id: "Me",
            },
            {
                id: "Jeff",
            },
            {
                id: "Sarah",
            },
            {
                id: "Kate",
            }
        ],
        siblings: [],
        spouses: [
            {
                id: "Shelley",
            }
        ],
        bio: "I'm your Nancy."
    },
    {
        id: "Shelley",
        gender: "female",
        parents: [],
        children: [
            {
                id: "Me",
            },
            {
                id: "Jeff",
            },
            {
                id: "Sarah",
            },
            {
                id: "Kate",
            }
        ],
        siblings: [],
        spouses: [
            {
                id: "Nancy",
            }
        ],
        bio: "I'm your Shelley."
    },

    // These objects are your siblings:

    {
        id: "Jeff",
        gender: "male",
        parents: [
            {
                id: "Nancy",
            },
            {
                id: "Shelley",
            }
        ],
        siblings: [
            {
                id: "Me",
            },
            {
                id: "Sarah",
            },
            {
                id: "Kate",
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your brother."
    },
    {
        id: "Sarah",
        gender: "female",
        parents: [
            {
                id: "Nancy",
            },
            {
                id: "Shelley",
            }
        ],
        siblings: [
            {
                id: "Jeff",
            },
            {
                id: "Me",
            },
            {
                id: "Kate",
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your sister."
    },
    {
        id: "Jeff",
        gender: "male",
        parents: [
            {
                id: "Nancy",
            },
            {
                id: "Shelley",
            }
        ],
        children: [],
        siblings: [
            {
                id: "Kate",
            },
            {
                id: "Me",
            },
            {
                id: "Sarah",
            }
        ],
        spouses: [],
        bio: "I'm your other brother."
    },
    {
        id: "Kate",
        gender: "female",
        parents: [
            {
                id: "Nancy",
            },
            {
                id: "Shelley",
            }
        ],
        siblings: [
            {
                id: "Me",
            },
            {
                id: "Sarah",
            },
            {
                id: "Jeff",
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your brother."
    },
];

export default data;