import Vue from "vue";

const globalBus = new Vue({
    data:{
        products : [ 
            {
            index: 1,
            name: '512ka',
            quantity: 20, 
            type: 'new',
            date : "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)",
            nums :[{name:"254325", checked:false},
            {name:"251325", checked:false},
            {name:"255622", checked:false},
            {name:"251316", checked:false},
            {name:"251316", checked:false},
            {name:"254325", checked:false},
            {name:"251325", checked:false},
            {name:"255622", checked:false},
            {name:"251316", checked:false},
            {name:"251316", checked:false},
            {name:"254325", checked:false},
            {name:"251325", checked:false},
            {name:"255622", checked:false},
            {name:"251316", checked:false},
            {name:"251316", checked:false},
            {name:"254325", checked:false},
            {name:"251325", checked:false},
            {name:"255622", checked:false},
            {name:"251316", checked:false},
            {name:"251316", checked:false}
            ]
            },
            {
            index: 2,
            name: 'p960',
            quantity: 30, 
            type: 'old',
            date : "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)",
            nums :[{name:"256325", checked:false},
            {name:"253125", checked:false},
            {name:"231325", checked:false},
            {name:"253325", checked:false},
            {name:"253325", checked:false},
            {name:"256325", checked:false},
            {name:"253125", checked:false},
            {name:"231325", checked:false},
            {name:"253325", checked:false},
            {name:"253325", checked:false},
            {name:"256325", checked:false},
            {name:"253125", checked:false},
            {name:"231325", checked:false},
            {name:"253325", checked:false},
            {name:"253325", checked:false},
            {name:"256325", checked:false},
            {name:"253125", checked:false},
            {name:"231325", checked:false},
            {name:"253325", checked:false},
            {name:"253325", checked:false},
            {name:"256325", checked:false},
            {name:"253125", checked:false},
            {name:"231325", checked:false},
            {name:"253325", checked:false},
            {name:"253325", checked:false},
            {name:"256325", checked:false},
            {name:"253125", checked:false},
            {name:"231325", checked:false},
            {name:"253325", checked:false},
            {name:"253325", checked:false}
            ]
            },
            {
            index: 3,
            name: '베터리',
            quantity: 25, 
            type: 'new',
            date : "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)",
            nums :[{name:"LR-0", checked:false},
            {name:"LR6-1", checked:false},
            {name:"LR6-2", checked:false},
            {name:"LR6-3", checked:false},
            {name:"LR6-4", checked:false},
            {name:"LR-0", checked:false},
            {name:"LR6-1", checked:false},
            {name:"LR6-2", checked:false},
            {name:"LR6-3", checked:false},
            {name:"LR6-4", checked:false},
            {name:"LR-0", checked:false},
            {name:"LR6-1", checked:false},
            {name:"LR6-2", checked:false},
            {name:"LR6-3", checked:false},
            {name:"LR6-4", checked:false},
            {name:"LR-0", checked:false},
            {name:"LR6-1", checked:false},
            {name:"LR6-2", checked:false},
            {name:"LR6-3", checked:false},
            {name:"LR6-4", checked:false},
            {name:"LR-0", checked:false},
            {name:"LR6-1", checked:false},
            {name:"LR6-2", checked:false},
            {name:"LR6-3", checked:false},
            {name:"LR6-4", checked:false}
            ]
            },   
            {
            index : 4,    
            name: '텐트',
            quantity: 6, 
            type: 'new',
            date : "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)",
            nums :[{name:"HQ-2", checked:false},
            {name:"A", checked:false},
            {name:"B", checked:false},
            {name:"C", checked:false},
            {name:"HQ", checked:false},
            {name:"HQ-3", checked:false}

            ]
            },
            {
                index : 5,    
                name: '야전선',
                quantity: 5, 
                type: 'old',
                date : "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)",
                nums :[{name:"pCL1", checked:false},
                {name:"pCL2", checked:false},
                {name:"pCL3", checked:false},
                {name:"pCL4", checked:false},
                {name:"pCL5", checked:false},

                ]
                },
                {
                    index : 6,    
                    name: 'p992',
                    quantity: 12, 
                    type: 'old',
                    date : "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)",
                    nums :[{name:"pCL1", checked:false},
                    {name:"pCL2", checked:false},
                    {name:"pCL3", checked:false},
                    {name:"pCL4", checked:false},
                    {name:"pCL5", checked:false},
                    {name:"pCL56", checked:false},
                    {name:"pCL1", checked:false},
                    {name:"pCL2", checked:false},
                    {name:"pCL3", checked:false},
                    {name:"pCL4", checked:false},
                    {name:"pCL5", checked:false},
                    {name:"pCL56", checked:false},
                    {name:"pCL5", checked:false},
                    {name:"pCL56", checked:false},
                    ]
                    }             
        ],
        log:[
        {log: "512ka(new)를 20만큼 창고에 추가시킴",
         date: "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)"
        },
        
        {log: "p960(old)를 30만큼 창고에 추가시킴",
         date: "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)"
        },
        
        {log: "베터리(new)를 25만큼 창고에 추가시킴",
         date: "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)"
        },
        
        {log: "텐트(new)를 6만큼 창고에 추가시킴",
         date: "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)"
        },
        {log: "야전선(old)를 5만큼 창고에 추가시킴",
         date: "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)"
        },
        {log: "야전선(old)를 5만큼 창고에 추가시킴",
        date: "Tue Oct 22 2019 00:00:00 GMT+0900 (한국 표준시)"
        }
        ]
    },
    computed :{
   
    },
    methods:{

    }
})

export default globalBus;