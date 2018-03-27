
function setup(){
	console.log('hello');
}
//https://api.instagram.com/v1/users/self/?access_token=ACCESS-TOKEN
//authentication url
//https://api.instagram.com/oauth/authorize/?client_id=cd74ab3c320846bf8e134e332d251906&redirect_uri=&response_type=code
//https://api.instagram.com/v1/users/{user-id}/?access_token=ACCESS-TOKEN
//CLIENT ID
//	cd74ab3c320846bf8e134e332d251906
let client_id = 'cd74ab3c320846bf8e134e332d251906';
console.log(client_id);
function _(x){
	return document.getElementById(x);
}	

const ACCESS_TOKEN = window.location.hash.substring(1);	
console.log(ACCESS_TOKEN);
// https://www.instagram.com/charbelsako/?__a=1
const username = 'charbelsako';
console.log(username)
let id;
$.ajax({
	type: "GET",
	dataType: "json",
	url: "https://api.instagram.com/"+username+"/?__a=1",
	success: function(data) {
		console.log(data.graphql.user.id)
		id = data.graphql.user.id;
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "https://api.instagram.com/v1/users/"+id+"/?"+ACCESS_TOKEN,
			success: function(data) {
				//console.log(data)
				$('#followers').append(data.data.counts.followed_by);
				$('#following').append(data.data.counts.follows)
				$('#posts').append(data.data.counts.media)

				$('#username').append(data.data.username)
				$('#pp').attr('src', data.data.profile_picture) 
				$('#name').append(data.data.full_name)
				$('#bio').append(data.data.bio)
			}
		});
	}
  });






// $.ajax({
// 	type: "GET",
// 	dataType: "jsonp",
// 	cache: false,
// 	url: "https://api.instagram.com/v1/users/self/?"+ACCESS_TOKEN,
// 	success: function(data) {
// 	  console.log(data);
// 	  $('#followers').append(data.data.counts.followed_by);
// 	  $('#following').append(data.data.counts.follows)
// 	  $('#posts').append(data.data.counts.media)

// 	  $('#username').append(data.data.username)
// 	  $('#pp').attr('src', data.data.profile_picture) 
// 	  $('#name').append(data.data.full_name)
// 	  $('#bio').append(data.data.bio)
// 	  //now you can query for that users info
// 	}
//   });
