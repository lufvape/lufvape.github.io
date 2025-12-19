# Quiz — Baserow integration & persistence

This project stores quiz participant info (`email`, `company`) and the computed creativity result in a Baserow table. The front-end includes a pre-quiz form; when a user submits an email the app will check Baserow for an existing row and, if found, show the saved results instead of running the quiz again.

Quick setup

- Create a Baserow base and add a table with at least these fields (use *user field names*):
  - `email` (text)
  - `company` (text)
  - `creativity_type` (text)
  - `creativity_scores` (text)
  - `system_scores` (text)
- Obtain an API token from your Baserow account.
- Obtain the table ID (numeric) from the table settings or URL.
- Edit `quiz-core.js` and set the constants `BASEROW_API_TOKEN` and `BASEROW_TABLE_ID`.

Example (in `quiz-core.js`):

```js
const BASEROW_API_TOKEN = 'your_real_token_here';
const BASEROW_TABLE_ID = '12345';
```

How persistence works

- On pre-quiz submit the client calls Baserow and searches for a row with a matching `email`.
- If a row is found the front-end displays the stored `creativity_type` (and description) immediately instead of running the quiz.
- If no row exists the quiz proceeds as normal and, when finished, the client posts a new row to Baserow containing `email`, `company`, `creativity_type`, and scored JSON in `creativity_scores` and `system_scores`.

Security & production notes

- The current implementation performs Baserow API calls from client-side JavaScript. This requires embedding an API token in the site and is convenient for rapid testing, but the token is visible to anyone with browser devtools.
- Recommended production option: implement a small server-side proxy (an endpoint) that holds the token and forwards requests to Baserow. The client calls your server endpoint to look up or save rows; this keeps the API token secret.

Testing locally

1. Configure `quiz-core.js` with your token and table id.
2. Open `quiz.html` (Spanish) or `quizen.html` (English) in the browser.
3. Enter an email and company. If the email already exists in your Baserow table you should see the results screen immediately.
4. If not, complete the quiz and on the results screen check the browser console for a successful POST and verify the new row in Baserow.

Troubleshooting

- CORS: Baserow supports browser requests. If you see CORS errors, verify your browser/network and consider using a server proxy.
- Field names: the client sends rows with user-field names: `email`, `company`, `creativity_type`, `creativity_scores`, `system_scores`. Make sure your table uses these names or adjust the payload.

Want help?

- I can implement a secure server proxy for Baserow (Node/Express or serverless) so tokens aren't exposed.
- I can also make the field names configurable or add client-side fallbacks.
