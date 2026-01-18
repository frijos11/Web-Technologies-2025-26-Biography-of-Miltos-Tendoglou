let type = 1                           // Which Main Menu was Selected
let lastMainElement = "mainPhotos"     // Which was the Last Shown Element

function revealMain(buildMainElement) {
    document.getElementById(lastMainElement).style.display = "none"
    document.getElementById(buildMainElement).style.display = "block"

    lastMainElement = buildMainElement
}

function buildMain(number) {

    // Biography
    if (type == 1)
        buildBio(number)
    else if (type == 2)     // Photos
        buildPhotos(number)
    else if (type == 3)     // Distinctions
        getJSONDistinctions(number)
    else if (type == 4)     // Links
        getJSONLinks(number)
    else
        buildManage(number) // Account
}

// Biography Function
function buildBio(number) {

    // Building Biography P and Img Element
    const imageBio = document.querySelector("img")
    if (number == 1) {
        document.getElementById("mainBioP").innerHTML = "Ο Μίλτος Τεντόγλου (Θεσσαλονίκη, 18 Μαρτίου 1998) είναι Έλληνας πρωταθλητής του στίβου στο άλμα εις μήκος και παγκόσμιος πρωταθλητής και χρυσός ολυμπιονίκης το 2020 και 2024. Θεωρείται ως ένας από τους καλύτερους άλτες μήκους όλων των εποχών, έχοντας κερδίσει συνολικά 11 χρυσά μετάλλια και στις πέντε μεγάλες παγκόσμιες και ευρωπαϊκές διοργανώσεις στίβου. Θεωρείται αθλητής παγκόσμιας κλάσης και είναι ένας από τους πιο σημαντικούς Έλληνες αθλητές."

        imageBio.width = 700
        imageBio.src = "Images\\Φωτογραφίες\\Γενικός + 2022\\Ε_2022 Άλμα 1.jpg"
    }
    else if (number == 2) {
        document.getElementById("mainBioP").innerHTML = "Γεννήθηκε στη Θεσσαλονίκη το 1998 και έχει μικρασιατική καταγωγή. Μεγάλωσε στα Γρεβενά, όπου σε εφηβική ηλικία εξασκούσε ως χόμπι το παρκούρ."

        imageBio.width = 550
        imageBio.src = "Images\\Φωτογραφίες\\Γενικός + 2022\\Μικρός.jpg"
    }
    else {
        document.getElementById("mainBioP").innerHTML = "Tο 2017, ο Τεντόγλου άρχισε να συνεργάζεται με τον διακεκριμένο προπονητή αλμάτων, Γιώργο Πομάσκι, ο οποίος είναι ο σημερινός προπονητής του. Ήταν ασημένιος Ολυμπιονίκης στο Παγκόσμιο Πρωτάθλημα κάτω των 20 ετών το 2016 και κέρδισε το χρυσό στο Ευρωπαϊκό Πρωτάθλημα U20 του 2017 και στο Ευρωπαϊκό Πρωτάθλημα U23 του 2019. Ο Τεντόγλου ήταν επίσης Πρωταθλητής Diamond League 2022 στη διοργάνωση. Είναι ο κάτοχος του ελληνικού ρεκόρ κλειστού στίβου και έχει κατακτήσει 14 πανελλήνιους τίτλους στο άλμα εις μήκος. Αναδείχθηκε Έλληνας Αθλητής της Χρονιάς, για τα έτη 2022 και 2023. Ανακηρύχθηκε επίσης ο καλύτερος βαλκανικός αθλητής της χρονιάς BTA για το 2024."

        imageBio.width = 700
        imageBio.src = "Images\\Φωτογραφίες\\Γενικός + 2022\\Τρέχοντας.jpg"
    }

}

// Photos Function
function buildPhotos(number) {

    const imagePhoto1 = document.getElementById("imgPhoto1")
    const imagePhoto2 = document.getElementById("imgPhoto2")
    const imagePhoto3 = document.getElementById("imgPhoto3")
    const imagePhoto4 = document.getElementById("imgPhoto4")
    const imagePhoto5 = document.getElementById("imgPhoto5")
    const imagePhoto6 = document.getElementById("imgPhoto6")

    if (number == 1) {
        imagePhoto1.width = 500
        imagePhoto1.src = "Images\\Φωτογραφίες\\Ευρωπαικό Πρωτάθλημα 2018\\E_2018 Άλμα.webp"

        imagePhoto2.width = 500
        imagePhoto2.src = "Images\\Φωτογραφίες\\Ευρωπαικό Πρωτάθλημα 2018\\Ε_2018 Σημαία 1.jpg"

        imagePhoto3.width = 500
        imagePhoto3.src = "Images\\Φωτογραφίες\\Ευρωπαικό Πρωτάθλημα 2018\\Ε_2018 Μετάλλιο.jpg"

        imagePhoto4.width = 500
        imagePhoto4.src = "Images\\Φωτογραφίες\\Ευρωπαικό Πρωτάθλημα 2018\\Ε_2018.jpg"

        imagePhoto5.width = 500
        imagePhoto5.src = "Images\\Φωτογραφίες\\Ευρωπαικό Πρωτάθλημα 2018\\Ε_2018 Σημαία 2.jpg"

        imagePhoto6.width = 500
        imagePhoto6.src = "Images\\Φωτογραφίες\\Ευρωπαικό Πρωτάθλημα 2018\\Ε_2018 Μετάλλιο 2.jpg"
    }
    else if (number == 2) {
        imagePhoto1.width = 500
        imagePhoto1.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2020\\Ολ_2020 Άλμα 1.jpg"


        imagePhoto2.width = 500
        imagePhoto2.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2020\\Ολ_2020 Σημαία 1.png"

        imagePhoto3.width = 500
        imagePhoto3.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2020\\Ολ_2020 Μετάλλιο 1.jpg"

        imagePhoto4.width = 500
        imagePhoto4.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2020\\Ολ_2020 Άλμα 2.jpg"

        imagePhoto5.width = 500
        imagePhoto5.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2020\\Ολ_2020 Σημαία 2.jpg"

        imagePhoto6.width = 500
        imagePhoto6.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2020\\Ολ_2020 Μετάλλιο 2.jpg"
    }
    else if (number == 3) {
        imagePhoto1.width = 500
        imagePhoto1.src = "Images\\Φωτογραφίες\\Παγκόσμιο Πρωτάθλημα 2023\\Π_2023 Άλμα 1.jpg"

        imagePhoto2.width = 500
        imagePhoto2.src = "Images\\Φωτογραφίες\\Παγκόσμιο Πρωτάθλημα 2023\\Π_2023 Σημαία_Μετάλλιο 1.gif"

        imagePhoto3.width = 500
        imagePhoto3.src = "Images\\Φωτογραφίες\\Παγκόσμιο Πρωτάθλημα 2023\\Π_2023 Άλμα 2.png"

        imagePhoto4.width = 500
        imagePhoto4.src = "Images\\Φωτογραφίες\\Παγκόσμιο Πρωτάθλημα 2023\\Π_2023 Άλμα 3.jpg"

        imagePhoto5.width = 500
        imagePhoto5.src = "Images\\Φωτογραφίες\\Παγκόσμιο Πρωτάθλημα 2023\\Π_2023 Σημαία_Μετάλλιο 2.jpg"

        imagePhoto6.width = 500
        imagePhoto6.src = "Images\\Φωτογραφίες\\Παγκόσμιο Πρωτάθλημα 2023\\Π_2023 Κάτω.jpg"
    }
    else {
        imagePhoto1.width = 500
        imagePhoto1.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2024\\Ολ_2024 Άλμα 1.webp"

        imagePhoto2.width = 500
        imagePhoto2.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2024\\Ολ_2024 Σημαία 1.jpg"

        imagePhoto3.width = 500
        imagePhoto3.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2024\\Ολ_2024 Μετάλλιο 1.jpg"

        imagePhoto4.width = 500
        imagePhoto4.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2024\\Ολ_2024 Άλμα 2.png"

        imagePhoto5.width = 500
        imagePhoto5.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2024\\Ολ_2024 Σημαία 2.png"

        imagePhoto6.width = 500
        imagePhoto6.src = "Images\\Φωτογραφίες\\Ολυμπιακοί Αγώνες 2024\\Ολ_2024 Μετάλλιο 2.jpg"
    }
}

// Distinctions Functions
function getJSONDistinctions(number) {

    let i
    if (number == 1)
        i = "Πρώτες Στιγμές"
    else if (number == 2)
        i = "Πρώτες Χρυσές Διακρίσεις"
    else if (number == 3)
        i = "Περισσότερες Κυριαρχίες"
    else
        i = "Πρόσφατες Διακρίσεις"

    fetch("JsonFiles/Distinctions.json", { method: "GET" })
        .then((Response) => Response.json())
        .then((jsonData) => buildDistinctions((jsonData[i])))
        .catch((err) => console.error("error:", err))
}

function buildDistinctions(Data) {
    let DistinctionsHTML = `<table><tr><th>Έτος</th><th>Πρωτάθλημα</th><th>Θέση</th><th>Μέτρα</th></tr>`

    for (let Distinction of Data) {
        DistinctionsHTML += "<tr><td>" +
            Distinction.Έτος + "</td><td>" +
            Distinction.Πρωτάθλημα + "</td><td>" +
            Distinction.Θέση + "</td><td>" +
            Distinction.Μέτρα + "</td></tr>"
    }

    DistinctionsHTML += "</table>"
    document.getElementById("mainDistinctions").innerHTML = DistinctionsHTML
}

// Links Functions
function getJSONLinks(number) {

    let i
    if (number == 1)
        i = "Βίντεο"
    else if (number == 2)
        i = "Συνεντεύξεις"
    else
        i = "Διαδικτυακοί Σύνδεσμοι"

    fetch("JsonFiles/Links.json", { method: "GET" })
        .then((Response) => Response.json())
        .then((jsonData) => buildLinks((jsonData[i])))
        .catch((err) => console.error("error:", err))
}

function buildLinks(Data) {
    let LinksHTML = `<table><tr><th>Αριθμός</th><th>Σύνδεσμος</th></tr>`
    let i = 1

    for (let Link of Data) {
        LinksHTML += "<tr><td>" +
            i + "o" + "</td><td>" +
            Link.Link + "</td></tr>"
        i += 1
    }

    LinksHTML += "</table>"
    document.getElementById("mainLinks").innerHTML = LinksHTML
}

// Form Manage
function buildManage(number) {
    if (number == 1) {
        document.getElementById("mainManageP").innerHTML = `
            <form onsubmit = "doLogin(event)">
            <label for = "userName"><b>Όνομα Χρήστη:</b></label>
            <input type = "text" id = "userName" name = "userName" placeholder = "admin/user" required><br>
            
            <label for = "Password"><b>Κωδικός:</b></label>
            <input type = "text" id = "Password" name = "Password" placeholder = "pass" required><br>
            
            <input type = "submit" value = "Σύνδεση">
        </form>
        <p id="msg"></p>`
    }
    else if (number == 2) {
        fetch('/logout', { method: 'POST' })
            .then((res) => {
                if (res.status === 200) 
                    document.getElementById("mainManageP").innerHTML = "Η αποσύνδεση έγινε με επιτυχία."
                else 
                    document.getElementById("mainManageP").innerHTML = "Δεν έχετε συνδεθεί, ώστε να αποσυνδεθείτε."
            })
    }
    else if (number == 3 || number == 4) {
        fetch('/api/user')
            .then(res => {
                if (res.status == 200) 
                    return res.json()
                throw new Error("Not logged in")
            })
            .then(data => {
                if (data.username === 'admin') {
                    if (number == 3)
                        showDistinctionForm()
                    else
                        showLinksForm()
                } 
                else 
                    document.getElementById("mainManageP").innerHTML = "Συνδεθήκατε ως <b>απλός Χρήστης</b>, δεν μπορείτε να κάνετε αλλαγές."
            })
            .catch(() => {
                document.getElementById("mainManageP").innerHTML = "Πρέπει πρώτα να συνδεθείτε ως <b>Διαχειριστής</b> για να κάνετε αλλαγές."
            })
    }
}

function doLogin(event) {
    // Stop Page Reload
    event.preventDefault()

    // Store Data
    const username = document.getElementById("userName").value
    const password = document.getElementById("Password").value

    // Send Data to Back-end
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: username, Password: password })
    })
        .then(res => {
            if (res.status === 200) {
                document.getElementById("mainManageP").innerHTML = "Η σύνδεση έγινε επιτυχώς!"
            } else {
                document.getElementById("msg").innerHTML = "Λάθος όνομα χρήστη ή κωδικός!"
            }
        })
}

function showDistinctionForm() {
    fetch("JsonFiles/Distinctions.json")
        .then(response => response.json())
        .then(data => {
            allDistinctionsData = data 
            formDistinctions() 
        })
}

function formDistinctions() {
    document.getElementById("mainManageP").innerHTML = `        
        <label><b>Επιλέξτε Κατηγορία:</b></label>
        <select id = "dCategory" onchange = "updateDistinctionList()">
            <option value = "Πρώτες Στιγμές">Πρώτες Στιγμές</option>
            <option value = "Πρώτες Χρυσές Διακρίσεις">Πρώτες Χρυσές Διακρίσεις</option>
            <option value = "Περισσότερες Κυριαρχίες">Περισσότερες Κυριαρχίες</option>
            <option value = "Πρόσφατες Διακρίσεις">Πρόσφατες Διακρίσεις</option>
        </select>
        <br><br>

        <label><b>Επιλέξτε Ενέργεια:</b></label>
        <select id = "dSelect" onchange = "fillFormInputs()">
            <option value = "-1">-- Νέα Εγγραφή (Προσθήκη) --</option>
        </select>
        <br><br>

        <div style = "border : 1px solid #ccc padding : 10px">
            <form onsubmit = "handleDistinctionSubmit(event)">
                <label>Έτος:</label> <input type = "text" id = "dYear" required><br>
                <label>Πρωτάθλημα:</label> <input type = "text" id = "dChamp" required><br>
                <label>Θέση:</label> <input type = "text" id = "dRank" required><br>
                <label>Μέτρα:</label> <input type = "text" id = "dMeters" required><br>
                <input type = "submit" id = "submitButton" value = "Αποθήκευση">
            </form>
        </div>
        <p id = "resultMsg"></p>`
    
    updateDistinctionList()
}

function updateDistinctionList() {
    const category = document.getElementById("dCategory").value
    const selectBox = document.getElementById("dSelect")
    const list = allDistinctionsData[category] || []

    selectBox.innerHTML = '<option value="-1">-- Νέα Εγγραφή (Προσθήκη) --</option>'

    list.forEach((item, index) => {
        const option = document.createElement("option")
        option.value = index 
        option.text = `Επεξεργασία: ${item.Έτος} - ${item.Πρωτάθλημα}`
        selectBox.add(option)
    })

    fillFormInputs()
}

function fillFormInputs() {
    const category = document.getElementById("dCategory").value
    const index = document.getElementById("dSelect").value
    
    if (index == "-1") {
        document.getElementById("dYear").value = ""
        document.getElementById("dChamp").value = ""
        document.getElementById("dRank").value = ""
        document.getElementById("dMeters").value = ""
        document.getElementById("submitButton").value = "Προσθήκη"
    } 
    else {
        const item = allDistinctionsData[category][index]
        document.getElementById("dYear").value = item.Έτος
        document.getElementById("dChamp").value = item.Πρωτάθλημα
        document.getElementById("dRank").value = item.Θέση
        document.getElementById("dMeters").value = item.Μέτρα
        document.getElementById("submitButton").value = "Ενημέρωση"
    }
}

function handleDistinctionSubmit(event) {
    event.preventDefault()

    const index = document.getElementById("dSelect").value
    const dataToSend = {
        category: document.getElementById("dCategory").value,
        year: document.getElementById("dYear").value,
        championship: document.getElementById("dChamp").value,
        rank: document.getElementById("dRank").value,
        meters: document.getElementById("dMeters").value,
        index: index 
    }

    let url, method

    if (index == "-1") {        // Add Distinctions
        url = '/api/distinctions'
        method = 'POST'
    } 
    else {                      // Update Distinctions
        url = '/api/distinctions' 
        method = 'PUT' 
    }

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    .then(() => {
        showDistinctionForm() 
    })
}

function showLinksForm() {
    fetch("JsonFiles/Links.json")
        .then(res => res.json())
        .then(data => {
            allLinksData = data
            formLinks()
        })
}

function formLinks() {
    document.getElementById("mainManageP").innerHTML = `        
        <label><b>Επιλέξτε Κατηγορία:</b></label>
        <select id = "lCategory" onchange = "updateLinksList()">
            <option value = "Βίντεο">Βίντεο</option>
            <option value = "Συνεντεύξεις">Συνεντεύξεις</option>
            <option value = "Διαδικτυακοί Σύνδεσμοι">Διαδικτυακοί Σύνδεσμοι</option>
        </select>
        <br><br>

        <label><b>Επιλέξτε Ενέργεια:</b></label>
        <select id = "lSelect" onchange = "fillLinkInputs()">
            <option value = "-1">-- Νέος Σύνδεσμος (Προσθήκη) --</option>
        </select>
        <br><br>

        <div>
            <form onsubmit = "handleLinkSubmit(event)">
                <label>URL (Link):</label> 
                <input type = "text" id = "Url" style = "width: 90%" required>
                <br><br>
                <input type = "submit" id = "SubmitButton" value = "Προσθήκη">
            </form>
        </div>
        <p id = "resultMsg"></p>`

    updateLinksList()
}

function updateLinksList() {
    const category = document.getElementById("lCategory").value
    const selectBox = document.getElementById("lSelect")
    const list = allLinksData[category] || []

    selectBox.innerHTML = '<option value="-1">-- Νέος Σύνδεσμος (Προσθήκη) --</option>'

    list.forEach((item, index) => {
        const option = document.createElement("option")
        option.value = index
        
        const cleanText = item.Link.replace(/<[^>]*>?/gm, '') 
        option.text = "Επεξεργασία: " + cleanText.substring(0, 50) + "..."
        
        selectBox.add(option)
    })
    fillLinkInputs()
}

function fillLinkInputs() {
    const category = document.getElementById("lCategory").value
    const index = document.getElementById("lSelect").value

    if (index == "-1") {
        document.getElementById("Url").value = ""
        document.getElementById("SubmitButton").value = "Προσθήκη"
    } 
    else {
        const item = allLinksData[category][index]
        const cleanUrl = item.Link.replace(/<[^>]*>?/gm, '')
        document.getElementById("Url").value = cleanUrl
        document.getElementById("SubmitButton").value = "Ενημέρωση"
    }
}

function handleLinkSubmit(event) {
    event.preventDefault()

    const index = document.getElementById("lSelect").value
    const dataToSend = {
        category: document.getElementById("lCategory").value,
        url: document.getElementById("Url").value,
        index: index
    }

    let url, method
    if (index == "-1") {
        url = '/api/links'
        method = 'POST'
    } 
    else {
        url = '/api/links'
        method = 'PUT'
    }

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    .then(() => {
            showLinksForm() 
    })
}

function asideMenuChanger(menuType) {
    if (menuType == 'Βιογραφία') {
        document.getElementById("asideB1").innerHTML = "Λίγα Λόγια"
        document.getElementById("asideB2").innerHTML = "Νεαρή Ζωή"
        document.getElementById("asideB3").innerHTML = "Αθλητική Σταδιοδρομία"
        document.getElementById("asideB4").style.display = "none"   // CSS Class STYLE display = 'none' 
        type = 1
    }
    else if (menuType == 'Σύνδεσμοι') {
        document.getElementById("asideB1").innerHTML = "Βίντεο"
        document.getElementById("asideB2").innerHTML = "Συνεντεύξεις"
        document.getElementById("asideB3").innerHTML = "Διαδικτυακοί Συνδέσμοι"
        document.getElementById("asideB4").style.display = "none"   // CSS Class STYLE display = 'none' 
        type = 4
    }
    else {
        document.getElementById("asideB4").style.display = "block"   // In order to Show 4th Aside Button 
        if (menuType == 'Φωτογραφίες') {
            document.getElementById("asideB1").innerHTML = "Ευρωπαικό Πρωτάθλημα 2018"
            document.getElementById("asideB2").innerHTML = "Ολυμπιακοί Αγώνες 2020"
            document.getElementById("asideB3").innerHTML = "Παγκόσμιο Πρωτάθλημα 2023"
            document.getElementById("asideB4").innerHTML = "Ολυμπιακοί Αγώνες 2024"
            type = 2
        }
        else if (menuType == 'Διακρίσεις') {
            document.getElementById("asideB1").innerHTML = "Πρώτες Στιγμές"
            document.getElementById("asideB2").innerHTML = "Πρώτες 'Χρυσες' Διακρίσεις"
            document.getElementById("asideB3").innerHTML = "Περισσότερες Κυριαρχίες"
            document.getElementById("asideB4").innerHTML = "Πρόσφατες Διακρίσεις"
            type = 3
        }
        else if (menuType == 'Διαχείριση') {
            document.getElementById("asideB1").innerHTML = "Σύνδεση"
            document.getElementById("asideB2").innerHTML = "Αποσύνδεση"
            document.getElementById("asideB3").innerHTML = "Διαχείριση Διακρίσεων"
            document.getElementById("asideB4").innerHTML = "Διαχείριση Συνδέσμων"
            type = 5
        }
    }
}

function mainChanger(number) {
    if (number == 1) {                  // First Aside Button
        if (type == 1) {                // Main Menu Type
            document.getElementById("mainH").innerHTML = "Λίγα Λόγια"

            revealMain("mainBio")
            buildMain(number)
        }
        else if (type == 2) {
            document.getElementById("mainH").innerHTML = "Ευρωπαικό Πρωτάθλημα 2018"

            revealMain("mainPhotos")
            buildMain(number)
        }
        else if (type == 3) {
            document.getElementById("mainH").innerHTML = "Πρώτες Στιγμές"

            revealMain("mainDistinctions")
            buildMain(number)
        }
        else if (type == 4) {
            document.getElementById("mainH").innerHTML = "Βίντεο"

            revealMain("mainLinks")
            buildMain(number)
        }
        else {
            document.getElementById("mainH").innerHTML = "Σύνδεση"

            revealMain("mainManage")
            buildMain(number)
        }
    }
    else if (number == 2) {     // Second Aside Button
        if (type == 1) {
            document.getElementById("mainH").innerHTML = "Νεαρή Ζωή"

            revealMain("mainBio")
            buildMain(number)
        }
        else if (type == 2) {
            document.getElementById("mainH").innerHTML = "Ολυμπιακοί Αγώνες 2020"

            revealMain("mainPhotos")
            buildMain(number)
        }
        else if (type == 3) {
            document.getElementById("mainH").innerHTML = "Πρώτες 'Χρυσές' Διακρίσεις"

            revealMain("mainDistinctions")
            buildMain(number)
        }
        else if (type == 4) {
            document.getElementById("mainH").innerHTML = "Συνεντεύξεις"

            revealMain("mainLinks")
            buildMain(number)
        }
        else {
            document.getElementById("mainH").innerHTML = "Αποσύνδεση"

            revealMain("mainManage")
            buildMain(number)
        }
    }
    else if (number == 3) {     // Thrid Aside Button
        if (type == 1) {
            document.getElementById("mainH").innerHTML = "Αθλητική Σταδιοδρομία"

            revealMain("mainBio")
            buildMain(number)
        }
        else if (type == 2) {
            document.getElementById("mainH").innerHTML = "Παγκόσμιο Πρωτάθλημα 2023"

            revealMain("mainPhotos")
            buildMain(number)
        }
        else if (type == 3) {
            document.getElementById("mainH").innerHTML = "Περισσότερες Κυριαρχίες"

            revealMain("mainDistinctions")
            buildMain(number)
        }
        else if (type == 4) {
            document.getElementById("mainH").innerHTML = "Διαδικτυακοί Σύνδεσμοι"

            revealMain("mainLinks")
            buildMain(number)
        }
        else {
            document.getElementById("mainH").innerHTML = "Διαχείριση Διακρίσεων"

            revealMain("mainManage")
            buildMain(number)
        }
    }
    else {                      // Fourth Aside Button
        if (type == 2) {
            document.getElementById("mainH").innerHTML = "Ολυμπιακοί Αγώνες 2024"

            revealMain("mainPhotos")
            buildMain(number)
        }
        else if (type == 3) {
            document.getElementById("mainH").innerHTML = "Πρόσφατες Διακρίσεις"

            revealMain("mainDistinctions")
            buildMain(number)
        }
        else {
            document.getElementById("mainH").innerHTML = "Διαχείριση Συνδέσμων"

            revealMain("mainManage")
            buildMain(number)
        }
    }
}