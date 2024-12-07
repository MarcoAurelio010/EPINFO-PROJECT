import React from 'react';
import imgProfile from '../../assets/pp1.png';
import botas from '../../assets/botas.png'
import sino from '../../assets/sino.png'
import luvasProtecao from '../../assets/luvas-de-protecao.png'
import oculos from '../../assets/oculos.png'
import capacete from '../../assets/capacete.png'

function Home() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-400 to-cyan-600 w-full h-screen sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <div className="home-card bg-gradient-to-b from-cyan-400 to-cyan-600 p-8 rounded-lg shadow-lg">
          <div className="header flex justify-between items-center mb-8">
          <div className="profile-container text-center flex-grow flex flex-col justify-center items-center">
              <div className="profile-pic mb-4">
                <img src={imgProfile} className="rounded-full mx-auto mb-6 sm:w-20 sm:h-20 md:w-32 md:h-32" alt="Perfil" />
              </div>
              <p className="user-name text-white text-xl">nome aleatório</p>
            </div>
            <div className="notification-icon absolute top-4 right-4">
              <button onClick={() => alert('Notificações')}>
                <img src={sino} alt="Notificações" className="w-8 h-8 rounded-full" />
              </button>
            </div>
          </div>

          <div className="content text-center">
            <h2 className="text-white text-2xl mb-4">Meus EPI</h2>
            <div className="epi-grid grid grid-cols-2 gap-4">
              <div className="epi-item-container flex flex-col items-center">
                <button
                  className="epi-item w-24 h-24 rounded-lg shadow-md transition-all hover:bg-blue-600"
                  style={{ backgroundImage: `url(${capacete})`, backgroundSize: 'cover' }}
                ></button>
                <p className="epi-label text-white mt-2">Capacete</p>
              </div>
              <div className="epi-item-container flex flex-col items-center">
                <button
                  className="epi-item w-24 h-24 rounded-lg shadow-md transition-all hover:bg-blue-600"
                  style={{ backgroundImage: `url(${luvasProtecao})`, backgroundSize: 'cover' }}
                ></button>
                <p className="epi-label text-white mt-2">Luvas</p>
              </div>
              <div className="epi-item-container flex flex-col items-center">
                <button
                  className="epi-item w-24 h-24 rounded-lg shadow-md transition-all hover:bg-blue-600"
                  style={{ backgroundImage: `url(${botas})`, backgroundSize: 'cover' }}
                ></button>
                <p className="epi-label text-white mt-2">Botas</p>
              </div>
              <div className="epi-item-container flex flex-col items-center">
                <button
                  className="epi-item w-24 h-24 rounded-lg shadow-md transition-all hover:bg-blue-600"
                  style={{ backgroundImage: `url(${oculos})`, backgroundSize: 'cover' }}
                ></button>
                <p className="epi-label text-white mt-2">Óculos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Home;
