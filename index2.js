const { Map, List, is, fromJS,Range,Seq } = require('immutable');
const log = x => console.log(x);

//create a list
const plainList = [1,2,3,4,5]

const immutableList = fromJS(plainList);
log(List.isList(immutableList))

const a = immutableList.push(6)

log(a)
log(a.get(3))


//create a map

const plianObject = {
  name:"Sung",
  age:22,
  job:"developer",
  address:{
    unit:8,
    state:"CA",
    zipcode:95814
  }
}

const immutableMap = fromJS(plianObject);
const b = immutableMap.set('hobby','watching movies')


log(Map.isMap(immutableMap))
log(b)
log(b.get('name'))


const plainArrayList = [1,2,3,4,5,6,7,8,9];


const w = List.of(...plainArrayList, 10,11,12)
log(w)



const sequence = Seq.of(1,2,3,4,5,6,6,7);

log(
  Seq.isSeq(sequence)
)

log(
  sequence
)



const powerOfTwo = Seq.of(1,2,3,4,5,6,7,8,9).map(x => x**2)


log(
  powerOfTwo.take(2).toArray
)

const range = Range(1,20).map(x => x + 2)
log(
  range.size
)

const addPowerOfTwo =
 Range(0, Infinity).filter(x => x % 2 !== 0)
.map(x => x * 2)
.take(1000)


// log(
//   addPowerOfTwo
// )

const westCoast = Map({
  key1:'First Item',
  key2:'Second Item',
  keys3:{key4:"dsafads"}
})

const convertedList = westCoast.toList();
log(convertedList)



const listamp = List.of("First Item", 'Second Item');
log(
  listamp.toMap()
)
log(
  listamp.toMap().first()
)


log(
  westCoast.toArray()
)
log(
  westCoast.toJSON()
)
