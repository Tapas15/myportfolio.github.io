const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

const o2 = o
o2.a = 'new value'
// o and o2 are reference of the same object 
console.log(o.a)