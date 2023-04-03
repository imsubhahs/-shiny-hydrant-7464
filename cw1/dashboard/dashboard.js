const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
// let logbtn = document.getElementsByClassName("logout");
// logbtn.addEventListener("click",()=>{

// })
//rendring data---------------------------------------------------------------------------------------------------------------------------
let fullTotal = 0;
let fullexp = 0;

fetch("https://wooomapi.onrender.com/womensdata")
	// fetch("https://mensdataa.onrender.com/mensdata")
	.then((res) => {
		return res.json();
	})
	.then((ans) => {
		sum(ans)
		totalproduct(ans)
	})

let totalinvest = document.getElementById("totalinvest")

function sum(data) {
	let s = 0;
	data.map((Element) => {
		s += Element.Price;
		// console.log(typeof Element.Price)
	})
	fullexp = s;
	// totalinvest.append(s)
	console.log(fullexp)
}

// let totalproduct=document.getElementById("totalproduct");


function totalproduct(data) {
	let count1 = 0;
	for (let i = 0; i < data.length; i++) {
		count1++;
	}
	fullTotal = count1;
	console.log(fullTotal)
	// totalproduct.append(count);

}


//---------------------womensdatafetch--------------------------------------------------------------------
fetch("https://mensdataa.onrender.com/mensdata")
	.then((res) => {
		return res.json();
	})
	.then((ans) => {
		ss(ans)
		totalwomensproduct(ans)
	})

function totalwomensproduct(data) {
	let count2 = 0;
	for (let i = 0; i < data.length; i++) {
		count2++;
	}

	fullTotal += count2;
	console.log(fullTotal)
	let totalproduct = document.getElementById("totalproduct");
	totalproduct.append(fullTotal);

}

function ss(data) {
	let sss = 0;
	data.map((Element) => {
		sss += Element.Price;
		// console.log(typeof Element.Price)
	})
	console.log(sss)
	fullexp += sss;
	let totalprice = document.getElementById("totalinvest");
	totalprice.append(fullexp)
	console.log(fullexp)
}
