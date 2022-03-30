function searchValidate() {
    if (/^[a-zA-Z0-9]{0,}$/.test(document.getElementById("city_autocomplete").value)){
        return true;
    } else {
        alert("Product name should not have any special characters");
        document.getElementById("city_autocomplete").focus();
        return false;
    }
}
function registerValidate() {
    var result = validatePassword();
    return result;
}

function validatePassword() {
    if (/^[a-zA-Z0-9]{8,}$/.test(document.getElementById("password").value)){
        return validatePasswords()
    } else {
        alert("Password must be minimum 8 characters");
        document.getElementById("password").focus();
        return false;
    }
}

function validatePasswords() {
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    if (pass == cpass) {
        return validateEmailAddress()
    } else {
        alert("Passwords do not match");
        document.getElementById("cpassword").focus();
        return false;
    }
}



function validateEmailAddress() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("regemail").value)) {
        return validateFirstName()
    }
    alert("Invalid Email!! It should be in the format of abc@xyz.com")
    document.getElementById("regemail").focus();
    return (false)
}

function validateFirstName() {
    if (/^[A-Za-z]+$/.test(document.getElementById("regfirstName").value)) {
        return validateLastName()
    }
    alert("You have entered an invalid first name! First name should only contain Alphabets without spaces")
    document.getElementById("regfirstName").focus();
    return (false)
}

function validateLastName() {
    if (/^[A-Za-z]+$/.test(document.getElementById("reglastName").value)) {
        return validatePhoneNumber()
    }
    alert("You have entered an invalid last name! Last name should only contain Alphabets without spaces")
    document.getElementById("reglastName").focus();
    return (false)
}


function validatePhoneNumber() {
    if (/^[0-9]{10}$/.test(document.getElementById("regphone").value)) {
        return validateZipcode()
    }
    alert("You have entered an invalid phone number! Phone number should be 10 digits without countrycode")
    document.getElementById("regphone").focus();
    return (false)
}

function validateZipcode() {
    if (/^[0-9]{6}$/.test(document.getElementById("regzipcode").value)) {
        return (true)
    }
    alert("You have entered an invalid zipcode! Zip code should be 6 digits")
    document.getElementById("regzipcode").focus();
    return (false)
}


var countryStateInfo = {
"India": {
"Andaman and Nicobar Islands":{"Port Blair" : ['0']}, "Andhra Pradesh":{"Adoni" : ['0'], "Amalapuram" : ['0'], "Anakapalle" : ['0'], "Anantapur" : ['0'], "Bapatla" : ['0'], "Bheemunipatnam" : ['0'], "Bhimavaram" : ['0'], "Bobbili" : ['0'], "Chilakaluripet" : ['0'], "Chirala" : ['0'], "Chittoor" : ['0'], "Dharmavaram" : ['0'], "Eluru" : ['0'], "Gooty" : ['0'], "Gudivada" : ['0'], "Gudur" : ['0'], "Guntakal" : ['0'], "Guntur" : ['0'], "Hindupur" : ['0'], "Jaggaiahpet" : ['0'], "Jammalamadugu" : ['0'], "Kadapa" : ['0'], "Kadiri" : ['0'], "Kakinada" : ['0'], "Kandukur" : ['0'], "Kavali" : ['0'], "Kovvur" : ['0'], "Kurnool" : ['0'], "Macherla" : ['0'], "Machilipatnam" : ['0'], "Madanapalle" : ['0'], "Mandapeta" : ['0'], "Markapur" : ['0'], "Nagari" : ['0'], "Naidupet" : ['0'], "Nandyal" : ['0'], "Narasapuram" : ['0'], "Narasaraopet" : ['0'], "Narsipatnam" : ['0'], "Nellore" : ['0'], "Nidadavole" : ['0'], "Nuzvid" : ['0'], "Ongole" : ['0'], "Palacole" : ['0'], "Palasa Kasibugga" : ['0'], "Parvathipuram" : ['0'], "Pedana" : ['0'], "Peddapuram" : ['0'], "Pithapuram" : ['0'], "Ponnur" : ['0'], "Proddatur" : ['0'], "Punganur" : ['0'], "Puttur" : ['0'], "Rajahmundry" : ['0'], "Rajam" : ['0'], "Rajampet" : ['0'], "Ramachandrapuram" : ['0'], "Rayachoti" : ['0'], "Rayadurg" : ['0'], "Renigunta" : ['0'], "Repalle" : ['0'], "Salur" : ['0'], "Samalkot" : ['0'], "Sattenapalle" : ['0'], "Srikakulam" : ['0'], "Srikalahasti" : ['0'], "Srisailam Project (Right Flank Colony) Township" : ['0'], "Sullurpeta" : ['0'], "Tadepalligudem" : ['0'], "Tadpatri" : ['0'], "Tanuku" : ['0'], "Tenali" : ['0'], "Tirupati" : ['0'], "Tiruvuru" : ['0'], "Tuni" : ['0'], "Uravakonda" : ['0'], "Venkatagiri" : ['0'], "Vijayawada" : ['0'], "Vinukonda" : ['0'], "Visakhapatnam" : ['0'], "Vizianagaram" : ['0'], "Yemmiganur" : ['0'], "Yerraguntla" : ['0']}, "Arunachal Pradesh":{"Naharlagun" : ['0'], "Pasighat" : ['0']}, "Assam":{"Barpeta" : ['0'], "Bongaigaon City" : ['0'], "Dhubri" : ['0'], "Dibrugarh" : ['0'], "Diphu" : ['0'], "Goalpara" : ['0'], "Guwahati" : ['0'], "Jorhat" : ['0'], "Karimganj" : ['0'], "Lanka" : ['0'], "Lumding" : ['0'], "Mangaldoi" : ['0'], "Mankachar" : ['0'], "Margherita" : ['0'], "Mariani" : ['0'], "Marigaon" : ['0'], "Nagaon" : ['0'], "Nalbari" : ['0'], "North Lakhimpur" : ['0'], "Rangia" : ['0'], "Sibsagar" : ['0'], "Silapathar" : ['0'], "Silchar" : ['0'], "Tezpur" : ['0'], "Tinsukia" : ['0']}, "Bihar":{"Araria" : ['0'], "Arrah" : ['0'], "Arwal" : ['0'], "Asarganj" : ['0'], "Aurangabad" : ['0'], "Bagaha" : ['0'], "Barh" : ['0'], "Begusarai" : ['0'], "Bettiah" : ['0'], "Bhabua" : ['0'], "Bhagalpur" : ['0'], "Buxar" : ['0'], "Chhapra" : ['0'], "Darbhanga" : ['0'], "Dehri-on-Sone" : ['0'], "Dumraon" : ['0'], "Forbesganj" : ['0'], "Gaya" : ['0'], "Gopalganj" : ['0'], "Hajipur" : ['0'], "Jamalpur" : ['0'], "Jamui" : ['0'], "Jehanabad" : ['0'], "Katihar" : ['0'], "Kishanganj" : ['0'], "Lakhisarai" : ['0'], "Lalganj" : ['0'], "Madhepura" : ['0'], "Madhubani" : ['0'], "Maharajganj" : ['0'], "Mahnar Bazar" : ['0'], "Makhdumpur" : ['0'], "Maner" : ['0'], "Manihari" : ['0'], "Marhaura" : ['0'], "Masaurhi" : ['0'], "Mirganj" : ['0'], "Mokameh" : ['0'], "Motihari" : ['0'], "Motipur" : ['0'], "Munger" : ['0'], "Murliganj" : ['0'], "Muzaffarpur" : ['0'], "Narkatiaganj" : ['0'], "Naugachhia" : ['0'], "Nawada" : ['0'], "Nokha" : ['0'], "Patna*" : ['0'], "Piro" : ['0'], "Purnia" : ['0'], "Rafiganj" : ['0'], "Rajgir" : ['0'], "Ramnagar" : ['0'], "Raxaul Bazar" : ['0'], "Revelganj" : ['0'], "Rosera" : ['0'], "Saharsa" : ['0'], "Samastipur" : ['0'], "Sasaram" : ['0'], "Sheikhpura" : ['0'], "Sheohar" : ['0'], "Sherghati" : ['0'], "Silao" : ['0'], "Sitamarhi" : ['0'], "Siwan" : ['0'], "Sonepur" : ['0'], "Sugauli" : ['0'], "Sultanganj" : ['0'], "Supaul" : ['0'], "Warisaliganj" : ['0']}, "Chandigarh":{"Chandigarh*" : ['0']}, "Chhattisgarh":{"Ambikapur" : ['0'], "Bhatapara" : ['0'], "Bhilai Nagar" : ['0'], "Bilaspur" : ['0'], "Chirmiri" : ['0'], "Dalli-Rajhara" : ['0'], "Dhamtari" : ['0'], "Durg" : ['0'], "Jagdalpur" : ['0'], "Korba" : ['0'], "Mahasamund" : ['0'], "Manendragarh" : ['0'], "Mungeli" : ['0'], "Naila Janjgir" : ['0'], "Raigarh" : ['0'], "Raipur*" : ['0'], "Rajnandgaon" : ['0'], "Sakti" : ['0'], "Tilda Newra" : ['0']}, "Dadra and Nagar Haveli":{"Silvassa*" : ['0']}, "Delhi":{"Delhi" : ['0'], "New Delhi*" : ['0']}, "Goa":{"Mapusa" : ['0'], "Margao" : ['0'], "Marmagao" : ['0'], "Panaji*" : ['0']}, "Gujarat":{"Adalaj" : ['0'], "Ahmedabad" : ['0'], "Amreli" : ['0'], "Anand" : ['0'], "Anjar" : ['0'], "Ankleshwar" : ['0'], "Bharuch" : ['0'], "Bhavnagar" : ['0'], "Bhuj" : ['0'], "Chhapra" : ['0'], "Deesa" : ['0'], "Dhoraji" : ['0'], "Godhra" : ['0'], "Jamnagar" : ['0'], "Kadi" : ['0'], "Kapadvanj" : ['0'], "Keshod" : ['0'], "Khambhat" : ['0'], "Lathi" : ['0'], "Limbdi" : ['0'], "Lunawada" : ['0'], "Mahesana" : ['0'], "Mahuva" : ['0'], "Manavadar" : ['0'], "Mandvi" : ['0'], "Mangrol" : ['0'], "Mansa" : ['0'], "Mahemdabad" : ['0'], "Modasa" : ['0'], "Morvi" : ['0'], "Nadiad" : ['0'], "Navsari" : ['0'], "Padra" : ['0'], "Palanpur" : ['0'], "Palitana" : ['0'], "Pardi" : ['0'], "Patan" : ['0'], "Petlad" : ['0'], "Porbandar" : ['0'], "Radhanpur" : ['0'], "Rajkot" : ['0'], "Rajpipla" : ['0'], "Rajula" : ['0'], "Ranavav" : ['0'], "Rapar" : ['0'], "Salaya" : ['0'], "Sanand" : ['0'], "Savarkundla" : ['0'], "Sidhpur" : ['0'], "Sihor" : ['0'], "Songadh" : ['0'], "Surat" : ['0'], "Talaja" : ['0'], "Thangadh" : ['0'], "Tharad" : ['0'], "Umbergaon" : ['0'], "Umreth" : ['0'], "Una" : ['0'], "Unjha" : ['0'], "Upleta" : ['0'], "Vadnagar" : ['0'], "Vadodara" : ['0'], "Valsad" : ['0'], "Vapi" : ['0'], "Vapi" : ['0'], "Veraval" : ['0'], "Vijapur" : ['0'], "Viramgam" : ['0'], "Visnagar" : ['0'], "Vyara" : ['0'], "Wadhwan" : ['0'], "Wankaner" : ['0']}, "Haryana":{"Bahadurgarh" : ['0'], "Bhiwani" : ['0'], "Charkhi Dadri" : ['0'], "Faridabad" : ['0'], "Fatehabad" : ['0'], "Gohana" : ['0'], "Gurgaon" : ['0'], "Hansi" : ['0'], "Hisar" : ['0'], "Jind" : ['0'], "Kaithal" : ['0'], "Karnal" : ['0'], "Ladwa" : ['0'], "Mahendragarh" : ['0'], "MandiDabwali" : ['0'], "Narnaul" : ['0'], "Narwana" : ['0'], "Palwal" : ['0'], "Panchkula" : ['0'], "Panipat" : ['0'], "Pehowa" : ['0'], "Pinjore" : ['0'], "Rania" : ['0'], "Ratia" : ['0'], "Rewari" : ['0'], "Rohtak" : ['0'], "Safidon" : ['0'], "Samalkha" : ['0'], "Sarsod" : ['0'], "Shahbad" : ['0'], "Sirsa" : ['0'], "Sohna" : ['0'], "Sonipat" : ['0'], "Taraori" : ['0'], "Thanesar" : ['0'], "Tohana" : ['0'], "Yamunanagar" : ['0']}, "Himachal Pradesh":{"Mandi" : ['0'], "Nahan" : ['0'], "Palampur" : ['0'], "Shimla*" : ['0'], "Solan" : ['0'], "Sundarnagar" : ['0']}, "Jammu and Kashmir":{"Anantnag" : ['0'], "Baramula" : ['0'], "Jammu" : ['0'], "Kathua" : ['0'], "Punch" : ['0'], "Rajauri" : ['0'], "Sopore" : ['0'], "Srinagar*" : ['0'], "Udhampur" : ['0']}, "Jharkhand":{"Adityapur" : ['0'], "Bokaro Steel City" : ['0'], "Chaibasa" : ['0'], "Chatra" : ['0'], "Chirkunda" : ['0'], "Medininagar (Daltonganj)" : ['0'], "Deoghar" : ['0'], "Dhanbad" : ['0'], "Dumka" : ['0'], "Giridih" : ['0'], "Gumia" : ['0'], "Hazaribag" : ['0'], "Jamshedpur" : ['0'], "Jhumri Tilaiya" : ['0'], "Lohardaga" : ['0'], "Madhupur" : ['0'], "Mihijam" : ['0'], "Musabani" : ['0'], "Pakaur" : ['0'], "Patratu" : ['0'], "Phusro" : ['0'], "Ramgarh" : ['0'], "Ranchi*" : ['0'], "Sahibganj" : ['0'], "Saunda" : ['0'], "Simdega" : ['0'], "Tenu dam-cum-Kathhara" : ['0']}, "Karnataka":{"Adyar" : ['0'], "Afzalpur" : ['0'], "Arsikere" : ['0'], "Athni" : ['0'], "Bengaluru" : ['0'], "Belagavi" : ['0'], "Ballari" : ['0'], "Chikkamagaluru" : ['0'], "Davanagere" : ['0'], "Gokak" : ['0'], "Hubli-Dharwad" : ['0'], "Karwar" : ['0'], "Kolar" : ['0'], "Lakshmeshwar" : ['0'], "Lingsugur" : ['0'], "Maddur" : ['0'], "Madhugiri" : ['0'], "Madikeri" : ['0'], "Magadi" : ['0'], "Mahalingapura" : ['0'], "Malavalli" : ['0'], "Malur" : ['0'], "Mandya" : ['0'], "Mangaluru" : ['0'], "Manvi" : ['0'], "Mudalagi" : ['0'], "Mudabidri" : ['0'], "Muddebihal" : ['0'], "Mudhol" : ['0'], "Mulbagal" : ['0'], "Mundargi" : ['0'], "Nanjangud" : ['0'], "Nargund" : ['0'], "Navalgund" : ['0'], "Nelamangala" : ['0'], "Pavagada" : ['0'], "Piriyapatna" : ['0'], "Puttur" : ['0'], "Rabkavi Banhatti" : ['0'], "Raayachuru" : ['0'], "Ranebennuru" : ['0'], "Ramanagaram" : ['0'], "Ramdurg" : ['0'], "Ranibennur" : ['0'], "Robertson Pet" : ['0'], "Ron" : ['0'], "Sadalagi" : ['0'], "Sagara" : ['0'], "Sakaleshapura" : ['0'], "Sindagi" : ['0'], "Sanduru" : ['0'], "Sankeshwara" : ['0'], "Saundatti-Yellamma" : ['0'], "Savanur" : ['0'], "Sedam" : ['0'], "Shahabad" : ['0'], "Shahpur" : ['0'], "Shiggaon" : ['0'], "Shikaripur" : ['0'], "Shivamogga" : ['0'], "Surapura" : ['0'], "Shrirangapattana" : ['0'], "Sidlaghatta" : ['0'], "Sindhagi" : ['0'], "Sindhnur" : ['0'], "Sira" : ['0'], "Sirsi" : ['0'], "Siruguppa" : ['0'], "Srinivaspur" : ['0'], "Tarikere" : ['0'], "Tekkalakote" : ['0'], "Terdal" : ['0'], "Talikota" : ['0'], "Tiptur" : ['0'], "Tumkur" : ['0'], "Udupi" : ['0'], "Vijayapura" : ['0'], "Wadi" : ['0'], "Yadgir" : ['0']}, "Karnatka":{"Mysore" : ['0']}, "Kerala":{"Adoor" : ['0'], "Alappuzha" : ['0'], "Attingal" : ['0'], "Chalakudy" : ['0'], "Changanassery" : ['0'], "Cherthala" : ['0'], "Chittur-Thathamangalam" : ['0'], "Guruvayoor" : ['0'], "Kanhangad" : ['0'], "Kannur" : ['0'], "Kasaragod" : ['0'], "Kayamkulam" : ['0'], "Kochi" : ['0'], "Kodungallur" : ['0'], "Kollam" : ['0'], "Kottayam" : ['0'], "Kozhikode" : ['0'], "Kunnamkulam" : ['0'], "Malappuram" : ['0'], "Mattannur" : ['0'], "Mavelikkara" : ['0'], "Mavoor" : ['0'], "Muvattupuzha" : ['0'], "Nedumangad" : ['0'], "Neyyattinkara" : ['0'], "Nilambur" : ['0'], "Ottappalam" : ['0'], "Palai" : ['0'], "Palakkad" : ['0'], "Panamattom" : ['0'], "Panniyannur" : ['0'], "Pappinisseri" : ['0'], "Paravoor" : ['0'], "Pathanamthitta" : ['0'], "Peringathur" : ['0'], "Perinthalmanna" : ['0'], "Perumbavoor" : ['0'], "Ponnani" : ['0'], "Punalur" : ['0'], "Puthuppally" : ['0'], "Koyilandy" : ['0'], "Shoranur" : ['0'], "Taliparamba" : ['0'], "Thiruvalla" : ['0'], "Thiruvananthapuram" : ['0'], "Thodupuzha" : ['0'], "Thrissur" : ['0'], "Tirur" : ['0'], "Vaikom" : ['0'], "Varkala" : ['0'], "Vatakara" : ['0']}, "Madhya Pradesh":{"Alirajpur" : ['0'], "Ashok Nagar" : ['0'], "Balaghat" : ['0'], "Bhopal" : ['0'], "Ganjbasoda" : ['0'], "Gwalior" : ['0'], "Indore" : ['0'], "Itarsi" : ['0'], "Jabalpur" : ['0'], "Lahar" : ['0'], "Maharajpur" : ['0'], "Mahidpur" : ['0'], "Maihar" : ['0'], "Malaj Khand" : ['0'], "Manasa" : ['0'], "Manawar" : ['0'], "Mandideep" : ['0'], "Mandla" : ['0'], "Mandsaur" : ['0'], "Mauganj" : ['0'], "Mhow Cantonment" : ['0'], "Mhowgaon" : ['0'], "Morena" : ['0'], "Multai" : ['0'], "Mundi" : ['0'], "Murwara (Katni)" : ['0'], "Nagda" : ['0'], "Nainpur" : ['0'], "Narsinghgarh" : ['0'], "Narsinghgarh" : ['0'], "Neemuch" : ['0'], "Nepanagar" : ['0'], "Niwari" : ['0'], "Nowgong" : ['0'], "Nowrozabad (Khodargama)" : ['0'], "Pachore" : ['0'], "Pali" : ['0'], "Panagar" : ['0'], "Pandhurna" : ['0'], "Panna" : ['0'], "Pasan" : ['0'], "Pipariya" : ['0'], "Pithampur" : ['0'], "Porsa" : ['0'], "Prithvipur" : ['0'], "Raghogarh-Vijaypur" : ['0'], "Rahatgarh" : ['0'], "Raisen" : ['0'], "Rajgarh" : ['0'], "Ratlam" : ['0'], "Rau" : ['0'], "Rehli" : ['0'], "Rewa" : ['0'], "Sabalgarh" : ['0'], "Sagar" : ['0'], "Sanawad" : ['0'], "Sarangpur" : ['0'], "Sarni" : ['0'], "Satna" : ['0'], "Sausar" : ['0'], "Sehore" : ['0'], "Sendhwa" : ['0'], "Seoni" : ['0'], "Seoni-Malwa" : ['0'], "Shahdol" : ['0'], "Shajapur" : ['0'], "Shamgarh" : ['0'], "Sheopur" : ['0'], "Shivpuri" : ['0'], "Shujalpur" : ['0'], "Sidhi" : ['0'], "Sihora" : ['0'], "Singrauli" : ['0'], "Sironj" : ['0'], "Sohagpur" : ['0'], "Tarana" : ['0'], "Tikamgarh" : ['0'], "Ujjain" : ['0'], "Umaria" : ['0'], "Vidisha" : ['0'], "Vijaypur" : ['0'], "Wara Seoni" : ['0']}, "Maharashtra":{"{{}}" : ['0'], "Ahmednagar" : ['0'], "Akola" : ['0'], "Akot" : ['0'], "Amalner" : ['0'], "Ambejogai" : ['0'], "Amravati" : ['0'], "Anjangaon" : ['0'], "Arvi" : ['0'], "Aurangabad" : ['0'], "Bhiwandi" : ['0'], "Dhule" : ['0'], "Kalyan-Dombivali" : ['0'], "Ichalkaranji" : ['0'], "Kalyan-Dombivali" : ['0'], "Karjat" : ['0'], "Latur" : ['0'], "Loha" : ['0'], "Lonar" : ['0'], "Lonavla" : ['0'], "Mahad" : ['0'], "Malegaon" : ['0'], "Malkapur" : ['0'], "Mangalvedhe" : ['0'], "Mangrulpir" : ['0'], "Manjlegaon" : ['0'], "Manmad" : ['0'], "Manwath" : ['0'], "Mehkar" : ['0'], "Mhaswad" : ['0'], "Mira-Bhayandar" : ['0'], "Morshi" : ['0'], "Mukhed" : ['0'], "Mul" : ['0'], "Greater Mumbai*" : ['0'], "Murtijapur" : ['0'], "Nagpur" : ['0'], "Nanded-Waghala" : ['0'], "Nandgaon" : ['0'], "Nandura" : ['0'], "Nandurbar" : ['0'], "Narkhed" : ['0'], "Nashik" : ['0'], "Navi Mumbai" : ['0'], "Nawapur" : ['0'], "Nilanga" : ['0'], "Osmanabad" : ['0'], "Ozar" : ['0'], "Pachora" : ['0'], "Paithan" : ['0'], "Palghar" : ['0'], "Pandharkaoda" : ['0'], "Pandharpur" : ['0'], "Panvel" : ['0'], "Parbhani" : ['0'], "Parli" : ['0'], "Partur" : ['0'], "Pathardi" : ['0'], "Pathri" : ['0'], "Patur" : ['0'], "Pauni" : ['0'], "Pen" : ['0'], "Phaltan" : ['0'], "Pulgaon" : ['0'], "Pune" : ['0'], "Purna" : ['0'], "Pusad" : ['0'], "Rahuri" : ['0'], "Rajura" : ['0'], "Ramtek" : ['0'], "Ratnagiri" : ['0'], "Raver" : ['0'], "Risod" : ['0'], "Sailu" : ['0'], "Sangamner" : ['0'], "Sangli" : ['0'], "Sangole" : ['0'], "Sasvad" : ['0'], "Satana" : ['0'], "Satara" : ['0'], "Savner" : ['0'], "Sawantwadi" : ['0'], "Shahade" : ['0'], "Shegaon" : ['0'], "Shendurjana" : ['0'], "Shirdi" : ['0'], "Shirpur-Warwade" : ['0'], "Shirur" : ['0'], "Shrigonda" : ['0'], "Shrirampur" : ['0'], "Sillod" : ['0'], "Sinnar" : ['0'], "Solapur" : ['0'], "Soyagaon" : ['0'], "Talegaon Dabhade" : ['0'], "Talode" : ['0'], "Tasgaon" : ['0'], "Thane" : ['0'], "Tirora" : ['0'], "Tuljapur" : ['0'], "Tumsar" : ['0'], "Uchgaon" : ['0'], "Udgir" : ['0'], "Umarga" : ['0'], "Umarkhed" : ['0'], "Umred" : ['0'], "Uran" : ['0'], "Uran Islampur" : ['0'], "Vadgaon Kasba" : ['0'], "Vaijapur" : ['0'], "Vasai-Virar" : ['0'], "Vita" : ['0'], "Wadgaon Road" : ['0'], "Wai" : ['0'], "Wani" : ['0'], "Wardha" : ['0'], "Warora" : ['0'], "Warud" : ['0'], "Washim" : ['0'], "Yavatmal" : ['0'], "Yawal" : ['0'], "Yevla" : ['0']}, "Manipur":{"Imphal*" : ['0'], "Lilong" : ['0'], "Mayang Imphal" : ['0'], "Thoubal" : ['0']}, "Meghalaya":{"Nongstoin" : ['0'], "Shillong*" : ['0'], "Tura" : ['0']}, "Mizoram":{"Aizawl" : ['0'], "Lunglei" : ['0'], "Saiha" : ['0']}, "Nagaland":{"Dimapur" : ['0'], "Kohima*" : ['0'], "Mokokchung" : ['0'], "Tuensang" : ['0'], "Wokha" : ['0'], "Zunheboto" : ['0']}, "Odisha":{"Balangir" : ['0'], "Baleshwar Town" : ['0'], "Barbil" : ['0'], "Bargarh" : ['0'], "Baripada Town" : ['0'], "Bhadrak" : ['0'], "Bhawanipatna" : ['0'], "Bhubaneswar*" : ['0'], "Brahmapur" : ['0'], "Byasanagar" : ['0'], "Cuttack" : ['0'], "Dhenkanal" : ['0'], "Jatani" : ['0'], "Jharsuguda" : ['0'], "Kendrapara" : ['0'], "Kendujhar" : ['0'], "Malkangiri" : ['0'], "Nabarangapur" : ['0'], "Paradip" : ['0'], "Parlakhemundi" : ['0'], "Pattamundai" : ['0'], "Phulabani" : ['0'], "Puri" : ['0'], "Rairangpur" : ['0'], "Rajagangapur" : ['0'], "Raurkela" : ['0'], "Rayagada" : ['0'], "Sambalpur" : ['0'], "Soro" : ['0'], "Sunabeda" : ['0'], "Sundargarh" : ['0'], "Talcher" : ['0'], "Tarbha" : ['0'], "Titlagarh" : ['0']}, "Puducherry":{"Karaikal" : ['0'], "Mahe" : ['0'], "Pondicherry*" : ['0'], "Yanam" : ['0'] }, "Punjab":{"Amritsar" : ['0'], "Barnala" : ['0'], "Batala" : ['0'], "Bathinda" : ['0'], "Dhuri" : ['0'], "Faridkot" : ['0'], "Fazilka" : ['0'], "Firozpur" : ['0'], "Firozpur Cantt." : ['0'], "Gobindgarh" : ['0'], "Gurdaspur" : ['0'], "Hoshiarpur" : ['0'], "Jagraon" : ['0'], "Jalandhar Cantt." : ['0'], "Jalandhar" : ['0'], "Kapurthala" : ['0'], "Khanna" : ['0'], "Kharar" : ['0'], "Kot Kapura" : ['0'], "Longowal" : ['0'], "Ludhiana" : ['0'], "Malerkotla" : ['0'], "Malout" : ['0'], "Mansa" : ['0'], "Moga" : ['0'], "Mohali" : ['0'], "Morinda : ['0'],  India" : ['0'], "Mukerian" : ['0'], "Muktsar" : ['0'], "Nabha" : ['0'], "Nakodar" : ['0'], "Nangal" : ['0'], "Nawanshahr" : ['0'], "Pathankot" : ['0'], "Patiala" : ['0'], "Pattran" : ['0'], "Patti" : ['0'], "Phagwara" : ['0'], "Phillaur" : ['0'], "Qadian" : ['0'], "Raikot" : ['0'], "Rajpura" : ['0'], "Rampura Phul" : ['0'], "Rupnagar" : ['0'], "Samana" : ['0'], "Sangrur" : ['0'], "Sirhind Fatehgarh Sahib" : ['0'], "Sujanpur" : ['0'], "Sunam" : ['0'], "Talwara" : ['0'], "Tarn Taran" : ['0'], "Urmar Tanda" : ['0'], "Zira" : ['0'], "Zirakpur" : ['0']}, "Rajasthan":{"Ajmer" : ['0'], "Alwar" : ['0'], "Bikaner" : ['0'], "Bharatpur" : ['0'], "Bhilwara" : ['0'], "Jaipur*" : ['0'], "Jodhpur" : ['0'], "Lachhmangarh" : ['0'], "Ladnu" : ['0'], "Lakheri" : ['0'], "Lalsot" : ['0'], "Losal" : ['0'], "Makrana" : ['0'], "Malpura" : ['0'], "Mandalgarh" : ['0'], "Mandawa" : ['0'], "Mangrol" : ['0'], "Merta City" : ['0'], "Mount Abu" : ['0'], "Nadbai" : ['0'], "Nagar" : ['0'], "Nagaur" : ['0'], "Nasirabad" : ['0'], "Nathdwara" : ['0'], "Neem-Ka-Thana" : ['0'], "Nimbahera" : ['0'], "Nohar" : ['0'], "Nokha" : ['0'], "Pali" : ['0'], "Phalodi" : ['0'], "Phulera" : ['0'], "Pilani" : ['0'], "Pilibanga" : ['0'], "Pindwara" : ['0'], "Pipar City" : ['0'], "Prantij" : ['0'], "Pratapgarh" : ['0'], "Raisinghnagar" : ['0'], "Rajakhera" : ['0'], "Rajaldesar" : ['0'], "Rajgarh (Alwar)" : ['0'], "Rajgarh (Churu)" : ['0'], "Rajsamand" : ['0'], "Ramganj Mandi" : ['0'], "Ramngarh" : ['0'], "Ratangarh" : ['0'], "Rawatbhata" : ['0'], "Rawatsar" : ['0'], "Reengus" : ['0'], "Sadri" : ['0'], "Sadulshahar" : ['0'], "Sadulpur" : ['0'], "Sagwara" : ['0'], "Sambhar" : ['0'], "Sanchore" : ['0'], "Sangaria" : ['0'], "Sardarshahar" : ['0'], "Sawai Madhopur" : ['0'], "Shahpura" : ['0'], "Shahpura" : ['0'], "Sheoganj" : ['0'], "Sikar" : ['0'], "Sirohi" : ['0'], "Sojat" : ['0'], "Sri Madhopur" : ['0'], "Sujangarh" : ['0'], "Sumerpur" : ['0'], "Suratgarh" : ['0'], "Taranagar" : ['0'], "Todabhim" : ['0'], "Todaraisingh" : ['0'], "Tonk" : ['0'], "Udaipur" : ['0'], "Udaipurwati" : ['0'], "Vijainagar : ['0'],  Ajmer" : ['0']}, "Tamil Nadu":{"Arakkonam" : ['0'], "Aruppukkottai" : ['0'], "Chennai*" : ['0'], "Coimbatore" : ['0'], "Erode" : ['0'], "Gobichettipalayam" : ['0'], "Kancheepuram" : ['0'], "Karur" : ['0'], "Lalgudi" : ['0'], "Madurai" : ['0'], "Manachanallur" : ['0'], "Nagapattinam" : ['0'], "Nagercoil" : ['0'], "Namagiripettai" : ['0'], "Namakkal" : ['0'], "Nandivaram-Guduvancheri" : ['0'], "Nanjikottai" : ['0'], "Natham" : ['0'], "Nellikuppam" : ['0'], "Neyveli (TS)" : ['0'], "O' Valley" : ['0'], "Oddanchatram" : ['0'], "P.N.Patti" : ['0'], "Pacode" : ['0'], "Padmanabhapuram" : ['0'], "Palani" : ['0'], "Palladam" : ['0'], "Pallapatti" : ['0'], "Pallikonda" : ['0'], "Panagudi" : ['0'], "Panruti" : ['0'], "Paramakudi" : ['0'], "Parangipettai" : ['0'], "Pattukkottai" : ['0'], "Perambalur" : ['0'], "Peravurani" : ['0'], "Periyakulam" : ['0'], "Periyasemur" : ['0'], "Pernampattu" : ['0'], "Pollachi" : ['0'], "Polur" : ['0'], "Ponneri" : ['0'], "Pudukkottai" : ['0'], "Pudupattinam" : ['0'], "Puliyankudi" : ['0'], "Punjaipugalur" : ['0'], "Ranipet" : ['0'], "Rajapalayam" : ['0'], "Ramanathapuram" : ['0'], "Rameshwaram" : ['0'], "Rasipuram" : ['0'], "Salem" : ['0'], "Sankarankoil" : ['0'], "Sankari" : ['0'], "Sathyamangalam" : ['0'], "Sattur" : ['0'], "Shenkottai" : ['0'], "Sholavandan" : ['0'], "Sholingur" : ['0'], "Sirkali" : ['0'], "Sivaganga" : ['0'], "Sivagiri" : ['0'], "Sivakasi" : ['0'], "Srivilliputhur" : ['0'], "Surandai" : ['0'], "Suriyampalayam" : ['0'], "Tenkasi" : ['0'], "Thammampatti" : ['0'], "Thanjavur" : ['0'], "Tharamangalam" : ['0'], "Tharangambadi" : ['0'], "Theni Allinagaram" : ['0'], "Thirumangalam" : ['0'], "Thirupuvanam" : ['0'], "Thiruthuraipoondi" : ['0'], "Thiruvallur" : ['0'], "Thiruvarur" : ['0'], "Thuraiyur" : ['0'], "Tindivanam" : ['0'], "Tiruchendur" : ['0'], "Tiruchengode" : ['0'], "Tiruchirappalli" : ['0'], "Tirukalukundram" : ['0'], "Tirukkoyilur" : ['0'], "Tirunelveli" : ['0'], "Tirupathur" : ['0'], "Tirupathur" : ['0'], "Tiruppur" : ['0'], "Tiruttani" : ['0'], "Tiruvannamalai" : ['0'], "Tiruvethipuram" : ['0'], "Tittakudi" : ['0'], "Udhagamandalam" : ['0'], "Udumalaipettai" : ['0'], "Unnamalaikadai" : ['0'], "Usilampatti" : ['0'], "Uthamapalayam" : ['0'], "Uthiramerur" : ['0'], "Vadakkuvalliyur" : ['0'], "Vadalur" : ['0'], "Vadipatti" : ['0'], "Valparai" : ['0'], "Vandavasi" : ['0'], "Vaniyambadi" : ['0'], "Vedaranyam" : ['0'], "Vellakoil" : ['0'], "Vellore" : ['0'], "Vikramasingapuram" : ['0'], "Viluppuram" : ['0'], "Virudhachalam" : ['0'], "Virudhunagar" : ['0'], "Viswanatham" : ['0']}, "Telangana":{"Adilabad" : ['0'], "Bellampalle" : ['0'], "Bhadrachalam" : ['0'], "Bhainsa" : ['0'], "Bhongir" : ['0'], "Bodhan" : ['0'], "Farooqnagar" : ['0'], "Gadwal" : ['0'], "Hyderabad*" : ['0'], "Jagtial" : ['0'], "Jangaon" : ['0'], "Kagaznagar" : ['0'], "Kamareddy" : ['0'], "Karimnagar" : ['0'], "Khammam" : ['0'], "Koratla" : ['0'], "Kothagudem" : ['0'], "Kyathampalle" : ['0'], "Mahbubnagar" : ['0'], "Mancherial" : ['0'], "Mandamarri" : ['0'], "Manuguru" : ['0'], "Medak" : ['0'], "Miryalaguda" : ['0'], "Nagarkurnool" : ['0'], "Narayanpet" : ['0'], "Nirmal" : ['0'], "Nizamabad" : ['0'], "Palwancha" : ['0'], "Ramagundam" : ['0'], "Sadasivpet" : ['0'], "Sangareddy" : ['0'], "Siddipet" : ['0'], "Sircilla" : ['0'], "Suryapet" : ['0'], "Tandur" : ['0'], "Vikarabad" : ['0'], "Wanaparthy" : ['0'], "Warangal" : ['0'], "Yellandu" : ['0']}, "Tripura":{"Agartala*" : ['0'], "Belonia" : ['0'], "Dharmanagar" : ['0'], "Kailasahar" : ['0'], "Khowai" : ['0'], "Pratapgarh" : ['0'], "Udaipur" : ['0'] }, "Uttar Pradesh":{"Achhnera" : ['0'], "Agra" : ['0'], "Aligarh" : ['0'], "Allahabad" : ['0'], "Amroha" : ['0'], "Azamgarh" : ['0'], "Bahraich" : ['0'], "Chandausi" : ['0'], "Etawah" : ['0'], "Firozabad" : ['0'], "Fatehpur Sikri" : ['0'], "Hapur" : ['0'], "Hardoi *" : ['0'], "Jhansi" : ['0'], "Kalpi" : ['0'], "Kanpur" : ['0'], "Khair" : ['0'], "Laharpur" : ['0'], "Lakhimpur" : ['0'], "Lal Gopalganj Nindaura" : ['0'], "Lalitpur" : ['0'], "Lalganj" : ['0'], "Lar" : ['0'], "Loni" : ['0'], "Lucknow*" : ['0'], "Mathura" : ['0'], "Meerut" : ['0'], "Modinagar" : ['0'], "Moradabad" : ['0'], "Nagina" : ['0'], "Najibabad" : ['0'], "Nakur" : ['0'], "Nanpara" : ['0'], "Naraura" : ['0'], "Naugawan Sadat" : ['0'], "Nautanwa" : ['0'], "Nawabganj" : ['0'], "Nehtaur" : ['0'], "Niwai" : ['0'], "Noida" : ['0'], "Noorpur" : ['0'], "Obra" : ['0'], "Orai" : ['0'], "Padrauna" : ['0'], "Palia Kalan" : ['0'], "Parasi" : ['0'], "Phulpur" : ['0'], "Pihani" : ['0'], "Pilibhit" : ['0'], "Pilkhuwa" : ['0'], "Powayan" : ['0'], "Pukhrayan" : ['0'], "Puranpur" : ['0'], "Purquazi" : ['0'], "Purwa" : ['0'], "Rae Bareli" : ['0'], "Rampur" : ['0'], "Rampur Maniharan" : ['0'], "Rampur Maniharan" : ['0'], "Rasra" : ['0'], "Rath" : ['0'], "Renukoot" : ['0'], "Reoti" : ['0'], "Robertsganj" : ['0'], "Rudauli" : ['0'], "Rudrapur" : ['0'], "Sadabad" : ['0'], "Safipur" : ['0'], "Saharanpur" : ['0'], "Sahaspur" : ['0'], "Sahaswan" : ['0'], "Sahawar" : ['0'], "Sahjanwa" : ['0'], "Saidpur" : ['0'], "Sambhal" : ['0'], "Samdhan" : ['0'], "Samthar" : ['0'], "Sandi" : ['0'], "Sandila" : ['0'], "Sardhana" : ['0'], "Seohara" : ['0'], "Shahabad : ['0'],  Hardoi" : ['0'], "Shahabad : ['0'],  Rampur" : ['0'], "Shahganj" : ['0'], "Shahjahanpur" : ['0'], "Shamli" : ['0'], "Shamsabad : ['0'],  Agra" : ['0'], "Shamsabad : ['0'],  Farrukhabad" : ['0'], "Sherkot" : ['0'], "Shikarpur : ['0'],  Bulandshahr" : ['0'], "Shikohabad" : ['0'], "Shishgarh" : ['0'], "Siana" : ['0'], "Sikanderpur" : ['0'], "Sikandra Rao" : ['0'], "Sikandrabad" : ['0'], "Sirsaganj" : ['0'], "Sirsi" : ['0'], "Sitapur" : ['0'], "Soron" : ['0'], "Suar" : ['0'], "Sultanpur" : ['0'], "Sumerpur" : ['0'], "Tanda" : ['0'], "Thakurdwara" : ['0'], "Thana Bhawan" : ['0'], "Tilhar" : ['0'], "Tirwaganj" : ['0'], "Tulsipur" : ['0'], "Tundla" : ['0'], "Ujhani" : ['0'], "Unnao" : ['0'], "Utraula" : ['0'], "Varanasi" : ['0'], "Vrindavan" : ['0'], "Warhapur" : ['0'], "Zaidpur" : ['0'], "Zamania" : ['0']}, "Uttarakhand":{"Bageshwar" : ['0'], "Dehradun" : ['0'], "Haldwani-cum-Kathgodam" : ['0'], "Hardwar" : ['0'], "Kashipur" : ['0'], "Manglaur" : ['0'], "Mussoorie" : ['0'], "Nagla" : ['0'], "Nainital" : ['0'], "Pauri" : ['0'], "Pithoragarh" : ['0'], "Ramnagar" : ['0'], "Rishikesh" : ['0'], "Roorkee" : ['0'], "Rudrapur" : ['0'], "Sitarganj" : ['0'], "Srinagar" : ['0'], "Tehri" : ['0'] }, "West Bengal":{"Adra" : ['0'], "Alipurduar" : ['0'], "Arambagh" : ['0'], "Asansol" : ['0'], "Baharampur" : ['0'], "Balurghat" : ['0'], "Bankura" : ['0'], "Darjiling" : ['0'], "English Bazar" : ['0'], "Gangarampur" : ['0'], "Habra" : ['0'], "Hugli-Chinsurah" : ['0'], "Jalpaiguri" : ['0'], "Jhargram" : ['0'], "Kalimpong" : ['0'], "Kharagpur" : ['0'], "Kolkata" : ['0'], "Mainaguri" : ['0'], "Malda" : ['0'], "Mathabhanga" : ['0'], "Medinipur" : ['0'], "Memari" : ['0'], "Monoharpur" : ['0'], "Murshidabad" : ['0'], "Nabadwip" : ['0'], "Naihati" : ['0'], "Panchla" : ['0'], "Pandua" : ['0'], "Paschim Punropara" : ['0'], "Purulia" : ['0'], "Raghunathpur" : ['0'], "Raghunathganj" : ['0'], "Raiganj" : ['0'], "Rampurhat" : ['0'], "Ranaghat" : ['0'], "Sainthia" : ['0'], "Santipur" : ['0'], "Siliguri" : ['0'], "Sonamukhi" : ['0'], "Srirampore" : ['0'], "Suri" : ['0'], "Taki" : ['0'], "Tamluk" : ['0'], "Tarakeswar"  : ['0']}
}
}



window.onload = function () {

    //Get html elements
    var countySel = document.getElementById("countySel");
    var stateSel = document.getElementById("stateSel");
    var citySel = document.getElementById("citySel");

    //Load countries
    for (var country in countryStateInfo) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }

    //County Changed
    countySel.onchange = function () {

        stateSel.length = 1; // remove all options bar first
        citySel.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        for (var state in countryStateInfo[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }

    //State Changed
    stateSel.onchange = function () {
        citySel.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        for (var city in countryStateInfo[countySel.value][this.value]) {
            citySel.options[citySel.options.length] = new Option(city, city);
        }
    }
}