Topic: Deploying a MERN app in Render.com

Steps for Backend deployment:

1. Click "Add new" button then "Web Service".
2. Source Code: Your github repo.
3. Name, Language: Will be assigned automatically.
4. Branch: This will be the branch that you want to deploy usually master/main.
5. Region: Select which ever you want and keep it the same as your frontend region which will ensure faster interaction between the two.
6. Directory: Mine is "backend" because this is where my backend code lies inside the master branch.
7. Build Command: npm install
8. Start Command: node server.js (server.js is the name of the file where I created the server if your server file's name is different you need to put that file's name instead of server.js)
9. Instance Type: Select the free one.
10. Environment Variables: Put your environment varibles if required.

Steps for Frontend deployment:

1. Click "Add new" button then "Static Site".
2. Source Code: Your github repo.
3. Name: Will be assigned automatically.
4. Branch: This will be the branch that you want to deploy usually master/main.
5. Directory: Mine is "frontend" because this is where my frontend code lies inside the master branch.
6. Build Command: npm install; npm run build
7. Publish Directory: dist (I used vite to create the frontend project so its "dist" directory)
8. Environment Variables: Put your environment varibles if required.
