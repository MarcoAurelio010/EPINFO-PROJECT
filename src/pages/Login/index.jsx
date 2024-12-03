
import './style.css';
import logo from '../../assets/epinfoLogo.png'

function Login() {

  const users = [{
  registro: 'EP13342',
  nome: 'Gilmar Santos',
  email: 'gilsan12@gmail.com'

  }, {
  registro: 'EP24594',
  nome: 'Manuela Silva',
  email: 'manusilva32@gmail.com'
  }
]
  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src={logo}
          alt="Logo EPINFO"
          className="logo"
        />
        <h1>bem vindo(a)</h1>
        <label htmlFor="registro">Registro</label>
        <form className="login-form">
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="registro" />
          </div>
          <label htmlFor="senha">Senha</label>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="senha" />
          </div>
          <button type="submit" className="login-button">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;