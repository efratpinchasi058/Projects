
import { produce } from 'immer'
import { createStore } from 'redux';

const { Password } = require("@mui/icons-material");

const initialState = {
    //רשימת משתמשים
    managerUser: [
        { nameManager: 'efrat', tzManager:'214942393',passwordManager:'1111111@e'}, 
    ],
    users:[
        {id:'123',username:'efrat',tz:'214725053',phon:'0583278720',password:'123',CreditCard:'4580174404628849',validity:'02/85',cvv:'123',typeCode:'1'},
        {id:'000',username:'batsheva',tz:'21445852',phon:'05832784512',password:'000',CreditCard:'1234567891234567',validity:'02/23',cvv:'000',typeCode:'1'},
        {id:'111',username:'leamiri',tz:'214785205',phon:'0548458251',password:'111',CreditCard:'1254896712398451',validity:'02/11',cvv:'111',typeCode:'2'},  
        ],
    currentUser: {},
    //סוג רכב
    cartype: [
        { codeType: "1", Description: "family" },
        { codeType: "3", Description: "mini" },
        { codeType: "6", Description: "jeep" },
        { codeType: "8", Description: "prestige" }
    ],
        carModels:[
            {modelCode:'1',company:'MG',model:'X RANGE',carCode:'1'},
            {modelCode:'2',company:'mercedes',model:'EQC',carCode:'2'},
            {modelCode:'3',company:'mercedes',model:'EQS',carCode:'3'},
            {modelCode:'4',company:'mercedes',model:'EQA',carCode:'4'},
            {modelCode:'5',company:'geep',model:'Q3',carCode:'5'},
            {modelCode:'6',company:'geep',model:'QQ4',carCode:'6'},
            {modelCode:'7',company:'geep',model:'QQ1',carCode:'7'},
            {modelCode:'8',company:'tesla',model:'TX',carCode:'8'},
            {modelCode:'9',company:'tesla',model:'Y6#',carCode:'9'},
            {modelCode:'10',company:'tesla',model:'Y#1',carCode:'10'},
            {modelCode:'11',company:'KIA',model:'NERO+',carCode:'11'},
            {modelCode:'12',company:'KIA',model:'NEW-NERO',carCode:'12'},
            {modelCode:'13',company:'KIA',model:'EV6',carCode:'13'},
            {modelCode:'14',company:'KIA',model:'EV1',carCode:'14'},
            {modelCode:'15',company:'Audi',model:'A6',carCode:'15'},
            {modelCode:'16',company:'Audi',model:'A9',carCode:'16'},
            {modelCode:'17',company:'Audi',model:'A1',carCode:'17'},
            {modelCode:'18',company:'BMW',model:'M5',carCode:'18'},
            {modelCode:'19',company:'BMW',model:'G09',carCode:'19'},
            {modelCode:'20',company:'BMW',model:'E71',carCode:'20'},
            {modelCode:'21',company:'BMW',model:'FEX',carCode:'21'},
            {modelCode:'22',company:'BMW',model:'F97',carCode:'22'},
        ],
        propulsionType:[
            {propulsionTypeCode:'1', description:'fuel',price:'10'},
            {propulsionTypeCode:'2', description:'electric',price:'15'},
        ],
        cars:[
                {codeCars:"1",licenseNumber:"123-451-303",modelCode:"1",Numberofplaces:"5",Image:"-MG4 X RANGE.WEBP",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"1",codeType:"1",pricePerHour:"50",ConsumptionPerKilometer:"16",BalanceInLiters:"5",Street:"shamir",city:"lod",isvacant:"true"},
                {codeCars:"2",licenseNumber:"987-654-111",modelCode:"2",Numberofplaces:"7",Image:"EQC.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"1" ,codeType:"1",pricePerHour:"60",ConsumptionPerKilometer:"18",BalanceInLiters:"6",Street:"hayarkon",city:"jerusalem",isvacant:"false"},
                {codeCars:"3",licenseNumber:"654-321-222",modelCode:"3",Numberofplaces:"5",Image:"EQS.PNG",yearbook:"2023",AutomaticOrManual:true,DriveTypeCode:"2",codeType:"1", pricePerHour:"40",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"sderot",city:"tel-aviv",isvacant:"true"}, 
                {codeCars:"4",licenseNumber:"987-565-803",modelCode:"4",Numberofplaces:"7",Image:"EQA.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2", codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"harimon",city:"kiryat-yearim",isvacant:"true"},  
                {codeCars:"5",licenseNumber:"987-764-603",modelCode:"5",Numberofplaces:"5",Image:"geep1.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2", codeType:"6", pricePerHour:"80",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"tayelet",city:"Tel-Aviv",isvacant:"true"},       
                {codeCars:"6",licenseNumber:"920-432-103",modelCode:"6",Numberofplaces:"7",Image:"geep2.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"1", codeType:"6", pricePerHour:"80",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"sea",city:"jerusalem",isvacant:"true"},       
                {codeCars:"7",licenseNumber:"223-431-103",modelCode:"7",Numberofplaces:"7",Image:"geep3.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2", codeType:"6", pricePerHour:"80",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"jerusalem",city:"kiryat-bialik",isvacant:"true"}, 
                {codeCars:"8",licenseNumber:"123-765-303",modelCode:"8",Numberofplaces:"5",Image:"tesla1.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2", codeType:"8", pricePerHour:"90",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"aza",city:"jerusalem",isvacant:"true"}, 
                {codeCars:"9",licenseNumber:"213-651-203",modelCode:"9",Numberofplaces:"5",Image:"tesla2.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2", codeType:"8", pricePerHour:"90",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gordon",city:"kiryat-yearim",isvacant:"true"},      
                {codeCars:"10",licenseNumber:"432-776-203",modelCode:"10",Numberofplaces:"5",Image:"tesla3.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2",codeType:"8", pricePerHour:"90",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"Tel-Aviv",isvacant:"true"},  
                {codeCars:"11",licenseNumber:"432-090-103",modelCode:"11",Numberofplaces:"7",Image:"KIA1.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2",codeType:"1", pricePerHour:"60",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"kiryat-yearim",isvacant:"true"},  
                {codeCars:"12",licenseNumber:"098-543-303",modelCode:"12",Numberofplaces:"7",Image:"KIA2.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"1", codeType:"1",pricePerHour:"80",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"kiryat-yearim",isvacant:"true"},  
                {codeCars:"13",licenseNumber:"321-098-432",modelCode:"13",Numberofplaces:"5",Image:"KIA3.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"1", codeType:"1", pricePerHour:"50",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"jerusalem",isvacant:"true"},  
                {codeCars:"14",licenseNumber:"432-776-203",modelCode:"14",Numberofplaces:"7",Image:"KIA4.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"1",codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"kiryat-yearim",isvacant:"false"},  
                {codeCars:"15",licenseNumber:"124-009-103",modelCode:"15",Numberofplaces:"5",Image:"audi1.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"2",codeType:"8", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"Tel-Aviv",isvacant:"true"},  
                {codeCars:"16",licenseNumber:"999-541-603",modelCode:"16",Numberofplaces:"5",Image:"audi2.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"2",codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"jerusalem",isvacant:"false"},  
                 {codeCars:"17",licenseNumber:"321-655-903",modelCode:"17",Numberofplaces:"7",Image:"audi3.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"2",codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"kiryat-yearim",isvacant:"false"},  
                 {codeCars:"18",licenseNumber:"111-432-503",modelCode:"18",Numberofplaces:"2",Image:"BMW1.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2",codeType:"8", pricePerHour:"90",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"kiryat-yearim",isvacant:"false"},  
                 {codeCars:"19",licenseNumber:"213-453-403",modelCode:"19",Numberofplaces:"7",Image:"BMW2.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"1",codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"Tel-Aviv",isvacant:"false"},  
                 {codeCars:"20",licenseNumber:"321-433-803",modelCode:"20",Numberofplaces:"5",Image:"BMW3.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"1",codeType:"1", pricePerHour:"50",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"jerusalem",isvacant:"false"},  
                 {codeCars:"21",licenseNumber:"432-121-503",modelCode:"21",Numberofplaces:"7",Image:"BMW4.PNG",yearbook:"2024",AutomaticOrManual:false,DriveTypeCode:"2",codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"jerusalem",isvacant:"false"},  
                 {codeCars:"22",licenseNumber:"432-545-303",modelCode:"17",Numberofplaces:"5",Image:"BMW5.PNG",yearbook:"2024",AutomaticOrManual:true,DriveTypeCode:"2",codeType:"1", pricePerHour:"70",ConsumptionPerKilometer:"14",BalanceInLiters:"4",Street:"gefen",city:"jerusalem",isvacant:"false"},  

        ], 
        rents:[{rentCode:'1',passwordId:'123',licenseNumber:'112-343-102', rentDate:'2022-01', rentTime:'12:00'},
                {rentCode:'2', passwordId:'000', licenseNumber:'321-432-103', rentDate:'2022-02', rentTime:'15:00'},
                {rentCode:'3', passwordId:'111', licenseNumber:'321-432-543', rentDate:'2022-03', rentTime:'18:00'}],

        returns:[{rentCode:' 1', returnDate:'2022-01-15', returnTime:'1  hour'},
                {rentCode:' 2', returnDate:'2022-02-15', returnTime  :'1  hour'},
                {rentCode:' 3', returnDate:'2022-03-15', returnTime  :'1  hour'}], 
                
}
let rentCounter = 100
const generateRentCode = () => {
    return (rentCounter++).toString()
}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            return;

        case 'ADD_USER':
            state.users.push(action.payload)
            return;
         case 'ADD_RENT':
                state.rents.push(action.payload)
                return;
         case 'ADD_RETURNS':
                    state.returns.push(action.payload)
                    return;
                    //הוספה
        case 'ADD_CAR':
            state.products.push(action.payload)
            return;
            //מחיקה
            case 'REMOVE_CAR':
                const index = state.cars.findIndex(car => car.licenseNumber === action.payload);
                if (index !== -1) {
                    state.cars.splice(index, 1);
                }
                return;
                //עדכון
                case 'UPDATE_CAR_PRICE':
                    const { carCode, price } = action.payload;
                    const car1 = state.cars.find(c => c.codeCars === carCode);
                    if (car1) {
                        car1.pricePerHour = price; // עדכן את המחיר
                    }
                    return;
        }
    }, initialState)
const store = createStore(reducer)
export default store