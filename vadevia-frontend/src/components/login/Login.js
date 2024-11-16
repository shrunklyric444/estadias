
const Login = () => {
    return (
        <div className="container my-5 p-5">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-md-7 my-5">
                    <div class="card px-5 py-3" >
                        <div class="card-body px-3">
                            <h2 class="card-title text-center mb-4">Iniciar Sesión</h2>
                            <form>
                            <div class="my-4 py-1">
                                <input type="email" class="form-control rounded-5" id="email" placeholder="Correo / usuario" required />
                            </div>
                            <div class="my-4 py-1">
                                <input type="password" class="form-control rounded-5" id="password" placeholder="Contraseña" required />
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary rounded-5">Login</button>
                            </div>
                            </form>
                            <div class="text-center mt-4">
                            <small class="text-muted">Tienes una cuenta? <a href="#">Inicia Sesión</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
