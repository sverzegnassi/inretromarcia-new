/*
    List of country codes (ISO 3166-1) - Italian

    === Source
        https://it.wikipedia.org/wiki/ISO_3166-1
    
    === License
        CC BY-SA 4.0 Deed 
        Attribution-ShareAlike 4.0 International 
        https://creativecommons.org/licenses/by-sa/4.0/deed.en

    === Last update
        2024-01-08
*/

export type Country = {
    name: string,
    alpha3: string,
    alpha2: string,
    numeric: string,
}

export const countryCodes: Country[] = [
    { name: "Afghanistan", numeric: "4", alpha3: "AFG", alpha2: "AF" },
    { name: "Albania", numeric: "8", alpha3: "ALB", alpha2: "AL" },
    { name: "Algeria", numeric: "12", alpha3: "DZA", alpha2: "DZ" },
    { name: "Andorra", numeric: "20", alpha3: "AND", alpha2: "AD" },
    { name: "Angola", numeric: "24", alpha3: "AGO", alpha2: "AO" },
    { name: "Anguilla", numeric: "660", alpha3: "AIA", alpha2: "AI" },
    { name: "Antartide", numeric: "10", alpha3: "ATA", alpha2: "AQ" },
    { name: "Antigua e Barbuda", numeric: "28", alpha3: "ATG", alpha2: "AG" },
    { name: "Arabia Saudita", numeric: "682", alpha3: "SAU", alpha2: "SA" },
    { name: "Argentina", numeric: "32", alpha3: "ARG", alpha2: "AR" },
    { name: "Armenia", numeric: "51", alpha3: "ARM", alpha2: "AM" },
    { name: "Aruba", numeric: "533", alpha3: "ABW", alpha2: "AW" },
    { name: "Australia", numeric: "36", alpha3: "AUS", alpha2: "AU" },
    { name: "Austria", numeric: "40", alpha3: "AUT", alpha2: "AT" },
    { name: "Azerbaigian", numeric: "31", alpha3: "AZE", alpha2: "AZ" },
    { name: "Bahamas", numeric: "44", alpha3: "BHS", alpha2: "BS" },
    { name: "Bahrein", numeric: "48", alpha3: "BHR", alpha2: "BH" },
    { name: "Bangladesh", numeric: "50", alpha3: "BGD", alpha2: "BD" },
    { name: "Barbados", numeric: "52", alpha3: "BRB", alpha2: "BB" },
    { name: "Belgio", numeric: "56", alpha3: "BEL", alpha2: "BE" },
    { name: "Belize", numeric: "84", alpha3: "BLZ", alpha2: "BZ" },
    { name: "Benin", numeric: "204", alpha3: "BEN", alpha2: "BJ" },
    { name: "Bermuda", numeric: "60", alpha3: "BMU", alpha2: "BM" },
    { name: "Bhutan", numeric: "64", alpha3: "BTN", alpha2: "BT" },
    { name: "Bielorussia", numeric: "112", alpha3: "BLR", alpha2: "BY" },
    { name: "Birmania", numeric: "104", alpha3: "MMR", alpha2: "MM" },
    { name: "Bolivia", numeric: "68", alpha3: "BOL", alpha2: "BO" },
    { name: "Bosnia ed Erzegovina", numeric: "70", alpha3: "BIH", alpha2: "BA" },
    { name: "Botswana", numeric: "72", alpha3: "BWA", alpha2: "BW" },
    { name: "Brasile", numeric: "76", alpha3: "BRA", alpha2: "BR" },
    { name: "Brunei", numeric: "96", alpha3: "BRN", alpha2: "BN" },
    { name: "Bulgaria", numeric: "100", alpha3: "BGR", alpha2: "BG" },
    { name: "Burkina Faso", numeric: "854", alpha3: "BFA", alpha2: "BF" },
    { name: "Burundi", numeric: "108", alpha3: "BDI", alpha2: "BI" },
    { name: "Cambogia", numeric: "116", alpha3: "KHM", alpha2: "KH" },
    { name: "Camerun", numeric: "120", alpha3: "CMR", alpha2: "CM" },
    { name: "Canada", numeric: "124", alpha3: "CAN", alpha2: "CA" },
    { name: "Capo Verde", numeric: "132", alpha3: "CPV", alpha2: "CV" },
    { name: "Ciad", numeric: "148", alpha3: "TCD", alpha2: "TD" },
    { name: "Cile", numeric: "152", alpha3: "CHL", alpha2: "CL" },
    { name: "Cina", numeric: "156", alpha3: "CHN", alpha2: "CN" },
    { name: "Cipro", numeric: "196", alpha3: "CYP", alpha2: "CY" },
    { name: "Città del Vaticano", numeric: "336", alpha3: "VAT", alpha2: "VA" },
    { name: "Colombia", numeric: "170", alpha3: "COL", alpha2: "CO" },
    { name: "Comore", numeric: "174", alpha3: "COM", alpha2: "KM" },
    { name: "Corea del Nord", numeric: "408", alpha3: "PRK", alpha2: "KP" },
    { name: "Corea del Sud", numeric: "410", alpha3: "KOR", alpha2: "KR" },
    { name: "Costa d'Avorio", numeric: "384", alpha3: "CIV", alpha2: "CI" },
    { name: "Costa Rica", numeric: "188", alpha3: "CRI", alpha2: "CR" },
    { name: "Croazia", numeric: "191", alpha3: "HRV", alpha2: "HR" },
    { name: "Cuba", numeric: "192", alpha3: "CUB", alpha2: "CU" },
    { name: "Curaçao", numeric: "531", alpha3: "CUW", alpha2: "CW" },
    { name: "Danimarca", numeric: "208", alpha3: "DNK", alpha2: "DK" },
    { name: "Dominica", numeric: "212", alpha3: "DMA", alpha2: "DM" },
    { name: "Ecuador", numeric: "218", alpha3: "ECU", alpha2: "EC" },
    { name: "Egitto", numeric: "818", alpha3: "EGY", alpha2: "EG" },
    { name: "El Salvador", numeric: "222", alpha3: "SLV", alpha2: "SV" },
    { name: "Emirati Arabi Uniti", numeric: "784", alpha3: "ARE", alpha2: "AE" },
    { name: "Eritrea", numeric: "232", alpha3: "ERI", alpha2: "ER" },
    { name: "Estonia", numeric: "233", alpha3: "EST", alpha2: "EE" },
    { name: "Etiopia", numeric: "231", alpha3: "ETH", alpha2: "ET" },
    { name: "Figi", numeric: "242", alpha3: "FJI", alpha2: "FJ" },
    { name: "Filippine", numeric: "608", alpha3: "PHL", alpha2: "PH" },
    { name: "Finlandia", numeric: "246", alpha3: "FIN", alpha2: "FI" },
    { name: "Francia", numeric: "250", alpha3: "FRA", alpha2: "FR" },
    { name: "Gabon", numeric: "266", alpha3: "GAB", alpha2: "GA" },
    { name: "Gambia", numeric: "270", alpha3: "GMB", alpha2: "GM" },
    { name: "Georgia", numeric: "268", alpha3: "GEO", alpha2: "GE" },
    { name: "Georgia del Sud e Isole Sandwich Australi", numeric: "239", alpha3: "SGS", alpha2: "GS" },
    { name: "Germania", numeric: "276", alpha3: "DEU", alpha2: "DE" },
    { name: "Ghana", numeric: "288", alpha3: "GHA", alpha2: "GH" },
    { name: "Giamaica", numeric: "388", alpha3: "JAM", alpha2: "JM" },
    { name: "Giappone", numeric: "392", alpha3: "JPN", alpha2: "JP" },
    { name: "Gibilterra", numeric: "292", alpha3: "GIB", alpha2: "GI" },
    { name: "Gibuti", numeric: "262", alpha3: "DJI", alpha2: "DJ" },
    { name: "Giordania", numeric: "400", alpha3: "JOR", alpha2: "JO" },
    { name: "Grecia", numeric: "300", alpha3: "GRC", alpha2: "GR" },
    { name: "Grenada", numeric: "308", alpha3: "GRD", alpha2: "GD" },
    { name: "Groenlandia", numeric: "304", alpha3: "GRL", alpha2: "GL" },
    { name: "Guadalupa", numeric: "312", alpha3: "GLP", alpha2: "GP" },
    { name: "Guam", numeric: "316", alpha3: "GUM", alpha2: "GU" },
    { name: "Guatemala", numeric: "320", alpha3: "GTM", alpha2: "GT" },
    { name: "Guernsey", numeric: "831", alpha3: "GGY", alpha2: "GG" },
    { name: "Guinea", numeric: "324", alpha3: "GIN", alpha2: "GN" },
    { name: "Guinea-Bissau", numeric: "624", alpha3: "GNB", alpha2: "GW" },
    { name: "Guinea Equatoriale", numeric: "226", alpha3: "GNQ", alpha2: "GQ" },
    { name: "Guyana", numeric: "328", alpha3: "GUY", alpha2: "GY" },
    { name: "Guyana francese", numeric: "254", alpha3: "GUF", alpha2: "GF" },
    { name: "Haiti", numeric: "332", alpha3: "HTI", alpha2: "HT" },
    { name: "Honduras", numeric: "340", alpha3: "HND", alpha2: "HN" },
    { name: "Hong Kong", numeric: "344", alpha3: "HKG", alpha2: "HK" },
    { name: "India", numeric: "356", alpha3: "IND", alpha2: "IN" },
    { name: "Indonesia", numeric: "360", alpha3: "IDN", alpha2: "ID" },
    { name: "Iran", numeric: "364", alpha3: "IRN", alpha2: "IR" },
    { name: "Iraq", numeric: "368", alpha3: "IRQ", alpha2: "IQ" },
    { name: "Irlanda", numeric: "372", alpha3: "IRL", alpha2: "IE" },
    { name: "Islanda", numeric: "352", alpha3: "ISL", alpha2: "IS" },
    { name: "Isola Bouvet", numeric: "74", alpha3: "BVT", alpha2: "BV" },
    { name: "Isola di Man", numeric: "833", alpha3: "IMN", alpha2: "IM" },
    { name: "Isola di Natale", numeric: "162", alpha3: "CXR", alpha2: "CX" },
    { name: "Isola Norfolk", numeric: "574", alpha3: "NFK", alpha2: "NF" },
    { name: "Isole Åland", numeric: "248", alpha3: "ALA", alpha2: "AX" },
    { name: "Isole BES", numeric: "535", alpha3: "BES", alpha2: "BQ" },
    { name: "Isole Cayman", numeric: "136", alpha3: "CYM", alpha2: "KY" },
    { name: "Isole Cocos (Keeling)", numeric: "166", alpha3: "CCK", alpha2: "CC" },
    { name: "Isole Cook", numeric: "184", alpha3: "COK", alpha2: "CK" },
    { name: "Fær Øer", numeric: "234", alpha3: "FRO", alpha2: "FO" },
    { name: "Isole Falkland", numeric: "238", alpha3: "FLK", alpha2: "FK" },
    { name: "Isole Heard e McDonald", numeric: "334", alpha3: "HMD", alpha2: "HM" },
    { name: "Isole Marianne Settentrionali", numeric: "580", alpha3: "MNP", alpha2: "MP" },
    { name: "Isole Marshall", numeric: "584", alpha3: "MHL", alpha2: "MH" },
    { name: "Isole minori esterne degli Stati Uniti", numeric: "581", alpha3: "UMI", alpha2: "UM" },
    { name: "Isole Pitcairn", numeric: "612", alpha3: "PCN", alpha2: "PN" },
    { name: "Isole Salomone", numeric: "90", alpha3: "SLB", alpha2: "SB" },
    { name: "Isole Vergini Britanniche", numeric: "92", alpha3: "VGB", alpha2: "VG" },
    { name: "Isole Vergini Americane", numeric: "850", alpha3: "VIR", alpha2: "VI" },
    { name: "Israele", numeric: "376", alpha3: "ISR", alpha2: "IL" },
    { name: "Italia", numeric: "380", alpha3: "ITA", alpha2: "IT" },
    { name: "Jersey", numeric: "832", alpha3: "JEY", alpha2: "JE" },
    { name: "Kazakistan", numeric: "398", alpha3: "KAZ", alpha2: "KZ" },
    { name: "Kenya", numeric: "404", alpha3: "KEN", alpha2: "KE" },
    { name: "Kirghizistan", numeric: "417", alpha3: "KGZ", alpha2: "KG" },
    { name: "Kiribati", numeric: "296", alpha3: "KIR", alpha2: "KI" },
    { name: "Kuwait", numeric: "414", alpha3: "KWT", alpha2: "KW" },
    { name: "Laos", numeric: "418", alpha3: "LAO", alpha2: "LA" },
    { name: "Lesotho", numeric: "426", alpha3: "LSO", alpha2: "LS" },
    { name: "Lettonia", numeric: "428", alpha3: "LVA", alpha2: "LV" },
    { name: "Libano", numeric: "422", alpha3: "LBN", alpha2: "LB" },
    { name: "Liberia", numeric: "430", alpha3: "LBR", alpha2: "LR" },
    { name: "Libia", numeric: "434", alpha3: "LBY", alpha2: "LY" },
    { name: "Liechtenstein", numeric: "438", alpha3: "LIE", alpha2: "LI" },
    { name: "Lituania", numeric: "440", alpha3: "LTU", alpha2: "LT" },
    { name: "Lussemburgo", numeric: "442", alpha3: "LUX", alpha2: "LU" },
    { name: "Macao", numeric: "446", alpha3: "MAC", alpha2: "MO" },
    { name: "Macedonia del Nord", numeric: "807", alpha3: "MKD", alpha2: "MK" },
    { name: "Madagascar", numeric: "450", alpha3: "MDG", alpha2: "MG" },
    { name: "Malawi", numeric: "454", alpha3: "MWI", alpha2: "MW" },
    { name: "Malaysia", numeric: "458", alpha3: "MYS", alpha2: "MY" },
    { name: "Maldive", numeric: "462", alpha3: "MDV", alpha2: "MV" },
    { name: "Mali", numeric: "466", alpha3: "MLI", alpha2: "ML" },
    { name: "Malta", numeric: "470", alpha3: "MLT", alpha2: "MT" },
    { name: "Marocco", numeric: "504", alpha3: "MAR", alpha2: "MA" },
    { name: "Martinica", numeric: "474", alpha3: "MTQ", alpha2: "MQ" },
    { name: "Mauritania", numeric: "478", alpha3: "MRT", alpha2: "MR" },
    { name: "Mauritius", numeric: "480", alpha3: "MUS", alpha2: "MU" },
    { name: "Mayotte", numeric: "175", alpha3: "MYT", alpha2: "YT" },
    { name: "Messico", numeric: "484", alpha3: "MEX", alpha2: "MX" },
    { name: "Micronesia", numeric: "583", alpha3: "FSM", alpha2: "FM" },
    { name: "Moldavia", numeric: "498", alpha3: "MDA", alpha2: "MD" },
    { name: "Mongolia", numeric: "496", alpha3: "MNG", alpha2: "MN" },
    { name: "Montenegro", numeric: "499", alpha3: "MNE", alpha2: "ME" },
    { name: "Montserrat", numeric: "500", alpha3: "MSR", alpha2: "MS" },
    { name: "Mozambico", numeric: "508", alpha3: "MOZ", alpha2: "MZ" },
    { name: "Namibia", numeric: "516", alpha3: "NAM", alpha2: "NA" },
    { name: "Nauru", numeric: "520", alpha3: "NRU", alpha2: "NR" },
    { name: "Nepal", numeric: "524", alpha3: "NPL", alpha2: "NP" },
    { name: "Nicaragua", numeric: "558", alpha3: "NIC", alpha2: "NI" },
    { name: "Niger", numeric: "562", alpha3: "NER", alpha2: "NE" },
    { name: "Nigeria", numeric: "566", alpha3: "NGA", alpha2: "NG" },
    { name: "Niue", numeric: "570", alpha3: "NIU", alpha2: "NU" },
    { name: "Norvegia", numeric: "578", alpha3: "NOR", alpha2: "NO" },
    { name: "Nuova Caledonia", numeric: "540", alpha3: "NCL", alpha2: "NC" },
    { name: "Nuova Zelanda", numeric: "554", alpha3: "NZL", alpha2: "NZ" },
    { name: "Oman", numeric: "512", alpha3: "OMN", alpha2: "OM" },
    { name: "Paesi Bassi", numeric: "528", alpha3: "NLD", alpha2: "NL" },
    { name: "Pakistan", numeric: "586", alpha3: "PAK", alpha2: "PK" },
    { name: "Palau", numeric: "585", alpha3: "PLW", alpha2: "PW" },
    { name: "Palestina", numeric: "275", alpha3: "PSE", alpha2: "PS" },
    { name: "Panama", numeric: "591", alpha3: "PAN", alpha2: "PA" },
    { name: "Papua Nuova Guinea", numeric: "598", alpha3: "PNG", alpha2: "PG" },
    { name: "Paraguay", numeric: "600", alpha3: "PRY", alpha2: "PY" },
    { name: "Perù", numeric: "604", alpha3: "PER", alpha2: "PE" },
    { name: "Polinesia francese", numeric: "258", alpha3: "PYF", alpha2: "PF" },
    { name: "Polonia", numeric: "616", alpha3: "POL", alpha2: "PL" },
    { name: "Porto Rico", numeric: "630", alpha3: "PRI", alpha2: "PR" },
    { name: "Portogallo", numeric: "620", alpha3: "PRT", alpha2: "PT" },
    { name: "Monaco", numeric: "492", alpha3: "MCO", alpha2: "MC" },
    { name: "Qatar", numeric: "634", alpha3: "QAT", alpha2: "QA" },
    { name: "Regno Unito", numeric: "826", alpha3: "GBR", alpha2: "GB" },
    { name: "RD del Congo", numeric: "180", alpha3: "COD", alpha2: "CD" },
    { name: "Rep. Ceca", numeric: "203", alpha3: "CZE", alpha2: "CZ" },
    { name: "Rep. Centrafricana", numeric: "140", alpha3: "CAF", alpha2: "CF" },
    { name: "Rep. del Congo", numeric: "178", alpha3: "COG", alpha2: "CG" },
    { name: "Rep. Dominicana", numeric: "214", alpha3: "DOM", alpha2: "DO" },
    { name: "La Riunione", numeric: "638", alpha3: "REU", alpha2: "RE" },
    { name: "Romania", numeric: "642", alpha3: "ROU", alpha2: "RO" },
    { name: "Ruanda", numeric: "646", alpha3: "RWA", alpha2: "RW" },
    { name: "Russia", numeric: "643", alpha3: "RUS", alpha2: "RU" },
    { name: "Sahara Occidentale", numeric: "732", alpha3: "ESH", alpha2: "EH" },
    { name: "Saint Kitts e Nevis", numeric: "659", alpha3: "KNA", alpha2: "KN" },
    { name: "Saint Lucia", numeric: "662", alpha3: "LCA", alpha2: "LC" },
    { name: "Sant'Elena, Ascensione e Tristan da Cunha", numeric: "654", alpha3: "SHN", alpha2: "SH" },
    { name: "Saint Vincent e Grenadine", numeric: "670", alpha3: "VCT", alpha2: "VC" },
    { name: "Saint-Barthélemy", numeric: "652", alpha3: "BLM", alpha2: "BL" },
    { name: "Saint-Martin", numeric: "663", alpha3: "MAF", alpha2: "MF" },
    { name: "Saint-Pierre e Miquelon", numeric: "666", alpha3: "SPM", alpha2: "PM" },
    { name: "Samoa", numeric: "882", alpha3: "WSM", alpha2: "WS" },
    { name: "Samoa Americane", numeric: "16", alpha3: "ASM", alpha2: "AS" },
    { name: "San Marino", numeric: "674", alpha3: "SMR", alpha2: "SM" },
    { name: "São Tomé e Príncipe", numeric: "678", alpha3: "STP", alpha2: "ST" },
    { name: "Senegal", numeric: "686", alpha3: "SEN", alpha2: "SN" },
    { name: "Serbia", numeric: "688", alpha3: "SRB", alpha2: "RS" },
    { name: "Seychelles", numeric: "690", alpha3: "SYC", alpha2: "SC" },
    { name: "Sierra Leone", numeric: "694", alpha3: "SLE", alpha2: "SL" },
    { name: "Singapore", numeric: "702", alpha3: "SGP", alpha2: "SG" },
    { name: "Sint Maarten", numeric: "534", alpha3: "SXM", alpha2: "SX" },
    { name: "Siria", numeric: "760", alpha3: "SYR", alpha2: "SY" },
    { name: "Slovacchia", numeric: "703", alpha3: "SVK", alpha2: "SK" },
    { name: "Slovenia", numeric: "705", alpha3: "SVN", alpha2: "SI" },
    { name: "Somalia", numeric: "706", alpha3: "SOM", alpha2: "SO" },
    { name: "Spagna", numeric: "724", alpha3: "ESP", alpha2: "ES" },
    { name: "Sri Lanka", numeric: "144", alpha3: "LKA", alpha2: "LK" },
    { name: "Stati Uniti", numeric: "840", alpha3: "USA", alpha2: "US" },
    { name: "Sudafrica", numeric: "710", alpha3: "ZAF", alpha2: "ZA" },
    { name: "Sudan", numeric: "729", alpha3: "SDN", alpha2: "SD" },
    { name: "Sudan del Sud", numeric: "728", alpha3: "SSD", alpha2: "SS" },
    { name: "Suriname", numeric: "740", alpha3: "SUR", alpha2: "SR" },
    { name: "Svalbard e Jan Mayen", numeric: "744", alpha3: "SJM", alpha2: "SJ" },
    { name: "Svezia", numeric: "752", alpha3: "SWE", alpha2: "SE" },
    { name: "Svizzera", numeric: "756", alpha3: "CHE", alpha2: "CH" },
    { name: "eSwatini", numeric: "748", alpha3: "SWZ", alpha2: "SZ" },
    { name: "Taiwan", numeric: "158", alpha3: "TWN", alpha2: "TW" },
    { name: "Tagikistan", numeric: "762", alpha3: "TJK", alpha2: "TJ" },
    { name: "Tanzania", numeric: "834", alpha3: "TZA", alpha2: "TZ" },
    { name: "Terre australi e antartiche francesi", numeric: "260", alpha3: "ATF", alpha2: "TF" },
    { name: "Territorio britannico dell'Oceano Indiano", numeric: "86", alpha3: "IOT", alpha2: "IO" },
    { name: "Thailandia", numeric: "764", alpha3: "THA", alpha2: "TH" },
    { name: "Timor Est", numeric: "626", alpha3: "TLS", alpha2: "TL" },
    { name: "Togo", numeric: "768", alpha3: "TGO", alpha2: "TG" },
    { name: "Tokelau", numeric: "772", alpha3: "TKL", alpha2: "TK" },
    { name: "Tonga", numeric: "776", alpha3: "TON", alpha2: "TO" },
    { name: "Trinidad e Tobago", numeric: "780", alpha3: "TTO", alpha2: "TT" },
    { name: "Tunisia", numeric: "788", alpha3: "TUN", alpha2: "TN" },
    { name: "Turchia", numeric: "792", alpha3: "TUR", alpha2: "TR" },
    { name: "Turkmenistan", numeric: "795", alpha3: "TKM", alpha2: "TM" },
    { name: "Turks e Caicos", numeric: "796", alpha3: "TCA", alpha2: "TC" },
    { name: "Tuvalu", numeric: "798", alpha3: "TUV", alpha2: "TV" },
    { name: "Ucraina", numeric: "804", alpha3: "UKR", alpha2: "UA" },
    { name: "Uganda", numeric: "800", alpha3: "UGA", alpha2: "UG" },
    { name: "Ungheria", numeric: "348", alpha3: "HUN", alpha2: "HU" },
    { name: "Uruguay", numeric: "858", alpha3: "URY", alpha2: "UY" },
    { name: "Uzbekistan", numeric: "860", alpha3: "UZB", alpha2: "UZ" },
    { name: "Vanuatu", numeric: "548", alpha3: "VUT", alpha2: "VU" },
    { name: "Venezuela", numeric: "862", alpha3: "VEN", alpha2: "VE" },
    { name: "Vietnam", numeric: "704", alpha3: "VNM", alpha2: "VN" },
    { name: "Wallis e Futuna", numeric: "876", alpha3: "WLF", alpha2: "WF" },
    { name: "Yemen", numeric: "887", alpha3: "YEM", alpha2: "YE" },
    { name: "Zambia", numeric: "894", alpha3: "ZMB", alpha2: "ZM" },
    { name: "Zimbabwe", numeric: "716", alpha3: "ZWE", alpha2: "ZW" },
]