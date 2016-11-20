function nn(input){
    var F = {
        '0': 0.1,
        '1': 1,
        '2': 0,
        '3': 0,
        '4': 0.42,
        '5': 1,
        '6': 0.9034687552517255,
        '7': -2.7015760376335916,
        '8': 2.2363747918180716,
        '9': -0.007471348023874259,
        '10': 1.0362274011067123,
        '11': -2.7208145259931746,
        '12': 1.6230924600806196,
        '13': 0.5015964131539346,
        '14': 0.9993479873455127,
        '15': 0.08721296353562319,
        '16': 1,
        '17': 0,
        '18': 0,
        '19': 0.42,
        '20': 1,
        '21': 0.007554911645043845,
        '22': 3.6782547790869065,
        '23': 0.02355084734742552,
        '24': 0.6714333756235348,
        '25': -1.4016689647716534,
        '26': 0.7146751625091257,
        '27': -0.18156284454390928,
        '28': 0.4615798054065262,
        '29': -1.2350908747024172,
        '30': 0.5279520133126119,
        '31': 0.269336382205589,
        '32': 0.32308383749683256,
        '33': 0.22061059772232003,
        '34': 1,
        '35': 0,
        '36': 0,
        '37': 0.42,
        '38': 1,
        '39': 0.004870030149449808,
        '40': 0.937343433079946,
        '41': 0.8647507310204531,
        '42': -2.4098404675227574,
        '43': 1.855321780416749,
        '44': -0.11187836180910446,
        '45': 0.9319049809014365,
        '46': -2.3212431664589297,
        '47': 1.371211885510304,
        '48': 0.42530859904682267,
        '49': 0.8591969402393268,
        '50': 0.1169569042200451,
        '51': 1,
        '52': 0,
        '53': 0,
        '54': 0.42,
        '55': 1,
        '56': 0.007969369457799216,
        '57': 2.8932872910860072,
        '58': 0.9764491526525745,
        '59': -2.0588083535427137,
        '60': 3.724760877347145,
        '61': -2.722663074865445,
        '62': 0.02299620493664378,
        '63': 0.9034687552517255,
        '64': 0.6714333756235348,
        '65': 0.8647507310204531,
        '66': 1 };
    
 F[1] = input[0];
    
 F[2] = input[1];
 F[3] = input[2];
 F[4] = input[3];
 F[5] = input[4];
 F[7] = F[8];
    
 F[8] = F[9];
 F[8] += F[1] * F[10];
 F[8] += F[2] * F[11];
 F[8] += F[3] * F[12];
 F[8] += F[4] * F[13];
 F[8] += F[5] * F[14];
 F[6] = (1 / (1 + Math.exp(-F[8])));
 F[15] = F[6] * (1 - F[6]);
F[16] = F[1];
 F[17] = F[2];
 F[18] = F[3];
 F[19] = F[4];
 F[20] = F[5];
F[25] = F[26];
 F[26] = F[27];
 F[26] += F[1] * F[28];
 F[26] += F[2] * F[29];
 F[26] += F[3] * F[30];
 F[26] += F[4] * F[31];
 F[26] += F[5] * F[32];
 F[24] = (1 / (1 + Math.exp(-F[26])));
 F[33] = F[24] * (1 - F[24]);
F[34] = F[1];
 F[35] = F[2];
 F[36] = F[3];
 F[37] = F[4];
 F[38] = F[5];
F[42] = F[43];
 F[43] = F[44];
 F[43] += F[1] * F[45];
 F[43] += F[2] * F[46];
 F[43] += F[3] * F[47];
 F[43] += F[4] * F[48];
 F[43] += F[5] * F[49];
 F[41] = (1 / (1 + Math.exp(-F[43])));
 F[50] = F[41] * (1 - F[41]);
F[51] = F[1];
 F[52] = F[2];
 F[53] = F[3];
 F[54] = F[4];
 F[55] = F[5];
F[59] = F[60];
 F[60] = F[61];
 F[60] += F[6] * F[22];
 F[60] += F[24] * F[40];
 F[60] += F[41] * F[57];
 F[58] = (1 / (1 + Math.exp(-F[60])));
 F[62] = F[58] * (1 - F[58]);
F[63] = F[6];
 F[64] = F[24];
 F[65] = F[41];
 var output = [];
 output[0] = F[58];
 return output;
 }

function conversion(){
    var inputvec = [];
    if (document.getElementById("type").value == "desktop") {
        inputvec.push(1, 0, 0);
    }
    else if (document.getElementById("type").value == "app") {
        inputvec.push(0, 1, 0);
    }
    else {
        inputvec.push(0, 0, 1);
    }
    if (document.getElementById("platform").value == "video") {
                inputvec.push(1);
            }
            else {
                inputvec.push(0);
            }
    inputvec.push(parseFloat(document.getElementById("time").value)/24);
    var output = nn(inputvec);
    console.log(output);
    alert(output);
    document.getElementById("pred").innerHTML = output;
    console.log('complete!')
    return false;
    
}

$(document).ready(function(){
    $('input:radio[name="display"]').change(
    function(){
        if ($(this).val() == 'a') {
            $('#video').css('background-color','green');
        }
        else if ($(this).val() == 'b'){
            $('#video').css('background-color','blue');
        }
        else{
            $('#video').css('background-color','red');
        }
    });
    $("#submit").click(conversion);
        //function(){
        
        //$.ajax({url: "http://localhost:3000/", success: function(result){
        //    $("#header").html(result);
        //}});
        //var inputvec = [];
        //conversion;
        //$('#pred').html("yo");
        //return false;
    //}
    
   
});