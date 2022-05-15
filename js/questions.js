// creating an array and passing the number, questions, options, and answers
const countryCode = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"];
const countryName = ["Andorra", "United Arab Emirates (the)", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Antarctica", "Argentina", "American Samoa", "Austria", "Australia", "Aruba", "Åland Islands", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Saint Barthélemy", "Bermuda", "Brunei Darussalam", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Brazil", "Bahamas (the)", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos (Keeling) Islands (the)", "Congo (the Democratic Republic of the)", "Central African Republic (the)", "Congo (the)", "Switzerland", "Côte d'Ivoire", "Cook Islands (the)", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cabo Verde", "Curaçao", "Christmas Island", "Cyprus", "Czechia", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic (the)", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands (the) [Malvinas]", "Micronesia (Federated States of)", "Faroe Islands (the)", "France", "Gabon", "United Kingdom of Great Britain and Northern Ireland (the)", "Grenada", "Georgia", "French Guiana", "Guernsey", "Ghana", "Gibraltar", "Greenland", "Gambia (the)", "Guinea", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich Islands", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "Isle of Man", "India", "British Indian Ocean Territory (the)", "Iraq", "Iran (Islamic Republic of)", "Iceland", "Italy", "Jersey", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros (the)", "Saint Kitts and Nevis", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Cayman Islands (the)", "Kazakhstan", "Lao People's Democratic Republic (the)", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova (the Republic of)", "Montenegro", "Saint Martin (French part)", "Madagascar", "Marshall Islands (the)", "Republic of North Macedonia", "Mali", "Myanmar", "Mongolia", "Macao", "Northern Mariana Islands (the)", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger (the)", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands (the)", "Norway", "Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines (the)", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Pitcairn", "Puerto Rico", "Palestine, State of", "Portugal", "Palau", "Paraguay", "Qatar", "Réunion", "Romania", "Serbia", "Russian Federation (the)", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan (the)", "Sweden", "Singapore", "Saint Helena, Ascension and Tristan da Cunha", "Slovenia", "Svalbard and Jan Mayen", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Sint Maarten (Dutch part)", "Syrian Arab Republic", "Eswatini", "Turks and Caicos Islands (the)", "Chad", "French Southern Territories (the)", "Togo", "Thailand", "Tajikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan (Province of China)", "Tanzania, United Republic of", "Ukraine", "Uganda", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Holy See (the)", "Saint Vincent and the Grenadines", "Venezuela (Bolivarian Republic of)", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Viet Nam", "Vanuatu", "Wallis and Futuna", "Samoa", "Yemen", "Mayotte", "South Africa", "Zambia", "Zimbabwe"];

var lengthArray = countryCode.length;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const indices = [];
const optionsQ = [];
const allOptions = [];
const sortedOptions = [];
for (var i = 0; i < 3; i++) {
  indices.push(getRandomIntInclusive(1, lengthArray));
  optionsQ.push(getRandomIntInclusive(1, lengthArray));
  optionsQ.push(getRandomIntInclusive(1, lengthArray));
  optionsQ.push(getRandomIntInclusive(1, lengthArray));
}
var contador = 0;
for (i = 0; i < indices.length; i++) {
  allOptions.push(countryName[indices[i]]);
  allOptions.push(countryName[optionsQ[contador]]);
  allOptions.push(countryName[optionsQ[contador + 1]]);
  allOptions.push(countryName[optionsQ[contador + 2]]);
  contador += 3;
}
contador = 0;

console.log(allOptions);
const questions = [];
for (i = 0; i < indices.length; i++) {

  questions[i] = {
    numb: countryCode[indices[i]],
    answer: countryName[indices[i]],
    options: [
      allOptions[contador],
      allOptions[contador + 1],
      allOptions[contador + 2],
      allOptions[contador + 3]
    ]
  }
  contador += 4;
}
