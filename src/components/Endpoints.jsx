import React from "react";

const Endpoints = () => {
  return (
    <section id="endpoints">
      <h2>Endpoints</h2>
      
      <h3>Generate Book</h3>
      <p>
        <span className="http-method">POST</span>
        <span className="endpoint">/api/generate-book</span>
      </p>

      <h4>Request Body</h4>

      {/* Table */}
      <table className="parameter-table">
        <tbody>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>api</td>
            <td>string</td>
            <td>The API provider to use. Options: "openai" or "together"</td>
          </tr>
          <tr>
            <td>model</td>
            <td>string</td>
            <td>
              The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
              "llama-2-70b")
            </td>
          </tr>
          <tr>
            <td>topic</td>
            <td>string</td>
            <td>The main topic or theme of the book</td>
          </tr>
          <tr>
            <td>language</td>
            <td>string</td>
            <td>The language in which the book should be generated</td>
          </tr>
          <tr>
            <td>word_count</td>
            <td>integer</td>
            <td>The approximate number of words for the generated book</td>
          </tr>
        </tbody>
      </table>

      <h4>Response</h4>
      <pre>
        <code>
          {`{
  "message": "Book generation started", 
  "status": "processing",
  "job_id": "unique-job-identifier"
}`}
        </code>
      </pre>
    </section>
  );
};

export default Endpoints;
