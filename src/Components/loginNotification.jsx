import Swal from "sweetalert2";

const loginPopUp = ({ navigate, path }) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "You are not logged in!",
    confirmButtonText: "Login",
    showCancelButton: true,
    cancelButtonText: "Signup",
    cancelButtonColor: "#2dcfcf",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/login", { state: { isSignUpPath: false, path: path } });
    } else {
      navigate("/login", { state: { isSignUpPath: true, path: path } });
    }
  });
};

export default loginPopUp;
