const API_KEY = "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";
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");
const goal = document.getElementById("goal");
const ingredients = document.getElementById("ingredients");

async function getMessage() {
	var input = `Eres una app de nutricion llamada Happy Healthy Habits, necesitamos que sugieras una receta con el objetivo de ${goal.value} solo con los ingredientes que el cliente tiene disponibles en este momento: ${ingredients.value}, primero debes saludar al cliente y agradecerle por usar la app`;
	console.log(input);
	const options = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: input }],
		}),
	};
	try {
		const response = await fetch(
			"https://api.openai.com/v1/chat/completions",
			options
		);
		const data = await response.json();
		console.log(data);
		output.textContent = data.choices[0].message.content;
	} catch (error) {
		console.error(error);
	}
}

submitButton.addEventListener("click", getMessage);
