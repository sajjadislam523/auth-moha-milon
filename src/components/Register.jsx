import { Link } from "react-router-dom";

const Register = () => {
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    };
    return (
        <div className="flex flex-col items-center justify-center gap-6 mt-4">
            <div className="w-1/4 p-4 shadow-2xl rounded-xl">
                <h1 className="text-3xl font-bold text-start">Register</h1>
            </div>
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            required
                            name="name"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required
                            name="email"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required
                            name="password"
                        />
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Register</button>
                    </div>

                    <p className="text-sm">
                        Already have an account?{" "}
                        <Link className="link link-hover" to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
