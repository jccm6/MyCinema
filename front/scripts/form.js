    document.getElementById('formMovie').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Convierte el género de string a array
        data.genre = data.genre.split(',').map(genre => genre.trim());

        try {
            const response = await fetch('https://henry-cinema.onrender.com/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                this.reset();
            } else {
                throw new Error('Algo salió mal al enviar el formulario');
            }
        } catch (error) {
            alert(error.message);
        }
    });
