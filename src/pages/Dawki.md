@hidden

<div>
Waga ptaka <input id="weight"> gram <br>
Zalecona dawka leku <input id="recommended_dosage"> mg/kg <br>
Dawka leku: <span id="dosage"></span> mg

<h1>Lek w płynie</h1>
Koncentracja leku <input id="liquid_concentration"> 
<select id="method_of_liquid_concentration_specification">
    <option value="mg_ml">mg/ml</option>
    <option value="g_l">g/L</option>
    <option value="percentage">%</option>
</select>
<br>
Dawka leku w płynie: <span id="liquid_dosage"></span> ml

<h1>Tabletka</h1>
Koncentracja leku w tabletce <input id="tablet_concentration"> mg <br>
Dawka: <span id="tablet_dosage"></span> część tabletki

<script>
function calculate_dosages() {
    var waga = document.getElementById("weight").value;
    var recommended_dosage = document.getElementById("recommended_dosage").value;
    var dawka = waga * 0.001 * recommended_dosage;
    document.getElementById("dosage").innerHTML = dawka.toFixed(3);
}

function calculate_liquid() {
    var specification_method = document.getElementById("method_of_liquid_concentration_specification").value;
    var dosage = document.getElementById("dosage").innerHTML;
    var liquid_concentration = document.getElementById("liquid_concentration").value;
    
    if (specification_method == "mg_ml" || specification_method == "g_l") {
       if (liquid_concentration) {
            var liquid_dosage = dosage / liquid_concentration;
            document.getElementById("liquid_dosage").innerHTML = liquid_dosage.toFixed(3);
        } else {
            document.getElementById("liquid_dosage").innerHTML = "0.000";
        }    
    }
    
    if (specification_method == "percentage") {
        if (liquid_concentration) {
            var liquid_dosage = dosage / (liquid_concentration * 10);
            document.getElementById("liquid_dosage").innerHTML = liquid_dosage.toFixed(3);
        } else {
            document.getElementById("liquid_dosage").innerHTML = "0.000";
        } 
    }    
}

function calculate_tablet() {
    var dosage = document.getElementById("dosage").innerHTML;
    var tablet_concentration = document.getElementById("tablet_concentration").value;
    if (tablet_concentration) {
        var tablet_dosage = tablet_concentration / dosage;

        if (dosage > tablet_concentration) {
            tablet_dosage = dosage / tablet_concentration;
            console.log(dosage);
            console.log(tablet_concentration);
            console.log(tablet_dosage);
        }

        document.getElementById("tablet_dosage").innerHTML = tablet_dosage.toFixed(0);
    } else {
        document.getElementById("tablet_dosage").innerHTML = "0.000";
    }
}

function connect_input_listener(element_id) {
    document.getElementById(element_id).addEventListener("input", function (e) {
        var value_with_letters = document.getElementById(element_id).value;
        var value_without_letters = value_with_letters.replace(/[^0-9.]/g, '');
        document.getElementById(element_id).value = value_without_letters;
        calculate_dosages();
        calculate_liquid();
        calculate_tablet();
    });
}

// W te pola użytkownik wpisuje liczby.
connect_input_listener("weight");
connect_input_listener("recommended_dosage");
connect_input_listener("liquid_concentration");
connect_input_listener("tablet_concentration");

// TODO make it possible to use `,` instead of `.` in inputs
// TODO recalculate everything when interacting with select tag (not only when changing input)
// TODO make another formula for whole tablets

</script>

Wiek ptaka <input id="wiek"> tygodni <br>
Waga ptaka <input id="waga"> g <br>



connect_input_listener("wiek");
connect_input_listener("waga")


</div>