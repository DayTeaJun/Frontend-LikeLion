// json generator
// https://json-generator.com/
// json
let 회원정보 = [
    {
      "_id": "642a6229d3ef2628b76b0d3c",
      "index": 0,
      "age": 34,
      "eyeColor": "green",
      "name": "Delgado Mccall",
      "gender": "male",
      "company": "GENMY"
    },
    {
      "_id": "642a62292540d0c5d7532aca",
      "index": 1,
      "age": 40,
      "eyeColor": "blue",
      "name": "Charlene Carroll",
      "gender": "female",
      "company": "FIBEROX"
    },
    {
      "_id": "642a6229ea8a18a2b95ec890",
      "index": 2,
      "age": 38,
      "eyeColor": "green",
      "name": "Bailey Booker",
      "gender": "male",
      "company": "PAPRICUT"
    },
    {
      "_id": "642a62297c1fa98e4b58f150",
      "index": 3,
      "age": 22,
      "eyeColor": "blue",
      "name": "Caldwell Gilbert",
      "gender": "male",
      "company": "WATERBABY"
    },
    {
      "_id": "642a6229a6e4463a7b1b1349",
      "index": 4,
      "age": 32,
      "eyeColor": "green",
      "name": "Ronda Tucker",
      "gender": "female",
      "company": "ASSURITY"
    },
    {
      "_id": "642a6229a6f436e29ec55051",
      "index": 5,
      "age": 30,
      "eyeColor": "blue",
      "name": "Kerry Poole",
      "gender": "female",
      "company": "SILODYNE"
    }
  ]

// 회원정보[0]
// 회원정보[0]['name']
// 회원정보[1]['company']

// 모르셔도 됩니다.
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
console.log(나이평균)