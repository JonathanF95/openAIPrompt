const display = document.getElementById('display');
const input = document.getElementById('input');
const button = document.getElementById('button');

const apiKey = 'private';

button.addEventListener('click', () => {
    const prompt = `Translate the following English text to French: '${input.value}'`;

    axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 60,
        temperature: 0.5,
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        display.innerText = response.data.choices[0].text.trim();
    })
    .catch(error => {
        console.error('An error occurred:', error);
        display.innerText = 'An error occurred. Please try again.';
    });
});