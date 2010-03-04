function $() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }
  return elements;
}
function moodinner(moodtext){
	var imga = king_page + "mood/images/pre_02.gif";
	var imgb = king_page + "mood/images/pre_01.gif";
	var color1 = "#666666";
	var color2 = "#EB610E";
	var heightz = "80";
	var hmax = 0;
	var hmaxpx = 0;
	var heightarr = new Array();
	var moodarr = moodtext.split(",");
	var moodzs = 0;
	for(k=0;k<8;k++) {
		moodarr[k] = parseInt(moodarr[k]);
		moodzs += moodarr[k];
	}
	for(i=0;i<8;i++) {
		heightarr[i]= Math.round(moodarr[i]/moodzs*heightz);
		if(heightarr[i]<1)
			heightarr[i]=1;
		if(moodarr[i]>hmaxpx) {
			hmaxpx = moodarr[i];
		}
	}
	$("moodinfo"+j).innerHTML = "<span style=\'color: #555555;padding-left: 20px;font-size:16px;'>您看完此刻的感受是！ 已有<font color='#FF0000'>"+moodzs+"</font>人表态：</span>";
	for(j=0;j<8;j++){
		if(moodarr[j]==hmaxpx && moodarr[j]!=0) {
			$("moodinfo"+j).innerHTML = "<span style='color: "+color2+";'>"+moodarr[j]+"</span><br><img src='"+imgb+"' width='20' height='"+heightarr[j]+"'>";
		} else {
			$("moodinfo"+j).innerHTML = "<span style='color: "+color1+";'>"+moodarr[j]+"</span><br><img src='"+imga+"' width='20' height='"+heightarr[j]+"'>";
		}
	}
}