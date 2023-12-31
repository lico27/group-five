
// Cities dropdown

let cities = [
    "London",
    "Birmingham",
    "Manchester",
    "Liverpool",
    "Leeds",
    "Sheffield",
    "Teesside",
    "Bristol",
    "Bournemouth",
    "Stoke-on-Trent",
    "Leicester",
    "Wirral",
    "Coventry",
    "Nottingham",
    "Bradford",
    "Newcastle",
    "Bolton",
    "Brighton",
    "Hove",
    "Plymouth",
    "Hull",
    "Preston",
    "Derby",
    "Aldershot",
    "Southampton",
    "Wigan",
    "Barnsley",
    "Portsmouth",
    "Luton",
    "York",
    "Northampton",
    "Worthing",
    "Ipswich",
    "Crawley",
    "Sunderland",
    "Southend-on-Sea",
    "Rochdale",
    "Warrington",
    "Mansfield",
    "Swindon",
    "Reading",
    "Blackburn",
    "Burnley",
    "Huddersfield",
    "Oxford",
    "Wakefield",
    "Blackpool",
    "Norwich",
    "Grimsby",
    "Telford",
    "Peterborough",
    "Gloucester",
    "Cambridge",
    "Doncaster",
    "Hastings",
    "Glasgow",
    "Edinburgh",
    "Aberdeen",
    "Dundee",
    "Motherwell",
    "Falkirk",
    "Coatbridge",
    "Hamilton",
    "Dunfermline",
    "Greenock",
    "Livingston",
    "Inverness",
    "Ayr",
    "Dalkeith",
    "Kilmarnock",
    "Kirkcaldy",
    "Cumbernauld",
    "Belfast",
    "Derry",
    "Craigavon",
    "Newtownabbey",
    "Bangor",
    "Castlereagh",
    "Lisburn",
    "Ballymena",
    "Lurgan",
    "Portadown",
    "Newtownards",
    "Newry",
    "Carrickfergus",
    "Antrim",
    "Coleraine",
    "Omagh",
    "Larne",
    "Banbridge",
    "Armagh",
    "Dungannon",
    "Enniskillen",
    "Craigavon",
    "Strabane",
    "Cardiff",
    "Swansea",
    "Newport",
    "Wrexham",
    "Barry",
    "Neath",
    "Cwmbran",
    "Bridgend",
    "Llanelli",
    "Caerphilly",
    "Pontypridd",
    "Aberdare",
    "Pontypool",
    "Penarth",
    "Rhyl",
    "Blackwood",
    "Maesteg",
    "Anglesey",
    "Chelmsford"
    ];
cities = cities.sort();
let destCity = $("#destination");
    
    for (let i = 0; i < cities.length; i++) {
        let eachCity = cities[i];
        destCity.append("<option>" + eachCity + "</option").attr("value", eachCity);
    }