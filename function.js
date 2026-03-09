// Existing code for other events...
document.getElementById("click").onclick = function() {
    this.innerHTML = "Clicked";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("dblclick").ondblclick = function() {
    this.innerHTML = "Double Clicked";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("auxclick").onauxclick = function() {
    this.innerHTML = "aux clicked";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("contextmenu").oncontextmenu = function(e) {
    e.preventDefault();
    this.innerHTML = "contextmenu clicked";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mousedown").onmousedown = function() {
    this.innerHTML = "Mouse Down";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mouseup").onmouseup = function() {
    this.innerHTML = "Mouse UP";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mousemove").onmousemove = function() {
    this.innerHTML = "Mouse Move";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mouseover").onmouseover = function() {
    this.innerHTML = "Mouse Over";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mouseout").onmouseout = function() {
    this.innerHTML = "Mouse out";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mouseenter").onmouseenter = function() {
    this.innerHTML = "Mouse Enter";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("mouseleave").onmouseleave = function() {
    this.innerHTML = "Mouse Leave";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("wheel").onwheel = function() {
    this.innerHTML = "Mouse Wheel";
    this.style.backgroundColor = "lightblue";
}

document.getElementById("keydowninput").addEventListener("keydown", function(event){
    document.getElementById("keydown").children[0].innerText = "keydown Triggered " + event.key;
    document.getElementById("keydown").style.backgroundColor = "lightblue";
});

document.getElementById("keyupinput").addEventListener("keyup", function(event){
    document.getElementById("keyup").children[0].innerText = "Keyup Triggered "+ event.key;
    document.getElementById("keyup").style.backgroundColor = "lightblue";
});

document.getElementById("keypressinput").addEventListener("keypress", function(event){
    document.getElementById("keypress").children[0].innerText = "Key Press Triggered "+ event.key;
    document.getElementById("keypress").style.backgroundColor = "lightblue";
});

document.getElementById("focusinput").addEventListener("focus", function(){
    document.getElementById("focus").children[0].innerText = "Focus Triggered ";
    document.getElementById("focus").style.backgroundColor = "lightblue";
});

document.getElementById("blurinput").addEventListener("blur", function(){
    document.getElementById("blur").children[0].innerText = "Blur Triggered ";
    document.getElementById("blur").style.backgroundColor = "lightblue";
});

document.getElementById("changeinput").addEventListener("change", function(event){
    document.getElementById("change").children[0].innerText = "Change Triggered "+event.target.value;
    document.getElementById("change").style.backgroundColor = "lightblue";
});

document.getElementById("inputinput").addEventListener("input", function(){
    document.getElementById("input").children[0].innerText = "input Triggered "+this.value;
    document.getElementById("input").style.backgroundColor = "lightblue";
});

// COPY EVENT
document.getElementById("copyText").addEventListener("copy", function(event){

    document.getElementById("copyBox").innerHTML =
    "Copy Event Triggered";

    document.getElementById("copyBox").style.backgroundColor = "lightblue";

});


// CUT EVENT
document.getElementById("cutinput").addEventListener("cut", function(){
    document.getElementById("cut").children[0].innerText = "Cut Triggered";
    document.getElementById("cut").style.backgroundColor = "lightblue";
});


// PASTE EVENT
document.getElementById("pasteinput").addEventListener("paste", function(){
    document.getElementById("paste").children[0].innerText = "Paste Triggered";
    document.getElementById("paste").style.backgroundColor = "lightblue";
});


// SUBMIT EVENT
document.getElementById("formtest").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("submit").children[1].innerText = "Form Submitted";
    document.getElementById("submit").style.backgroundColor = "lightblue";
});


// SCROLL EVENT
document.getElementById("scrollbox").addEventListener("scroll", function(){
    document.getElementById("scroll").children[1].innerText = "Scrolling...";
    document.getElementById("scroll").style.backgroundColor = "lightblue";
});


// DRAG START
// must set transfer data for drop to be allowed in some browsers
document.getElementById("dragstart").addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text/plain", "dragging");
    this.innerText = "Dragging...";
    this.style.backgroundColor = "lightblue";
});


// DRAG OVER
document.getElementById("dragover").addEventListener("dragover", function(e){
    e.preventDefault();
    this.innerText = "Drag Over Detected";
    this.style.backgroundColor = "lightblue";
});


// DROP EVENT
// allow drop by preventing default during dragover
const dropEl = document.getElementById("drop");
dropEl.addEventListener("dragover", function(e){
    e.preventDefault();
});
dropEl.addEventListener("drop", function(e){
    e.preventDefault();
    this.innerText = "Dropped";
    this.style.backgroundColor = "lightblue";
});


// WINDOW RESIZE
window.addEventListener("resize", function(){
    document.getElementById("resize").innerText = "Window Resized";
    document.getElementById("resize").style.backgroundColor = "lightblue";
});

// SELECTION CHANGE
document.addEventListener("selectionchange", function(){
    document.getElementById("selectionchange").innerHTML = "Selection Changed";
    document.getElementById("selectionchange").style.backgroundColor="lightblue";
});


// VISIBILITY CHANGE
document.addEventListener("visibilitychange", function(){
    document.getElementById("visibilitychange").innerHTML="Tab Visibility Changed";
    document.getElementById("visibilitychange").style.backgroundColor="lightblue";
});





// POINTER DOWN
document.getElementById("pointerdown").addEventListener("pointerdown", function(){
    this.innerHTML="Pointer Down";
    this.style.backgroundColor="lightblue";
});


// POINTER UP
document.getElementById("pointerup").addEventListener("pointerup", function(){
    this.innerHTML="Pointer Up";
    this.style.backgroundColor="lightblue";
});




// getElementById
document.getElementById("getid").onclick=function(){
    let el=document.getElementById("getid");
    el.innerHTML="Element Selected";
    el.style.backgroundColor="lightblue";
};


// querySelector
document.getElementById("query").onclick=function(){
    let el=document.querySelector("#query");
    el.innerHTML="querySelector used";
    el.style.backgroundColor="lightblue";
};


// createElement
document.getElementById("create").onclick=function(){
    let newElement=document.createElement("p");
    newElement.innerText="New Element Created";
    this.appendChild(newElement);
    this.style.backgroundColor="lightblue";
};


// appendChild
document.getElementById("appendChildBtn").onclick=function(){
    let el=document.createElement("span");
    el.innerText=" Added";
    this.appendChild(el);
    this.style.backgroundColor="lightblue";
};


// remove
document.getElementById("remove").onclick=function(){
    this.innerHTML="Element Removed";
    this.style.backgroundColor="lightblue";
};


// replaceChild
document.getElementById("replace").onclick=function(){
    let newNode=document.createElement("b");
    newNode.innerText="Replaced";
    this.innerHTML="";
    this.appendChild(newNode);
    this.style.backgroundColor="lightblue";
};


// setAttribute
document.getElementById("setattr").onclick=function(){
    this.setAttribute("title","Attribute Added");
    this.innerHTML="Attribute Set";
    this.style.backgroundColor="lightblue";
};


// getAttribute
document.getElementById("getattr").onclick=function(){
    this.setAttribute("data-test","demo");
    let val=this.getAttribute("data-test");
    this.innerHTML="Attribute: "+val;
    this.style.backgroundColor="lightblue";
};


// innerHTML
document.getElementById("innerhtml").onclick=function(){
    this.innerHTML="<b>HTML Changed</b>";
    this.style.backgroundColor="lightblue";
};


// textContent
document.getElementById("textcontent").onclick=function(){
    this.textContent="Text Content Changed";
    this.style.backgroundColor="lightblue";
};

// classList
document.getElementById("classlist").onclick=function(){
    this.classList.add("highlight");
    this.innerHTML="classList used";
    this.style.backgroundColor="lightblue";
};


// add class
document.getElementById("addclass").onclick=function(){
    this.classList.add("highlight");
    this.innerHTML="Class Added";
    this.style.backgroundColor="lightblue";
};


// remove class
document.getElementById("removeclass").onclick=function(){
    this.classList.remove("highlight");
    this.innerHTML="Class Removed";
    this.style.backgroundColor="lightblue";
};


// toggle class
document.getElementById("toggleclass").onclick=function(){
    this.classList.toggle("highlight");
    this.innerHTML="Toggle Class";
    this.style.backgroundColor="lightblue";
};


// contains
document.getElementById("hasclass").onclick=function(){
    let result=this.classList.contains("highlight");
    this.innerHTML="Has class: "+result;
    this.style.backgroundColor="lightblue";
};



// children
document.getElementById("children").onclick=function(){
    let count=document.getElementById("functionTable").children.length;
    this.innerHTML="Children count: "+count;
    this.style.backgroundColor="lightblue";
};


// parent element
document.getElementById("parent").onclick=function(){
    let parent=this.parentElement.tagName;
    this.innerHTML="Parent: "+parent;
    this.style.backgroundColor="lightblue";
};


// first child
document.getElementById("firstchild").onclick=function(){
    let el=document.getElementById("functionTable").firstElementChild;
    this.innerHTML="First child: "+el.tagName;
    this.style.backgroundColor="lightblue";
};


// last child
document.getElementById("lastchild").onclick=function(){
    let el=document.getElementById("functionTable").lastElementChild;
    this.innerHTML="Last child: "+el.tagName;
    this.style.backgroundColor="lightblue";
};


// next sibling
document.getElementById("nextsibling").onclick=function(){
    let el=this.nextElementSibling;
    if(el){
        el.style.backgroundColor="lightblue";
    }
    this.style.backgroundColor="lightblue";
};


// previous sibling
document.getElementById("previoussibling").onclick=function(){
    let el=this.previousElementSibling;
    if(el){
        el.style.backgroundColor="lightblue";
    }
    this.style.backgroundColor="lightblue";
};


// clone node
document.getElementById("clone").onclick=function(){
    let clone=this.cloneNode(true);
    this.parentElement.appendChild(clone);
    this.style.backgroundColor="lightblue";
};


// insert before
document.getElementById("insertbefore").onclick=function(){
    let newEl=document.createElement("td");
    newEl.innerText="Inserted";
    this.parentElement.insertBefore(newEl,this);
    this.style.backgroundColor="lightblue";
};


// after
document.getElementById("after").onclick=function(){
    let el=document.createElement("span");
    el.innerText=" After Element";
    this.after(el);
    this.style.backgroundColor="lightblue";
};


// before
document.getElementById("before").onclick=function(){
    let el=document.createElement("span");
    el.innerText="Before Element ";
    this.before(el);
    this.style.backgroundColor="lightblue";
};

// querySelectorAll
document.getElementById("queryall").onclick=function(){
    let elements=document.querySelectorAll("td");
    this.innerHTML="Total TD: "+elements.length;
    this.style.backgroundColor="lightblue";
};


// closest
document.getElementById("closest").onclick=function(){
    let parent=this.closest("table");
    this.innerHTML="Closest: "+parent.tagName;
    this.style.backgroundColor="lightblue";
};


// matches
document.getElementById("matches").onclick=function(){
    let result=this.matches("#matches");
    this.innerHTML="Matches ID: "+result;
    this.style.backgroundColor="lightblue";
};


// dataset
document.getElementById("dataset").onclick=function(){
    this.dataset.test="Example";
    this.innerHTML="Dataset: "+this.dataset.test;
    this.style.backgroundColor="lightblue";
};


// removeChild
document.getElementById("removechild").onclick=function(){
    let parent=this.parentElement;
    parent.removeChild(this);
};



// replaceWith
document.getElementById("replacewith").onclick=function(){
    let newEl=document.createElement("td");
    newEl.innerText="Replaced Element";
    this.replaceWith(newEl);
};


// prepend
document.getElementById("prepend").onclick=function(){
    let el=document.createElement("span");
    el.innerText="Start ";
    this.prepend(el);
    this.style.backgroundColor="lightblue";
};


// append
document.getElementById("appendBtn").onclick=function(){
    let el=document.createElement("span");
    el.innerText=" End";
    this.append(el);
    this.style.backgroundColor="lightblue";
};


// scrollIntoView
document.getElementById("scrollview").onclick=function(){
    this.scrollIntoView({behavior:"smooth"});
    this.innerHTML="Scrolled";
    this.style.backgroundColor="lightblue";
};


// getBoundingClientRect
document.getElementById("rect").onclick=function(){
    let pos=this.getBoundingClientRect();
    this.innerHTML="Top:"+Math.round(pos.top);
    this.style.backgroundColor="lightblue";
};