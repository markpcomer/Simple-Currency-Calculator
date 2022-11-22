/*
    CURRENCY LIST #1

const currencies = {
    "AFA": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "DZD": "Algerian Dinar",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AMD": "Armenian Dram",
    "AWG": "Aruban Florin",
    "AUD": "Australian Dollar",
    "AZN": "Azerbaijani Manat",
    "BSD": "Bahamian Dollar",
    "BHD": "Bahraini Dinar",
    "BDT": "Bangladeshi Taka",
    "BBD": "Barbadian Dollar",
    "BYR": "Belarusian Ruble",
    "BEF": "Belgian Franc",
    "BZD": "Belize Dollar",
    "BMD": "Bermudan Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BTC": "Bitcoin",
    "BOB": "Bolivian Boliviano",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BWP": "Botswanan Pula",
    "BRL": "Brazilian Real",
    "GBP": "British Pound Sterling",
    "BND": "Brunei Dollar",
    "BGN": "Bulgarian Lev",
    "BIF": "Burundian Franc",
    "KHR": "Cambodian Riel",
    "CAD": "Canadian Dollar",
    "CVE": "Cape Verdean Escudo",
    "KYD": "Cayman Islands Dollar",
    "XOF": "CFA Franc BCEAO",
    "XAF": "CFA Franc BEAC",
    "XPF": "CFP Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "KMF": "Comorian Franc",
    "CDF": "Congolese Franc",
    "CRC": "Costa Rican ColÃ³n",
    "HRK": "Croatian Kuna",
    "CUC": "Cuban Convertible Peso",
    "CZK": "Czech Republic Koruna",
    "DKK": "Danish Krone",
    "DJF": "Djiboutian Franc",
    "DOP": "Dominican Peso",
    "XCD": "East Caribbean Dollar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "EEK": "Estonian Kroon",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FKP": "Falkland Islands Pound",
    "FJD": "Fijian Dollar",
    "GMD": "Gambian Dalasi",
    "GEL": "Georgian Lari",
    "DEM": "German Mark",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GRD": "Greek Drachma",
    "GTQ": "Guatemalan Quetzal",
    "GNF": "Guinean Franc",
    "GYD": "Guyanaese Dollar",
    "HTG": "Haitian Gourde",
    "HNL": "Honduran Lempira",
    "HKD": "Hong Kong Dollar",
    "HUF": "Hungarian Forint",
    "ISK": "Icelandic KrÃ³na",
    "INR": "Indian Rupee",
    "IDR": "Indonesian Rupiah",
    "IRR": "Iranian Rial",
    "IQD": "Iraqi Dinar",
    "ILS": "Israeli New Sheqel",
    "ITL": "Italian Lira",
    "JMD": "Jamaican Dollar",
    "JPY": "Japanese Yen",
    "JOD": "Jordanian Dinar",
    "KZT": "Kazakhstani Tenge",
    "KES": "Kenyan Shilling",
    "KWD": "Kuwaiti Dinar",
    "KGS": "Kyrgystani Som",
    "LAK": "Laotian Kip",
    "LVL": "Latvian Lats",
    "LBP": "Lebanese Pound",
    "LSL": "Lesotho Loti",
    "LRD": "Liberian Dollar",
    "LYD": "Libyan Dinar",
    "LTL": "Lithuanian Litas",
    "MOP": "Macanese Pataca",
    "MKD": "Macedonian Denar",
    "MGA": "Malagasy Ariary",
    "MWK": "Malawian Kwacha",
    "MYR": "Malaysian Ringgit",
    "MVR": "Maldivian Rufiyaa",
    "MRO": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MXN": "Mexican Peso",
    "MDL": "Moldovan Leu",
    "MNT": "Mongolian Tugrik",
    "MAD": "Moroccan Dirham",
    "MZM": "Mozambican Metical",
    "MMK": "Myanmar Kyat",
    "NAD": "Namibian Dollar",
    "NPR": "Nepalese Rupee",
    "ANG": "Netherlands Antillean Guilder",
    "TWD": "New Taiwan Dollar",
    "NZD": "New Zealand Dollar",
    "NIO": "Nicaraguan CÃ³rdoba",
    "NGN": "Nigerian Naira",
    "KPW": "North Korean Won",
    "NOK": "Norwegian Krone",
    "OMR": "Omani Rial",
    "PKR": "Pakistani Rupee",
    "PAB": "Panamanian Balboa",
    "PGK": "Papua New Guinean Kina",
    "PYG": "Paraguayan Guarani",
    "PEN": "Peruvian Nuevo Sol",
    "PHP": "Philippine Peso",
    "PLN": "Polish Zloty",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SVC": "Salvadoran ColÃ³n",
    "WST": "Samoan Tala",
    "SAR": "Saudi Riyal",
    "RSD": "Serbian Dinar",
    "SCR": "Seychellois Rupee",
    "SLL": "Sierra Leonean Leone",
    "SGD": "Singapore Dollar",
    "SKK": "Slovak Koruna",
    "SBD": "Solomon Islands Dollar",
    "SOS": "Somali Shilling",
    "ZAR": "South African Rand",
    "KRW": "South Korean Won",
    "XDR": "Special Drawing Rights",
    "LKR": "Sri Lankan Rupee",
    "SHP": "St. Helena Pound",
    "SDG": "Sudanese Pound",
    "SRD": "Surinamese Dollar",
    "SZL": "Swazi Lilangeni",
    "SEK": "Swedish Krona",
    "CHF": "Swiss Franc",
    "SYP": "Syrian Pound",
    "STD": "São Tomé and Príncipe Dobra",
    "TJS": "Tajikistani Somoni",
    "TZS": "Tanzanian Shilling",
    "THB": "Thai Baht",
    "TOP": "Tongan Pa'anga",
    "TTD": "Trinidad & Tobago Dollar",
    "TND": "Tunisian Dinar",
    "TRY": "Turkish Lira",
    "TMT": "Turkmenistani Manat",
    "UGX": "Ugandan Shilling",
    "UAH": "Ukrainian Hryvnia",
    "AED": "United Arab Emirates Dirham",
    "UYU": "Uruguayan Peso",
    "USD": "US Dollar",
    "UZS": "Uzbekistan Som",
    "VUV": "Vanuatu Vatu",
    "VEF": "Venezuelan BolÃvar",
    "VND": "Vietnamese Dong",
    "YER": "Yemeni Rial",
    "ZMK": "Zambian Kwacha"
};

    CURRENCY LIST #2

const currencies = {
"AED": "UAE Dirham",
"AFN": "Afghan Afghani",
"ALL": "Albanian Lek",
"AMD": "Armenian Dram",
"ANG": "Netherlands Antillian Guilder",
"AOA": "Angolan Kwanza",
"ARS": "Argentine Peso",
"AUD": "Australian Dollar",
"AWG": "Aruban Florin",
"AZN": "Azerbaijani Manat",
"BAM": "Bosnia and Herzegovina Mark",
"BBD": "Barbados Dollar",
"BDT": "Bangladeshi Taka",
"BGN": "Bulgarian Lev",
"BHD": "Bahraini Dinar",
"BIF": "Burundian Franc",
"BMD": "Bermudian Dollar",
"BND": "Brunei Dollar",
"BOB": "Bolivian Boliviano",
"BRL": "Brazilian Real",
"BSD": "Bahamian Dollar",
"BTN": "Bhutanese Ngultrum",
"BWP": "Botswana Pula",
"BYN": "Belarusian Ruble",
"BZD": "Belize Dollar",
"CAD": "Canadian Dollar",
"CDF": "Congolese Franc",
"CHF": "Swiss Franc",
"CLP": "Chilean Peso",
"CNY": "Chinese Renminbi",
"COP": "Colombian Peso",
"CRC": "Costa Rican Colon",
"CUP": "Cuban Peso",
"CVE": "Cape Verdean Escudo",
"CZK": "Czech Koruna",
"DJF": "Djiboutian Franc",
"DKK": "Danish Krone",
"DOP": "Dominican Peso",
"DZD": "Algerian Dinar",
"EGP": "Egyptian Pound",
"ERN": "Eritrean Nakfa",
"ETB": "Ethiopian Birr",
"EUR": "Euro",
"FJD": "Fiji Dollar",
"FKP": "Falkland Islands Pound",
"FOK": "Faroese Króna",
"GBP": "Pound Sterling",
"GEL": "Georgian Lari",
"GGP": "Guernsey Pound",
"GHS": "Ghanaian Cedi",
"GIP": "Gibraltar Pound",
"GMD": "Gambian Dalasi",
"GNF": "Guinean Franc",
"GTQ": "Guatemalan Quetzal",
"GYD": "Guyanese Dollar",
"HKD": "Hong Kong Dollar",
"HNL": "Honduran Lempira",
"HRK": "Croatian Kuna",
"HTG": "Haitian Gourde",
"HUF": "Hungarian Forint",
"IDR": "Indonesian Rupiah",
"ILS": "Israeli New Shekel",
"IMP": "Manx Pound",
"INR": "Indian Rupee",
"IQD": "Iraqi Dinar",
"IRR": "Iranian Rial",
"ISK": "Icelandic Króna",
"JEP": "Jersey Pound",
"JMD": "Jamaican Dollar",
"JOD": "Jordanian Dinar",
"JPY": "Japanese Yen",
"KES": "Kenyan Shilling",
"KGS": "Kyrgyzstani Som",
"KHR": "Cambodian Riel",
"KID": "Kiribati Dollar",
"KMF": "Comorian Franc",
"KRW": "South Korean Won",
"KWD": "Kuwaiti Dinar",
"KYD": "Cayman Islands Dollar",
"KZT": "Kazakhstani Tenge",
"LAK": "Lao Kip",
"LBP": "Lebanese Pound",
"LKR": "Sri Lanka Rupee",
 "LRD": "Liberian Dollar",
"LSL": "Lesotho Loti",
"LYD": "Libyan Dinar",
"MAD": "Moroccan Dirham",
"MDL": "Moldovan Leu",
"MGA": "Malagasy Ariary",
"MKD": "Macedonian Denar",
"MMK": "Burmese Kyat",
"MNT": "Mongolian Tögrög",
"MOP": "Macanese Pataca",
"MRU": "Mauritanian Ouguiya",
"MUR": "Mauritian Rupee",
"MVR": "Maldivian Rufiyaa",
"MWK": "Malawian Kwacha",
"MXN": "Mexican Peso",
"MYR": "Malaysian Ringgit",
"MZN": "Mozambican Metical",
"NAD": "Namibian Dollar",
"NGN": "Nigerian Naira",
"NIO": "Nicaraguan Córdoba",
"NOK": "Norwegian Krone",
"NPR": "Nepalese Rupee",
"NZD": "New Zealand Dollar",
"OMR": "Omani Rial",
"PAB": "Panamanian Balboa",
"PEN": "Peruvian Sol",
"PGK": "Papua New Guinean Kina",
"PHP": "Philippine Peso",
"PKR": "Pakistani Rupee",
"PLN": "Polish Złoty",
"PYG": "Paraguayan Guaraní",
"QAR": "Qatari Riyal",
"RON": "Romanian Leu",
"RSD": "Serbian Dinar",
"RUB": "Russian Ruble",
"RWF": "Rwandan Franc",
"SAR": "Saudi Riyal",
"SBD": "Solomon Islands Dollar",
"SCR": "Seychellois Rupee",
"SDG": "Sudanese Pound",
"SEK": "Swedish Krona",
"SGD": "Singapore Dollar",
"SHP": "Saint Helena Pound",
"SLE": "Sierra Leonean Leone",
"SOS": "Somali Shilling",
"SRD": "Surinamese Dollar",
"SSP": "South Sudanese Pound",
"STN": "São Tomé and Príncipe Dobra",
"SYP": "Syrian Pound",
"SZL": "Eswatini Lilangeni",
"THB": "Thai Baht",
"TJS": "Tajikistani Somoni",
"TMT": "Turkmenistan Manat",
"TND": "Tunisian Dinar",
"TOP": "Tongan Paʻanga",
"TRY": "Turkish Lira",
"TTD": "Trinidad and Tobago Dollar",
"TVD": "Tuvaluan Dollar",
"TWD": "New Taiwan Dollar",
"TZS": "Tanzanian Shilling",
"UAH": "Ukrainian Hryvnia",
"UGX": "Ugandan Shilling",
"USD": "United States Dollar",
"UYU": "Uruguayan Peso",
"UZS": "Uzbekistani So'm",
"VES": "Venezuelan Bolívar Soberano",
"VND": "Vietnamese Đồng",
"VUV": "Vanuatu Vatu",
"WST": "Samoan Tālā",
"XAF": "Central African CFA Franc",
"XCD": "East Caribbean Dollar",
"XDR": "Special Drawing Rights",
"XOF": "West African CFA franc",
"XPF": "CFP Franc",
"YER": "Yemeni Rial",
"ZAR": "South African Rand",
"ZMW": "Zambian Kwacha",
"ZWL": "Zimbabwean Dollar",

}
*/

//  CURRENCY LIST #3

// length 164
const currencies = {
    "AED": {"name":"United Arab Emirates Dirham","symbol":"إ.د"},
    "AFN": {"name":"Afghan Afghani","symbol":"؋"},
    "ALL": {"name":"Albanian Lek","symbol":"Lek"},
    "AMD": {"name":"Armenian Dram","symbol":"֏"},
    "ANG": {"name":"Netherlands Antillean Guilder","symbol":"ƒ"},
    "AOA": {"name":"Angolan Kwanza","symbol":"Kz"},
    "ARS": {"name":"Argentine Peso","symbol":"$"},
    "AUD": {"name":"Australian Dollar","symbol":"$"},
    "AWG": {"name":"Aruban Florin","symbol":"ƒ"},
    "AZN": {"name":"Azerbaijani Manat","symbol":"m"},
    "BAM": {"name":"Bosnia-Herzegovina Convertible Mark","symbol":"KM"},
    "BBD": {"name":"Barbados Dollar", "symbold": "Bds$"},
    "BDT": {"name":"Bangladeshi Taka","symbol":"৳"},
    "BGN": {"name":"Bulgarian Lev","symbol":"Лв."},
    "BHD": {"name":"Bahraini Dinar","symbol":".د.ب"},
    "BIF": {"name":"Burundian Franc","symbol":"FBu"},
    "BMD": {"name":"Bermudan Dollar","symbol":"$"},
    "BND": {"name":"Brunei Dollar","symbol":"B$"},
    "BOB": {"name":"Bolivian Boliviano","symbol":"Bs."},
    "BRL": {"name":"Brazilian Real","symbol":"R$"},
    "BSD": {"name":"Bahamian Dollar","symbol":"B$"},
    "BTN": {"name":"Bhutanese Ngultrum","symbol":"Nu."},
    "BWP": {"name":"Botswanan Pula","symbol":"P"},
    "BYN": {"name":"Belarusian Ruble","symbol":"Br"},
    "BZD": {"name":"Belize Dollar","symbol":"$"},
    "CAD": {"name":"Canadian Dollar","symbol":"$"},
    "CDF": {"name":"Congolese Franc","symbol":"FC"},
    "CHF": {"name":"Swiss Franc","symbol":"CHf"},
    "CLP": {"name":"Chilean Peso","symbol":"$"},
    "CNY": {"name":"Chinese Yuan","symbol":"¥"},
    "COP": {"name":"Colombian Peso","symbol":"$"},
    "CRC": {"name":"Costa Rican ColÃ³n","symbol":"₡"},
    "CUP": {"name":"Cuban Convertible Peso","symbol":"$, CUC"},
    "CVE": {"name":"Cape Verdean Escudo","symbol":"$"},
    "CZK": {"name":"Czech Republic Koruna","symbol":"Kč"},
    "DJF": {"name":"Djiboutian Franc","symbol":"Fdj"},
    "DKK": {"name":"Danish Krone","symbol":"Kr."},
    "DOP": {"name":"Dominican Peso","symbol":"$"},
    "DZD": {"name":"Algerian Dinar","symbol":"دج"},
    "EGP": {"name":"Egyptian Pound","symbol":"ج.م"},
    "ERN": {"name":"Eritrean Nakfa","symbol":"Nfk"},
    "ETB": {"name":"Ethiopian Birr","symbol":"Nkf"},
    "EUR": {"name":"Euro","symbol":"€"},
    "FJD": {"name":"Fijian Dollar","symbol":"FJ$"},
    "FKP": {"name":"Falkland Islands Pound","symbol":"£"},
    "FOK": {"name":"Faroese Króna", "symbol": "kr"},
    "GBP": {"name":"British Pound Sterling","symbol":"£"},
    "GEL": {"name":"Georgian Lari","symbol":"ლ"},
    "GGP": {"name":"Guernsey Pound", "symbol":"£"},
    "GHS": {"name":"Ghanaian Cedi","symbol":"GH₵"},
    "GIP": {"name":"Gibraltar Pound","symbol":"£"},
    "GMD": {"name":"Gambian Dalasi","symbol":"D"},
    "GNF": {"name":"Guinean Franc","symbol":"FG"},
    "GTQ": {"name":"Guatemalan Quetzal","symbol":"Q"},
    "GYD": {"name":"Guyanaese Dollar","symbol":"$"},
    "HKD": {"name":"Hong Kong Dollar","symbol":"$"},
    "HNL": {"name":"Honduran Lempira","symbol":"L"},
    "HRK": {"name":"Croatian Kuna","symbol":"kn"},
    "HTG": {"name":"Haitian Gourde","symbol":"G"},
    "HUF": {"name":"Hungarian Forint","symbol":"Ft"},
    "IDR": {"name":"Indonesian Rupiah","symbol":"Rp"},
    "ILS": {"name":"Israeli New Sheqel","symbol":"₪"},
    "IMP": {"name":"Manx Pound","symbol":"£"},
    "INR": {"name":"Indian Rupee","symbol":"₹"},
    "IQD": {"name":"Iraqi Dinar","symbol":"د.ع"},
    "IRR": {"name":"Iranian Rial","symbol":"﷼"},
    "ISK": {"name":"Icelandic KrÃ³na","symbol":"kr"},
    "JEP": {"name":"Jersey Pound","symbol":"£"},
    "JMD": {"name":"Jamaican Dollar","symbol":"J$"},
    "JOD": {"name":"Jordanian Dinar","symbol":"ا.د"},
    "JPY": {"name":"Japanese Yen","symbol":"¥"},
    "KES": {"name":"Kenyan Shilling","symbol":"KSh"},
    "KGS": {"name":"Kyrgystani Som","symbol":"лв"},
    "KHR": {"name":"Cambodian Riel","symbol":"KHR"},
    "KID": {"name":"Kiribati Dollar","symbol":"$"},
    "KMF": {"name":"Comorian Franc","symbol":"CF"},
    "KRW": {"name":"South Korean Won","symbol":"₩"},
    "KWD": {"name":"Kuwaiti Dinar","symbol":"ك.د"},
    "KYD": {"name":"Cayman Islands Dollar","symbol":"$"},
    "KZT": {"name":"Kazakhstani Tenge","symbol":"лв"},
    "LAK": {"name":"Laotian Kip","symbol":"₭"},
    "LBP": {"name":"Lebanese Pound","symbol":"£"},
    "LKR": {"name":"Sri Lankan Rupee","symbol":"Rs"},
    "LRD": {"name":"Liberian Dollar","symbol":"$"},
    "LSL": {"name":"Lesotho Loti","symbol":"L"},
    "LYD": {"name":"Libyan Dinar","symbol":"د.ل"},
    "MAD": {"name":"Moroccan Dirham","symbol":"MAD"},
    "MDL": {"name":"Moldovan Leu","symbol":"L"},
    "MGA": {"name":"Malagasy Ariary","symbol":"Ar"},
    "MKD": {"name":"Macedonian Denar","symbol":"ден"},
    "MMK": {"name":"Burmese Kyat","symbol":"K"},
    "MNT": {"name":"Mongolian Tugrik","symbol":"₮"},
    "MOP": {"name":"Macanese Pataca","symbol":"MOP$"},
    "MRU": {"name":"Mauritanian Ouguiya","symbol":"MRU"},
    "MUR": {"name":"Mauritian Rupee","symbol":"₨"},
    "MVR": {"name":"Maldivian Rufiyaa","symbol":"Rf"},
    "MWK": {"name":"Malawian Kwacha","symbol":"MK"},
    "MXN": {"name":"Mexican Peso","symbol":"$"},
    "MYR": {"name":"Malaysian Ringgit","symbol":"RM"},
    "MZN": {"name":"Mozambican Metical","symbol":"MT"},
    "NAD": {"name":"Namibian Dollar","symbol":"$"},
    "NGN": {"name":"Nigerian Naira","symbol":"₦"},
    "NIO": {"name":"Nicaraguan CÃ³rdoba","symbol":"C$"},
    "NOK": {"name":"Norwegian Krone","symbol":"kr"},
    "NPR": {"name":"Nepalese Rupee","symbol":"₨"},
    "NZD": {"name":"New Zealand Dollar","symbol":"$"},
    "OMR": {"name":"Omani Rial","symbol":".ع.ر"},
    "PAB": {"name":"Panamanian Balboa","symbol":"B/."},
    "PEN": {"name":"Peruvian Nuevo Sol","symbol":"S/."},
    "PGK": {"name":"Papua New Guinean Kina","symbol":"K"},
    "PHP": {"name":"Philippine Peso","symbol":"₱"},
    "PKR": {"name":"Pakistani Rupee","symbol":"₨"},
    "PLN": {"name":"Polish Zloty","symbol":"zł"},
    "PYG": {"name":"Paraguayan Guarani","symbol":"₲"},
    "QAR": {"name":"Qatari Rial","symbol":"ق.ر"},
    "RON": {"name":"Romanian Leu","symbol":"lei"},
    "RSD": {"name":"Serbian Dinar","symbol":"din"},
    "RUB": {"name":"Russian Ruble","symbol":"₽"},
    "RWF": {"name":"Rwandan Franc","symbol":"FRw"},
    "SAR": {"name":"Saudi Riyal","symbol":"﷼"},
    "SBD": {"name":"Solomon Islands Dollar","symbol":"Si$"},
    "SCR": {"name":"Seychellois Rupee","symbol":"SRe"},
    "SDG": {"name":"Sudanese Pound","symbol":".س.ج"},
    "SEK": {"name":"Swedish Krona","symbol":"kr"},
    "SGD": {"name":"Singapore Dollar","symbol":"$"},
    "SHP": {"name":"Saint Helena Pound","symbol":"£"},
    "SLE": {"name":"Sierra Leonean Leone","symbol":"Le"},
    "SOS": {"name":"Somali Shilling","symbol":"Sh.so."},
    "SRD": {"name":"Surinamese Dollar","symbol":"$"},
    "SSP": {"name":"South Sudanese Pound","symbol":"£"},
    "STN": {"name":"São Tomé and Príncipe Dobra","symbol":"Db"},
    "SYP": {"name":"Syrian Pound","symbol":"LS"},
    "SZL": {"name":"Eswatini Lilangeni","symbol":"L or E"},
    "THB": {"name":"Thai Baht","symbol":"฿"},
    "TJS": {"name":"Tajikistani Somoni","symbol":"SM"},
    "TMT": {"name":"Turkmenistan Manat","symbol":"T"},
    "TND": {"name":"Tunisian Dinar","symbol":"ت.د"},
    "TOP": {"name":"Tongan Pa'anga","symbol":"$"},
    "TRY": {"name":"Turkish Lira","symbol":"₺"},
    "TTD": {"name":"Trinidad & Tobago Dollar","symbol":"$"},
    "TVD": {"name":"Tuvaluan Dollar","symbol":"TV$"},
    "TWD": {"name":"New Taiwan Dollar","symbol":"$"},
    "TZS": {"name":"Tanzanian Shilling","symbol":"TSh"},
    "UAH": {"name":"Ukrainian Hryvnia","symbol":"₴"},
    "UGX": {"name":"Ugandan Shilling","symbol":"USh"},
    "USD": {"name":"US Dollar","symbol":"$"},
    "UYU": {"name":"Uruguayan Peso","symbol":"$"},
    "UZS": {"name":"Uzbekistan Som","symbol":"лв"},
    "VES": {"name":"Venezuelan BolÃvar","symbol":"Bs"},
    "VND": {"name":"Vietnamese Dong","symbol":"₫"},
    "VUV": {"name":"Vanuatu Vatu","symbol":"VT"},
    "WST": {"name":"Samoan Tala","symbol":"SAT"},
    "XAF": {"name":"CFP Franc","symbol":"₣"},
    "XCD": {"name":"East Caribbean Dollar","symbol":"$"},
    "XDR": {"name":"Special Drawing Rights","symbol":"SDR"},
    "XOF": {"name":"West African CFA franc","symbol":"CFA"},
    "XPF": {"name":"CFP Franc","symbold":"₣"},
    "YER": {"name":"Yemeni Rial","symbol":"﷼"},
    "ZAR": {"name":"South African Rand","symbol":"R"},
    "ZMW": {"name":"Zambian Kwacha","symbol":"ZK"},
    "ZWL": {"name":"Zimbabwean Dollar", "symbol":"Z$"},
    
    };

    

  const dropList = document.querySelector(".dropList");
  const firstCurrency = document.querySelector(".currency1");
  const secondCurrency = document.querySelector(".currency2");


  firstCurrency.innerHTML = loadCountries(currencies);
  secondCurrency.innerHTML = loadCountries(currencies);
  const resetButton = document.querySelector(".resetButton");
  resetButton.onclick = reloadPage;

  
 // for (const key of Object.keys(currencies)) {
 //   const val = currencies[key];
 //   console.log(val);
//}


const vals = Object.keys(currencies).map(key => currencies[key]);
    console.log(vals);


  function loadCountries(currencies) {
      
      return Object.entries(currencies)
        .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
        .join("")
  }

  /*
  function getCurrencySymbol(currency){
      let num = 3.50
      let formatPattern = Intl.NumberFormat('en-US', {style: 'currency', currency: currency});
      let formattedStringParts = formatPattern.formatToParts(num);
      let currencySymbol = "";
      for(let i in formattedStringParts){
          let part = formattedStringParts[i]
          if (part.type == "currency"){
              currencySymbol = part.value
          }
      }
      return currencySymbol
      //Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).formatToParts(3.50).filter(x => x.type == 'currency')[0].value
  }
 
*/

  
  document.querySelector(".convert").addEventListener("click", fetchCurrencies);

  function fetchCurrencies() {
      const first = firstCurrency.value;
      const second = secondCurrency.value;
      const amount = document.querySelector(".amount").value;
      const symbol = currencies.symbol;
      


      fetch("https://v6.exchangerate-api.com/v6/e180883e3cd79ac9321b020c/latest/" + first)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then((data) => {
            console.log(data);
            displayCurrency(symbol, data, first, second, amount);
        })
        .catch((error) => console.error("FETCH ERROR:", error));


        function displayCurrency(symbol, data, first, second, amount) {
            const calculated = amount * data.conversion_rates[second];
            document.querySelector(".result").setAttribute("style", "display:block");
            document.querySelector(".result-currency1").innerHTML = symbol + " " + amount + " " + first + " =";
            document.querySelector(".result-currency2").innerHTML = symbol + " " + calculated + " " + second;
        }

  }

function reloadPage() {
    window.location.reload();
}

/*
  for (let i = 0; i < droplist.length; i++) {

    for (let currency in currencies) {
      let selected;
      if (i == 0) {
        selected = currencies == "USD" ? "selected" : "";
      } else if (i == 1) {
        selected = currencies == "BDT" ? "selected" : "";
      }
      let optionTag = `<option value="${currencies}" ${selected}>${currencies}</option>`;
      droplist[i].insertAdjacentHTML("beforeend", optionTag)
    }
    droplist[i].addEventListener("change", e => {
      loadFlag(e.target)
    });
  
  }
*/

/*
  LOAD FLAG
  function loadFlag(element) {
    for (code in currencies) {
      if (code == element.value) {
        const country = currencies[code].toLowerCase();
        let imgTag = element.parentElement.querySelector('img')
        imgTag.src = `https://flagcdn.com/48x36/${country}.png`;
        imgTag.srcset = `https://flagcdn.com/96x72/${country}.png 2x, https://flagcdn.com/144x108/${country}.png 3x`;
        imgTag.alt = country;
      }
    }
  }

  SWITCH CURRENCIES
    exchange.addEventListener("click",()=>{
    [from_currency.value, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
})
*/
  
