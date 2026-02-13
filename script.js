
        // Actualizar año actual
        console.log("el script funciona");
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Efecto de escritura para el nombre
        const nameElement = document.getElementById('name');
        const originalName = "Ivan Bonilla";
        let i = 0;
        
        function typeWriter() {
            if (i < originalName.length) {
                nameElement.innerHTML = originalName.substring(0, i+1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(typeWriter, 100);
            } else {
                nameElement.innerHTML = originalName + ' <span class="cursor blink">|</span>';
            }
        }
        
        // Iniciar después de 1 segundo
        setTimeout(typeWriter, 1000);
        
        // Añadir estilos para cursor
        const style = document.createElement('style');
        style.textContent = `
            .cursor { color: black; }
            .blink { animation: blink 1s infinite; }
            @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        `;
        document.head.appendChild(style);
        
        // Efecto scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        // Revelar proyectos cuando el usuario hace scroll hasta esa sección (UX: contenido que se revela al bajar)
        const projectsList = document.getElementById('projects-list');
        if (projectsList) {
            const observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                },
                { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
            );
            observer.observe(projectsList);
        }
   