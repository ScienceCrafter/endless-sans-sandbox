
var default_bone_set = {
	next_time: 4,
	total_time: 5.25,
	bones: [
		[340, 168, 16, 128, -160],
		[340, 24, 16, 128, -160],
		[460, 168, 16, 128, -160],
		[460, 24, 16, 128, -160],
		[580, 168, 16, 128, -160],
		[580, 24, 16, 128, -160],
		[700, 168, 16, 128, -160],
		[700, 24, 16, 128, -160],
		[820, 168, 16, 128, -160],
		[820, 24, 16, 128, -160],
		[-20, 168, 16, 128, 160],
		[-20, 24, 16, 128, 160],
		[-140, 168, 16, 128, 160],
		[-140, 24, 16, 128, 160],
		[-260, 168, 16, 128, 160],
		[-260, 24, 16, 128, 160],
		[-380, 168, 16, 128, 160],
		[-380, 24, 16, 128, 160],
		[-500, 168, 16, 128, 160],
		[-500, 24, 16, 128, 160],
	],
	if (document.getElementById("game_settings_other").value.includes("only_hurdles") {
		next_bone_sets: [
		"4A", "5A"
		]
	} else {
		next_bone_sets: [
		// "1L", "1R", "2L", "2R", "3",
		"6L", "6R"
		]
	}
};


var bone_set_1R = { // wave from the right
	next_time: 1.5,
	total_time: 4,
	bones: [
		[328, 176, 16, 128, -200],
		[344, 160, 16, 128, -200],
		[360, 144, 16, 128, -200],
		[376, 128, 16, 128, -200],
		[392, 128, 16, 128, -200],
		[408, 128, 16, 128, -200],
		[424, 128, 16, 128, -200],
		[440, 128, 16, 128, -200],
	],
	next_bone_sets: [
		"1L", "2L", "2R", "3", "4A", "5A", "6L"
	],
};

var bone_set_1L = { // wave from the left
	next_time: 1.5,
	total_time: 4,
	bones: [
		[-8, 176, 16, 128, 200],
		[-24, 160, 16, 128, 200],
		[-40, 144, 16, 128, 200],
		[-56, 128, 16, 128, 200],
		[-72, 128, 16, 128, 200],
		[-88, 128, 16, 128, 200],
		[-104, 128, 16, 128, 200],
		[-120, 128, 16, 128, 200],
	],
	next_bone_sets: [
		"1R", "2L", "2R", "3", "4A", "5A", "6R"
	],
};

var bone_set_2R = { // 2R
	next_time: 6,
	total_time: 8,
	bones: [
		[340, 168, 16, 128, -100],
		[420, 168, 16, 128, -100],
		[500, 168, 16, 128, -100],
		[580, 168, 16, 128, -100],
		[660, 168, 16, 128, -100],
		[740, 168, 16, 128, -100],

		[-20, 40, 16, 128, 100],
		[-100, 40, 16, 128, 100],
		[-180, 40, 16, 128, 100],
		[-260, 40, 16, 128, 100],
		[-340, 40, 16, 128, 100],
		[-420, 40, 16, 128, 100],
	],
	next_bone_sets: [
		"1R", "3", "6R"
	],
};

var bone_set_2L = { // 2L
	next_time: 6,
	total_time: 8,
	bones: [
		[340, 40, 16, 128, -100],
		[420, 40, 16, 128, -100],
		[500, 40, 16, 128, -100],
		[580, 40, 16, 128, -100],
		[660, 40, 16, 128, -100],
		[740, 40, 16, 128, -100],

		[-20, 168, 16, 128, 100],
		[-100, 168, 16, 128, 100],
		[-180, 168, 16, 128, 100],
		[-260, 168, 16, 128, 100],
		[-340, 168, 16, 128, 100],
		[-420, 168, 16, 128, 100],
	],
	next_bone_sets: [
		"1L", "3", "6L"
	],
};

var bone_set_3 = { // 3
	next_time: 0.8,
	total_time: 1,
	bones: [
		[328, 168, 16, 128, -200],
		[344, 168, 16, 128, -200],
		[360, 168, 16, 128, -200],
		[376, 168, 16, 128, -200],
		[392, 80, 16, 128, -200],
		[408, 80, 16, 128, -200],

		[-8, 168, 16, 128, 200],
		[-24, 168, 16, 128, 200],
		[-40, 168, 16, 128, 200],
		[-56, 168, 16, 128, 200],
		[-72, 80, 16, 128, 200],
		[-88, 80, 16, 128, 200],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R", "4A", "5A", "6L", "6R",
	],
};




// one-sided hurdles

var bone_set_4A = {
	next_time: 0.8,
	total_time: 2.5,
	bones: [
		[328, 168, 16, 128, -160],
		[328, 24, 16, 128, -160],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3"
	],
};

var bone_set_4B1 = {
	next_time: 1.0,
	total_time: 2.5,
	bones: [
		[328, 152, 16, 128, -160],
		[328, 8, 16, 128, -160],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3", "4C"
	],
};

var bone_set_4B2 = {
	next_time: 1.2,
	total_time: 3.0,
	bones: [
		[328, 136, 16, 128, -135],
		[328, -8, 16, 128, -135],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3", "4C"
	],
};

var bone_set_4B3 = {
	next_time: 1.4,
	total_time: 3.5,
	bones: [
		[328, 120, 16, 128, -115],
		[328, -24, 16, 128, -115],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3", "4C"
	],
};

var bone_set_4C = {
	next_time: 0.6,
	total_time: 2.5,
	bones: [
		[328, 168, 16, 128, -240],
		[328, 24, 16, 128, -240],
	],
	if (document.getElementById("game_settings_other").value.includes("only_hurdles") {
		next_bone_sets: [
		"5A"
		]
	} else {
		next_bone_sets: [
		"1R"
		],
	}
};




var bone_set_5A = {
	next_time: 1.4,
	total_time: 2.5,
	bones: [
		[-8, 168, 16, 128, 160],
		[-8, 24, 16, 128, 160],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3"
	],
};

var bone_set_5B1 = {
	next_time: 1.0,
	total_time: 2.5,
	bones: [
		[-8, 152, 16, 128, 160],
		[-8, 8, 16, 128, 160],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3", "5C"
	],
};

var bone_set_5B2 = {
	next_time: 1.2,
	total_time: 3.0,
	bones: [
		[-8, 136, 16, 128, 135],
		[-8, -8, 16, 128, 135],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3", "5C"
	],
};

var bone_set_5B3 = {
	next_time: 1.4,
	total_time: 3.5,
	bones: [
		[-8, 120, 16, 128, 115],
		[-8, -24, 16, 128, 115],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3", "5C"
	],
};

var bone_set_5C = {
	next_time: 0.6,
	total_time: 2.5,
	bones: [
		[-8, 168, 16, 128, 240],
		[-8, 24, 16, 128, 240],
	],
	if (document.getElementById("game_settings_other").value.includes("only_hurdles") {
		next_bone_sets: [
		"4A"
		]
	} else {
		next_bone_sets: [
		"1L"
		],
	}
};



var bone_set_6R = {
	next_time: 0.8,
	total_time: 3.0,
	bones: [
		[-88, 168, 16, 128, 240],
		[-8, 96, 16, 128, 240, "blue"],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R",
		"6L", "6R", "6L", "6R", "6L", "6R", "6L", "6R"
	],
};


var bone_set_6L = {
	next_time: 0.8,
	total_time: 3.0,
	bones: [
		[408, 168, 16, 128, -240],
		[328, 96, 16, 128, -240, "blue"],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R",
		"6L", "6R", "6L", "6R", "6L", "6R", "6L", "6R"
	],
};





var bone_sets = {
	"1R": bone_set_1R,
	"1L": bone_set_1L,
	"2R": bone_set_2R,
	"2L": bone_set_2L,
	"3": bone_set_3,
	"4A": bone_set_4A,
	"4B1": bone_set_4B1,
	"4B2": bone_set_4B2,
	"4B3": bone_set_4B3,
	"4C": bone_set_4C,
	"5A": bone_set_5A,
	"5B1": bone_set_5B1,
	"5B2": bone_set_5B2,
	"5B3": bone_set_5B3,
	"5C": bone_set_5C,
	"6L": bone_set_6L,
	"6R": bone_set_6R,
}
