import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-card">
                <div className="header">
                    <div className="profile-container">
                        <div className="profile-pic">
                        <img src="../public/pp1.png" />
                        </div>
                        <p className="user-name">nome aleatório</p>
                    </div>
                    <div className="notification-icon">
                        <button onClick={() => alert('Notificações')}>
                            <img src="../public/sino.png" alt="Notificações" />
                        </button>
                    </div>
                </div>

                <div className="content">
                    <h2>Meus EPI</h2>
                    <div className="epi-grid">
                        <div className="epi-item-container">
                            <button
                                className="epi-item"
                                style={{
                                    backgroundImage: "url('../public/capacete.png')",
                                }}
                            ></button>
                            <p className="epi-label">Capacete</p>
                        </div>
                        <div className="epi-item-container">
                            <button
                                className="epi-item"
                                style={{
                                    backgroundImage: "url('../public/luvas-de-protecao.png')",
                                }}
                            ></button>
                            <p className="epi-label">Luvas</p>
                        </div>
                        <div className="epi-item-container">
                            <button
                                className="epi-item"
                                style={{
                                    backgroundImage: "url('../public/botas.png')",
                                }}
                            ></button>
                            <p className="epi-label">Botas</p>
                        </div>
                        <div className="epi-item-container">
                            <button
                                className="epi-item"
                                style={{
                                    backgroundImage: "url('../public/oculos.png')",
                                }}
                            ></button>
                            <p className="epi-label">Óculos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;