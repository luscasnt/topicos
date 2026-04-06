function action(element, url) {
    const text = element.innerText;
    
    // Esconde o link original para a animação
    element.style.visibility = 'hidden';
    
    const container = element.parentElement;
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = `
        position: absolute;
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 8px;
        top: ${element.offsetTop}px;
        left: ${element.offsetLeft}px;
        pointer-events: none;
    `;
    container.appendChild(tempDiv);

    const spans = [...text].map(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.className = 'particle';
        span.style.color = "#0abde3";
        tempDiv.appendChild(span);
        return span;
    });

    setTimeout(() => {
        spans.forEach((span) => {
            const moveX = (Math.random() - 0.5) * 1000;
            const moveY = (Math.random() - 0.5) * 1000;
            const rotate = (Math.random() - 0.5) * 1000;
            span.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(0)`;
            span.style.opacity = '0';
            span.style.filter = 'blur(15px)';
        });
        
        setTimeout(() => { 
            location.reload(); 
        }, 900);
    }, 50);
}