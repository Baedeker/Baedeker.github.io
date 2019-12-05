function update_table() {
  console.log(document.getElementById("date_dropdown").value);

  // Defining variables
  let option = document.getElementById("date_dropdown").value;
  let orig_cv = 0;
  let pred_1_cv = 0;
  let pred_2_cv = 0;

  console.log("Option: " + option);

  if(option == 1) {
    orig_cv = 0.0199;
    pred_1_cv = 0.0188;
    pred_2_cv = 0.0204;

    document.getElementById("row1").innerHTML = "<td><div style='width: 500px;'>'Brazil descends into chaos as Olympics looms'</div></td><td><div style='width: 100px;'>-0.6486</div></td></td>";
    document.getElementById("row2").innerHTML = "<td><div style='width: 500px;'>'Ukrainian pilot Nadiya Savchenko given 22-year sentence'</div></td><td><div style='width: 100px;'>0.0772</div></td>";
    document.getElementById("row3").innerHTML = "<td><div style='width: 500px;'>'Thousands protest in Okinawa over alleged rape of Japanese tourist by U.S. serviceman'</div></td><td><div style='width: 100px;'>0.7717</div></td>";
    document.getElementById("row4").innerHTML = "<td><div style='width: 500px;'>'Seeking better ties with Egypt, Hamas removes Muslim Brotherhood billboards in Gaza'</div></td><td><div style='width: 100px;'>0.4404</div></td>";
    document.getElementById("row5").innerHTML = "<td><div style='width: 500px;'>'Alibaba to soon overtake Wal-Mart to become worlds No.1 retail platform'</div></td><td><div style='width: 100px;'>0.0000</div></td>";
  } else if(option == 2) {
    orig_cv = 0.0098;
    pred_1_cv = 0.0142;
    pred_2_cv = 0.0204;

    document.getElementById("row1").innerHTML = "<td><div style='width: 500px;'>'Indonesian navy impounds Chinese trawler for illegal fishing'</div></td><td><div style='width: 100px;'>-0.5574</div></td><td>";
    document.getElementById("row2").innerHTML = "<td><div style='width: 500px;'>'Carbon Pricing Becomes a Cause for the World Bank and I.M.F. - And to our economists, who have been studying this for quite some time, there is an equally obvious consensus that putting a price on carbon pollution is by far the most powerful and efficient way to reduce emissions.'</div></td><td><div style='width: 100px;'>0.7316</div></td><td>";
    document.getElementById("row3").innerHTML = "<td><div style='width: 500px;'>'Bangladesh Bank hackers compromised SWIFT software, warning to be issued'</div></td><td><div style='width: 100px;'>0.0343</div></td><td>";
    document.getElementById("row4").innerHTML = "<td><div style='width: 500px;'>'China's Xi warns of foreign infiltration through religion'</div></td><td><div style='width: 100px;'>-0.1027</div></td><td>";
    document.getElementById("row5").innerHTML = "<td><div style='width: 500px;'>'A Philippine presidential candidate who joked about raping a murdered Australian missionary widens his lead over his rivals despite backlash'</div></td><td><div style='width: 100px;'>-0.8360</div></td><td>";
  } else {
    orig_cv = 0.0108;
    pred_1_cv = 0.0153;
    pred_2_cv = 0.0204;

    document.getElementById("row1").innerHTML = "<td><div style='width: 500px;'>'US scientists have cloned the Zika virus - an important step towards fast-tracking a vaccine against the disease.'</div></td><td><div style='width: 100px;'>0.2023</div></td><td>";
    document.getElementById("row2").innerHTML = "<td><div style='width: 500px;'>'Panama Papers reveal George Soros' deep money ties to secretive weapons, intel investment firm'</div></td><td><div style='width: 100px;'>-0.4404</div></td><td>";
    document.getElementById("row3").innerHTML = "<td><div style='width: 500px;'>'Pope criticizes West for trying to export own brand of democracy to Iraq, Libya'</div></td><td><div style='width: 100px;'>-0.3400</div></td><td>";
    document.getElementById("row4").innerHTML = "<td><div style='width: 500px;'>'Court condemns tobacco giant Philip Morris over secret bid to sue Australia over plain packaging laws'</div></td><td><div style='width: 100px;'>-0.5106</div></td><td>";
    document.getElementById("row5").innerHTML = "<td><div style='width: 500px;'>'Denmark pushes ahead with hate preacher blacklist'</div></td><td><div style='width: 100px;'>-0.5719</div></td><td>";
  }

  // Setting values of the rows in the table
  // document.getElementById("row1").innerHTML = "<td>Test</td><td>Test</td><td>";

  // Setting metrics
  document.getElementById("act_cv").innerHTML = String(orig_cv);
  document.getElementById("pred_1_cv").innerHTML = String(pred_1_cv);
  document.getElementById("pred_2_cv").innerHTML = String(pred_2_cv);
}

