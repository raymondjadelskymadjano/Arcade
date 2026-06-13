/* ========================================== */
/* 🎨 RESET & CONSTANTES                      */
/* ========================================== */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0f111a;
    color: #f1f3f9;
    text-align: center;
    padding: 20px;
    min-height: 100vh;
}

/* Système d'affichage (Single Page) */
.hidden {
    display: none !important;
}

/* ========================================== */
/* 🎯 EN-TÊTE & BOUTONS GÉNÉRAUX              */
/* ========================================== */
header {
    margin-bottom: 30px;
}

header h1 {
    color: #00f2fe;
    text-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
    font-size: 2.5rem;
    margin-bottom: 8px;
}

header p {
    color: #8a99ad;
}

.back-btn, .action-btn, .play-btn {
    background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
    color: #0f111a;
    border: none;
    padding: 12px 24px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    font-size: 1rem;
}

.back-btn {
    background: #1f2335;
    color: #00f2fe;
    border: 1px solid #00f2fe;
    margin-top: 15px;
}

.back-btn:hover, .action-btn:hover, .play-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
}

/* ========================================== */
/* 🏠 LE HUB CENTRAL (CARTES DE JEUX)        */
/* ========================================== */
.game-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.game-card {
    background-color: #1a1d2e;
    border: 2px solid #282e4e;
    border-radius: 14px;
    padding: 25px;
    width: 280px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.game-card h3 {
    color: #ff007f;
    font-size: 1.4rem;
}

.game-card p {
    font-size: 0.95rem;
    color: #a0aec0;
    line-height: 1.4;
}

/* ========================================== */
/* 🕹️ CONTENEURS DES ÉCRANS DE JEU            */
/* ========================================== */
.game-screen {
    background-color: #161925;
    border: 2px solid #00f2fe;
    border-radius: 20px;
    max-width: 500px;
    margin: 20px auto;
    padding: 30px;
    box-shadow: 0 0 25px rgba(0, 242, 254, 0.2);
}

.game-screen h2 {
    color: #ff007f;
    margin-bottom: 20px;
    font-size: 2rem;
}

/* ========================================== */
/* ❌ 1. STYLE DU MORPION                     */
/* ========================================== */
.grid-3x3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: 300px;
    margin: 20px auto;
}

.cell {
    background-color: #1f2335;
    aspect-ratio: 1;
    border-radius: 8px;
    border: 2px solid #282e4e;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;
}

.cell:hover:not(.taken) {
    background-color: #282e4e;
}

.cell.taken {
    cursor: not-allowed;
    background-color: #161925;
}

#morpion-status {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #00f2fe;
}

/* ========================================== */
/* 🧠 2. STYLE DU QUIZ                        */
/* ========================================== */
.quiz-box {
    margin-top: 15px;
}

#quiz-question {
    font-size: 1.25rem;
    margin-bottom: 20px;
    line-height: 1.4;
}

.options-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.quiz-btn {
    background-color: #1f2335;
    color: #f1f3f9;
    border: 1px solid #282e4e;
    padding: 14px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    padding-left: 20px;
    transition: background-color 0.2s, border-color 0.2s;
}

.quiz-btn:hover {
    background-color: #282e4e;
    border-color: #00f2fe;
}

#quiz-score {
    margin-top: 20px;
    font-weight: bold;
    color: #00f2fe;
}

/* ========================================== */
/* 🃏 3. STYLE DES CARTES (MEMORY)            */
/* ========================================== */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-width: 400px;
    margin: 20px auto;
}

.card {
    background-color: #ff007f;
    aspect-ratio: 1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: transparent; /* Masque l'émoji par défaut */
    user-select: none;
    transition: background-color 0.3s, transform 0.3s;
}

.card.flipped {
    background-color: #1f2335;
    color: initial; /* Affiche l'émoji */
    border: 2px solid #ff007f;
    transform: rotateY(180deg);
}

.card.matched {
    background-color: #0f111a;
    border: 2px solid #00f2fe;
    color: initial;
    opacity: 0.6;
    cursor: not-allowed;
}

/* ========================================== */
/* 🔢 4. STYLE DE LA LOGIQUE                  */
/* ========================================== */
.form-container input {
    background-color: #1f2335;
    border: 2px solid #282e4e;
    color: #fff;
    padding: 12px;
    border-radius: 8px;
    font-size: 1.2rem;
    width: 80%;
    text-align: center;
    margin-bottom: 15px;
    outline: none;
}

.form-container input:focus {
    border-color: #00f2fe;
}

#logic-feedback {
    margin-top: 15px;
    font-size: 1.1rem;
    color: #8a99ad;
}

/* ========================================== */
/* 🕹️ 5. STYLE DE L'ARCADE (CLICKER)          */
/* ========================================== */
.stats-bar {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.1rem;
    color: #00f2fe;
    margin-bottom: 15px;
}

.game-zone {
    background-color: #0f111a;
    border: 2px dashed #282e4e;
    height: 250px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

#arcade-target {
    position: absolute;
    top: 40%;
    left: 40%;
    background-color: #ff007f;
    color: white;
    border: none;
    padding: 10px 15px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 0, 127, 0.5);
}

/* ========================================== */
/* 📱 ADAPTATION MOBILE                       */
/* ========================================== */
@media (max-width: 480px) {
    body {
        padding: 10px;
    }
    header h1 {
        font-size: 1.8rem;
    }
    .game-screen {
        padding: 15px;
    }
    .cards-grid {
        grid-template-columns: repeat(3, 1fr); /* Ajustement pour petits écrans */
    }
}