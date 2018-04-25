const { Map, List, is, fromJS } = require('immutable');
const log = x => console.log(x);

const data = {
  "todo1":{
    title:'Todo 1',
    value:"Make it happen"
  },
  "todo2":{
    title:"Todo 2",
    value:"Make it happen"
  }
}


const map = Map(data);


log(
  map.get('todo1')
)

const a = map.set('todo3',{title:'Todo3', value:"Make it happen"})
// const b = map.delete('todo2')
const updatedMap = a.update("todo3", (value) => {
  return {...value, title:"ssssss"}
})

log(updatedMap.toJS())


log(updatedMap.size)
log('======')
log(updatedMap.getIn(['todo3'])['title'])
log('======')


const avengers = Map({
  ironMan:'Tony Stark',
  captainAmerica:"Steve Rogers"
})

const mergingAvengers = Map({
  blackWidow: 'Natasha Romanova',
  theHulk: 'Bruce Banner'
});


const mergedAven = avengers.merge(mergingAvengers)


log(mergedAven)
log(mergedAven.size)
log(mergedAven.get('blackWidow'))
log(mergedAven.has('blackWidow'))
log(mergedAven.includes('Natasha Romanova'))


const aUser = {
  name:'Sungmin Yi',
  age:22
}

const b = {
  name:"Yonna",
  age:21
}

const immutableA = Map(aUser);
const immutableB = Map(b);

const immutableC = Map({
  user1:immutableA,
  user2:immutableB
})


log(
  immutableC.getIn(['user1','name'])
)



log(
  immutableC.find(o => o.get('name') === 'Yonna')
)

const immutableState = List(['todo1','todo2','todo3','todo4'])
const asss =  immutableState.slice(immutableState.size -2,immutableState.size )

const wef =  immutableState.slice(1,immutableState.size )

 log(
   immutableState
 )
 log(
   asss
 )

 log(
   wef
 )

 log(
   immutableState.rest()
 )
 log(
   immutableState.butLast()
 )
 log(
   immutableState.skip(1)
 )

 log(
   immutableState.skipUntil(x => x === 'todo3')
 )
 log('=========')
 log(
   immutableState.skipWhile(x => x === 'todo3').take(2)
 )





const newMap = Map({
  a:1,
  c:List.of(1)
})

const newMap2 = Map({
  a:1,
  b:2,
  c:List.of(1)
})


// log(
//   is(newMap,newMap2)
// )

log(
  newMap.isSubset(newMap2)
)

log(
  newMap2.isSuperset(newMap)
)




const plainJSObject = {
  title:"Go to grocery",
  text:"I need milk and eggs",
  completed:false,
  category:{
    title:"House Duties",
    priority:10
  }
}


const immutableTodo = fromJS(plainJSObject)


log(
  Map.isMap(immutableTodo)
)


log(
  immutableTodo.getIn(['category','title'])
)



const plainJSArray = ['Go to grocery store','Buy milk and eggs','Help kids with homework',
['buy Lemons','Make Lemons']
]

const immutableList = fromJS(plainJSArray);

log(
  List.isList(immutableList)
)


log(
  immutableList.getIn([3,0])
)


const plainJSArray2 = ['Go to grocery store','Buy milk and eggs','Help kids with homework',
['buy Lemons','Make Lemons']
]



const immutableMap2 = fromJS(plainJSArray2, (key,value) => {
  return value.toMap();
})


log(
  Map.isMap(immutableMap2)
)

log(
  immutableMap2
)




//
// const w = [["todo1", {title:"Todo1"}]];
// const immultableW = Map(w);
// log(
//   immultableW
// )



//create a list
const plainList = [1,2,3,4,5]

const immutableList = fromJS(plainList);


//create a map

const plianObject = {
  name:"Sung"
  age:22,
  job:"developer",
  address:{
    unit:8,
    state:"CA",
    zipcode:95814
  }
}

const immutableMap = fromJS(plianObject);
