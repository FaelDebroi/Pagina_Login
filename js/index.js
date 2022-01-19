function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldpassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display='none';
        fieldpassword.type='text'
    }else{
        eye.style.display = 'none';
        eyeSlash.style.display='block';
        fieldpassword.type='password';
    }
};

document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
    
    const name = document.querySelector("#Gmailenviar");
    const gmailEnviado = name.value; 
    
    const senhavindo = document.querySelector("#field-password");
    const senhaEnvia = senhavindo.value; 
     
    
    var gmail = "exemplo_debroi@gmail.com";
    var senha = "123456789"
       
    if(gmail === gmailEnviado && senha === senhaEnvia ){
        alert('Voce esta logado')

    }else{

        alert('senha ou gmail errada')
    }

   
})

document.getElementById('esqueceu-senha').addEventListener('click',function(e){
    e.preventDefault();
    alert(' A senha e o Gmail para entrar é  \n \n' +' Gmail:   exemplo_debroi@gmail.com \n senha:  123456789')
})