import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const showAlert = (title, text, icon) => {
  MySwal.fire({
    title,
    text,
    icon,
    showConfirmButton: true,
  });
};

export const showAlertWithCallback = (title, text, icon, callback) => {
  MySwal.fire({
    title,
    text,
    icon,
    showConfirmButton: true,
  }).then((result) => {
    if (result.isConfirmed && callback) {
      callback();
    }
  });
};
