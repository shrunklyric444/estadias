
const SignUp = () => {
    return (
        <div className="container my-5 p-5">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-md-7 my-5">
                    <div class="card px-5 py-3" >
                        <div class="card-body px-3">
                            <h2 class="card-title text-center mb-4">Registrate  </h2>
                            <form>
                                <div class="my-4 py-1">
                                    <input type="text" class="form-control rounded-5" id="name" placeholder="Tu Nombre" required />
                                </div>
                                <div class="my-4 py-1">
                                    <input type="text" class="form-control rounded-5" id="lastName" placeholder="Tus Apellidos" required />
                                </div>
                                <div class="my-4 py-1">
                                    <input type="email" class="form-control rounded-5" id="email" placeholder="Tu Correo" required />
                                </div>
                                <div class="my-4 py-1">
                                    <input type="password" class="form-control rounded-5" id="password" placeholder="Tu Contraseña" required />
                                    <p className="px-2 text-secondary mb-0 mt-2">
                                        <small>
                                        La contraseña debe contener un tamaño mínimo de 6 caracteres, máximo de 254 y contener al menos una mayúscula, minúscula, número y carácter especial admitido (!, @, #, $, %, ^, &, *, .).
                                        </small>
                                    </p>
                                </div>
                                <div class="my-4 py-1">
                                    <input type="password" class="form-control rounded-5" id="repeatPassword" placeholder="Repite la Contraseña" required />
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary rounded-5">Registrar</button>
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

export default SignUp
