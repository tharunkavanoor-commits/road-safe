const $=(s,e=document)=>e.querySelector(s), $$=(s,e=document)=>[...e.querySelectorAll(s)];

/* Source: MoRTH "Road Accidents in India 2023" (published 2025) */
const STATS=[
 ["4.80 lakh","road accidents in India in 2023 (4,80,583)","🚗"],
 ["1.73 lakh","people killed, about 474 every day (1,72,890)","💔"],
 ["67,213","accidents in Tamil Nadu, the highest of any state (14% of India)","📍"],
 ["#2","Tamil Nadu ranks second for deaths, with 10.6% of the national total","⚠️"],
];
const CAUSES=[
 ["Over-speeding",68.1,"#e63946"],
 ["No helmet (two-wheeler riders)",31.6,"#ff8a00"],
 ["No seat belt",9.3,"#7b2ff7"],
 ["Drink, red light, mobile phone",4.3,"#3a86ff"],
 ["Potholes",1.3,"#00b8a9"],
];
const RULES=[
 ["🪖","Helmet (rider and pillion)","Wear a BIS-marked helmet with the strap fastened. It cuts the risk of death in a crash sharply.","₹1,000 + 3-month licence ban"],
 ["💺","Seat belt","Mandatory for driver and every passenger, in front and back seats.","₹1,000"],
 ["🍺","Drink and drive","Legal limit is 30 mg alcohol per 100 ml blood. Section 185, Motor Vehicles Act.","₹10,000 and/or 6 months jail"],
 ["🔁","Repeat drink driving","A second offence within three years is punished more heavily.","₹15,000 and/or 2 years jail"],
 ["📵","Mobile phone while driving","Do not hold or text. Use a hands-free mount for maps only.","Up to ₹5,000"],
 ["⚡","Over-speeding","Obey posted limits. Speed causes 68% of road deaths.","₹1,000–2,000"],
 ["🏍️","Triple riding","Only the rider and one pillion are allowed on a two-wheeler.","₹1,000 + licence ban"],
 ["🪪","No driving licence","Carry your licence, RC, insurance and PUC. Digital copies in DigiLocker or mParivahan are valid.","₹5,000"],
 ["🛡️","No insurance","Third-party insurance is compulsory for every vehicle.","₹2,000"],
 ["🚑","Blocking an ambulance","Move left and give way to ambulances, fire engines and police.","₹10,000"],
 ["🚔","Disobeying traffic police","Follow the signals and hand directions of the police on duty.","₹2,000"],
 ["👦","Driving under 18","The owner or guardian is held responsible.","₹25,000 + up to 3 years jail"],
 ["↖️","Keep left","India drives on the left. Overtake only from the right.","Challan + crash risk"],
];
const CONTACTS=[
 ["🚨","All emergencies (Police, Fire, Ambulance)","Works on any phone","112","112","k1"],
 ["🚑","Ambulance (Tamil Nadu 108)","Free, 24×7","108","108","k2"],
 ["🚓","Police","Report an accident","100","100","k3"],
 ["🚒","Fire and Rescue","Vehicle fire, trapped","101","101","k1"],
 ["🏥","Ambulance (national)","Patient transport","102","102","k2"],
 ["🛣️","NHAI highway helpline","Breakdown, accident on NH","1033","1033","k4"],
 ["🩺","Tamil Nadu health helpline","Medical advice","104","104","k5"],
 ["🌊","Disaster management","Floods, cyclone, rescue","1070","1070","k5"],
 ["👩","Women helpline","Safety and abuse","1091","1091","k6"],
 ["🧒","Childline","Child in distress","1098","1098","k6"],
];
const STEPS=[
 ["Stop and stay safe","Park clear of traffic, switch on hazard lights and keep to the left."],
 ["Call 112 or 108","Say the place, a landmark or highway KM stone, and how many are hurt."],
 ["Do not move the injured","Move them only if there is fire or danger. Moving them can damage the spine."],
 ["Stop the bleeding","Press a clean cloth firmly on the wound. Do not pull out embedded objects."],
 ["Stay with them","Keep them warm, calm and talking until help arrives."],
 ["You are protected","Good Samaritan rules (Section 134A) mean you cannot be forced to pay, stay or give your name."],
];
const TIPS={
 "Two-wheeler":["Wear a BIS helmet and fasten the strap. Insist your pillion does too.","Keep the headlight on in daytime to be seen by lorries and buses.","Stay out of a truck's blind spot. If you cannot see its mirror, it cannot see you.","Wear bright or reflective clothing at night.","Slow down on wet roads, oil patches and potholes, especially in the Northeast monsoon."],
 "Car and bus":["Fasten seat belts in every seat and use child seats for small children.","Keep a 3-second gap from the vehicle ahead. Double it in rain.","Check mirrors and the blind spot before changing lane.","Never drive after drinking or when sleepy. Rest every 2 hours on long trips.","Dip headlights for oncoming traffic on ghat roads and highways."],
 "Pedestrian":["Cross only at zebra crossings or signals. Look right, left, then right again.","Do not use a phone or earphones while crossing.","Walk facing traffic where there is no footpath.","Wear light colours at night and carry a torch on unlit village roads.","Hold children's hands near roads, bus stops and school gates."],
 "Highway":["Slow vehicles keep left. Overtake on the right only when the road is clear.","Watch for stray cattle, tractors and unlit parked lorries after dark.","Never stop on the carriageway. Use the shoulder or service road.","Highways are under 5% of roads but cause over half of deaths. Respect the speed limit.","Call NHAI 1033 if you are stranded or see a crash."],
 "Festival and weather":["Expect heavy traffic and drunk drivers around Pongal, Deepavali and long weekends.","Avoid flooded underpasses. Even 30 cm of water can float a car.","In fog use low beam and fog lamps, never high beam.","Never overload a vehicle. Plan the return journey early instead of rushing.","Check tyres, brakes and lights before every long trip."],
};
const CHECK=["Helmet on and strap fastened","Seat belt on for everyone in the car","Licence, RC and insurance with me","Phone on silent and mounted, not in hand","I have not had any alcohol","Tyres, brakes and lights checked","I am rested and not in a hurry"];
const SIGNS=[
 ["prohibit","🚫","No entry","Prohibitory (red circle)","You must not go this way."],
 ["prohibit","🔇","No horn","Prohibitory (red circle)","Common near hospitals and schools."],
 ["mandatory","⬆️","Go straight","Mandatory (blue circle)","You must follow this direction."],
 ["mandatory","🚲","Cycle track","Mandatory (blue circle)","Reserved for cyclists."],
 ["warn","🐄","Cattle crossing","Warning (red triangle)","Slow down. Animals may be on the road."],
 ["warn","↪️","Sharp curve","Warning (red triangle)","Reduce speed before the bend."],
 ["warn","🚸","School ahead","Warning (red triangle)","Children may cross. Drive slowly."],
 ["warn","⚠️","Slippery road","Warning (red triangle)","Brake gently, avoid sudden turns."],
];

/* Render */
$("#stats").innerHTML=STATS.map(([n,t,e])=>`<div class="stat" data-e="${e}"><b>${n}</b><span>${t}</span></div>`).join("");
$("#causes").innerHTML=CAUSES.map(([n,v,c])=>`<li><span>${n}</span><span class="track"><span class="fill" data-w="${v}" style="background:${c}"></span></span><em>${v}%</em></li>`).join("");
$("#rules").innerHTML=RULES.map(([i,t,d,f])=>`<article class="card" data-k="${(t+" "+d).toLowerCase()}"><div class="ic">${i}</div><h3>${t}</h3><p>${d}</p><span class="fine">${f}</span></article>`).join("");
$("#contactList").innerHTML=CONTACTS.map(([i,n,s,show,dial,k])=>`<a class="call ${k}" href="tel:${dial}"><span class="ic">${i}</span><h3>${n}<small>${s}</small></h3><span class="num">${show}</span></a>`).join("");
$("#steps").innerHTML=STEPS.map(([t,d])=>`<li><b>${t}</b>${d}</li>`).join("");
$("#signList").innerHTML=SIGNS.map(([ty,sy,n,k,d])=>`<article class="card sign"><div class="shape ${ty} ${ty==="warn"?"":"round"}">${ty==="warn"?`<span>${sy}</span>`:sy}</div><h3>${n}</h3><span class="kind">${k}</span><p>${d}</p></article>`).join("");

/* Tips */
$("#tipFilters").innerHTML=["All",...Object.keys(TIPS)].map((c,i)=>`<button class="chip" data-c="${c}" aria-pressed="${i===0}">${c}</button>`).join("");
function tips(cat){const l=cat==="All"?Object.entries(TIPS):[[cat,TIPS[cat]]];
 $("#tipList").innerHTML=l.map(([k,v],i)=>`<details ${cat!=="All"||i===0?"open":""}><summary>${k}</summary><ul>${v.map(x=>`<li>${x}</li>`).join("")}</ul></details>`).join("")}
tips("All");
$("#tipFilters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;$$(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));tips(b.dataset.c)});

/* Checklist */
$("#checkList").innerHTML=CHECK.map((t,i)=>`<label class="check"><input type="checkbox"> ${t}</label>`).join("");
$("#checkList").addEventListener("change",()=>{const a=$$("#checkList input"),n=a.filter(x=>x.checked).length;
 $("#prog").style.width=n/a.length*100+"%";
 $("#score").textContent=n===a.length?"All set. Ride safe! 🎉":`${n} of ${a.length} done`});

/* Tabs */
function show(id,push=true){
 if(!$("#"+id))id="info";
 $$(".panel").forEach(p=>p.hidden=p.id!==id);
 $$(".tab").forEach(b=>b.setAttribute("aria-selected",b.dataset.tab===id));
 if(id==="info")requestAnimationFrame(()=>setTimeout(()=>$$(".fill").forEach(f=>f.style.width=f.dataset.w+"%"),60));
 if(push){try{history.replaceState(null,"","#"+id)}catch(e){}}
 window.scrollTo({top:0});
}
$$(".tab").forEach(b=>b.addEventListener("click",()=>show(b.dataset.tab)));
$$("[data-go]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();show(b.dataset.go)}));
show((location.hash||"").slice(1)||"info",false);

/* Rule search */
$("#ruleSearch").addEventListener("input",e=>{const q=e.target.value.trim().toLowerCase();let n=0;
 $$("#rules .card").forEach(c=>{const m=c.dataset.k.includes(q);c.hidden=!m;n+=m});$("#ruleEmpty").hidden=n>0});

/* Location */
function getLink(){const s=$("#locStatus");return new Promise(r=>{
 if(!navigator.geolocation){s.textContent="Location is not available on this device.";return r(null)}
 s.textContent="Finding your location…";
 navigator.geolocation.getCurrentPosition(p=>{s.textContent="Location found.";r(`https://maps.google.com/?q=${p.coords.latitude},${p.coords.longitude}`)},
 ()=>{s.textContent="Could not get location. Turn on GPS and allow location access.";r(null)},{enableHighAccuracy:true,timeout:12000})})}
$("#shareLoc").addEventListener("click",async()=>{const l=await getLink();if(l)window.open("https://wa.me/?text="+encodeURIComponent("I need help. My location: "+l),"_blank","noopener")});
$("#copyLoc").addEventListener("click",async()=>{const l=await getLink();if(!l)return;
 try{await navigator.clipboard.writeText(l);$("#locStatus").textContent="Link copied. Paste it into any message."}catch(e){$("#locStatus").textContent="Your link: "+l}});
