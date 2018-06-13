var combn_code = [
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
		[1, 2, 3, 4],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[4, 1, 2, 3],
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
	];

var id_vid_real 	= ["vid_real_1", "vid_real_2", "vid_real_3", "vid_real_4"];
var id_vid_sim 		= ["vid_sim_1", "vid_sim_2", "vid_sim_3", "vid_sim_4"];

var id_q_rating 	= ["panel_question_1_1", "panel_question_2_1", "panel_question_3_1", "panel_question_4_1"]

var id_thumbnail 	= ["thumbnail-1", "thumbnail-2", "thumbnail-3", "thumbnail-4"]
var id_thumbnail_ 	= ["thumbnail-1-1", "thumbnail-2-2", "thumbnail-3-3", "thumbnail-4-4"]

var html_vid_real	= [];
var html_vid_sim 	= [];

var html_q_rating   = [];

// user id: unique for answering the questionairs
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var user_id = uuidv4();


// get elements
for (var i = 0; i < id_vid_real.length; i++) {
	html_vid_real.push(document.getElementById(id_vid_real[i]));
	html_vid_sim.push(document.getElementById(id_vid_sim[i]));

	html_q_rating.push(document.getElementById(id_q_rating[i]));
}

Math.random();
Math.random();

var currMode = combn_code[Math.floor(Math.random() * combn_code.length) * 4];
var currSport = combn_code[Math.floor(Math.random() * combn_code.length) * 4];

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

	document.getElementById(id_thumbnail[i]).src = "member-" + currSport[i] + ".png";
	document.getElementById(id_thumbnail_[i]).src = "member-" + currSport[i] + ".png";
}

