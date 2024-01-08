const number=[10,20,30,40,50,60,70,80,90,100]

const mapp=number.map((x)=>{
    return x*x
})

const sum=mapp.filter((value)=>{
    
    return value>50
}).reduce((acc,curr)=>{
    return acc+curr
})


console.log(sum);