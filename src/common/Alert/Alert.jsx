import Swal from "sweetalert2";
export default function Alert(icon,text){
    Swal.fire({
        icon: icon,
       
        text: text,
      
      });
}