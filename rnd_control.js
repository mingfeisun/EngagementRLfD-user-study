var combn_code = [
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
	];

var id_vid_real 	= ["vid_real_1", "vid_real_2", "vid_real_3", "vid_real_4"];
var id_vid_sim 		= ["vid_sim_1", "vid_sim_2", "vid_sim_3", "vid_sim_4"];
var id_q_rating 	= ["panel_question_1_1", "panel_question_2_1", "panel_question_3_1", "panel_question_4_1"]
var id_q_overall	= ["panel_question_1_2", "panel_question_2_2", "panel_question_3_2", "panel_question_4_2"]

var html_vid_real	= [];
var html_vid_sim 	= [];
var html_q_rating   = [];
var html_q_overall  = [];

// user id: unique for answering the questionairs
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var user_id = uuidv4();

// show user id
var htmlUserId = document.createElement("p");
var nodeUserId = document.createTextNode(user_id);
htmlUserId.appendChild(nodeUserId);
document.getElementById('user_id').appendChild(htmlUserId);

// questionair urls
var url_question_rating = [
		"https://ust.az1.qualtrics.com/jfe/form/SV_2cAjHJzZDfkFCvP",
		"https://ust.az1.qualtrics.com/jfe/form/SV_eVVRvqSbYDhHDrD",
		"https://ust.az1.qualtrics.com/jfe/form/SV_eLESFI4e27VCrC5",
		"https://ust.az1.qualtrics.com/jfe/form/SV_4HMshmuOtB9dnet"
	];

var url_question_overall = [
		"https://ust.az1.qualtrics.com/jfe/form/SV_5mujI4gGjTKz3c9",
		"https://ust.az1.qualtrics.com/jfe/form/SV_78qvieJK0Mp0M5v",
		"https://ust.az1.qualtrics.com/jfe/form/SV_bq605FW4Hm2AAW9",
		"https://ust.az1.qualtrics.com/jfe/form/SV_bfIk2pUJhrAS82p"
	];


for (var i = 0; i < id_vid_real.length; i++) {
	html_vid_real.push(document.getElementById(id_vid_real[i]));
	html_vid_sim.push(document.getElementById(id_vid_sim[i]));
	html_q_rating.push(document.getElementById(id_q_rating[i]));
	html_q_overall.push(document.getElementById(id_q_overall[i]));
}

var currMode = combn_code[Math.floor((Math.random() * combn_code.length))];
var currSport = combn_code[Math.floor((Math.random() * combn_code.length))];

for (var i = 0; i < html_vid_real.length; i++){
	vid_name_real = "video_" + currSport[i] + ".mp4";
	vid_name_sim = "sim_" + currSport[i] + "_" + currMode[i] + ".mp4";

	var htmlSource1 = document.createElement("source");
	htmlSource1.setAttribute("src", vid_name_real);
	htmlSource1.setAttribute("type", "video/mp4");
	html_vid_real[i].appendChild(htmlSource1);

	var htmlSource2 = document.createElement("source");
	htmlSource2.setAttribute("src", vid_name_sim);
	htmlSource2.setAttribute("type", "video/mp4");
	html_vid_sim[i].appendChild(htmlSource2);

	var htmlFrame1 = document.createElement("iframe");
	htmlFrame1.setAttribute("class", "embed-responsive-item");
	htmlFrame1.setAttribute("src", url_question_rating[currMode[i]-1] + "?uid=" + user_id + "&mode=" + currMode[i] + "-rating");
	html_q_rating[i].appendChild(htmlFrame1);

	var htmlFrame2 = document.createElement("iframe");
	htmlFrame2.setAttribute("class", "embed-responsive-item");
	htmlFrame2.setAttribute("src", url_question_overall[currMode[i]-1] + "?uid=" + user_id + "&mode=" + currMode[i] + "-overall");
	html_q_overall[i].appendChild(htmlFrame2);
}

