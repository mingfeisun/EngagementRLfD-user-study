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

$("#pager-1").click(function(){
    $(".nav-tabs a[href='#demo1']").tab('show');
});
$("#pager-2").click(function(){
    $(".nav-tabs a[href='#demo2']").tab('show');
});
$("#pager-3").click(function(){
    $(".nav-tabs a[href='#demo3']").tab('show');
});
$("#pager-4").click(function(){
    $(".nav-tabs a[href='#demo4']").tab('show');
});

for (var i = 0; i < id_vid_real.length; i++) {
	vid_real.push(videojs(id_vid_real[i]));
	vid_sim.push(videojs(id_vid_sim[i]));
	panel_video.push(document.getElementById(id_panel_video[i]));
	panel_question.push(document.getElementById(id_panel_question[i]));
	btn_sim.push(document.getElementById(id_btn_sim[i]));
	btn_fin.push(document.getElementById(id_btn_fin[i]));

	n_clicks.push(0);
}

function simulation(idx){
	n_clicks[idx] ++;
	vid_sim[idx].play();
}

function finishSession(idx){}

// bind the simulation button 
btn_sim[0].onclick = function(){simulation(0);};
btn_sim[1].onclick = function(){simulation(1);};
btn_sim[2].onclick = function(){simulation(2);};
btn_sim[3].onclick = function(){simulation(3);};

