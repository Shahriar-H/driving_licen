
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const CheckPricing = () => {
    const Cities = [
        {
            "name": "Sydney",
            "id": 0
        },
        {
            "name": "Melbourne",
            "id": 1
        },
        {
            "name": "Brisbane",
            "id": 2
        },
        {
            "name": "Perth",
            "id": 3
        },
        {
            "name": "Adelaide",
            "id": 4
        },
        {
            "name": "Canberra",
            "id": 5
        },
        {
            "name": "Gold Coast",
            "id": 6
        },
        {
            "name": "Cranbourne",
            "id": 7
        },
        {
            "name": "Central Coast",
            "id": 8
        },
        {
            "name": "Wollongong",
            "id": 9
        },
        {
            "name": "Hobart",
            "id": 10
        },
        {
            "name": "Geelong",
            "id": 11
        },
        {
            "name": "Townsville",
            "id": 12
        },
        {
            "name": "Ipswich",
            "id": 13
        },
        {
            "name": "Newcastle",
            "id": 14
        },
        {
            "name": "Cairns",
            "id": 15
        },
        {
            "name": "Darwin",
            "id": 16
        },
        {
            "name": "Toowoomba",
            "id": 17
        },
        {
            "name": "Launceston",
            "id": 18
        },
        {
            "name": "Caloundra",
            "id": 19
        },
        {
            "name": "Dandenong",
            "id": 20
        },
        {
            "name": "Campbelltown",
            "id": 21
        },
        {
            "name": "Leopold",
            "id": 22
        },
        {
            "name": "Corinda",
            "id": 23
        },
        {
            "name": "Worragee",
            "id": 24
        },
        {
            "name": "Ballarat",
            "id": 25
        },
        {
            "name": "Bendigo",
            "id": 26
        },
        {
            "name": "Bunbury",
            "id": 27
        },
        {
            "name": "Bundaberg",
            "id": 28
        },
        {
            "name": "Wagga Wagga",
            "id": 29
        },
        {
            "name": "Melton",
            "id": 30
        },
        {
            "name": "Hervey Bay",
            "id": 31
        },
        {
            "name": "Pakenham",
            "id": 32
        },
        {
            "name": "Port Macquarie",
            "id": 33
        },
        {
            "name": "Dubbo",
            "id": 34
        },
        {
            "name": "Orange",
            "id": 35
        },
        {
            "name": "Frankston",
            "id": 36
        },
        {
            "name": "Sunbury",
            "id": 37
        },
        {
            "name": "Bathurst",
            "id": 38
        },
        {
            "name": "Gladstone",
            "id": 39
        },
        {
            "name": "Mildura",
            "id": 40
        },
        {
            "name": "Southport",
            "id": 41
        },
        {
            "name": "Geraldton",
            "id": 42
        },
        {
            "name": "Shepparton",
            "id": 43
        },
        {
            "name": "Kalgoorlie",
            "id": 44
        },
        {
            "name": "Warrnambool",
            "id": 45
        },
        {
            "name": "Albany",
            "id": 46
        },
        {
            "name": "Quakers Hill",
            "id": 47
        },
        {
            "name": "Burnie",
            "id": 48
        },
        {
            "name": "Caboolture",
            "id": 49
        },
        {
            "name": "Coffs Harbour",
            "id": 50
        },
        {
            "name": "Mount Gambier",
            "id": 51
        },
        {
            "name": "Traralgon",
            "id": 52
        },
        {
            "name": "Busselton",
            "id": 53
        },
        {
            "name": "Armidale",
            "id": 54
        },
        {
            "name": "Alice Springs",
            "id": 55
        },
        {
            "name": "Devonport",
            "id": 56
        },
        {
            "name": "Goulburn",
            "id": 57
        },
        {
            "name": "Whyalla",
            "id": 58
        },
        {
            "name": "Kwinana",
            "id": 59
        },
        {
            "name": "Mount Eliza",
            "id": 60
        },
        {
            "name": "Griffith",
            "id": 61
        },
        {
            "name": "Wodonga",
            "id": 62
        },
        {
            "name": "Narangba",
            "id": 63
        },
        {
            "name": "Wangaratta",
            "id": 64
        },
        {
            "name": "Broken Hill",
            "id": 65
        },
        {
            "name": "Taree",
            "id": 66
        },
        {
            "name": "Banora Point",
            "id": 67
        },
        {
            "name": "Nerang",
            "id": 68
        },
        {
            "name": "Lara",
            "id": 69
        },
        {
            "name": "Cessnock",
            "id": 70
        },
        {
            "name": "Warragul",
            "id": 71
        },
        {
            "name": "Karratha",
            "id": 72
        },
        {
            "name": "Maryborough",
            "id": 73
        },
        {
            "name": "Ulladulla",
            "id": 74
        },
        {
            "name": "Murray Bridge",
            "id": 75
        },
        {
            "name": "Ulverstone",
            "id": 76
        },
        {
            "name": "Barwon Heads",
            "id": 77
        },
        {
            "name": "Horsham",
            "id": 78
        },
        {
            "name": "Australind",
            "id": 79
        },
        {
            "name": "Rochedale",
            "id": 80
        },
        {
            "name": "Penrith",
            "id": 81
        },
        {
            "name": "Bongaree",
            "id": 82
        },
        {
            "name": "Echuca",
            "id": 83
        },
        {
            "name": "Morwell",
            "id": 84
        },
        {
            "name": "Emerald",
            "id": 85
        },
        {
            "name": "Port Lincoln",
            "id": 86
        },
        {
            "name": "Forster",
            "id": 87
        },
        {
            "name": "Mount Barker",
            "id": 88
        },
        {
            "name": "Goonellabah",
            "id": 89
        },
        {
            "name": "Raymond Terrace",
            "id": 90
        },
        {
            "name": "Torquay",
            "id": 91
        },
        {
            "name": "Sale",
            "id": 92
        },
        {
            "name": "Rutherford",
            "id": 93
        },
        {
            "name": "Jimboomba",
            "id": 94
        },
        {
            "name": "Dalby",
            "id": 95
        },
        {
            "name": "Warwick",
            "id": 96
        },
        {
            "name": "Muswellbrook",
            "id": 97
        },
        {
            "name": "Drouin",
            "id": 98
        },
        {
            "name": "Inverell",
            "id": 99
        },
        {
            "name": "Parkes",
            "id": 100
        },
        {
            "name": "Nelson Bay",
            "id": 101
        },
        {
            "name": "Wallan",
            "id": 102
        },
        {
            "name": "Nambour",
            "id": 103
        },
        {
            "name": "Somerville",
            "id": 104
        },
        {
            "name": "Gracemere",
            "id": 105
        },
        {
            "name": "Kingston",
            "id": 106
        },
        {
            "name": "Casino",
            "id": 107
        },
        {
            "name": "Mareeba",
            "id": 108
        },
        {
            "name": "Grafton",
            "id": 109
        },
        {
            "name": "Gympie",
            "id": 110
        },
        {
            "name": "Bowen",
            "id": 111
        },
        {
            "name": "Young",
            "id": 112
        },
        {
            "name": "Bowral",
            "id": 113
        },
        {
            "name": "Nowra",
            "id": 114
        },
        {
            "name": "Swan Hill",
            "id": 115
        },
        {
            "name": "Mount Evelyn",
            "id": 116
        },
        {
            "name": "Benalla",
            "id": 117
        },
        {
            "name": "Mudgee",
            "id": 118
        },
        {
            "name": "Cowra",
            "id": 119
        },
        {
            "name": "Kingaroy",
            "id": 120
        },
        {
            "name": "Kangaroo Flat",
            "id": 121
        },
        {
            "name": "Hamilton",
            "id": 122
        },
        {
            "name": "Ballina",
            "id": 123
        },
        {
            "name": "Andergrove",
            "id": 124
        },
        {
            "name": "Moree",
            "id": 125
        },
        {
            "name": "Portland",
            "id": 126
        },
        {
            "name": "Highfields",
            "id": 127
        },
        {
            "name": "Gunnedah",
            "id": 128
        },
        {
            "name": "Springwood",
            "id": 129
        },
        {
            "name": "Colac",
            "id": 130
        },
        {
            "name": "Ayr",
            "id": 131
        },
        {
            "name": "Leeton",
            "id": 132
        },
        {
            "name": "Tweed Heads",
            "id": 133
        },
        {
            "name": "Moe",
            "id": 134
        },
        {
            "name": "Gisborne",
            "id": 135
        },
        {
            "name": "Moranbah",
            "id": 136
        },
        {
            "name": "Yanchep",
            "id": 137
        },
        {
            "name": "Currumbin",
            "id": 138
        },
        {
            "name": "Bli Bli",
            "id": 139
        },
        {
            "name": "Ararat",
            "id": 140
        },
        {
            "name": "Kelso",
            "id": 141
        },
        {
            "name": "Moss Vale",
            "id": 142
        },
        {
            "name": "Clifton Springs",
            "id": 143
        },
        {
            "name": "Katoomba",
            "id": 144
        },
        {
            "name": "Bairnsdale",
            "id": 145
        },
        {
            "name": "Emu Plains",
            "id": 146
        },
        {
            "name": "Wollert",
            "id": 147
        },
        {
            "name": "Merrimac",
            "id": 148
        },
        {
            "name": "Charters Towers",
            "id": 149
        },
        {
            "name": "Rye",
            "id": 150
        },
        {
            "name": "Deniliquin",
            "id": 151
        },
        {
            "name": "Mooroopna",
            "id": 152
        },
        {
            "name": "Forbes",
            "id": 153
        },
        {
            "name": "Redlynch",
            "id": 154
        },
        {
            "name": "Maryborough",
            "id": 155
        },
        {
            "name": "Narrabri",
            "id": 156
        },
        {
            "name": "Kingscliff",
            "id": 157
        },
        {
            "name": "Atherton",
            "id": 158
        },
        {
            "name": "Darley",
            "id": 159
        },
        {
            "name": "Kilmore",
            "id": 160
        },
        {
            "name": "Gatton",
            "id": 161
        },
        {
            "name": "Blaxland",
            "id": 162
        },
        {
            "name": "Yarrawonga",
            "id": 163
        },
        {
            "name": "Collie",
            "id": 164
        },
        {
            "name": "Kyabram",
            "id": 165
        },
        {
            "name": "Sanctuary Point",
            "id": 166
        },
        {
            "name": "Healesville",
            "id": 167
        },
        {
            "name": "Burpengary",
            "id": 168
        },
        {
            "name": "Margaret River",
            "id": 169
        },
        {
            "name": "Urraween",
            "id": 170
        },
        {
            "name": "Kiama",
            "id": 171
        },
        {
            "name": "Narre Warren North",
            "id": 172
        },
        {
            "name": "Bargara",
            "id": 173
        },
        {
            "name": "Mandurah",
            "id": 174
        },
        {
            "name": "Kyneton",
            "id": 175
        },
        {
            "name": "Fremantle",
            "id": 176
        },
        {
            "name": "Murwillumbah",
            "id": 177
        },
        {
            "name": "Cootamundra",
            "id": 178
        },
        {
            "name": "Gordonvale",
            "id": 179
        },
        {
            "name": "Bacchus Marsh",
            "id": 180
        },
        {
            "name": "Roma",
            "id": 181
        },
        {
            "name": "Waterford",
            "id": 182
        },
        {
            "name": "North Tamborine",
            "id": 183
        },
        {
            "name": "Kurri Kurri",
            "id": 184
        },
        {
            "name": "Castlemaine",
            "id": 185
        },
        {
            "name": "Port Augusta",
            "id": 186
        },
        {
            "name": "Lennox Head",
            "id": 187
        },
        {
            "name": "Bomaderry",
            "id": 188
        },
        {
            "name": "Tuncurry",
            "id": 189
        },
        {
            "name": "Strathalbyn",
            "id": 190
        },
        {
            "name": "Yeppoon",
            "id": 191
        },
        {
            "name": "Seymour",
            "id": 192
        },
        {
            "name": "Wauchope",
            "id": 193
        },
        {
            "name": "Beaudesert",
            "id": 194
        },
        {
            "name": "Helensburgh",
            "id": 195
        },
        {
            "name": "Yass",
            "id": 196
        },
        {
            "name": "Newman",
            "id": 197
        },
        {
            "name": "Cooma",
            "id": 198
        },
        {
            "name": "Nuriootpa",
            "id": 199
        },
        {
            "name": "Beerwah",
            "id": 200
        },
        {
            "name": "Chinchilla",
            "id": 201
        },
        {
            "name": "Goondiwindi",
            "id": 202
        },
        {
            "name": "Tumut",
            "id": 203
        },
        {
            "name": "Cannonvale",
            "id": 204
        },
        {
            "name": "Nambucca Heads",
            "id": 205
        },
        {
            "name": "Wynyard",
            "id": 206
        },
        {
            "name": "North Mackay",
            "id": 207
        },
        {
            "name": "Northam",
            "id": 208
        },
        {
            "name": "Mount Cotton",
            "id": 209
        },
        {
            "name": "Alstonville",
            "id": 210
        },
        {
            "name": "Glen Innes",
            "id": 211
        },
        {
            "name": "Yamba",
            "id": 212
        },
        {
            "name": "Biloela",
            "id": 213
        },
        {
            "name": "Kiama Downs",
            "id": 214
        },
        {
            "name": "Pottsville",
            "id": 215
        },
        {
            "name": "Lysterfield",
            "id": 216
        },
        {
            "name": "Lakes Entrance",
            "id": 217
        },
        {
            "name": "Stawell",
            "id": 218
        },
        {
            "name": "Wentworth Falls",
            "id": 219
        },
        {
            "name": "Mittagong",
            "id": 220
        },
        {
            "name": "Scone",
            "id": 221
        },
        {
            "name": "Tannum Sands",
            "id": 222
        },
        {
            "name": "Dromana",
            "id": 223
        },
        {
            "name": "Palmwoods",
            "id": 224
        },
        {
            "name": "Leongatha",
            "id": 225
        },
        {
            "name": "South Grafton",
            "id": 226
        },
        {
            "name": "Point Vernon",
            "id": 227
        },
        {
            "name": "Kununurra",
            "id": 228
        },
        {
            "name": "Naracoorte",
            "id": 229
        },
        {
            "name": "Corowa",
            "id": 230
        },
        {
            "name": "Woolgoolga",
            "id": 231
        },
        {
            "name": "Cobram",
            "id": 232
        },
        {
            "name": "Queanbeyan",
            "id": 233
        },
        {
            "name": "Albury",
            "id": 234
        },
        {
            "name": "Maffra",
            "id": 235
        },
        {
            "name": "Tahmoor",
            "id": 236
        },
        {
            "name": "Woodend",
            "id": 237
        },
        {
            "name": "Inverloch",
            "id": 238
        },
        {
            "name": "Whittlesea",
            "id": 239
        },
        {
            "name": "Lithgow",
            "id": 240
        },
        {
            "name": "Emerald",
            "id": 241
        },
        {
            "name": "Richmond",
            "id": 242
        },
        {
            "name": "New Norfolk",
            "id": 243
        },
        {
            "name": "East Ballina",
            "id": 244
        },
        {
            "name": "Sarina",
            "id": 245
        },
        {
            "name": "Wingham",
            "id": 246
        },
        {
            "name": "Millicent",
            "id": 247
        },
        {
            "name": "Dunsborough",
            "id": 248
        },
        {
            "name": "Irymple",
            "id": 249
        },
        {
            "name": "Cooranbong",
            "id": 250
        },
        {
            "name": "Red Cliffs",
            "id": 251
        },
        {
            "name": "Nairne",
            "id": 252
        },
        {
            "name": "Bannockburn",
            "id": 253
        },
        {
            "name": "Glenbrook",
            "id": 254
        },
        {
            "name": "Smithfield Heights",
            "id": 255
        },
        {
            "name": "Calliope",
            "id": 256
        },
        {
            "name": "Byron Bay",
            "id": 257
        },
        {
            "name": "Glass House Mountains",
            "id": 258
        },
        {
            "name": "Singleton",
            "id": 259
        },
        {
            "name": "Wonthaggi",
            "id": 260
        },
        {
            "name": "Ocean Shores",
            "id": 261
        },
        {
            "name": "Berri",
            "id": 262
        },
        {
            "name": "Howard Springs",
            "id": 263
        },
        {
            "name": "Mackay",
            "id": 264
        },
        {
            "name": "Victor Harbor",
            "id": 265
        },
        {
            "name": "Lismore",
            "id": 266
        },
        {
            "name": "Ingham",
            "id": 267
        },
        {
            "name": "Manjimup",
            "id": 268
        },
        {
            "name": "Smithton",
            "id": 269
        },
        {
            "name": "Narrogin",
            "id": 270
        },
        {
            "name": "Proserpine",
            "id": 271
        },
        {
            "name": "Merimbula",
            "id": 272
        },
        {
            "name": "Broome",
            "id": 273
        },
        {
            "name": "Katanning",
            "id": 274
        },
        {
            "name": "Port Hedland",
            "id": 275
        },
        {
            "name": "Charleville",
            "id": 276
        },
        {
            "name": "Weipa",
            "id": 277
        },
        {
            "name": "Port Douglas",
            "id": 278
        },
        {
            "name": "Clare",
            "id": 279
        },
        {
            "name": "Wallaroo",
            "id": 280
        },
        {
            "name": "Longreach",
            "id": 281
        },
        {
            "name": "Rockhampton",
            "id": 282
        },
        {
            "name": "Tom Price",
            "id": 283
        },
        {
            "name": "Cloncurry",
            "id": 284
        },
        {
            "name": "Bordertown",
            "id": 285
        },
        {
            "name": "Mount Barker",
            "id": 286
        },
        {
            "name": "Esperance",
            "id": 287
        },
        {
            "name": "Merredin",
            "id": 288
        },
        {
            "name": "Scottsdale",
            "id": 289
        },
        {
            "name": "Maitland",
            "id": 290
        },
        {
            "name": "Bourke",
            "id": 291
        },
        {
            "name": "Exmouth",
            "id": 292
        },
        {
            "name": "Queenstown",
            "id": 293
        },
        {
            "name": "Tumby Bay",
            "id": 294
        },
        {
            "name": "Penola",
            "id": 295
        },
        {
            "name": "Kalbarri",
            "id": 296
        },
        {
            "name": "Innisfail",
            "id": 297
        },
        {
            "name": "Batemans Bay",
            "id": 298
        },
        {
            "name": "Port Denison",
            "id": 299
        },
        {
            "name": "Barcaldine",
            "id": 300
        },
        {
            "name": "Kingston South East",
            "id": 301
        },
        {
            "name": "Wagin",
            "id": 302
        },
        {
            "name": "Gawler",
            "id": 303
        },
        {
            "name": "Peterborough",
            "id": 304
        },
        {
            "name": "Streaky Bay",
            "id": 305
        },
        {
            "name": "Halls Creek",
            "id": 306
        },
        {
            "name": "Ouyen",
            "id": 307
        },
        {
            "name": "Katherine",
            "id": 308
        },
        {
            "name": "Mount Isa",
            "id": 309
        },
        {
            "name": "Hughenden",
            "id": 310
        },
        {
            "name": "Port Pirie",
            "id": 311
        },
        {
            "name": "Meningie",
            "id": 312
        },
        {
            "name": "Cowell",
            "id": 313
        },
        {
            "name": "Meekatharra",
            "id": 314
        },
        {
            "name": "Yulara",
            "id": 315
        },
        {
            "name": "Wyndham",
            "id": 316
        },
        {
            "name": "Roebourne",
            "id": 317
        },
        {
            "name": "Bicheno",
            "id": 318
        },
        {
            "name": "Winton",
            "id": 319
        },
        {
            "name": "Oatlands",
            "id": 320
        },
        {
            "name": "Leonora",
            "id": 321
        },
        {
            "name": "Kempsey",
            "id": 322
        },
        {
            "name": "Gingin",
            "id": 323
        },
        {
            "name": "Wilcannia",
            "id": 324
        },
        {
            "name": "Onslow",
            "id": 325
        },
        {
            "name": "Laverton",
            "id": 326
        },
        {
            "name": "Morawa",
            "id": 327
        },
        {
            "name": "Southern Cross",
            "id": 328
        },
        {
            "name": "Quilpie",
            "id": 329
        },
        {
            "name": "Tamworth",
            "id": 330
        },
        {
            "name": "Norseman",
            "id": 331
        },
        {
            "name": "Ravensthorpe",
            "id": 332
        },
        {
            "name": "Eidsvold",
            "id": 333
        },
        {
            "name": "Pannawonica",
            "id": 334
        },
        {
            "name": "Kimba",
            "id": 335
        },
        {
            "name": "Richmond",
            "id": 336
        },
        {
            "name": "Mount Magnet",
            "id": 337
        },
        {
            "name": "Three Springs",
            "id": 338
        },
        {
            "name": "Theodore",
            "id": 339
        },
        {
            "name": "Carnarvon",
            "id": 340
        },
        {
            "name": "Karumba",
            "id": 341
        },
        {
            "name": "Andamooka",
            "id": 342
        },
        {
            "name": "Georgetown",
            "id": 343
        },
        {
            "name": "Boulia",
            "id": 344
        },
        {
            "name": "Adelaide River",
            "id": 345
        },
        {
            "name": "Burketown",
            "id": 346
        },
        {
            "name": "Ivanhoe",
            "id": 347
        },
        {
            "name": "Thargomindah",
            "id": 348
        },
        {
            "name": "Pine Creek",
            "id": 349
        },
        {
            "name": "Camooweal",
            "id": 350
        },
        {
            "name": "Birdsville",
            "id": 351
        },
        {
            "name": "Bedourie",
            "id": 352
        },
        {
            "name": "Windorah",
            "id": 353
        },
        {
            "name": "Kingoonya",
            "id": 354
        },
        {
            "name": "Bullsbrook",
            "id": 355
        },
        {
            "name": "McMinns Lagoon",
            "id": 356
        },
        {
            "name": "Ceduna",
            "id": 357
        },
        {
            "name": "Woomera",
            "id": 358
        }
          ];
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (Cities) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left',cursor:'pointer' }}>{Cities.name}</span>
          </>
        )
      }

    return (
        <div className=''>
            <div className='bg-green-700 py-7 px-5 lg:px-24 flex flex-wrap justify-center items-center'>
                <div className='flex space-x-10 w-full lg:w-1/2'>
                    <div className='border-4 border-gray-100 flex justify-center items-center rounded-full h-16 w-20'>
                        <i className="bi bi-currency-dollar text-gray-100 text-4xl"></i>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold text-white'>
                            Driving lesson
                            pricing & packages
                        </h1>
                        <p className='text-2xl font-thin mt-2 text-white'>Buy more lessons & get more discount</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='text-center'>
                        <p className='text-2xl'><i className="bi bi-search"></i>  Check pricing for your state</p>
                    </div>
                    <div className='bg-white p-4 w-full lg:w-10/12 mx-auto mt-1 rounded-md space-y-2'>
                        
                        <div className='bg-gray-300 w-full rounded-sm flex justify-between items-start text-center'>
                            
                            <div className='bg-gray-300 p-2 w-full rounded-sm flex justify-between items-start text-center'>
                                <div className='w-1/2 active_class py-1'>
                                    <p><i className="bi bi-check-lg text-green-500"></i> Auto</p>
                                </div>
                                <div className='w-1/2 py-1'>
                                    <p>Manual</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between flex-wrap items-center w-full'>
                            <div className='w-full lg:w-9/12'>
                                {/* <input className='w-full border-gray-300 rounded-sm p-2' style={{border:'1px solid grey'}} placeholder='Enter your State' type="text"/> */}
                                <ReactSearchAutocomplete
                                    items={Cities}
                                    onSearch={handleOnSearch}
                                    onHover={handleOnHover}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                    
                                    formatResult={formatResult}
                                    styling={{borderRadius:"4px"}}
                                />
                            </div>
                            <div className='w-full lg:w-3/12 text-center mt-5 lg:mt-0'>
                                <a className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-7 px-5 lg:px-24 mainbackground'>
                <div className='flex space-x-10 w-full'>
                    <div className='flex justify-center items-center'>
                        <i className="bi bi-person-check text-white text-6xl"></i>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold text-white'>Driving lesson guarantee!</h1>
                        <p className='text-2xl font-thin text-gray-100 mt-2'>We will fulfill your driving lesson booking or you won’t be charged</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckPricing;
