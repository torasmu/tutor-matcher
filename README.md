# Start local dev server
```
netlify dev
```

# Troubleshooting
- I get 'Failed to load settings from https://tutor-matcher.netlify.com/.netlify/identity' when trying to login
  - Go to netlify.com, navigate to your site, go to the Identity tab, and make sure it is Enabled
  - If this is for localhost dev, you may need to reset the site URL that's being accessed. In Chrome, while in the tab with the error, access devtools by right clicking > Inspect, go to the application tab, go to Local Storage, and delete the netlifySiteURL. It will ask you for a new one next time you start up, follow the directions at https://github.com/netlify/netlify-identity-widget (as of writing you should enter something like https://tutor-matcher.netlify.app)
