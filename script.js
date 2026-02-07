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
            
            
            card.innerHTML = `
                <img src="${e.target.result}">
                <div class="caption">Our Memory</div>
            `;
            gallery.appendChild(card);
        }
        reader.readAsDataURL(file);
    }
}
