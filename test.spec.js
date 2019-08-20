function flipHandler(cardDomElement){
  const id = getIdFromDomElement(cardDomElement)
  performFlip(id)
}

function shouldFlipIfClicked(id){
   expect(true).toBe(true);
}



function performFlip(id){
  if (shouldFlipIfClicked(id)){
      updateDom()
  }
}

describe("performFlip", function(){
  


  it("should be match",function(){
      cards = [
          {id:0, hiddenImage: "rainbow.jpeg", isFlipped: true, freeze:false},
          {id:1, hiddenImage: "rainbow.jpeg", isFlipped: false,  freeze:false},
      ]
      performFlip(1)
   
  })

  it("should be match",function(){
    cards = [
        {id:0, hiddenImage: "trio.jpeg", isFlipped: true, freeze:false},
        {id:1, hiddenImage: "trio.jpeg", isFlipped: false,  freeze:false},
    ]
    performFlip(1)
 
})

it("should be match",function(){
  cards = [
      {id:0, hiddenImage: "gary.jpeg", isFlipped: true, freeze:false},
      {id:1, hiddenImage: "gary.jpeg", isFlipped: false,  freeze:false},
  ]
  performFlip(1)

})

it("should be match",function(){
  cards = [
      {id:0, hiddenImage: "krabs.jpeg", isFlipped: true, freeze:false},
      {id:1, hiddenImage: "krabs.jpeg", isFlipped: false,  freeze:false},
  ]
  performFlip(1)

})

it("should be match",function(){
  cards = [
      {id:0, hiddenImage: "pat.jpeg", isFlipped: true, freeze:false},
      {id:1, hiddenImage: "pat.jpeg", isFlipped: false,  freeze:false},
  ]
  performFlip(1)

})

it("should be match",function(){
  cards = [
      {id:0, hiddenImage: "squid.jpeg", isFlipped: true, freeze:false},
      {id:1, hiddenImage: "squid.jpeg", isFlipped: false,  freeze:false},
  ]
  performFlip(1)

})

})


