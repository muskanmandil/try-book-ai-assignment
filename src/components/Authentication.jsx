import React from "react";

const Authentication = () => {
  const generateApiKey = () => {
    fetch("/generate-api-key", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const apiKeyDisplay = document.getElementById("apiKeyDisplay");
        apiKeyDisplay.innerHTML = `Your API Key: <strong>${data.api_key}</strong>`;
        apiKeyDisplay.style.opacity = "0";
        setTimeout(() => {
          apiKeyDisplay.style.opacity = "1";
        }, 100);
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("apiKeyDisplay").innerHTML =
          "Error generating API key";
      });
  };

  return (
    <section id="authentication">
      <h2>Authentication</h2>
      <p>
        To use the API, you need to include your API key in the header of each
        request:
      </p>
      <pre>
        <code>X-API-Key: YOUR_API_KEY</code>
      </pre>
      <p>To generate an API key, use the button below:</p>
      <button id="generateApiKey" onClick={generateApiKey}>
        Generate API Key
      </button>
      <div id="apiKeyDisplay"></div>
    </section>
  );
};

export default Authentication;
