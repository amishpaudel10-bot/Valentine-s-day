function loadPhotos(files) {
    const gallery = document.getElementById('boutique-gallery');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const card = document.createElement('div');
            card.className = 'memory-card';
            // Random rotation for the polaroid effect
            const randomRot = (Math.random() * 6 - 3).toFixed(1);
            card.style.setProperty('--r', `${randomRot}deg`);
            function sendLoveMessage() {
    // Get the text from your input/textarea
    const userMsg = document.getElementById('naimaMsg').value;

    // Check if it's empty to prevent blank messages
    if (!userMsg.trim()) {
        alert("Please write something first! ❤️");
        return;
    }

    // Mobile Vibration (Haptic feedback)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }

    // Your WhatsApp Number
    const myNumber = "9767757067";

    // Create the encoded URL
    const finalUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent("💌 Naima: " + userMsg)}`;

    // Open WhatsApp in a new tab/app
    window.open(finalUrl, '_blank');
            }
            
            card.innerHTML = `
                <img src="${e.target.result}">
                <div class="caption">Our Memory</div>
            `;
            gallery.appendChild(card);
        }
        reader.readAsDataURL(file);
    }
}
