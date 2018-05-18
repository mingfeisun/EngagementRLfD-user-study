// var vid_skel = videojs('vid_skel');
var id_vid_real 		= ["vid_real_1", "vid_real_2", "vid_real_3", "vid_real_4"];
var id_vid_sim 			= ["vid_sim_1", "vid_sim_2", "vid_sim_3", "vid_sim_4"];
var id_panel_video 		= ["panel_video_1", "panel_video_2", "panel_video_3", "panel_video_4"];
var id_panel_question 	= ["panel_question_1", "panel_question_2", "panel_question_3", "panel_question_4"];
var id_btn_sim 			= ["btn_sim_1", "btn_sim_2", "btn_sim_3", "btn_sim_4"];
var id_btn_fin 			= ["btn_fin_1", "btn_fin_2", "btn_fin_3", "btn_fin_4"];

var vid_real 		= [];
var vid_sim 		= [];
var panel_video 	= [];
var panel_question 	= [];
var btn_sim 		= [];
var btn_fin 		= [];

var n_clicks        = [];

for (var i = 0; i < id_vid_real.length; i++) {
	vid_real.push(videojs(id_vid_real[i]));
	vid_sim.push(videojs(id_vid_sim[i]));

	panel_video.push(document.getElementById(id_panel_video[i]));
	panel_question.push(document.getElementById(id_panel_question[i]));
	btn_sim.push(document.getElementById(id_btn_sim[i]));
	btn_fin.push(document.getElementById(id_btn_fin[i]));

	n_clicks.push(0);
}

function checkFormInfo(objData){
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please input value: " + objData[i].name);
			return false;
		}
	}
	return true;
}

function checkFormSportType(objData){
	if (objData.length == 0) {
		alert("Please pick the sport type in Step 1");
		return false;
	}
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please pick the sport type in Step 1");
			return false;
		}
	}

	return true;
}

function checkQuestionRating(objData){
	if (objData.length == 0) {
		alert("Please rate the robot learning performances in Step 2");
		return false;
	}

	var items = ["engagement", "learning", "terminate", "master"];
	if (objData.length != 4){
		var num = objData.length+1;
		for (var i = 0; i < objData.length; i++) {
			if (objData[i].name != items[i]){
				num = i+1;
				break;
			}
		}
		alert("Please rate Q" + num + " in Step 2");
		return false;
	}
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please rate Q" + (i+1) + " in Step 2");
			return false;
		}
	}

	return true;
}

function checkQuestionOverall(objData){
	if (objData.length == 0) {
		alert("Please rate the robot learning outcome in Step 3");
		return false;
	}

	var items = ["outcome", "expectation", "why"];
	if (objData.length != 3){
		var num = objData.length + 1;
		for (var i = 0; i < objData.length; i++) {
			if (objData[i].name != items[i]){
				num = i+1;
				break;
			}
		}
		alert("Please answer Q" + (num+4) + " in Step 3");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please answer Q" + (i+5) + " in Step 3");
			return false;
		}
	}


	return true;
}

var data_info = null;

var data_man_1 = null;
var data_man_2 = null;
var data_man_3 = null;
var data_man_4 = null;

var data_question_1_rating = null;
var data_question_2_rating = null;
var data_question_3_rating = null;
var data_question_4_rating = null;

var data_question_1_overall = null;
var data_question_2_overall = null;
var data_question_3_overall = null;
var data_question_4_overall = null;


$("#pager-0").click(function(){
	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		data_info = objData;
	}
    $(".nav-tabs a[href='#demo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-1").click(function(){
	var objDataMan = $("#panel_man_1").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_1 = objDataMan;
	}

	var objDataQRating = $("#panel_question_1_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_1_rating = objDataQRating;
	}

	var objDataQOverall = $("#panel_question_1_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_1_overall = objDataQOverall;
	}

    $(".nav-tabs a[href='#demo2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-2").click(function(){
	var objDataMan = $("#panel_man_2").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_2 = objDataMan;
	}

	var objDataQRating = $("#panel_question_2_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_2_rating = objDataQRating;
	}

	var objDataQOverall = $("#panel_question_2_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_2_overall = objDataQOverall;
	}
    $(".nav-tabs a[href='#demo3']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-3").click(function(){
	var objDataMan = $("#panel_man_3").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_3 = objDataMan;
	}

	var objDataQRating = $("#panel_question_3_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_3_rating = objDataQRating;
	}

	var objDataQOverall = $("#panel_question_3_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_3_overall = objDataQOverall;
	}
    $(".nav-tabs a[href='#demo4']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-4").click(function(){
	var objDataMan = $("#panel_man_4").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_4 = objDataMan;
	}

	var objDataQRating = $("#panel_question_4_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_4_rating = objDataQRating;
	}

	var objDataQOverall = $("#panel_question_4_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_4_overall = objDataQOverall;
	}
    // $(".nav-tabs a[href='#demo4']").tab('show');
	// $("html, body").animate({ scrollTop: 0 }, "slow");
	$("#finishModal").modal();
});

$("#pager-1-prev").click(function(){
    $(".nav-tabs a[href='#home']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-2-prev").click(function(){
    $(".nav-tabs a[href='#demo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-3-prev").click(function(){
    $(".nav-tabs a[href='#demo2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-4-prev").click(function(){
    $(".nav-tabs a[href='#demo3']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

