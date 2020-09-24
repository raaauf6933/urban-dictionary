var unirest = require("unirest");
 var req = unirest(
   "GET",
   "https://mashape-community-urban-dictionary.p.rapidapi.com/define"
 );
async function Define() {
 

  req.query({
    term: "dog",
  });

  req.headers({
    "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "x-rapidapi-key": "9196cfb95cmsh64bb4272c1f6e0bp1aa2bejsnb01c091dff35",
    useQueryString: true,
  });

  let response_ = req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body); 
  });
  let response = await response_;

    return await response.json();
}

console.log(Define());
