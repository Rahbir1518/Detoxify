# 🌀 Detoxify — Beat the Doomscroll

**Detoxify** is a full-stack web application paired with a Chrome extension that helps you track and reduce doomscrolling habits. Compete with friends, send playful nudges, and lock yourself out of social media when you need a break.

---

## 🌟 Features

- 📈 **Scroll Tracking**
  - Custom Chrome extension logs scroll distance on social platforms.

- 🏆 **Leaderboard System**
  - See who scrolls the most (or least) among your friends.

- 🗯️ **Poke a Doomscroller**
  - Send fun, personalized messages to friends topping the doomscroll charts.

- ⏲️ **Lockout Timer**
  - Set timers to block social media when you need to focus or unplug.

- 👥 **Friends System**
  - Add friends, compare progress, and support each other’s digital detox.

---

## ⚙️ Tech Stack

| Frontend     | Backend     | Database     | Extension       | Styling        |
| ------------ | ----------- | ------------ | --------------- | -------------- |
| React.js     | Flask (Python) | PostgreSQL | JavaScript (Chrome APIs) | TailwindCSS     |
| React Router | RESTful API |              |                 |                |

---

## 📦 Setup & Installation

### 🖥️ Frontend
```bash
cd frontend
npm install
npm run dev

````
### 🔙 Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run
````
## 🧩 Chrome Extension Setup

1. **Open Google Chrome** and navigate to `chrome://extensions`
2. **Enable Developer Mode**
3. **Click "Load unpacked"**
4. **Select the `extension` folder** from the project directory


## 🧭 Project Structure
``` bash
/frontend         -> React frontend (login, leaderboard, dashboard)
/backend          -> Flask server and APIs
/extension        -> Chrome extension (scroll tracking)
/database         -> SQL setup and models (PostgreSQL)
/assets           -> Images and static assets

```
## 📅 Roadmap

- [ ] OAuth (Google/Facebook) authentication
- [ ] In-browser alert system from the extension
- [ ] Daily/weekly scroll activity reports
- [ ] Group challenges & reward system
- [ ] Mobile app version
- [ ] Dark mode toggle

## 🖼️ Screenshots
Coming soon! Including Chrome extension demo, login UI, leaderboard mockups.

## 🤝 Contributing
We welcome all contributions!

Fork the repo
Create your feature branch
```bash
git checkout -b feature/your-feature-name
```
Commit your changes
```bash
git commit -m "Add your message"
```
Push to the branch
```bash
git push origin feature/your-feature-name
```
Open a Pull Request 🎉
📄 License
MIT License © 2025
