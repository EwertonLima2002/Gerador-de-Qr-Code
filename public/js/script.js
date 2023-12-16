function gerarQrCode() {
    let texto = document.getElementById('texto').value;

    if (texto == '') {
        Swal.fire({
            title: 'Ops Campo Vazio!',
            text: 'Texto não pode ser vazio!',
            icon: 'error',
            confirmButtonText: 'Confirmar',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
        resultado.src = '';
        return;
    } else {
        let timerInterval;
        Swal.fire({
            title: 'Gerando seu Qr Code!',
            html: 'Só um minutinho enquanto geramos ele.',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector('b');
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
           

                Swal.fire({
                    title: 'QR Code Gerado!',
                    text: 'Seu qr code foi gerado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Confirmar',
                    customClass: {
                        confirmButton: 'custom-confirm-button-sucess'
                    }
                });

          
                resultado.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${texto}`;
            }
        });
    }
}
