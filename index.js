const uploadBtn = document.getElementById('uploadBtn');
const preview = document.getElementById('preview');

uploadBtn.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

//Outra forma de fazer

// uploadBtn.onchange = () => {
//     preview.src = URL.createObjectURL(uploadBtn.files[0]);
// }