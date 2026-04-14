// Open a modal by its ID
function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "flex";
}

// Close a modal by its ID
function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}

// Button click events
document.getElementById("ava_btn").onclick = function() {
    openModal("modal-avatar");
}

document.getElementById("clh_btn").onclick = function() {
    openModal("modal-clothes");
}

document.getElementById("hob_btn").onclick = function() {
    openModal("modal-hobbies");
}

document.getElementById("eve_btn").onclick = function() {
    openModal("modal-events");
}

// Close modal when clicking the dark background
document.getElementById("modal-avatar").onclick = function(e) {
    if (e.target == this) { closeModal("modal-avatar"); }
}

document.getElementById("modal-clothes").onclick = function(e) {
    if (e.target == this) { closeModal("modal-clothes"); }
}

document.getElementById("modal-hobbies").onclick = function(e) {
    if (e.target == this) { closeModal("modal-hobbies"); }
}

document.getElementById("modal-events").onclick = function(e) {
    if (e.target == this) { closeModal("modal-events"); }
}